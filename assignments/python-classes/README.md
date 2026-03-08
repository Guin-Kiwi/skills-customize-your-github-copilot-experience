# 📘 Assignment: Level 2 - Python Classes

## 🎯 Objective

Learn how to define and use classes in Python to model real-world objects and behaviors.

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



### 🛠️ Add Methods and Interactions

#### Description
Expand the `Car` class to include a method to update the car's mileage and another to display the current mileage.

#### Requirements
Completed program should:

