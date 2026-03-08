# 📘 Assignment: Level 10 - Data Parsing and Validation with Pydantic

## 🎯 Objective

Build a robust data intake script that reads CSV and JSON records, validates them with Pydantic models, and produces both clean output and a clear error report.

## 📝 Tasks

### 🛠️ Define Validation Schemas

#### Description
Create strict Pydantic models that represent incoming records and enforce quality rules.

#### Requirements
Completed program should:

- Create at least two `BaseModel` classes in `schemas.py`.
- Validate fields such as name, email, age, and timestamp.
- Use `Field(...)` constraints (for example min/max length or numeric bounds).
- Add at least one custom validator for domain-specific checks.
- Hint: Use descriptive validation messages so students can quickly diagnose bad input.
- Hint: Keep schemas small and focused so they are easy to test.

### 🛠️ Build the Intake Pipeline

#### Description
Read raw input files, validate each record, and separate valid data from invalid data.

#### Requirements
Completed program should:

- Read from both `input/sample-data.csv` and `input/sample-data.json`.
- Validate each record using your Pydantic models.
- Write valid rows to `output/cleaned_data.json`.
- Write invalid rows and error details to `output/errors.log`.
- Continue processing even if some rows fail.
- Hint: Wrap per-row validation in `try/except` so one bad row does not stop the whole pipeline.
- Hint: Include row number or record ID in each error log entry.

### 🛠️ Test and Report Data Quality

#### Description
Create tests and a summary report showing how well the pipeline performs.

#### Requirements
Completed program should:

- Add tests in `tests/test_validation.py` for valid and invalid records.
- Include at least 8 unit tests across normal and edge cases.
- Print a run summary with total records, valid records, and invalid records.
- Add a short `validation-summary.txt` explaining the most common input errors.
- Hint: Test at least one missing field, one wrong type, and one invalid format case.
- Hint: Keep test names specific, such as `test_rejects_invalid_email`.
