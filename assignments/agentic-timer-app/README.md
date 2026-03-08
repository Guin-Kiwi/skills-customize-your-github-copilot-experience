# 📘 Assignment: Level 6 - Agentic Timer App

## 🎯 Objective

Build a small timer application by co-engineering with custom prompts or custom agents. You will practice a full software process from requirements to architecture, implementation, and validation.

## ⏱️ 30-Minute Chunk Plan

- `9.1` (30 min): Draft measurable requirements with IDs.
- `9.2` (30 min): Design architecture and trace components to requirements.
- `9.3` (30 min): Implement countdown mode and verify behavior.
- `9.4` (30 min): Implement pomodoro mode and configuration.
- `9.5` (30 min): Add extra features from requirements.
- `9.6` (30 min): Write tests and traceability validation artifacts.

## 📝 Tasks

### 🛠️ Specification of Requirements

#### Description
Define what your app must do before writing code. The app must include both a countdown timer and a pomodoro timer, plus additional features of your choice.

#### Requirements
Completed program should:

- Create `specification.md` with clear functional and non-functional requirements.
- Include both required modes: countdown timer and pomodoro timer.
- Add at least 2 additional features, such as pause/resume, custom durations, audio alert, session history, or keyboard shortcuts.
- Use requirement IDs like `REQ-001`, `REQ-002`, and `REQ-003` for traceability.
- Create at least one prompt for this step in `prompts/requirements.prompt.md`.
- Run the prompt to start this step and save output evidence in `artifacts/requirements-session.md`.
- Hint prompt pattern: `You are a product requirements analyst. Draft measurable requirements for a timer app with countdown and pomodoro modes.`
- Hint file checklist: `specification.md`, `prompts/requirements.prompt.md`, `artifacts/requirements-session.md`.

### 🛠️ Design the Software Architecture

#### Description
Design the app structure so your implementation can be built in small, testable parts. Explain components, data flow, and how requirements map to architecture.

#### Requirements
Completed program should:

- Create `architecture.md` with the main components, module boundaries, and timer state transitions.
- Describe how countdown and pomodoro behavior is represented in your design.
- Map architecture decisions to requirement IDs from `specification.md`.
- Create at least one prompt for this step in `prompts/architecture.prompt.md`.
- Run the prompt to start this step and save output evidence in `artifacts/architecture-session.md`.
- Include a small traceability table from requirements to components.
- Hint prompt pattern: `Design a modular architecture for a timer app and explain why each component exists.`
- Hint file checklist: `architecture.md`, `prompts/architecture.prompt.md`, `artifacts/architecture-session.md`.

### 🛠️ Implement the Timer App

#### Description
Implement your design using your chosen tech stack. Keep code organized and align implementation with the documented requirements.

#### Requirements
Completed program should:

- Implement a working countdown timer.
- Implement a working pomodoro timer with configurable work and break durations.
- Implement at least 2 additional features that you listed in `specification.md`.
- Keep code in clearly named files and folders (for example, `src/`, `app/`, or equivalent).
- Create at least one prompt for this step in `prompts/implementation.prompt.md`.
- Run the prompt to start this step and save output evidence in `artifacts/implementation-session.md`.
- Document how to run the app in `implementation-notes.md`.
- Hint prompt pattern: `Generate implementation steps for a countdown + pomodoro app with requirement traceability.`
- Hint process strategy: implement one requirement ID at a time and update status as done.

### 🛠️ Validate with Code Review and Testing

#### Description
Validate quality through automated tests and review feedback. Show that your app behavior matches requirements.

#### Requirements
Completed program should:

- Create at least 10 unit tests that cover countdown logic, pomodoro logic, and additional features.
- Store tests in a dedicated test folder (for example, `tests/`).
- Create `validation/traceability.md` mapping each requirement ID to one or more tests.
- Create at least one prompt for this step in `prompts/validation.prompt.md`.
- Run the prompt to start this step and save output evidence in `validation/review-notes.md`.
- Record test run results in `validation/test-results.md`.
- Confirm that the final app is well-specified, traceable to requirements, and validated by review plus tests.
- Hint prompt pattern: `Review this timer app for correctness, edge cases, and missing tests. Suggest concrete fixes.`
- Hint testing strategy: write tests by requirement ID and include edge cases like zero durations, pause/resume transitions, and invalid input.
