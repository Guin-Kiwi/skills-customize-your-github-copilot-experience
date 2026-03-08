# 📘 Assignment: Level 0 - Python Basics

## 🎯 Objective

Build your first complete Python workflow: read input, clean values, apply logic, and return a trustworthy result.

## 🔗 Builds On

- `No prerequisites. This is the entry module for all tracks.`

## 🚀 Unlocks Next

- `Level 1: String Validation and Data Quality`

## 📚 Key Concepts

### Variables and Input
Store user data by asking questions and capturing responses.

**Try it yourself:**
<!--exercise:answer=input,hint=Use input() to get text from the user-->

```python
name = ____("What is your name? ")
print(f"Hello, {name}!")  # Output: Hello, [whatever was entered]!
```

### F-Strings for Formatting
Build readable messages by embedding variables directly in strings.

**Try it yourself:**
<!--exercise:answer=f,hint=Put f before the quote and use {variable} inside the string-->

```python
age = 25
message = ____"You are {age} years old."
print(message)  # Output: You are 25 years old.
```

### Type Conversion
Convert text input to numbers for calculations.

**Try it yourself:**
<!--exercise:answer=int,hint=Use int() to convert string to integer-->

```python
text_number = "42"
actual_number = ____(text_number)
print(actual_number + 8)  # Output: 50
```

### Conditional Logic
Make decisions with if/else statements.

**Try it yourself:**
<!--exercise:answer=if,hint=Use if to test a condition-->

```python
score = 85
____ score >= 80:
    print("Great job!")  # Output: Great job!
else:
    print("Keep practicing!")
```

### Modulo Operator
Find remainders to detect patterns like even/odd numbers.

**Try it yourself:**
<!--exercise:answer=%,hint=Use % to get the remainder after division-->

```python
number = 7
remainder = number ____ 2
print(remainder)  # Output: 1 (odd number)
```

## 📝 Tasks

### 🛠️ Welcome and Input Flow (20 min) (`Both`)

#### Description
Capture user input and format readable output. Create a function that asks for user details and returns a clean, formatted message.

#### Requirements
Completed program should:

- Define `welcome_message()` that asks for name, age, and favorite color.
- Return one formatted string using f-strings.
- Keep prompts and output easy to read for a beginner user.
- Handle accidental leading or trailing spaces with `.strip()`.

### 🛠️ Numeric Conversion and Calculation (20 min) (`Both`)

#### Description
Convert text input to numeric values safely. Collect two numbers from input, convert them, and compute a result.

#### Requirements
Completed program should:

- Define `add_two_numbers()` that prompts for two numeric values.
- Convert values with `int()` or `float()` before calculation.
- Print and return the sum.
- Add one guard path for invalid input using `try/except`.

### 🛠️ Basic Decision Rule (20 min) (`Both`)

#### Description
Write conditional checks for pass/fail logic. Implement and test a parity checker that returns whether a number is even.

#### Requirements
Completed program should:

- Define `is_even(number)` and return `True` or `False`.
- Use modulo logic `number % 2 == 0`.
- Demonstrate at least 4 test calls including `0` and a negative number.
- Write one sentence explaining where this kind of rule is useful in data checks.

## 🏆 Achievement Evidence

To mark this assignment complete, submit:

- `Code Artifact`: Completed implementations of `welcome_message`, `add_two_numbers`, and `is_even`.
- `Interpretation Artifact`: A short note describing the input -> process -> output flow in one function.
- `Verification Artifact`: Console output that shows expected behavior for valid and invalid cases.
