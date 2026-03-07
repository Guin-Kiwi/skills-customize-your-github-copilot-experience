
# 📘 Assignment: Level 0 - Python Basics

## 🎯 Objective

Practice fundamental Python programming skills including user input, string formatting, arithmetic operations, and conditional statements by implementing simple functions.

## 📝 Tasks

### 🛠️ User Input and String Formatting

#### Description
Write a function called `welcome_message()` that interacts with the user and returns a formatted welcome message.

#### Requirements
Completed program should:

- Ask the user for their name, age, and favorite color using `input()`.
- Return a welcome message formatted as:
  `Hello, [name]! You are [age] years old and your favorite color is [color].`
- Example output:
  `Hello, Alice! You are 25 years old and your favorite color is blue.`
- Hint: Save each `input()` result to a variable (`name`, `age`, `color`) before formatting the message.
- Hint: Use an f-string like `f"Hello, {name}! ..."` for cleaner string formatting.

### 🛠️ Basic Arithmetic

#### Description
Write a function called `add_two_numbers()` that prompts the user for two numbers and prints their sum.

#### Requirements
Completed program should:

- Ask the user to enter two numbers.
- Add the numbers together.
- Print the result. Example:
  Enter the first number: 3
  Enter the second number: 7
  10
- Hint: Convert input values to numbers using `int()` or `float()` before adding.
- Hint: Return the result too, so your function is easier to test later.

### 🛠️ Conditional Statements

#### Description
Write a function called `is_even()` that checks if a number is even.

#### Requirements
Completed program should:

- Take a single integer argument.
- Return `True` if the number is even, and `False` if it is odd.
- Example usage:
  ```python
  print(is_even(4))  # True
  print(is_even(5))  # False
  ```
- Hint: Use the modulo operator `%` and check whether `number % 2 == 0`.
- Hint: Start by testing easy values like `0`, `1`, `2`, and `-2`.

