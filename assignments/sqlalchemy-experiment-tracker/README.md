# 📘 Assignment: Level 11 - Database Programming with SQLAlchemy

## 🎯 Objective

Create an experiment tracking system that stores machine learning run metadata in SQLite using SQLAlchemy ORM, then query and summarize results.

## 🔗 Builds On

- `Level 10: Data Parsing and Validation with Pydantic`

## 🚀 Unlocks Next

- `Level 8: Building REST APIs with FastAPI`

## ⏱️ 20-Minute Chunk Plan

- `11.1` (20 min): Define ORM models and relationships.
- `11.2` (25 min): Initialize DB and insert sample runs.
- `11.3` (25 min): Implement CRUD operations and transactions.
- `11.4` (20 min): Build summary queries and validate with tests.

## 📝 Tasks

### 🛠️ Design ORM Models (`Both`)

#### Description
Model experiments and runs with clear relationships and constraints.

#### Requirements
Completed program should:

- Define SQLAlchemy models in `models.py` for `Experiment` and `Run`.
- Include a one-to-many relationship (one experiment has many runs).
- Add useful columns such as model name, metric score, and run timestamp.
- Enforce at least one constraint (for example non-null or unique field).
- Hint: Start with simple models, then add relationships after basic inserts work.
- Hint: Include `__repr__` methods for easier debugging.

### 🛠️ Implement CRUD Operations (`Both`)

#### Description
Build scripts that create, read, update, and delete experiment records.

#### Requirements
Completed program should:

- Initialize SQLite database file `experiments.db`.
- Insert at least 5 runs across at least 2 experiments.
- Implement read queries for all runs and filtered runs by experiment.
- Implement update and delete operations with safe transaction handling.
- Organize database access functions in `db.py`.
- Hint: Use one session scope per operation block.
- Hint: Commit only after validation checks pass.

### 🛠️ Query Insights and Validate Behavior (`Both`)

#### Description
Produce useful analytics queries and verify behavior with tests.

#### Requirements
Completed program should:

- Compute best run per experiment by metric score.
- Compute average metric score grouped by experiment.
- Output summary to `reports/experiment-summary.txt`.
- Add tests in `tests/test_db.py` covering CRUD and query logic.
- Include at least 8 tests including one transaction rollback case.
- Hint: Use fixtures for temporary test databases to avoid polluting production data.
- Hint: Keep query helpers separate from CLI/display logic.

## 🏆 Achievement Evidence

To mark this assignment complete, submit:

- `Code Artifact`: SQLAlchemy models plus CRUD/query implementation.
- `Interpretation Artifact`: A short explanation of schema design choices and one query insight.
- `Verification Artifact`: Test output and generated `reports/experiment-summary.txt`.
