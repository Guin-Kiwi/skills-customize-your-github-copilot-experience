# 📘 Assignment: Level 4 - Files and Exceptions

## 🎯 Objective

Learn to read from and write to files, handle errors with exceptions, and build robust programs that manage unexpected situations gracefully.

## 🔗 Builds On

- `Level 3: Dictionaries and Sets`

## 🚀 Unlocks Next

- `Level 5: Python Classes`

## 📚 Key Concepts

### Opening Files
Use `open()` to work with files on disk.

**Try it yourself:**
<!--exercise:answer=open,hint=Use the open() function to open a file-->

```python
my_file = ____(  "data.txt", "r" )
content = my_file.read()
my_file.close()
```

### Reading Files
Different ways to read file content.

**Try it yourself:**
<!--exercise:answer=.readlines,hint=Use .readlines() to get each line as a list item-->

```python
with open("data.txt", "r") as file:
    lines = file____()
print(lines)  # Output: ['Line 1\n', 'Line 2\n', ...]
```

### Writing to Files
Create and write content to files.

**Try it yourself:**
<!--exercise:answer="w",hint=Use "w" mode to write (creates or overwrites file)-->

```python
with open("output.txt", ____ ) as file:
    file.write("Hello, World!")
```

### Try-Except Blocks
Handle errors when they occur instead of crashing.

**Try it yourself:**
<!--exercise:answer=try,hint=Use try keyword to start error handling-->

```python
____:
    number = int(input("Enter a number: "))
    print(number * 2)
except ValueError:
    print("That's not a number!")
```

### Specific Exception Handling
Catch different error types separately.

**Try it yourself:**
<!--exercise:answer=FileNotFoundError,hint=When a file doesn't exist, catch this error type-->

```python
try:
    file = open("missing.txt", "r")
except ____:
    print("File not found!")
```

### Finally Block
Code that always runs, whether an error occurred or not.

**Try it yourself:**
<!--exercise:answer=finally,hint=Use 'finally' for cleanup code that always runs-->

```python
try:
    file = open("data.txt", "r")
    data = file.read()
except FileNotFoundError:
    print("File not found")
____:
    file.close()
```

## ⏱️ 30-Minute Chunk Plan

- `4.1` (20 min): Read files safely using context managers.
- `4.2` (20 min): Write and append output files.
- `4.3` (25 min): Handle conversion and file errors with try/except.
- `4.4` (20 min): Add finally cleanup and user-friendly error messages.

## 📝 Tasks

### 🛠️ Reading Files

#### Description
Read data from a text file and process the content.

#### Requirements
Completed program should:

- Create a test text file with several lines of data
- Read the entire file using `.read()`
- Read line-by-line using `.readlines()` or a loop
- Count the number of lines and words
- Find and print lines containing a specific keyword
- Handle the case where the file doesn't exist using try-except
- Hint: Use `with open(...) as file:` to automatically close files
- Hint: Use `.strip()` to remove newline characters from lines

### 🛠️ Writing and Appending Files

#### Description
Create new files and add content to existing files.

#### Requirements
Completed program should:

- Write a list of items to a new file (one per line)
- Append additional items to the file without overwriting
- Read the file back to verify the content was saved
- Handle exceptions if the file cannot be written
- Create a simple log file that records each time the program runs
- Hint: Use `"w"` to write (overwrites), `"a"` to append (keeps existing content)
- Hint: Remember to include `\n` to create new lines when writing

### 🛠️ Error Handling and Validation

#### Description
Build robust code that handles various errors gracefully.

#### Requirements
Completed program should:

- Get user input and validate it (e.g., check if it's a number)
- Use try-except to handle `ValueError`, `TypeError`, and `FileNotFoundError`
- Use a try-except-finally block to ensure file cleanup
- Create custom error messages for different error types
- Use multiple except clauses to handle different errors separately
- Demonstrate handling at least 3 different exception types
- Hint: `int(input())` can raise a `ValueError` if the user enters non-numeric text
- Hint: Use `except Exception as e:` to catch any error and print it with `str(e)`

## 🎓 Learning Resources

- File modes: `"r"` (read), `"w"` (write, overwrites), `"a"` (append), `"x"` (create)
- Common exceptions: `FileNotFoundError`, `ValueError`, `TypeError`, `IOError`
- Always use `with` statement for automatic file closing
- Try-except-finally structure ensures cleanup code runs
- Multiple except clauses allow different handling for different errors

## 🏆 Achievement Evidence

To mark this assignment complete, submit:

- `Code Artifact`: A script that reads, writes, appends, and handles errors as required.
- `Interpretation Artifact`: A brief note describing one error path and how your code recovers.
- `Verification Artifact`: Output evidence for a successful run and at least one handled exception.
