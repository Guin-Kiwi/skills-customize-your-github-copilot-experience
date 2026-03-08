# 📘 Assignment: Level 5 - Python Classes

## 🎯 Objective

Model a real analytics object with class design so you can manage state, methods, and validation in a reusable way.

## 🔗 Builds On

- `Level 4: Files and Exceptions`

## 🚀 Unlocks Next

- `Level 6: Data Analysis`

## 📚 Key Concepts

### Defining a Class
A class is a blueprint for creating objects with attributes and methods.

**Try it yourself:**
<!--exercise:answer=class,hint=Use the class keyword to define a new class-->

```python
____ Book:
    pass

my_book = Book()
print(type(my_book))  # Output: <class '__main__.Book'>
```

### The __init__ Constructor
Initialize attributes when creating an object.

**Try it yourself:**
<!--exercise:answer=__init__,hint=Use __init__ to define the constructor method-->

```python
class Book:
    def ____(self, title, author):
        self.title = title
        self.author = author

book = Book("Python Basics", "Jane Doe")
print(book.title)  # Output: Python Basics
```

### Instance Attributes
Each object has its own copy of attributes.

**Try it yourself:**
<!--exercise:answer=self,hint=Use self to refer to the current instance-->

```python
class Counter:
    def __init__(self):
        ____.count = 0
    
    def increment(self):
        self.count += 1

c = Counter()
c.increment()
print(c.count)  # Output: 1
```

### Instance Methods
Functions that belong to a class and operate on object data.

**Try it yourself:**
<!--exercise:answer=def,hint=Use def to define methods inside a class-->

```python
class Calculator:
    ____ __init__(self, value):
        self.value = value
    
    def add(self, amount):
        self.value += amount
        return self.value

calc = Calculator(10)
result = calc.add(5)
print(result)  # Output: 15
```

### Validation in Methods
Methods can enforce rules to keep data valid.

**Try it yourself:**
<!--exercise:answer=if,hint=Use if statements to validate input-->

```python
class Score:
    def __init__(self):
        self.value = 0
    
    def set_score(self, new_score):
        ____ 0 <= new_score <= 100:
            self.value = new_score
        else:
            print("Invalid score!")

s = Score()
s.set_score(85)  # Sets value to 85
s.set_score(150)  # Prints "Invalid score!"
```

## 📝 Tasks

### 🛠️ Build a Domain Class (20 min) (`Both`)

#### Description
Define class structure and constructor fields. Create a class to represent an analysis run with metadata and status.

#### Requirements
Completed program should:

- Define `AnalysisRun` with `run_id`, `owner`, `dataset_name`, and `status` attributes.
- Initialize defaults in `__init__`.
- Implement `display_info()` that prints a compact summary line.
- Create at least one object instance and call `display_info()`.

### 🛠️ Add Controlled State Updates (20 min) (`Both`)

#### Description
Add behavior methods that transform object state. Add methods that update run metrics while preserving data integrity.

#### Requirements
Completed program should:

- Add `records_processed` attribute with default `0`.
- Implement `update_records(new_value)` with validation that value cannot decrease.
- Implement `mark_complete()` that sets status to `"complete"`.
- Show method calls that move the object through a realistic lifecycle.

### 🛠️ Role-Specific Output Methods (20 min) (`BA` + `JDS`)

#### Description
Instantiate objects and verify usage flow. Generate outputs tailored for decision communication (`BA`) and technical monitoring (`JDS`).

#### Requirements
Completed program should:

- Add method `business_summary()` returning a short plain-language status statement (`BA`).
- Add method `technical_summary()` returning fields useful for logs/metrics (`JDS`).
- Demonstrate both methods on the same object.
- Include one sentence on how this class could be reused in a capstone project.

## 🏆 Achievement Evidence

To mark this assignment complete, submit:

- `Code Artifact`: `AnalysisRun` class with constructor, validation, and role-specific methods.
- `Interpretation Artifact`: A short explanation of class state transitions and why guardrails matter.
- `Verification Artifact`: Console output showing object creation, updates, and both summary methods.

## 🔗 Quick Access

Open assignment files directly in your browser:

- [📝 Open starter-code.py in GitHub](https://github.dev/Guin-Kiwi/skills-customize-your-github-copilot-experience/blob/main/assignments/python-classes/starter-code.py)
- [📂 View assignment folder](https://github.com/Guin-Kiwi/skills-customize-your-github-copilot-experience/tree/main/assignments/python-classes)
