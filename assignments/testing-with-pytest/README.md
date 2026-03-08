# 📘 Assignment: Level 7 - Testing with Pytest

## 🎯 Objective

Use tests to protect analytics logic and metric calculations before they are shipped to APIs, dashboards, or stakeholder reports.

## 🔗 Builds On

- `Level 6: Data Analysis`

## 🚀 Unlocks Next

- `Level 9: AI Analyst Workflow Lab`

## ⏱️ 20-Minute Chunk Plan

- `7.1` (20 min): Write baseline tests for core functions.
- `7.2` (20 min): Add edge and boundary tests.
- `7.3` (20 min): Add exception and invalid-input tests.
- `7.4` (20 min): Produce a readable test report for mixed audiences.

## 📝 Tasks

### 🛠️ Test Core Analysis Functions (`Both`)

#### Description
Write tests for utility functions that compute totals, rates, or derived fields.

#### Requirements
Completed program should:

- Create a `tests/` folder and at least one test module.
- Add tests for normal behavior of at least 2 functions.
- Use descriptive test names.
- Run `pytest` successfully and fix failing cases.

### 🛠️ Cover Edge and Failure Paths (`Both`)

#### Description
Expand coverage so your code handles difficult inputs safely.

#### Requirements
Completed program should:

- Add tests for zero values, empty inputs, and boundary values.
- Add `pytest.raises(...)` tests for invalid types or invalid ranges.
- Reach at least 10 total tests.
- Log a short summary of discovered bugs and fixes in `artifacts/test-results.md`.

### 🛠️ Communicate Test Outcomes (`BA` + `JDS`)

#### Description
Translate test evidence for different stakeholders.

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
