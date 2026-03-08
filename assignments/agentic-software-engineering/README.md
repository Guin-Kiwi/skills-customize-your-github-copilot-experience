# 📘 Assignment: Level 9A - Agentic Software Engineering

## 🎯 Objective

Build a complete application by co-engineering with custom prompts or custom agents. You will practice a full software process from requirements to architecture, implementation, and validation.

## 🔗 Builds On

- `Level 7: Testing with Pytest`

## 🚀 Unlocks Next

- `Level 13: KPI Design and Business Questions`

## 🔑 Key Concepts

Before you start, explore these essential software engineering patterns:

**1. Requirements Traceability - Linking Specs to Code**
```
Requirement: REQ-001 - Countdown timer must accept minutes input
Architecture: CountdownTimer class with set_duration(minutes)
Implementation: countdown.py, line 15
Test: test_countdown.py::test_set_duration_converts_to_seconds

Each requirement gets a unique <!--exercise:answer=ID,hint=What tracking code helps us trace requirements through the system?-->
```

**2. State Machines - Modeling Timer Behavior**
```
Timer States:
- IDLE: waiting to start
- <!--exercise:answer=RUNNING,hint=What state means the timer is actively counting?-->: counting down
- PAUSED: temporarily stopped
- COMPLETED: time reached zero

Transitions: start(), pause(), resume(), reset()
```

**3. Test Coverage by Requirements - Systematic Validation**
```python
import pytest

def test_req_001_countdown_accepts_minutes():
    # Maps to REQ-001
    timer = CountdownTimer()
    timer.set_duration(<!--exercise:answer=5,hint=What test value represents 5 minutes?-->)
    assert timer.total_seconds == 300
```

**4. Agentic Workflow - Human-AI Collaboration**
```
Phase 1: Requirements (Human defines WHAT)
  Prompt: "Draft measurable requirements for timer app"
  Output: specification.md
  
Phase 2: <!--exercise:answer=Architecture,hint=What phase designs HOW the system works?--> (Co-design structure)
  Prompt: "Design modular architecture"
  Output: architecture.md
  
Phase 3: Implementation (AI generates, human reviews)
Phase 4: Validation (Human verifies correctness)
```

## 📝 Tasks

### 🛠️ Specification of Requirements (30 min) (`Both`)

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

### 🛠️ Design the Software Architecture (30 min) (`Both`)

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

### 🛠️ Implement the Timer App (90 min) (`Both`)

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

### 🛠️ Validate with Code Review and Testing (30 min) (`Both`)

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

## 🏆 Achievement Evidence

To mark this assignment complete, submit:

- `Code Artifact`: Timer app implementation with countdown, pomodoro, and added features.
- `Interpretation Artifact`: Requirement-to-architecture and review summary across agentic steps.
- `Verification Artifact`: Test results and traceability matrix linking requirement IDs to tests.
