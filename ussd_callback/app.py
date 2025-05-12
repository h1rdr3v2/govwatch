from flask import Flask, request
import uuid

app = Flask(__name__)
user_sessions = {}  # In-memory session tracking

@app.route('/', methods=['POST'])
def ussd_callback():
    session_id = request.values.get("sessionId", None)
    phone_number = request.values.get("phoneNumber", None)
    text = request.values.get("text", "")

    # Split the text input into parts
    text_parts = text.split('*')
    level = len(text_parts)

    # Get or initialize the session data
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
        response += "1. Abandoned Project \n"
        response += "2. Vandalism \n"
        response += "3. Civil Service Issue \n"
        response += "4. Others"
    elif level == 2 and text_parts[0] == '1':
        issue_options = {
            '1': 'Abandoned Project',
            '2': 'Vandalism',
            '3': 'Civil Service Issue',
            '4': 'Others'
        }
        issue_choice = text_parts[1]
        session["issue_type"] = issue_options.get(issue_choice, 'Unknown')
        session["step"] = 2
        response = "CON Enter a brief description of the issue (max 100 characters)"
    elif level == 3 and session["step"] == 2:
        session["description"] = text_parts[2]
        session["step"] = 3
        response = "CON Enter the location of the issue"
    elif level == 4 and session["step"] == 3:
        session["location"] = text_parts[3]
        tracking_id = str(uuid.uuid4())[:8]  # Generate short tracking ID
        response = f"END Thank you for reporting a '{session['issue_type']}' issue.\n"
        response += f"Description: {session['description']}\n"
        response += f"Location: {session['location']}\n"
        response += f"Tracking ID: {tracking_id}"
    elif text == "2":
        response = "END Please enter your tracking ID in the web app to check status."
    elif text == "3":
        response = "END Thank you for using GovWatch."
    else:
        response = "END Invalid input. Please try again."

    # Save session data
    user_sessions[session_id] = session
    return response