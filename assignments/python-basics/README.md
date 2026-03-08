
# 📘 Assignment: Level 0 - Python Basics

## 🎯 Objective

Practice fundamental Python programming skills including user input, string formatting, arithmetic operations, and conditional statements by implementing simple functions.

## 📝 Tasks

### 🛠️ User Input and String Formatting

#### Description
Write a function called `welcome_message()` that interacts with the user and returns a formatted welcome message.

#### Concept: F-Strings
F-strings let you embed variables directly in strings. They start with `f` before the quote.

**Try it yourself:**
<!--exercise:answer=f,hint=F-strings start with the letter f before the opening quote-->

```python
name = "Alice"
greeting = ____"Hello, {name}!"
print(greeting)  # Output: Hello, Alice!
```

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

#### Concept: Converting Input to Numbers
The `input()` function always returns a string. To do math, you need to convert it to a number first.

**Try it yourself:**
<!--exercise:answer=int,hint=Use int() to convert strings to whole numbers-->

```python
age = ____(input("Enter your age: "))
age = age + 1
print(f"Next year you will be {age}")
```

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

#### Concept: The Modulo Operator
The modulo operator `%` returns the remainder after division. Even numbers have no remainder when divided by 2.

**Try it yourself:**
<!--exercise:answer=%,hint=The modulo operator is the percent symbol-->

```python
def is_even(number):
    return number ____ 2 == 0

print(is_even(4))  # True
print(is_even(7))  # False
```

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

