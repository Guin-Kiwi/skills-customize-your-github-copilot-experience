
# 📘 Assignment: Level 1 - Hangman Game Challenge

## 🎯 Objective

Build the classic word-guessing game using Python strings, loops, and user input. Create a Hangman game where players guess letters to reveal a hidden word before running out of attempts.

**Skills practiced:** String manipulation, loops, conditionals, random selection

## � Key Concepts

### Random Selection
Python's `random` module lets you pick items randomly from a list.

**Try it yourself:**
<!--exercise:answer=random.choice,hint=Use random.choice() to pick a random item from a list-->

```python
import random

words = ["python", "java", "ruby"]
word = ____(words)
print(word)  # Prints a random word
```

### String Methods
Check if a letter is in a string using the `in` operator.

**Try it yourself:**
<!--exercise:answer=in,hint=Use the 'in' keyword to check membership-->

```python
word = "python"
letter = "p"

if letter ____ word:
    print("Found it!")
```

### String Joining
Join list items into a single string using `.join()`.

**Try it yourself:**
<!--exercise:answer=" ".join,hint=Use " ".join() to join with spaces-->

```python
display = ["_", "p", "_", "_", "_", "_"]
result = ____(display)
print(result)  # Output: _ p _ _ _ _
```

## �📝 Tasks

### 🛠️ Build the Hangman Game

#### Description
Create a fully functional Hangman game that challenges players to guess a hidden word by suggesting letters within a limited number of attempts.

#### Requirements
Completed program should:

- Randomly select words from a predefined list
- Accept letter guesses and show current progress (_ _ _ format)
- Track incorrect guesses remaining
- End when word is guessed or attempts exhausted
- Display win/lose messages
