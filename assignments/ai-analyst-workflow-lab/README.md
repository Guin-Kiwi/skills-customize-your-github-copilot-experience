# 📘 Assignment: Level 9 - AI Analyst Workflow Lab

## 🎯 Objective

Use AI assistance responsibly to speed up analysis tasks while validating outputs with tests, checks, and critical review notes.

## 🔗 Builds On

- `Level 7: Testing with Pytest`

## 🚀 Unlocks Next

- `Level 13: Statistics and Hypothesis Testing`

## 🔑 Key Concepts

Before you start, explore these essential AI collaboration patterns:

**1. Effective Prompting - Clear Instructions**
```
Weak prompt: "Write a function"

Strong prompt: "Write a Python function that <!--exercise:answer=validates,hint=What should the function do first?--> email format using regex, returns True/False, and includes docstring with examples"
```

**2. Assumption Marking - Critical Review**
```python
# AI-generated code:
def calculate_growth(current, previous):
    return (current - previous) / previous * 100
    
# Human annotation:
# ASSUMPTION: <!--exercise:answer=previous,hint=What value could cause division by zero?--> != 0
# EDGE CASE: What if previous is 0?
# FIX NEEDED: Add zero check
```

**3. Test-Driven Validation - Proving Correctness**
```python
import pytest

def test_edge_case():
    # Test what AI might miss
    result = calculate_growth(100, <!--exercise:answer=0,hint=What edge case value should we test?-->)
    # This will fail and reveal the bug!
```

**4. Trust Boundaries - When to Use AI**
```
Good use cases:
- Boilerplate code generation
- Test case <!--exercise:answer=scaffolding,hint=What AI task speeds up repetitive test structure?-->
- Documentation templates

Requires human judgment:
- Business logic validation
- Security-sensitive code
- Performance-critical algorithms
```

## 📝 Tasks

### 🛠️ AI-Assisted Drafting (20 min) (`Both`)

#### Description
Generate an initial analysis helper script using a Copilot-style prompt and capture the prompt/response evidence.

#### Requirements
Completed program should:

- Write a prompt that asks for a small, testable analysis helper.
- Save prompt and generated code in `artifacts/ai-draft.md`.
- Mark at least 3 assumptions made by the generated code.
- Keep generated code under 60 lines for easy review.

### 🛠️ Critical Validation (20 min) (`Both`)

#### Description
Verify generated code behavior using deterministic checks.

#### Requirements
Completed program should:

- Create tests for normal and edge cases.
- Identify at least 2 issues from generated code and fix them.
- Save findings to `artifacts/validation-notes.md`.
- Include one test that demonstrates a previously hidden bug.

### 🛠️ Analyst Review Memo (20 min) (`BA` + `JDS`)

#### Description
Summarize when AI helped and where human judgment was required.

#### Requirements
Completed program should:

- Write `artifacts/review-memo.md` with sections: accuracy, risk, maintainability.
- Include one business-impact statement (`BA`) and one technical-risk statement (`JDS`).
- End with a “reuse policy” for when this AI pattern is acceptable.

## 🏆 Achievement Evidence

To mark this assignment complete, submit:

- `Code Artifact`: AI-generated + human-corrected analysis helper and tests.
- `Interpretation Artifact`: Review memo describing trust boundaries.
- `Verification Artifact`: Test run output proving fixes.
