---
description: "Use when creating or updating an agentic assignment that uses custom prompts or agents across requirements, architecture, implementation, and validation."
name: "Agentic Assignment Rules"
applyTo: "assignments/agentic-*/README.md"
---
# Agentic Assignment Rules

Use this as preferred guidance when writing assignment markdown for agentic, prompt-driven, or multi-agent project work.

## Required Project Scope

- The assignment should define a concrete, buildable project scope.
- If the project has mandatory capabilities, they should be explicitly listed.
- The assignment may include stretch goals, and those should be clearly labeled.

## Required Process Steps

The assignment should ask students to co-engineer the project with custom prompts or custom agents across all steps below:

1. Specification of requirements.
2. Design of software architecture.
3. Implementation.
4. Validation with code review and testing.

For each step, prefer requiring all of the following deliverables:

- At least one project file created for that step (for example: `specification.md`, `architecture.md`, implementation files, review notes).
- At least one prompt created for that step.
- A prompt invocation to start that step.

## Quality And Testing Requirements

- The assignment should state that the final project is well-specified and traceable to requirements.
- The assignment should target at least 10 unit tests.
- The assignment should request evidence of review and validation outcomes.

## Hint Requirements

- Include practical hints in the assignment text.
- Hints should cover breaking work by process step.
- Hints should include example prompt patterns students can adapt.
- Hints should include example files students can create per step.
- Hints should include a testing strategy for reaching at least 10 unit tests.

## Suggested Deliverable Examples

- Requirements step examples: `specification.md`, acceptance criteria, requirement IDs.
- Architecture step examples: `architecture.md`, component diagram, interface notes.
- Implementation step examples: source folders, setup notes, prompt logs.
- Validation step examples: test files, review notes, requirement-to-test traceability matrix.

## Writing Constraints

- Follow the project assignment template structure in `templates/assignment-template.md`.
- Preserve shared flow sections used by this curriculum (`Builds On`, `Unlocks Next`, `20-Minute Chunk Plan`, `Achievement Evidence`).
- Keep language student-friendly, clear, and action-oriented.
- Keep requirements specific and measurable.
- Do not remove required template sections.
