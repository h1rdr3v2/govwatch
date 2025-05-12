import uuid
import logging
from typing import Dict
from app.models import db, Report, Session
from app.utils import sanitize_phone_number, validate_tracking_id, validate_input

logger = logging.getLogger(__name__)

class USSDService:
    """Service for handling USSD requests."""

    ISSUE_OPTIONS: Dict[str, str] = {
        '1': 'Abandoned Project',
        '2': 'Vandalism',
        '3': 'Civil Service Issue',
        '4': 'Others'
    }

    @staticmethod
    def get_or_create_session(session_id: str, phone_number: str) -> Session:
        """Get an existing session or create a new one."""
        session = Session.query.filter_by(session_id=session_id).first()
        if not session:
            phone_number = sanitize_phone_number(phone_number)
            session = Session(session_id=session_id, phone_number=phone_number)
            db.session.add(session)
            db.session.commit()
            logger.info(f"Created new session for {phone_number}")
        return session

    @staticmethod
    def handle_ussd_request(session_id: str, phone_number: str, text: str) -> str:
        """Handle USSD request based on user input."""
        text_parts = text.split('*')
        level = len(text_parts)

        session = USSDService.get_or_create_session(session_id, phone_number)

        try:
            # Initial menu
            if text == "":
                return USSDService.welcome_menu()

            # Report issue flow
            elif text == "1":
                return USSDService.issue_type_menu(session)
            elif level == 2 and text_parts[0] == '1':
                return USSDService.handle_issue_selection(session, text_parts[1])
            elif level == 3 and session.step == 2:
                return USSDService.handle_description(session, text_parts[2])
            elif level == 4 and session.step == 3:
                return USSDService.handle_location(session, text_parts[3], phone_number)

            # Track issue flow
            elif text == "2":
                return USSDService.track_issue_prompt(session)
            elif level == 2 and text_parts[0] == '2':
                return USSDService.track_issue(text_parts[1])

            # Exit
            elif text == "3":
                return "END Thank you for using GovWatch."

            # Invalid input
            else:
                logger.warning(f"Invalid input: {text}")
                return "END Invalid input. Please try again."

        except Exception as e:
            logger.error(f"Error processing USSD request: {str(e)}", exc_info=True)
            return "END An error occurred. Please try again later."

    @staticmethod
    def welcome_menu() -> str:
        """Return welcome menu text."""
        response = "CON Welcome to GovWatch \n"
        response += "1. Report an Issue \n"
        response += "2. Track Issue \n"
        response += "3. Exit"
        return response

    @staticmethod
    def issue_type_menu(session: Session) -> str:
        """Return issue type menu and update session."""
        session.step = 1
        db.session.commit()

        response = "CON Select an issue Type \n"
        for key, value in USSDService.ISSUE_OPTIONS.items():
            response += f"{key}. {value} \n"
        return response

    @staticmethod
    def handle_issue_selection(session: Session, issue_choice: str) -> str:
        """Handle issue type selection."""
        if issue_choice not in USSDService.ISSUE_OPTIONS:
            logger.warning(f"Invalid issue choice: {issue_choice}")
            return "END Invalid option. Please try again."

        session.issue_type = USSDService.ISSUE_OPTIONS[issue_choice]
        session.step = 2
        db.session.commit()

        return "CON Enter a brief description of the issue (max 100 characters)"

    @staticmethod
    def handle_description(session: Session, description: str) -> str:
        """Handle issue description input."""
        is_valid, message = validate_input(description, 100)
        if not is_valid:
            return f"END {message}"

        if message:  # Input valid but will be truncated
            description = description[:100]

        session.description = description
        session.step = 3
        db.session.commit()

        return "CON Enter the location of the issue (community, LGA)"

    @staticmethod
    def handle_location(session: Session, location: str, phone_number: str) -> str:
        """Handle location input and create report."""
        is_valid, message = validate_input(location, 200)
        if not is_valid:
            return f"END {message}"

        session.location = location
        db.session.commit()

        # Generate tracking ID
        tracking_id = f"GOV{str(uuid.uuid4())[:8].upper()}"

        # Create new report
        report = Report(
            tracking_id=tracking_id,
            phone_number=sanitize_phone_number(phone_number),
            issue_type=session.issue_type,
            description=session.description,
            location=session.location,
            status="Received"
        )

        db.session.add(report)
        db.session.commit()

        logger.info(f"Created new report with tracking ID: {tracking_id}")

        response = f"END Report submitted \n"
        response += f"Your tracking ID: {tracking_id} \n"
        response += f"Thank you for participating in good governance"

        return response

    @staticmethod
    def track_issue_prompt(session: Session) -> str:
        """Prompt for tracking ID."""
        session.step = 4
        db.session.commit()

        return "CON Enter your tracking ID to check the status"

    @staticmethod
    def track_issue(tracking_id: str) -> str:
        """Track issue by ID."""
        tracking_id = tracking_id.strip().upper()

        if not validate_tracking_id(tracking_id):
            return "END Invalid tracking ID format. It should be GOV followed by 8 characters."

        report = Report.query.filter_by(tracking_id=tracking_id).first()

        if report:
            response = f"END Report found:\n"
            response += f"Issue: {report.issue_type}\n"
            response += f"Location: {report.location}\n"
            response += f"Status: {report.status}"
            return response
        else:
            return "END Tracking ID not found. Please check and try again."