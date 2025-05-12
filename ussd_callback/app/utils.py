import re
from typing import Tuple, Optional

def sanitize_phone_number(phone_number: str) -> str:
    """
    Sanitize phone number to standard format.

    Args:
        phone_number: Phone number to sanitize

    Returns:
        Sanitized phone number in international format
    """
    # Remove any non-digit characters
    digits = re.sub(r'\D', '', phone_number)

    # Ensure it starts with country code (e.g., 234 for Nigeria)
    if not digits.startswith('234'):
        # If it starts with 0, replace it with 234
        if digits.startswith('0'):
            digits = '234' + digits[1:]
        # Otherwise, just add 234 prefix
        else:
            digits = '234' + digits

    return '+' + digits

def validate_tracking_id(tracking_id: str) -> bool:
    """Validate tracking ID format."""
    pattern = r'^GOV[A-Z0-9]{8}$'
    return bool(re.match(pattern, tracking_id))

def validate_input(text: str, max_length: int = 100) -> Tuple[bool, Optional[str]]:
    """Validate user input text."""
    if not text.strip():
        return False, "Input cannot be empty"

    if len(text) > max_length:
        return True, f"Input will be truncated to {max_length} characters"

    return True, None