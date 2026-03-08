# Starter Code for Contact Data Validator Assignment

import random

# TODO: Task 1 - Email Validator

def validate_email(email):
    """
    Validates email format.
    Returns: tuple (is_valid: bool, message: str)
    """
    # Your code here
    pass


# TODO: Task 2 - Phone Validator

def validate_phone(phone):
    """
    Validates US phone number (10 digits, no formatting).
    Returns: tuple (is_valid: bool, message: str)
    """
    # Your code here
    pass


# TODO: Task 3 - Combined Contact Validator

def validate_contact(email, phone):
    """
    Validates both email and phone.
    Returns: dict with keys: email_valid, phone_valid, status
    """
    # Your code here
    pass


# TODO: Task 4 - Generate Test Data

valid_emails = [
    "student@school.edu",
    "contact@company.com",
    # Add more valid examples
]

invalid_emails = [
    "@example.com",
    "user@@bad.com",
    # Add more invalid examples
]

valid_phones = [
    "5551234567",
    "8005551234",
    # Add more valid examples
]

invalid_phones = [
    "555-123-4567",
    "12345",
    # Add more invalid examples
]

def generate_test_contact():
    """
    Randomly selects one email and one phone for testing.
    Returns: tuple (email: str, phone: str)
    """
    # Your code here
    pass


# TODO: Run tests
# Generate 5 random test contacts
# Validate each one and print results
# Count how many passed validation

if __name__ == "__main__":
    print("=== Contact Data Validator Test Suite ===\n")
    
    # Your test code here
    # Example:
    # for i in range(5):
    #     email, phone = generate_test_contact()
    #     result = validate_contact(email, phone)
    #     print(f"Test {i+1}: {result}")

