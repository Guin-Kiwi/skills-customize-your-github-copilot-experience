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
   - **Quick Access buttons** on each assignment will automatically link to your fork
   - Progress badges update based on your commits

### Working on Assignments

Each assignment page includes:

- **🚀 Quick Access section**: Direct links to open starter code in GitHub or view your assignment folder
  - Links automatically point to your forked repository (detected from GitHub Pages URL)
  - If Quick Access links point to the template repo, click the Progress button to configure
- **📋 Task Navigation**: Work through one 20-minute task at a time
  - Use Previous/Next buttons to navigate between tasks
  - Key Concepts and Objectives stay visible while you work
- **📊 Progress Tracking**: Your progress updates automatically based on commits

### Local Development

Run locally for offline access:

```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

For local progress tracking, click the ⚙️ button in the header to configure your GitHub username.

### How Progress Tracking Works

The portal automatically tracks your progress by detecting commits to assignment folders:

- ✅ **Complete**: Assignment folder has multiple commits and evidence files
- 🔄 **In Progress**: You've started committing work to the assignment folder
- ⭕ **Not Started**: No commits in the assignment folder yet

**Automatic Configuration**: When you visit your GitHub Pages site, the portal automatically detects your username from the URL and configures Quick Access links to point to your fork.

**Manual Configuration**: If needed, click the **⚙️ Setup Progress** or **📊 Progress** button in the header to manually configure your GitHub username.

Progress updates automatically every 5 minutes or when you refresh the page.

### Troubleshooting

**Quick Access links point to wrong repository:**
- Click the Progress button in the portal header to reconfigure
- Make sure you're visiting your GitHub Pages URL, not the local server
- Your Pages URL should be: `https://YOUR-USERNAME.github.io/skills-customize-your-github-copilot-experience/`

**Progress not updating:**
- Make sure you've committed and pushed changes to the assignment folders
- Wait 5 minutes for cache to refresh, or reload the page
- Verify repository access is public or you're logged into GitHub

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