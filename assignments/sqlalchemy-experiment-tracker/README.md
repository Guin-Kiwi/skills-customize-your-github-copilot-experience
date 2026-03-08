# 📘 Assignment: Level 11 - Database Programming with SQLAlchemy

## 🎯 Objective

Create an experiment tracking system that stores machine learning run metadata in SQLite using SQLAlchemy ORM, then query and summarize results.

## 🔗 Builds On

- `Level 10: Data Parsing and Validation with Pydantic`

## 🚀 Unlocks Next

- `Level 8: Building REST APIs with FastAPI`

## 🔑 Key Concepts

Before you start, explore these essential SQLAlchemy patterns:

**1. declarative_base() - Creating ORM Base Class**
```python
from sqlalchemy.ext.declarative import declarative_base

Base = <!--exercise:answer=declarative_base(),hint=What function creates the base class for ORM models?-->

class Experiment(Base):
	__tablename__ = 'experiments'
```

**2. Column and Data Types - Defining Table Structure**
```python
from sqlalchemy import Column, Integer, String, Float

class Run(Base):
	__tablename__ = 'runs'
	id = Column(<!--exercise:answer=Integer,hint=What data type for auto-incrementing IDs?-->, primary_key=True)
	model_name = Column(String(100))
	accuracy = Column(Float)
```

**3. relationship() - Connecting Tables**
```python
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

class Experiment(Base):
	__tablename__ = 'experiments'
	id = Column(Integer, primary_key=True)
	runs = <!--exercise:answer=relationship,hint=What creates the ORM linkage between tables?-->('Run', back_populates='experiment')
```

**4. Session - Database Operations**
```python
from sqlalchemy.orm import sessionmaker

Session = sessionmaker(bind=engine)
session = Session()

new_run = Run(model_name="RandomForest", accuracy=0.92)
session.<!--exercise:answer=add,hint=What method adds objects to the session?-->(new_run)
session.commit()
```


## 📝 Tasks

### 🛠️ Design ORM Models (`Both`)
### 🛠️ Design ORM Models (20 min) (`Both`)

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
### 🛠️ Implement CRUD Operations (25 min) (`Both`)

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
### 🛠️ Query Insights and Validate Behavior (25 min) (`Both`)

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
