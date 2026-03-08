# 📘 Assignment: Level 16 - Data Communication and Storytelling

## 🎯 Objective

Communicate findings clearly to business stakeholders through a concise memo with actionable recommendations.

## 🔗 Builds On

- `Level 13: KPI Design and Business Questions`
- `Level 15: Baseline Modeling and Evaluation`

## 🚀 Unlocks Next

- `Capstone Showcase`

## 🔑 Key Concepts

Before you start, explore these essential data communication patterns:

**1. Pyramid Principle - Answer First**
```
Start with the <!--exercise:answer=recommendation,hint=What should be stated first: the recommendation or the analysis?-->:
"I recommend launching Feature X in Region A."

Then support with evidence:
"Region A shows 25% higher engagement than Region B..."
```

**2. Context-Action-Result Structure**
```
Context: What's the business situation?
"Customer churn increased 15% in Q3"

Action: What did we investigate?
"We analyzed <!--exercise:answer=retention,hint=What patterns do we look for to understand churn?--> factors across 5,000 accounts"

Result: What should we do?
"Implement tier-based pricing to reduce churn by an estimated 8%"
```

**3. Confidence Language - Hedging Uncertainty**
```
Strong: "The data shows..."
Moderate: "The data <!--exercise:answer=suggests,hint=What word indicates probable but not certain findings?-->..."
Weak: "The data appears to indicate..."

Always acknowledge assumptions and limitations.
```

**4. Visualization Principles - Clarity Over Complexity**
```python
import matplotlib.pyplot as plt

# Good: Clear, focused chart
plt.bar(['A', 'B', 'C'], [10, 15, 8])
plt.title("Revenue by Region")
plt.ylabel("Revenue (<!--exercise:answer=$M,hint=What unit makes financial data clear?-->)")

# Avoid: Too many colors, unclear labels, 3D effects
```

## 📝 Tasks

### 🛠️ Business Narrative (40 min) (`BA`)

#### Description
Draft a one-page memo that turns analytics into a decision recommendation.

#### Requirements
Completed program should:

- State business question and recommendation in first paragraph.
- Include 3 key findings supported by data.
- Include one risk and one mitigation.
- Use non-technical language where possible.

### 🛠️ Technical Appendix (30 min) (`JDS`)

#### Description
Attach technical evidence that supports memo claims.

#### Requirements
Completed program should:

- Include model or statistical evidence references.
- Include metric definitions and data caveats.
- Add reproducibility note (scripts used, assumptions).

## 🏆 Achievement Evidence

To mark this assignment complete, submit:

- `Code Artifact`: Supporting script/notebook used to generate memo evidence.
- `Interpretation Artifact`: One-page memo with recommendation and risk statement.
- `Verification Artifact`: Data tables/charts or outputs referenced in memo.

## 🔗 Quick Access

Open assignment files directly in your browser:

- [📝 Open starter-code.py in GitHub](https://github.dev/Guin-Kiwi/skills-customize-your-github-copilot-experience/blob/main/assignments/data-communication-and-storytelling/starter-code.py)
- [📂 View assignment folder](https://github.com/Guin-Kiwi/skills-customize-your-github-copilot-experience/tree/main/assignments/data-communication-and-storytelling)
