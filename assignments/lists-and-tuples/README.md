# 📘 Assignment: Level 2 - Lists and Tuples

## 🎯 Objective

Master fundamental data structures in Python: lists and tuples. Learn how to create, manipulate, and iterate through collections of data using indexing, slicing, and common list methods.

## 📚 Key Concepts

### Creating Lists
Lists store multiple values in a single variable using square brackets.

**Try it yourself:**
<!--exercise:answer=[,hint=Use square brackets [ ] to create a list-->

```python
fruits = ____"apple", "banana", "orange"____
print(fruits)  # Output: ['apple', 'banana', 'orange']
```

### Indexing Lists
Access individual elements using their position (starting at 0).

**Try it yourself:**
<!--exercise:answer=0,hint=List positions start at 0, not 1-->

```python
colors = ["red", "green", "blue"]
first_color = colors[____]
print(first_color)  # Output: red
```

### Negative Indexing
Use negative numbers to count from the end of a list.

**Try it yourself:**
<!--exercise:answer=-1,hint=Use -1 to get the last element-->

```python
colors = ["red", "green", "blue"]
last_color = colors[____]
print(last_color)  # Output: blue
```

### List Methods
Common methods for modifying lists.

**Try it yourself:**
<!--exercise:answer=.append,hint=Use .append() to add an item to the end-->

```python
numbers = [1, 2, 3]
numbers____（4)
print(numbers)  # Output: [1, 2, 3, 4]
```

### Tuples - Immutable Lists
Tuples use parentheses and cannot be changed after creation.

**Try it yourself:**
<!--exercise:answer=(,hint=Use parentheses ( ) to create a tuple-->

```python
point = ____10, 20____
print(point)  # Output: (10, 20)
```

## ⏱️ 30-Minute Chunk Plan

- `2.1` (20 min): Create lists and practice indexing.
- `2.2` (20 min): Use append/remove and basic list methods.
- `2.3` (25 min): Practice slicing, reversing, and combining lists.
- `2.4` (20 min): Compare tuples vs lists and conversion between them.

## 📝 Tasks

### 🛠️ List Creation and Indexing

#### Description
Create a list, access elements by index, and use list methods to add and remove items.

#### Requirements
Completed program should:

- Create a list of at least 5 items
- Access the first, middle, and last elements using indexing
- Add a new item to the list using `.append()`
- Remove an item using `.remove()` or `.pop()`
- Print the modified list
- Hint: Remember that Python uses 0-based indexing (first item is at index 0)
- Hint: Use negative indexing to access items from the end (`list[-1]` for the last item)

### 🛠️ Slicing and List Operations

#### Description
Use slicing to extract portions of a list and combine lists together.

#### Requirements
Completed program should:

- Create two lists and combine them using `+` or `.extend()`
- Extract a slice using the syntax `list[start:end]`
- Use slicing to reverse a list or get every other element
- Demonstrate at least 3 different slicing operations
- Print each result with a clear description
- Hint: Slicing syntax is `list[start:end:step]` where step can be negative
- Hint: Remember `list[1:4]` includes index 1, 2, 3 but NOT 4

### 🛠️ Tuples and Immutability

#### Description
Create tuples, understand why they're useful, and convert between lists and tuples.

#### Requirements
Completed program should:

- Create several tuples with different data types
- Try to modify a tuple (this should show an error - comment it out)
- Convert a tuple to a list and vice versa
- Use tuples as dictionary keys (preview of next assignment)
- Explain in comments why tuples are useful despite being immutable
- Hint: Tuples are often used as dictionary keys because they're hashable
- Hint: Use `list()` and `tuple()` for conversions

## 🎓 Learning Resources

- Slicing: Remember to use `[start:stop:step]` notation
- Common list methods: `.append()`, `.insert()`, `.remove()`, `.pop()`, `.sort()`, `.reverse()`
- Tuples: Can contain mixed types and are efficient for fixed collections
- Lists are mutable (changeable), tuples are immutable (fixed)
