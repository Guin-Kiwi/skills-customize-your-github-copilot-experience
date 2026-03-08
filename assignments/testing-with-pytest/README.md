# 📘 Assignment: Level 7 - Testing with Pytest

## 🎯 Objective

Use tests to protect analytics logic and metric calculations before they are shipped to APIs, dashboards, or stakeholder reports.

## 🔗 Builds On

- `Level 6: Data Analysis`

## 🚀 Unlocks Next

- `Level 9: AI Analyst Workflow Lab`

## 📚 Key Concepts

### Writing Test Functions
Test functions start with `test_` and use assertions.

**Try it yourself:**
<!--exercise:answer=assert,hint=Use assert to check expected results-->

```python
def add(a, b):
    return a + b

def test_add():
    ____ add(2, 3) == 5  # Test passes if True
```

### Running Pytest
Execute tests from the command line.

**Try it yourself:**
<!--exercise:answer=pytest,hint=Run pytest command to execute tests-->

```python
# In terminal:
# ____ test_file.py
# Output shows pass/fail results
```

### Testing for Exceptions
Verify that code raises expected errors.

**Try it yourself:**
<!--exercise:answer=pytest.raises,hint=Use pytest.raises to test for exceptions-->

```python
import pytest

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

def test_divide_by_zero():
    with ____(ValueError):
        divide(10, 0)
```

### Test Organization
Structure tests in a dedicated tests/ directory.

**Try it yourself:**
<!--exercise:answer=tests/,hint=Create a tests/ folder for test files-->

```python
# Project structure:
# project/
#   ____
#     test_calculator.py
#     test_validator.py
#   calculator.py
```

## 📝 Tasks

### 🛠️ Test Core Analysis Functions (20 min) (`Both`)

#### Description
Write baseline tests for core functions. Write tests for utility functions that compute totals, rates, or derived fields.

#### Requirements
Completed program should:

- Create a `tests/` folder and at least one test module.
- Add tests for normal behavior of at least 2 functions.
- Use descriptive test names.
- Run `pytest` successfully and fix failing cases.

### 🛠️ Cover Edge and Failure Paths (20 min) (`Both`)

#### Description
Add edge and boundary tests. Expand coverage so your code handles difficult inputs safely.

#### Requirements
Completed program should:

- Add tests for zero values, empty inputs, and boundary values.
- Add `pytest.raises(...)` tests for invalid types or invalid ranges.
- Reach at least 10 total tests.
- Log a short summary of discovered bugs and fixes in `artifacts/test-results.md`.

### 🛠️ Communicate Test Outcomes (20 min) (`BA` + `JDS`)

#### Description
Produce a readable test report for mixed audiences. Translate test evidence for different stakeholders.

#### Requirements
Completed program should:

- Add a section in `artifacts/test-results.md` explaining business risk of one failing case (`BA`).
- Add a section listing technical root cause and fix strategy (`JDS`).
- Include final pass/fail counts and runtime from a real `pytest` run.
- State one testing habit you will carry into later modules.

## 🏆 Achievement Evidence

To mark this assignment complete, submit:

- `Code Artifact`: Test suite with at least 10 tests across normal, edge, and failure paths.
- `Interpretation Artifact`: Written summary explaining risk and root-cause findings.
- `Verification Artifact`: Actual `pytest` output showing final passing status.

## 🔗 Quick Access

Open assignment files directly in your browser:

- [📝 Open starter-code.py in GitHub](https://github.dev/Guin-Kiwi/skills-customize-your-github-copilot-experience/blob/main/assignments/testing-with-pytest/starter-code.py)
- [📂 View assignment folder](https://github.com/Guin-Kiwi/skills-customize-your-github-copilot-experience/tree/main/assignments/testing-with-pytest)
