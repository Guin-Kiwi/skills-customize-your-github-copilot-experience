# Computer Science Portal

Welcome to the **Computer Science Portal**, an interactive platform for mastering software engineering, data science, and application development. This repository contains a structured curriculum designed to move learners from foundational logic to professional-grade AI-assisted workflows.

## 🎓 For Students: Getting Started

This portal is designed to be **forked and personalized**. Each student gets their own copy with automatic progress tracking.

### Quick Setup (3 steps)

1. **Fork this repository** to your GitHub account
   - Click the "Fork" button at the top right of this page
   - This creates your personal copy where you'll track your work

2. **Enable GitHub Pages** in your fork
   - Go to Settings → Pages
   - Source: Deploy from branch → `main` branch → Save
   - Your site will be live at `https://your-username.github.io/skills-customize-your-github-copilot-experience/`

3. **Start learning!**
   - Visit your portal site (URL above)
   - Progress tracking works automatically once you commit code to assignment folders
   - Progress badges update based on your commits

### Local Development

Run locally for offline access:

```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

For local progress tracking, click the ⚙️ button in the header to configure your GitHub username.

### How Progress Tracking Works

- ✅ **Complete**: Assignment folder has multiple commits and evidence files
- 🔄 **In Progress**: You've started committing work to the assignment folder
- ⭕ **Not Started**: No commits in the assignment folder yet

Progress updates automatically every 5 minutes or when you refresh the page.

## 🚀 Learning Standards: The "Agentic" Approach

Every assignment in this portal follows a strict pedagogical framework to ensure consistent quality and measurable progress:

* **20-Minute Chunk Plans**: Lessons are broken into focused, 20 to 30-minute blocks to maintain high engagement and steady momentum.
* **The Achievement Evidence Triad**: To complete an assignment, learners must produce three specific artifacts:
    1. **Code Artifact**: The functional implementation of the task.
    2. **Interpretation Artifact**: A written summary explaining the rationale, design decisions, or insights gained.
    3. **Verification Artifact**: Evidence of quality, such as test logs, validation reports, or traceability matrices.
* **Role-Relevant Depth**: Many tasks are tailored for specific career paths, including **BA** (Business/Data Analyst) and **JDS** (Junior Data Scientist).

## 🛤️ Curriculum Programs

The portal is organized into three distinct programs to help you reach your specific goals:

| Program | Focus | Key Tools |
| :--- | :--- | :--- |
| **Program A: Foundations** | Core logic, data structures, and classes. | Python 3, VS Code, Unit Tests. |
| **Program B: Engineering** | Building production-style apps with APIs and UIs. | Pydantic, SQLAlchemy, FastAPI, Streamlit. |
| **Program C: Data & AI** | Analysis, testing, and AI-assisted engineering. | Pandas, Visualization, Pytest, AI Copilot. |

## 🛠️ Technical Stack

The interactive webpage is built using modern web standards and lightweight libraries:

* **Markdown Rendering**: Powered by `marked.js` to deliver dynamic lesson content.
* **Syntax Highlighting**: Utilizes `Prism.js` for clear, readable code examples across multiple languages.
* **Responsive UI**: Styled with a custom CSS framework optimized for learning dashboards.
* **Progress Tracking**: Client-side GitHub API integration for automatic completion badges.

## 📜 Licensing and Attribution

This project is an educational curriculum template designed for fork-based distribution. It is released under the **MIT License**.

> **Legal Note**: This software includes code originally developed by GitHub, Inc. The original copyright notice and permission notice are preserved in the `LICENSE` file as required.
> 
> Copyright (c) 2026 Computer Science Portal  
> Copyright (c) GitHub, Inc.

## 🤝 Contributing

If you're a student: Work in your fork and submit assignments according to your course instructor.

If you're an educator: Feel free to customize the curriculum in your fork and share improvements back via pull request.

---