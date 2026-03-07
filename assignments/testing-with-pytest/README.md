# 📘 Assignment: Level 4 - Testing with Pytest

## 🎯 Objective

Learn how to write unit tests in Python using `pytest`. You will practice testing normal behavior, edge cases, and invalid input before moving to larger backend projects.

## 📝 Tasks

### 🛠️ Write Basic Unit Tests

#### Description
Write tests for simple utility functions so you can practice arranging test inputs, calling functions, and checking expected outputs.

#### Requirements
Completed program should:

- Create a `tests/` folder and at least one test file.
- Write tests for a basic math utility function.
- Use clear test names such as `test_add_positive_numbers`.
- Run tests with `pytest` and confirm passing results.
- Hint: Use the pattern `arrange -> act -> assert` in each test.
- Hint: Start with easy cases first, then add harder cases.

### 🛠️ Test Edge Cases and Errors

#### Description
Expand your tests to include unusual inputs and error handling behavior.

#### Requirements
Completed program should:

- Add tests for edge cases such as zero values, empty strings, or boundary numbers.
- Add tests that confirm errors are raised for invalid input.
- Use `pytest.raises(...)` for exception checks.
- Reach at least 10 total tests.
- Record your test run result in `test-results.md`.
- Hint: For each function, ask: "What could go wrong?" and write a test for that case.
- Hint: Keep one idea per test so failures are easy to understand.
