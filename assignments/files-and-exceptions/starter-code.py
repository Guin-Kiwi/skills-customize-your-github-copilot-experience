"""Starter code for Files and Exceptions assignment.

Hints:
1. Use 'with' statements to automatically close files.
2. Test exception handling by intentionally causing errors.
3. Always consider: what could go wrong? Then handle it.
"""

# Task 1: Reading Files
# TODO: Create a test.txt file with some data first

# TODO: Read the entire file
# with open("test.txt", "r") as file:
#     content = file.read()
#     print(content)

# TODO: Read line by line and count lines
# with open("test.txt", "r") as file:
#     lines = file.readlines()
#     print(f"Total lines: {len(lines)}")


# Task 2: Writing and Appending Files
# Create a shopping list and write to file
shopping_items = ["milk", "eggs", "bread", "butter"]

# TODO: Write items to file (one per line)
# with open("shopping_list.txt", "w") as file:
#     for item in shopping_items:
#         file.write(item + "\n")

# TODO: Append more items
# with open("shopping_list.txt", "a") as file:
#     file.write("cheese\n")

# TODO: Read back to verify what was written


# Task 3: Error Handling and Validation
# TODO: Try to convert user input to a number
try:
    pass  # TODO: Get user input and convert to int
except ValueError:
    pass  # TODO: Handle non-numeric input


# TODO: Try to read a file that might not exist
try:
    pass  # TODO: Try to open a file
except FileNotFoundError:
    pass  # TODO: Handle missing file
finally:
    pass  # TODO: Cleanup (maybe print a message)
