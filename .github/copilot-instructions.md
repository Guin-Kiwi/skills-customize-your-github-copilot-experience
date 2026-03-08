# Project Description

This project is an educational website for sharing homework assignments and coding exercises with students. Students can browse, view, and work on assignments through an interactive portal with automatic progress tracking and dynamic Quick Access links to their forked repositories.

## Project Structure

- [`assignments/`](../assignments/) Each homework assignment is stored in its own subfolder with a consistent structure.
- [`templates/`](../templates/) Reusable templates for new content
- [`assets/`](../assets/) Contains the website assets including CSS, JavaScript, images, and configuration files
- [`index.html`](../index.html) The main website page that serves as a static portal for browsing and viewing assignments. Content is configurable via [`config.json`](../config.json) file to dynamically generate assignment lists and details.

## Project Guidelines

- Maintain consistent styling across all pages
- Keep file and folder names descriptive and organized

## Educational Standards

When generating content for this project:

- **Learning-focused**: All content should be designed with clear learning objectives and appropriate difficulty levels
- **Student-friendly**: Use clear, encouraging language that motivates students

## Program Flow Standards

- Treat assignments as part of a cohesive pathway, not isolated exercises.
- Maintain shared-core progression for all learners, then role-relevant depth for:
: `BA` (Business/Data Analyst)
: `JDS` (Junior Data Scientist)
- Preserve and use progression metadata from `config.json` (`program`, `moduleOrder`, `prerequisites`).
- Keep chunk pacing centered on 20-minute learning blocks.

## Assignment Authoring Expectations

- Include or preserve these sections in assignment markdown:
: `Builds On`
: `Unlocks Next`
: `Tasks` (with timing estimates in headers)
: `Achievement Evidence`
- Each task should have timing in the header: `### 🛠️ Task Name (20 min) (`Both`)`
- Tasks are displayed one at a time with Previous/Next navigation
- Quick Access section is automatically generated - **do not add it manually**
- Ensure each assignment contributes toward portfolio-quality capstones.
