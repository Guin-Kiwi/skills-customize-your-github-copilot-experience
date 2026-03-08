"""Starter code for the SQLAlchemy Experiment Tracker assignment.

Student guidance:
1. Define ORM models for experiments and runs.
2. Implement CRUD helpers in db.py.
3. Add summary queries and tests.
"""

# TODO: from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, DateTime
# TODO: from sqlalchemy.orm import declarative_base, relationship, sessionmaker
# TODO: from datetime import datetime

DB_URL = "sqlite:///experiments.db"


def init_db():
    """Initialize database schema."""
    # TODO: create engine and tables
    pass


def seed_data():
    """Insert sample experiments and runs."""
    # TODO: add at least 5 runs across 2+ experiments
    pass


def list_runs():
    """Return all runs."""
    # TODO: query and return run rows
    return []


def best_run_per_experiment():
    """Return best run summary grouped by experiment."""
    # TODO: aggregate by experiment and max metric
    return []


def average_score_per_experiment():
    """Return average score grouped by experiment."""
    # TODO: aggregate with average
    return []


def main() -> None:
    init_db()
    seed_data()

    print("All runs:")
    for row in list_runs():
        print(row)

    print("\nBest run per experiment:")
    for row in best_run_per_experiment():
        print(row)

    print("\nAverage score per experiment:")
    for row in average_score_per_experiment():
        print(row)


if __name__ == "__main__":
    main()
