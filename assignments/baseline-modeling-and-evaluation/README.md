# 📘 Assignment: Level 15 - Baseline Modeling and Evaluation

## 🎯 Objective

Build and evaluate a baseline predictive model to establish performance benchmarks for future improvements.

## 🔗 Builds On

- `Level 14: Statistics and Hypothesis Testing`

## 🚀 Unlocks Next

- `Level 16: Data Storytelling Memo`

## 🔑 Key Concepts

Before you start, explore these essential modeling patterns:

**1. train_test_split() - Splitting Data**
```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = <!--exercise:answer=train_test_split,hint=What function splits data into training and testing sets?-->(X, y, test_size=0.2, random_state=42)
```

**2. fit() / predict() - Training and Using Models**
```python
from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
model.<!--exercise:answer=fit,hint=What method trains the model?-->(X_train, y_train)
predictions = model.predict(X_test)
```

**3. Evaluation Metrics - Measuring Model Quality**
```python
from sklearn.metrics import accuracy_score, precision_score, recall_score

accuracy = <!--exercise:answer=accuracy_score,hint=What function calculates percentage of correct predictions?-->(y_test, predictions)
precision = precision_score(y_test, predictions)
recall = recall_score(y_test, predictions)
```

**4. Baseline Comparison - Naive Predictions**
```python
from sklearn.dummy import DummyClassifier

# Always predicts the most common class
baseline = DummyClassifier(strategy='<!--exercise:answer=most_frequent,hint=What strategy predicts the majority class?-->')
baseline.fit(X_train, y_train)
baseline_accuracy = accuracy_score(y_test, baseline.predict(X_test))

print(f"Baseline: {baseline_accuracy:.2f}")
print(f"Our Model: {accuracy:.2f}")
```


## 📝 Tasks

### 🛠️ Baseline Pipeline (`JDS`)
### 🛠️ Baseline Pipeline (40 min) (`JDS`)

#### Description
Create a minimal, reproducible baseline modeling workflow.

#### Requirements
Completed program should:

- Load prepared dataset and split train/test.
- Train one baseline model.
- Save model predictions and core metrics.
- Keep pipeline deterministic using fixed random seed.

### 🛠️ Evaluation Summary (`Both`)
### 🛠️ Evaluation Summary (30 min) (`Both`)

#### Description
Explain model quality and practical usefulness.

#### Requirements
Completed program should:

- Report at least 2 evaluation metrics.
- Compare baseline to a naive benchmark.
- Explain one limitation and one improvement direction.

## 🏆 Achievement Evidence

To mark this assignment complete, submit:

- `Code Artifact`: Baseline model training and evaluation script.
- `Interpretation Artifact`: Error analysis summary with next-step proposal.
- `Verification Artifact`: Metric output table and benchmark comparison.
