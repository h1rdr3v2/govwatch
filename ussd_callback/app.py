from flask import Flask, request
import uuid

app = Flask(__name__)
user_sessions = {}  # In-memory session tracking
submitted_reports = {}  # Store reports by tracking ID
issue_options = {
        '1': 'Abandoned Project',
        '2': 'Vandalism',
        '3': 'Civil Service Issue',
        '4': 'Others'
}


@app.route('/', methods=['POST'])
def ussd_callback():
    session_id = request.values.get("sessionId")
    phone_number = request.values.get("phoneNumber")
    text = request.values.get("text", "")

    text_parts = text.split('*')
    level = len(text_parts)

    session = user_sessions.get(session_id, {
        "step": 0,
        "issue_type": None,
        "description": None,
        "location": None
    })

    response = ""

    if text == "":
        session["step"] = 0
        response = "CON Welcome to GovWatch \n"
        response += "1. Report an Issue \n"
        response += "2. Track Issue \n"
        response += "3. Exit"

    elif text == "1":
        session["step"] = 1
        response = "CON Select an issue Type \n"
        for key, value in issue_options.items():
            response += f"{key}. {value} \n"

    elif level == 2 and text_parts[0] == '1':
        issue_choice = text_parts[1]
        session["issue_type"] = issue_options.get(issue_choice, 'Unknown')
        session["step"] = 2
        response = "CON Enter a brief description of the issue (max 100 characters)"

    elif level == 3 and session["step"] == 2:
        session["description"] = text_parts[2]
        session["step"] = 3
        response = "CON Enter the location of the issue (community, LGA)"

    elif level == 4 and session["step"] == 3:
        session["location"] = text_parts[3]
        tracking_id = f"GOV{str(uuid.uuid4())[:8]}"
        # Save the report
        submitted_reports[tracking_id] = {
            "phone_number": phone_number,
            "issue_type": session["issue_type"],
            "description": session["description"],
            "location": session["location"],
            "status": "Received"
        }
        response = f"END Report submitted \n"
        response += f"Your tracking ID: {tracking_id} \n"
        response += f"Thank you for participating in good governance"

    elif text == "2":
        session["step"] = 4
        response = "CON Enter your tracking ID to check the status"

    elif level == 2 and text_parts[0] == '2':
        tracking_id = text_parts[1].strip().upper()
        report = submitted_reports.get(tracking_id)
        if report:
            response = f"END Report found:\n"
            response += f"Issue: {report['issue_type']}\n"
            response += f"Location: {report['location']}\n"
            response += f"Status: {report['status']}"
        else:
            response = "END Tracking ID not found. Please check and try again."

    elif text == "3":
        response = "END Thank you for using GovWatch."

    else:
        response = "END Invalid input. Please try again."

    user_sessions[session_id] = session
    return response