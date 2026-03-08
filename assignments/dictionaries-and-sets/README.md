# 📘 Assignment: Level 3 - Dictionaries and Sets

## 🎯 Objective

Learn to use dictionaries for key-value data storage and sets for unique collections. Master dictionary operations, accessing values by keys, and using sets for membership testing and eliminating duplicates.

## 🔗 Builds On

- `Level 2: Lists and Tuples`

## 🚀 Unlocks Next

- `Level 4: Files and Exceptions`

## 📚 Key Concepts

### Creating Dictionaries
Dictionaries store data as key-value pairs using curly braces.

**Try it yourself:**
<!--exercise:answer={,hint=Use curly braces { } to create a dictionary-->

```python
student = ____"name": "Alice", "age": 17, "grade": "A"____
print(student["name"])  # Output: Alice
```

### Accessing Dictionary Values
Use the key in square brackets to retrieve values.

**Try it yourself:**
<!--exercise:answer=["age"],hint=Use the key in square brackets to access a value-->

```python
student = {"name": "Bob", "age": 16}
age = student____
print(age)  # Output: 16
```

### Adding Dictionary Items
Use assignment to add or update key-value pairs.

**Try it yourself:**
<!--exercise:answer=["score"]=95,hint=Use dictionary[key] = value to add an item-->

```python
student = {"name": "Charlie"}
student____
print(student)  # Output: {'name': 'Charlie', 'score': 95}
```

### Dictionary Methods
Common methods for working with dictionaries.

**Try it yourself:**
<!--exercise:answer=.keys,hint=Use .keys() to get all the keys from a dictionary-->

```python
student = {"name": "Diana", "age": 17, "city": "Portland"}
all_keys = student____()
print(all_keys)  # Output: dict_keys(['name', 'age', 'city'])
```

### Creating Sets
Sets store unique values without duplicates using curly braces (no colons).

**Try it yourself:**
<!--exercise:answer={,hint=Use curly braces { } to create a set-->

```python
favorite_colors = ____"red", "blue", "green", "blue"____
print(favorite_colors)  # Output: {'red', 'blue', 'green'} (no duplicate blue)
```

### Set Operations
Check membership and combine sets.

**Try it yourself:**
<!--exercise:answer=in,hint=Use 'in' to check if an item is in a set-->

```python
colors = {"red", "green", "blue"}
if "red" ____ colors:
    print("Red is a color!")
```

## ⏱️ 30-Minute Chunk Plan

- `3.1` (20 min): Create dictionaries and access/update values.
- `3.2` (25 min): Iterate through key-value pairs and compute summaries.
- `3.3` (20 min): Use sets to remove duplicates and test membership.
- `3.4` (20 min): Perform set operations (union/intersection/difference).

## 📝 Tasks

### 🛠️ Dictionary Basics

#### Description
Create dictionaries to store structured data and access values using keys.

#### Requirements
Completed program should:

- Create a dictionary representing a person (name, age, city, etc.)
- Access values using keys
- Add new key-value pairs
- Use `.keys()`, `.values()`, and `.items()` methods
- Update existing values
- Create a nested dictionary (dictionary inside a dictionary)
- Hint: Think of dictionaries like a phonebook where names are keys and phone numbers are values
- Hint: Use `.get(key, default_value)` to safely access keys that might not exist

### 🛠️ Dictionary Iteration

#### Description
Iterate through dictionaries to process all key-value pairs.

#### Requirements
Completed program should:

- Create a dictionary of student grades (name: grade)
- Loop through the dictionary to print each student and grade
- Use `.items()` to unpack key-value pairs in a loop
- Create a new dictionary by transforming values (e.g., adding 5 points to all grades)
- Print summaries like highest grade, lowest grade, average grade
- Hint: Use `for key, value in dictionary.items():` to loop through pairs
- Hint: Think about filtering: which grades are above/below average?

### 🛠️ Sets and Unique Values

#### Description
Use sets to eliminate duplicates and perform set operations.

#### Requirements
Completed program should:

- Create lists with duplicate items (e.g., favorite books mentioned multiple times)
- Convert to sets to eliminate duplicates
- Create two sets and find common elements using `.intersection()`
- Find elements in one set but not the other using `.difference()`
- Combine sets using `.union()`
- Use `.add()` to add items and `.remove()` to remove items
- Hint: Sets are useful for membership testing and removing duplicates
- Hint: Set operations let you find overlaps, differences, and unions between groups

## 🎓 Learning Resources

- Dictionary syntax: `{"key1": value1, "key2": value2}`
- Access: `dict[key]` or `dict.get(key, default)`
- Set syntax: `{item1, item2, item3}` (note: no colons!)
- Set operations: `.add()`, `.remove()`, `.union()`, `.intersection()`, `.difference()`
- Common use case: Count unique items using `set()`

## 🏆 Achievement Evidence

To mark this assignment complete, submit:

- `Code Artifact`: Completed dictionary and set task implementations with iteration and set operations.
- `Interpretation Artifact`: A short explanation of one scenario where sets are better than lists.
- `Verification Artifact`: Output logs showing dictionary summaries and set operation results.
