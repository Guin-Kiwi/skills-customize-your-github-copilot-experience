# 📘 Assignment: Level 14 - Statistics and Hypothesis Testing

## 🎯 Objective

Use statistical reasoning to test claims, compare groups, and explain uncertainty in data-driven decisions.

## 🔗 Builds On

- `Level 6: Data Analysis`

## 🚀 Unlocks Next

- `Level 15: Baseline Modeling and Evaluation`

## 🔑 Key Concepts

Before you start, explore these essential hypothesis testing patterns:

**1. Null Hypothesis (H0) - Status Quo Assumption**
```
H0: There is NO difference between Group A and Group B
H1: There IS a difference between Group A and Group B

We assume <!--exercise:answer=H0,hint=Which hypothesis do we assume is true until proven otherwise?--> is true until evidence suggests otherwise.
```

**2. p-value - Probability of Seeing Result by Chance**
```python
from scipy import stats

result = stats.ttest_ind(group_a, group_b)
print(f"p-value: {result.<!--exercise:answer=pvalue,hint=What attribute contains the probability value?-->}")

# If p < 0.05, we reject H0 (result is statistically significant)
```

**3. scipy.stats.ttest_ind() - Comparing Two Groups**
```python
from scipy.stats import ttest_ind

group_a = [23, 28, 31, 29, 27]
group_b = [35, 38, 40, 36, 39]

statistic, pvalue = <!--exercise:answer=ttest_ind,hint=What function compares means of independent groups?-->(group_a, group_b)
```

**4. Confidence Intervals - Range of Plausible Values**
```python
from scipy import stats
import numpy as np

data = [23, 28, 31, 29, 27]
confidence = 0.95

interval = stats.t.interval(confidence, len(data)-1,
						   loc=np.mean(data),
						   scale=stats.sem(data))
# Result: We are <!--exercise:answer=95,hint=What percentage confident is our interval?-->% confident the true mean is in this range
```

## ⏱️ 20-Minute Chunk Plan

- `14.1` (20 min): Define null and alternative hypotheses.
- `14.2` (20 min): Compute summary statistics by group.
- `14.3` (20 min): Run a significance test and interpret p-value.
- `14.4` (20 min): Write decision statement with limitations.

## 📝 Tasks

### 🛠️ Hypothesis Setup (`JDS`)
### 🛠️ Hypothesis Setup (20 min) (`JDS`)

#### Description
Frame a testable hypothesis from a business or product scenario.

#### Requirements
Completed program should:

- Write one null and one alternative hypothesis.
- Identify metric, population, and decision threshold.
- Explain Type I and Type II risk in plain language.

### 🛠️ Statistical Test (`JDS`)
### 🛠️ Statistical Test (30 min) (`JDS`)

#### Description
Compute group statistics and execute one hypothesis test.

#### Requirements
Completed program should:

- Compare two groups with mean and variance summaries.
- Run one statistical test (for example t-test).
- Interpret p-value and confidence in context.
- Save reproducible steps in code.

### 🛠️ Decision Readout (`Both`)
### 🛠️ Decision Readout (20 min) (`Both`)

#### Description
Communicate whether the data supports action.

#### Requirements
Completed program should:

- Produce a short decision paragraph for stakeholders.
- Include assumptions and limitations.
- State whether follow-up data collection is needed.

## 🏆 Achievement Evidence

To mark this assignment complete, submit:

- `Code Artifact`: Script/notebook with test setup and output.
- `Interpretation Artifact`: Decision readout with uncertainty language.
- `Verification Artifact`: Printed test statistic and p-value output.

## 🔗 Quick Access

Open assignment files directly in your browser:

- [📝 Open starter-code.py in GitHub](https://github.dev/Guin-Kiwi/skills-customize-your-github-copilot-experience/blob/main/assignments/statistics-and-hypothesis-testing/starter-code.py)
- [📂 View assignment folder](https://github.com/Guin-Kiwi/skills-customize-your-github-copilot-experience/tree/main/assignments/statistics-and-hypothesis-testing)
