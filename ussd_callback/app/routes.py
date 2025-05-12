from flask import Blueprint, request
from app.services import USSDService
import logging

main = Blueprint('main', __name__)
logger = logging.getLogger(__name__)

@main.route('/', methods=['POST'])
def ussd_callback():
    """Handle USSD callbacks from Africa's Talking."""
    try:
        session_id = request.values.get("sessionId")
        phone_number = request.values.get("phoneNumber")
        text = request.values.get("text", "")

        logger.info(f"USSD request: sessionId={session_id}, phoneNumber={phone_number}, text={text}")

        if not session_id or not phone_number:
            logger.error("Missing required parameters")
            return "END Missing required parameters", 400

        response = USSDService.handle_ussd_request(session_id, phone_number, text)
        return response

    except Exception as e:
        logger.error(f"Error in USSD callback: {str(e)}", exc_info=True)
        return "END An error occurred. Please try again later."