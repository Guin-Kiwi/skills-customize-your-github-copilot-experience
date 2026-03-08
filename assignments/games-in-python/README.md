
# 📘 Assignment: Level 1 - Hangman Game Challenge

## 🎯 Objective

Build the classic word-guessing game using Python strings, loops, and user input. Create a Hangman game where players guess letters to reveal a hidden word before running out of attempts.

## 🔗 Builds On

- `Level 0: Python Basics`

## 🚀 Unlocks Next

- `Level 2: Lists and Tuples`

**Skills practiced:** String manipulation, loops, conditionals, random selection

## 📚 Key Concepts

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

## ⏱️ 20-Minute Chunk Plan

- `1.1` (20 min): Select a random word and initialize game state.
- `1.2` (25 min): Build the main game loop and collect guesses.
- `1.3` (20 min): Update progress display and track misses.
- `1.4` (20 min): Add final win/lose messaging and cleanup.

## 📝 Tasks

### 🛠️ Build the Hangman Game (`Both`)

#### Description
Create a fully functional Hangman game that challenges players to guess a hidden word by suggesting letters within a limited number of attempts.

#### Requirements
Completed program should:

- Randomly select words from a predefined list
- Accept letter guesses and show current progress (_ _ _ format)
- Track incorrect guesses remaining
- End when word is guessed or attempts exhausted
- Display win/lose messages

## 🏆 Achievement Evidence

To mark this assignment complete, submit:

- `Code Artifact`: A working Hangman script with loop, guess checks, and win/lose logic.
- `Interpretation Artifact`: A short explanation of how your game state updates each turn.
- `Verification Artifact`: A sample game run transcript showing both a win or a loss path.
