"""Starter code for the Pydantic Data Validator assignment.

Student guidance:
1. Define strict models in schemas.py.
2. Validate each row from CSV/JSON.
3. Split valid and invalid records into separate outputs.
"""

from pathlib import Path
import json

# TODO: from pydantic import BaseModel, Field, ValidationError
# TODO: import csv

INPUT_DIR = Path("input")
OUTPUT_DIR = Path("output")


def ensure_output_dir() -> None:
    """Create output directory if it does not exist."""
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


def load_csv_records(csv_path: Path):
    """Return list of dict records from CSV file."""
    # TODO: parse CSV rows into dictionaries
    return []


def load_json_records(json_path: Path):
    """Return list of dict records from JSON file."""
    # TODO: load JSON array records
    return []


def validate_records(records):
    """Return (valid_records, invalid_records)."""
    valid_records = []
    invalid_records = []

    for idx, record in enumerate(records, start=1):
        try:
            # TODO: validate with Pydantic model
            valid_records.append(record)
        except Exception as exc:
            invalid_records.append({"row": idx, "record": record, "error": str(exc)})

    return valid_records, invalid_records


def write_outputs(valid_records, invalid_records) -> None:
    """Write cleaned data and error log files."""
    ensure_output_dir()

    cleaned_path = OUTPUT_DIR / "cleaned_data.json"
    errors_path = OUTPUT_DIR / "errors.log"

    with cleaned_path.open("w", encoding="utf-8") as fh:
        json.dump(valid_records, fh, indent=2)

    with errors_path.open("w", encoding="utf-8") as fh:
        for item in invalid_records:
            fh.write(f"row={item['row']} error={item['error']}\n")


def main() -> None:
    csv_path = INPUT_DIR / "sample-data.csv"
    json_path = INPUT_DIR / "sample-data.json"

    csv_records = load_csv_records(csv_path)
    json_records = load_json_records(json_path)

    records = csv_records + json_records
    valid_records, invalid_records = validate_records(records)
    write_outputs(valid_records, invalid_records)

    print(f"Total records: {len(records)}")
    print(f"Valid records: {len(valid_records)}")
    print(f"Invalid records: {len(invalid_records)}")


if __name__ == "__main__":
    main()
