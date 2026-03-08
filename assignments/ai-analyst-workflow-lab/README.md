# 📘 Assignment: Level 9 - AI Analyst Workflow Lab

## 🎯 Objective

Use AI assistance responsibly to speed up analysis tasks while validating outputs with tests, checks, and critical review notes.

## 🔗 Builds On

- `Level 7: Testing with Pytest`

## 🚀 Unlocks Next

- `Level 13: Statistics and Hypothesis Testing`

## ⏱️ 20-Minute Chunk Plan

- `9.1` (20 min): Define analysis goal and prompt strategy.
- `9.2` (20 min): Generate first draft code with AI and annotate assumptions.
- `9.3` (20 min): Validate AI output with test cases and edge checks.
- `9.4` (20 min): Produce review log of what AI got right/wrong.

## 📝 Tasks

### 🛠️ AI-Assisted Drafting (`Both`)

#### Description
Generate an initial analysis helper script using a Copilot-style prompt and capture the prompt/response evidence.

#### Requirements
Completed program should:

- Write a prompt that asks for a small, testable analysis helper.
- Save prompt and generated code in `artifacts/ai-draft.md`.
- Mark at least 3 assumptions made by the generated code.
- Keep generated code under 60 lines for easy review.

### 🛠️ Critical Validation (`Both`)

#### Description
Verify generated code behavior using deterministic checks.

#### Requirements
Completed program should:

- Create tests for normal and edge cases.
- Identify at least 2 issues from generated code and fix them.
- Save findings to `artifacts/validation-notes.md`.
- Include one test that demonstrates a previously hidden bug.

### 🛠️ Analyst Review Memo (`BA` + `JDS`)

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
