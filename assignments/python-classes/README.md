# 📘 Assignment: Level 5 - Python Classes

## 🎯 Objective

Model a real analytics object with class design so you can manage state, methods, and validation in a reusable way.

## 🔗 Builds On

- `Level 4: Files and Exceptions`

## 🚀 Unlocks Next

- `Level 6: Data Analysis`

## ⏱️ 20-Minute Chunk Plan

- `5.1` (20 min): Define class structure and constructor fields.
- `5.2` (20 min): Add behavior methods that transform object state.
- `5.3` (20 min): Add guardrails that prevent invalid updates.
- `5.4` (20 min): Instantiate objects and verify usage flow.

## 📝 Tasks

### 🛠️ Build a Domain Class (`Both`)

#### Description
Create a class to represent an analysis run with metadata and status.

#### Requirements
Completed program should:

- Define `AnalysisRun` with `run_id`, `owner`, `dataset_name`, and `status` attributes.
- Initialize defaults in `__init__`.
- Implement `display_info()` that prints a compact summary line.
- Create at least one object instance and call `display_info()`.

### 🛠️ Add Controlled State Updates (`Both`)

#### Description
Add methods that update run metrics while preserving data integrity.

#### Requirements
Completed program should:

- Add `records_processed` attribute with default `0`.
- Implement `update_records(new_value)` with validation that value cannot decrease.
- Implement `mark_complete()` that sets status to `"complete"`.
- Show method calls that move the object through a realistic lifecycle.

### 🛠️ Role-Specific Output Methods (`BA` + `JDS`)

#### Description
Generate outputs tailored for decision communication (`BA`) and technical monitoring (`JDS`).

#### Requirements
Completed program should:

- Add method `business_summary()` returning a short plain-language status statement (`BA`).
- Add method `technical_summary()` returning fields useful for logs/metrics (`JDS`).
- Demonstrate both methods on the same object.
- Include one sentence on how this class could be reused in a capstone project.

## 🏆 Achievement Evidence

To mark this assignment complete, submit:

- `Code Artifact`: `AnalysisRun` class with constructor, validation, and role-specific methods.
- `Interpretation Artifact`: A short explanation of class state transitions and why guardrails matter.
- `Verification Artifact`: Console output showing object creation, updates, and both summary methods.
