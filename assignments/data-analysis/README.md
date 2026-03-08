# 📘 Assignment: Level 6 - Data Analysis

## 🎯 Objective

Analyze a real dataset end-to-end and produce both decision-ready insight (`BA`) and technical data-quality evidence (`JDS`).

## 🔗 Builds On

- `Level 5: Python Classes`

## 🚀 Unlocks Next

- `Level 7: Testing with Pytest`

## 📚 Key Concepts

### Loading Data with Pandas
Pandas DataFrames are the foundation for Python data analysis.

**Try it yourself:**
<!--exercise:answer=pd.read_csv,hint=Use pd.read_csv() to load CSV files-->

```python
import pandas as pd
data = ____("filename.csv")
print(data.head())  # Shows first 5 rows
```

### Inspecting Data Structure
Check shape, columns, and data types before analysis.

**Try it yourself:**
<!--exercise:answer=.shape,hint=Use .shape to get row and column count-->

```python
data = pd.DataFrame({"name": ["Alice", "Bob"], "age": [25, 30]})
rows, cols = data____
print(f"{rows} rows, {cols} columns")  # Output: 2 rows, 2 columns
```

### Descriptive Statistics
Get quick summaries of numeric columns.

**Try it yourself:**
<!--exercise:answer=.describe,hint=Use .describe() for statistical summary-->

```python
data = pd.DataFrame({"score": [85, 92, 78, 95, 88]})
summary = data____()
print(summary)  # Shows count, mean, std, min, max, quartiles
```

### Basic Plotting
Visualize patterns quickly with built-in plotting.

**Try it yourself:**
<!--exercise:answer=.plot,hint=Use .plot() to create visualizations-->

```python
data = pd.DataFrame({"values": [10, 20, 15, 25, 30]})
data["values"]____(kind="line")
plt.show()  # Display the chart
```

## 📝 Tasks

### 🛠️ Profile the Dataset (20 min) (`Both`)

#### Description
Load dataset and inspect schema. Load the dataset and document structure, quality, and numeric patterns.

#### Requirements
Completed program should:

- Load `data.csv` with pandas.
- Print row count, column names, and data types.
- Report missing values per column.
- Generate summary stats for numeric columns.

### 🛠️ Build Insight Views (20 min) (`Both`)

#### Description
Compute descriptive statistics and create charts. Create visuals that reveal trends and support analysis decisions.

#### Requirements
Completed program should:

- Create at least two plots (for example histogram + scatter).
- Save charts as image files.
- Write 2 to 3 bullet insights tied directly to chart evidence.
- Flag one limitation or uncertainty in the data.

### 🛠️ Split Deliverables by Role (20 min) (`BA` + `JDS`)

#### Description
Produce BA and JDS outputs from the same analysis. Publish two outputs from the same notebook/script to mirror real team collaboration.

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
