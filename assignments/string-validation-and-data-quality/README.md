
# 📘 Assignment: Level 1 - String Validation and Data Quality

## 🎯 Objective

Build your first data quality tool: validate contact information using string checks, pattern detection, and conditional logic. Learn why clean data matters before it enters your analysis pipeline.

## 🔗 Builds On

- `Level 0: Python Basics`

## 🚀 Unlocks Next

- `Level 2: Lists and Tuples` (you'll batch-validate multiple contacts)
- `Level 5: Python Classes` (you'll encapsulate validators as objects)
- `Level 10: Pydantic` (professional-grade validation frameworks)

## 📚 Key Concepts

### String Methods for Validation
Python strings have built-in methods to check content and format.

**Try it yourself:**
<!--exercise:answer=@,hint=Email addresses must contain the @ symbol-->

```python
email = "student@school.edu"
has_at = ____ in email
print(has_at)  # True - valid email has @ symbol
```

### Counting and Substring Detection
Use `.count()` to verify required characters appear the right number of times.

**Try it yourself:**
<!--exercise:answer=.count,hint=Use .count() to count occurrences of a substring-->

```python
email = "user@@example.com"
at_count = email____("@")
print(at_count)  # 2 - invalid! Should be exactly 1
```

### String Position Checks
Find where characters appear using `.find()` or `.index()`.

**Try it yourself:**
<!--exercise:answer=.find,hint=Use .find() to locate a substring, returns -1 if not found-->

```python
email = "contact@company.com"
at_position = email____("@")
print(at_position)  # 7 - position of @ symbol
```

### Digit Validation
Check if strings contain only numeric characters.

**Try it yourself:**
<!--exercise:answer=.isdigit,hint=Use .isdigit() to check if string contains only digits-->

```python
phone = "5551234567"
is_valid = phone____()
print(is_valid)  # True - all characters are digits
```

## 📝 Tasks

### 🛠️ Build Email Validator (20 min) (`Both`)

#### Description
Build email format validator with string methods. Create a function that checks if an email address follows basic format rules.

#### Requirements
Completed program should:

- Define `validate_email(email)` that returns `True` if valid, `False` if invalid.
- Check that `@` appears exactly once.
- Check that `@` is not at the start or end.
- Check that a `.` appears after the `@` symbol.
- Return helpful feedback: `"Valid email"` or `"Invalid: [reason]"`.

**Example:**
```python
validate_email("student@school.edu")  # "Valid email"
validate_email("student@@school.edu")  # "Invalid: Multiple @ symbols"
validate_email("@school.edu")  # "Invalid: @ at start"
```

### 🛠️ Build Phone Validator (20 min) (`Both`)

#### Description
Build phone number validator with digit checks. Create a function that validates US phone numbers (10 digits only, no formatting).

#### Requirements
Completed program should:

- Define `validate_phone(phone)` that returns `True/False` with a message.
- Check that phone contains exactly 10 characters.
- Check that all characters are digits (use `.isdigit()`).
- Reject inputs with dashes, spaces, or parentheses.
- Return format: `"Valid phone"` or `"Invalid: [reason]"`.

**Example:**
```python
validate_phone("5551234567")  # "Valid phone"
validate_phone("555-123-4567")  # "Invalid: Contains non-digit characters"
validate_phone("123456")  # "Invalid: Must be exactly 10 digits"
```

### 🛠️ Build Combined Contact Validator (20 min) (`Both`)

#### Description
Combine validators and return clean vs invalid status. Create a unified function that validates both email and phone in one call.

#### Requirements
Completed program should:

- Define `validate_contact(email, phone)` that calls both validators.
- Return a dictionary: `{"email_valid": True/False, "phone_valid": True/False, "status": "clean" | "needs review"}`.
- Set `status` to `"clean"` only if both are valid.
- Print a summary report showing validation results.

**Example:**
```python
result = validate_contact("student@school.edu", "5551234567")
# {"email_valid": True, "phone_valid": True, "status": "clean"}

result = validate_contact("invalid-email", "123")
# {"email_valid": False, "phone_valid": False, "status": "needs review"}
```

### 🛠️ Generate Test Data with Random Selection (20 min) (`Both`)

#### Description
Generate test data and verify edge cases. Use Python's `random` module to create test contacts and verify your validators handle edge cases.

#### Requirements
Completed program should:

- Import `random` module.
- Create lists of valid emails, invalid emails, valid phones, invalid phones.
- Write `generate_test_contact()` that randomly picks one email and one phone.
- Run your validator on 5 random test contacts.
- Print results showing how many passed validation.

**Example:**
```python
import random

valid_emails = ["test@example.com", "user@company.org"]
invalid_emails = ["@example.com", "user@@bad.com", "no-at-sign"]

# Pick random pairs and validate them
```

## 🏆 Achievement Evidence

To mark this assignment complete, submit:

- `Code Artifact`: Working validator functions for email, phone, and combined contact.
- `Interpretation Artifact`: A brief explanation (3-4 sentences) of why data validation matters before analysis, using one real-world example (e.g., "Invalid emails in marketing lists waste budget").
- `Verification Artifact`: Test run output showing at least 5 test cases with both valid and invalid inputs, demonstrating your validators correctly identify clean vs problematic data.
