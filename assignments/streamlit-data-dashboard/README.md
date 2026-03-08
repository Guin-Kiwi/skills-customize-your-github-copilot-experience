# 📘 Assignment: Level 12 - Web GUI with Streamlit

## 🎯 Objective

Build an interactive Streamlit dashboard that allows users to upload tabular data, explore it with filters, and visualize insights.

## ⏱️ 30-Minute Chunk Plan

- `12.1` (20 min): Build upload and dataset preview UI.
- `12.2` (25 min): Add sidebar filters and filtered table view.
- `12.3` (25 min): Add charts that react to filters.
- `12.4` (20 min): Validate inputs and add run instructions/tests.

## 📝 Tasks

### 🛠️ Build the Dashboard Layout

#### Description
Set up a clear page structure with upload, filter, chart, and summary sections.

#### Requirements
Completed program should:

- Create `app.py` with a Streamlit page title and section headers.
- Add a file uploader for CSV input.
- Display a preview table of the uploaded dataset.
- Show dataset shape and basic column information.
- Keep layout readable with sidebars or columns.
- Hint: Start with `st.file_uploader` and `st.dataframe` before adding charts.
- Hint: Use clear labels so users understand each control quickly.

### 🛠️ Add Interactive Analysis

#### Description
Enable filtering and plotting so users can explore trends without editing code.

#### Requirements
Completed program should:

- Add at least two filters (for example category and value range).
- Add at least three visualizations (for example histogram, bar chart, scatter plot).
- Update charts based on selected filters.
- Handle missing values gracefully in visual output.
- Show a short “key insights” text block generated from current filtered data.
- Hint: Keep plotting functions reusable so each chart has a single responsibility.
- Hint: Guard against empty filtered datasets and show a friendly message.

### 🛠️ Validate Inputs and Package the App

#### Description
Add data validation and provide clear run instructions.

#### Requirements
Completed program should:

- Validate required columns before analysis starts.
- Show user-friendly errors for invalid files.
- Add `requirements.txt` with needed dependencies.
- Add `run-instructions.txt` with setup and launch steps.
- Include at least 6 tests in `tests/test_dashboard_logic.py` for filtering and summary helper functions.
- Hint: Move data transformation logic into plain functions so tests are straightforward.
- Hint: Keep Streamlit UI code thin and business logic in helpers.
