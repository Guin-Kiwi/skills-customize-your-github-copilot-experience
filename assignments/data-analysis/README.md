# 📘 Assignment: Level 6 - Data Analysis

## 🎯 Objective

Analyze a real dataset end-to-end and produce both decision-ready insight (`BA`) and technical data-quality evidence (`JDS`).

## 🔗 Builds On

- `Level 5: Python Classes`

## 🚀 Unlocks Next

- `Level 7: Testing with Pytest`

## ⏱️ 20-Minute Chunk Plan

- `6.1` (20 min): Load dataset and inspect schema.
- `6.2` (20 min): Compute descriptive statistics and missing-value checks.
- `6.3` (20 min): Create one chart and extract one actionable insight.
- `6.4` (20 min): Produce BA and JDS outputs from the same analysis.

## 📝 Tasks

### 🛠️ Profile the Dataset (`Both`)

#### Description
Load the dataset and document structure, quality, and numeric patterns.

#### Requirements
Completed program should:

- Load `data.csv` with pandas.
- Print row count, column names, and data types.
- Report missing values per column.
- Generate summary stats for numeric columns.

### 🛠️ Build Insight Views (`Both`)

#### Description
Create visuals that reveal trends and support analysis decisions.

#### Requirements
Completed program should:

- Create at least two plots (for example histogram + scatter).
- Save charts as image files.
- Write 2 to 3 bullet insights tied directly to chart evidence.
- Flag one limitation or uncertainty in the data.

### 🛠️ Split Deliverables by Role (`BA` + `JDS`)

#### Description
Publish two outputs from the same notebook/script to mirror real team collaboration.

#### Requirements
Completed program should:

- Create `artifacts/ba-summary.md` with KPI-focused recommendations (`BA`).
- Create `artifacts/jds-quality-notes.md` with assumptions and data-quality checks (`JDS`).
- Ensure both outputs reference at least one shared metric value.
- Add one sentence linking this work to downstream API or dashboard modules.

## 🏆 Achievement Evidence

To mark this assignment complete, submit:

- `Code Artifact`: Analysis script or notebook that loads, profiles, and visualizes the dataset.
- `Interpretation Artifact`: BA/JDS written summaries with role-appropriate conclusions.
- `Verification Artifact`: Saved chart files and printed quality/statistics checks.
