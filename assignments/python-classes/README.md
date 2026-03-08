# 📘 Assignment: Level 2 - Python Classes

## 🎯 Objective

Learn how to define and use classes in Python to model real-world objects and behaviors.

## 🔗 Builds On

- `Level 4: Files and Exceptions`

## 🚀 Unlocks Next

- `Level 6: Data Analysis`

## 📚 Key Concepts

### Defining a Class
Use the `class` keyword to create a new class.

**Try it yourself:**
<!--exercise:answer=class,hint=Use the 'class' keyword to define a class-->

```python
____ Car:
    def __init__(self, make):
        self.make = make
```

### The __init__ Method
The `__init__` method initializes object attributes when creating an instance.

**Try it yourself:**
<!--exercise:answer=__init__|def __init__,hint=The constructor method is __init__-->

```python
class Car:
    ____ (self, make, model):
        self.make = make
        self.model = model
```

### Using self
Use `self` to refer to the current object's attributes and methods.

**Try it yourself:**
<!--exercise:answer=self,hint=Use 'self' to access instance attributes-->

```python
class Car:
    def __init__(self, make):
        self.make = make
    
    def display_info(self):
        print(f"Make: {____.make}")
```

## ⏱️ 30-Minute Chunk Plan

- `5.1` (20 min): Define class and constructor attributes.
- `5.2` (20 min): Implement display methods and formatted output.
- `5.3` (25 min): Add update methods and state checks.
- `5.4` (20 min): Instantiate objects and verify behavior.

## 📝 Tasks

### 🛠️ Define a Simple Class

#### Description
Create a class named `Car` that represents a car with attributes for make, model, and year. Add a method to display information about the car.

#### Requirements
Completed program should:

- Define a class `Car` with `make`, `model`, and `year` attributes
- Include a method `display_info()` that prints the car's details
- Create an instance of `Car` and call `display_info()`
- Hint: In `__init__`, assign values using `self.make = make`, `self.model = model`, and `self.year = year`.
- Hint: In `display_info()`, print a single formatted sentence so output is easy to read.



### 🛠️ Add Methods and Interactions

#### Description
Expand the `Car` class to include a method to update the car's mileage and another to display the current mileage.

#### Requirements
Completed program should:

- Add a `mileage` attribute to the `Car` class (default 0)
- Add a method `update_mileage(new_mileage)` to update the mileage
- Add a method `display_mileage()` to print the current mileage
- Demonstrate updating and displaying mileage for a `Car` instance
- Hint: Add `self.mileage = 0` in `__init__` before testing update methods.
- Hint: In `update_mileage`, consider preventing mileage from decreasing.

## 🏆 Achievement Evidence

To mark this assignment complete, submit:

- `Code Artifact`: A working `Car` class with constructor, display methods, and mileage update logic.
- `Interpretation Artifact`: A short explanation of how object state changes through method calls.
- `Verification Artifact`: Console output showing object creation and mileage updates.

