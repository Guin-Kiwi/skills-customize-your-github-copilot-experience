# 📘 Assignment: Level 0 - Python Basics

## 🎯 Objective

Build your first complete Python workflow: read input, clean values, apply logic, and return a trustworthy result.

## 🔗 Builds On

- `No prerequisites. This is the entry module for all tracks.`

## 🚀 Unlocks Next

- `Level 1: Contact Data Validator`

## ⏱️ 20-Minute Chunk Plan

- `0.1` (20 min): Capture user input and format readable output.
- `0.2` (20 min): Convert text input to numeric values safely.
- `0.3` (20 min): Write conditional checks for pass/fail logic.
- `0.4` (20 min): Combine input, transformation, and logic into one mini flow.

## 📝 Tasks

### 🛠️ Welcome and Input Flow (`Both`)

#### Description
Create a function that asks for user details and returns a clean, formatted message.

#### Requirements
Completed program should:

- Define `welcome_message()` that asks for name, age, and favorite color.
- Return one formatted string using f-strings.
- Keep prompts and output easy to read for a beginner user.
- Handle accidental leading or trailing spaces with `.strip()`.

### 🛠️ Numeric Conversion and Calculation (`Both`)

#### Description
Collect two numbers from input, convert them, and compute a result.

#### Requirements
Completed program should:

- Define `add_two_numbers()` that prompts for two numeric values.
- Convert values with `int()` or `float()` before calculation.
- Print and return the sum.
- Add one guard path for invalid input using `try/except`.

### 🛠️ Basic Decision Rule (`Both`)

#### Description
Implement and test a parity checker that returns whether a number is even.

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
