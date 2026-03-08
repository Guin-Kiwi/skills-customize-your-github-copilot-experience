# 📘 Assignment: Level 10 - Data Parsing and Validation with Pydantic

## 🎯 Objective

Build a robust data intake script that reads CSV and JSON records, validates them with Pydantic models, and produces both clean output and a clear error report.

## 🔗 Builds On

- `Level 5: Python Classes`

## 🚀 Unlocks Next

- `Level 11: Database Programming with SQLAlchemy`

## ⏱️ 20-Minute Chunk Plan

- `10.1` (20 min): Define strict Pydantic schemas and constraints.
- `10.2` (25 min): Parse CSV/JSON inputs and validate each row.
- `10.3` (20 min): Split clean output from error output.
- `10.4` (20 min): Add tests for valid and invalid scenarios.

## 📝 Tasks

### 🛠️ Define Validation Schemas (`Both`)

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

### 🛠️ Build the Intake Pipeline (`Both`)

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

### 🛠️ Test and Report Data Quality (`Both`)

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

## 🏆 Achievement Evidence

To mark this assignment complete, submit:

- `Code Artifact`: Pydantic schemas and validation pipeline scripts for CSV and JSON intake.
- `Interpretation Artifact`: A short summary explaining top error patterns and schema decisions.
- `Verification Artifact`: Test output and validation logs showing valid/invalid record handling.
