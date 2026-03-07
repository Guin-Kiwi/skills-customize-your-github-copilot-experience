# 📘 Assignment: Level 3 - Data Analysis

## 🎯 Objective

Students will learn the basics of data analysis using Python. They will load, explore, and analyze a dataset to extract meaningful insights.

## 📝 Tasks

### 🛠️ Data Loading and Exploration

#### Description
Load a provided CSV dataset and perform basic exploration to understand its structure and contents.

#### Requirements
Completed program should:

- Load a CSV file using Python (e.g., with pandas)
- Display the first 5 rows of the dataset
- Show summary statistics (mean, median, etc.) for numeric columns
- Hint: Use `pd.read_csv('data.csv')`, then store the result in a variable like `df`.
- Hint: If output feels confusing, print one step at a time: `df.head()` first, then `df.describe()`.


### 🛠️ Data Visualization and Insights

#### Description
Create visualizations to help understand the data and summarize key findings.

#### Requirements
Completed program should:

- Generate at least two different types of plots (e.g., histogram, scatter plot)
- Identify and describe at least two insights or trends from the data
- Save the plots as image files
- Hint: Start with one column histogram before trying more complex plots.
- Hint: Save each chart with `plt.savefig('name.png')` before calling `plt.show()`.
