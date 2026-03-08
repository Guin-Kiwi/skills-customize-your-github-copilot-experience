// Assignment Page JavaScript

class AssignmentPage {
  constructor() {
    this.config = null;
    this.assignmentId = null;
    this.chunkId = null;
    this.assignment = null;
    this.init();
  }

  async init() {
    try {
      this.assignmentId = this.getAssignmentIdFromUrl();
      this.chunkId = this.getChunkIdFromUrl();
      if (!this.assignmentId) {
        throw new Error("No assignment ID provided");
      }

      await this.loadConfig();
      this.assignment = this.findAssignment(this.assignmentId);

      if (!this.assignment) {
        throw new Error("Assignment not found");
      }

      await this.loadAndRenderAssignment();
    } catch (error) {
      console.error("Failed to load assignment:", error);
      this.showError(`Failed to load assignment: ${error.message}`);
    }
  }

  getAssignmentIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
  }

  getChunkIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("chunk");
  }

  async loadConfig() {
    const response = await fetch("../../config.json");
    if (!response.ok) {
      throw new Error("Failed to load configuration");
    }
    this.config = await response.json();
  }

  findAssignment(id) {
    return this.config.assignments.find((assignment) => assignment.id === id);
  }

  async loadAndRenderAssignment() {
    // Update page title
    document.getElementById("assignment-title").textContent = this.assignment.title;
    document.title = `${this.assignment.title} - ${this.config.course.school}`;

    // Load and render README content
    await this.loadReadmeContent();

    // Render Quick Access section (after content is loaded)
    this.renderQuickAccessSection();

    // Add pathway guidance banner based on config metadata
    this.renderProgressBanner();

    // Add narrative context and milestone gate hints
    this.renderNarrativeFlowCard();
  }

  renderNarrativeFlowCard() {
    const content = document.getElementById("assignment-content");
    if (!content || !this.assignment) {
      return;
    }

    const program = this.findProgramMeta(this.assignment.program);
    const nextModule = this.findNextModule();
    const milestone = this.isMilestoneGate(this.assignment);

    const whyText =
      this.assignment.narrative ||
      `This module strengthens ${program ? program.title : "your learning pathway"} through applied practice.`;
    const capstoneHook =
      this.assignment.capstoneHook ||
      "Keep your outputs: they become reusable artifacts in your final portfolio capstone.";

    const card = document.createElement("section");
    card.className = "narrative-flow-card";
    card.innerHTML = `
      <h3>Narrative Flow</h3>
      <p>${whyText}</p>
      <p class="narrative-hook">${capstoneHook}</p>
      <div class="narrative-meta">
        <span class="narrative-pill">Program: ${program ? program.title : "General"}</span>
        <span class="narrative-pill">Module ${this.assignment.moduleOrder || "-"}</span>
        ${nextModule ? `<span class="narrative-pill">Next: ${nextModule.title}</span>` : ""}
      </div>
    `;

    const firstHeading = content.querySelector("h1, h2");
    if (firstHeading) {
      firstHeading.insertAdjacentElement("beforebegin", card);
    } else {
      content.prepend(card);
    }

    if (milestone) {
      const gate = document.createElement("section");
      gate.className = "milestone-gate-card";
      gate.innerHTML = `
        <strong>Milestone Gate</strong>
        <p>Submit your code, interpretation note, and verification evidence for this module before unlocking the next milestone checkpoint.</p>
      `;
      card.insertAdjacentElement("afterend", gate);
    }
  }

  findProgramMeta(programId) {
    const programs = this.config.programs || [];
    return programs.find((program) => program.id === programId) || null;
  }

  isMilestoneGate(assignment) {
    if (typeof assignment.milestoneGate === "boolean") {
      return assignment.milestoneGate;
    }
    return Number.isInteger(assignment.moduleOrder) && assignment.moduleOrder % 2 === 0;
  }

  renderProgressBanner() {
    const content = document.getElementById("assignment-content");
    if (!content || !this.assignment) {
      return;
    }

    const prerequisites = (this.assignment.prerequisites || [])
      .map((id) => this.findAssignment(id))
      .filter(Boolean);

    const nextModule = this.findNextModule();

    const prereqHtml = prerequisites.length
      ? prerequisites
          .map(
            (item) =>
              `<a class="progress-link" href="assignment.html?id=${item.id}">${item.title}</a>`
          )
          .join("<span class=\"progress-sep\">, </span>")
      : "<span class=\"progress-empty\">No prerequisites (entry module)</span>";

    const nextHtml = nextModule
      ? `<a class="progress-link" href="assignment.html?id=${nextModule.id}">${nextModule.title}</a>`
      : "<span class=\"progress-empty\">Program capstone or independent extension work</span>";

    const banner = document.createElement("section");
    banner.className = "progress-banner";
    banner.innerHTML = `
      <div class="progress-grid">
        <div class="progress-card">
          <h3>Prerequisites</h3>
          <div>${prereqHtml}</div>
        </div>
        <div class="progress-card">
          <h3>Next Module</h3>
          <div>${nextHtml}</div>
        </div>
      </div>
    `;

    content.prepend(banner);
  }

  findNextModule() {
    const currentProgram = this.assignment.program;
    const currentOrder = this.assignment.moduleOrder;
    if (!currentProgram || !Number.isInteger(currentOrder)) {
      return null;
    }

    return (
      this.config.assignments.find(
        (assignment) =>
          assignment.program === currentProgram && assignment.moduleOrder === currentOrder + 1
      ) || null
    );
  }

  renderQuickAccessSection() {
    const content = document.getElementById("assignment-content");
    if (!content) return;

    // Get repo context from localStorage (populated by Progress Tracker)
    const repoContext = this.getRepoContext();
    
    const quickAccessHtml = this.createQuickAccessHtml(repoContext);
    
    // Insert Quick Access at the top of assignment content
    const quickAccessDiv = document.createElement('div');
    quickAccessDiv.className = 'quick-access-section';
    quickAccessDiv.innerHTML = quickAccessHtml;
    content.insertBefore(quickAccessDiv, content.firstChild);
  }

  getRepoContext() {
    // Try to detect from GitHub Pages URL
    const hostname = window.location.hostname;
    const path = window.location.pathname;

    if (hostname.endsWith('.github.io')) {
      const username = hostname.split('.')[0];
      const pathParts = path.split('/').filter(Boolean);
      const repo = pathParts[0] || 'skills-customize-your-github-copilot-experience';
      return { owner: username, repo: repo };
    }

    // Check localStorage for manual configuration
    const stored = localStorage.getItem('repo-context');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.warn('Invalid stored repo context:', e);
      }
    }

    return null;
  }

  createQuickAccessHtml(repoContext) {
    if (!repoContext) {
      return `
        <div class="quick-access-card">
          <h3>🚀 Quick Access</h3>
          <p class="quick-access-notice">⚠️ Configure the Progress button to enable Quick Access to your fork.</p>
          <a href="https://github.dev/Guin-Kiwi/skills-customize-your-github-copilot-experience/blob/main/assignments/${this.assignment.id}/starter-code.py" 
             class="btn btn-quick-access" 
             target="_blank">
            📝 View Template Starter Code
          </a>
        </div>
      `;
    }

    const { owner, repo } = repoContext;
    const starterCodeUrl = `https://github.dev/${owner}/${repo}/blob/main/assignments/${this.assignment.id}/starter-code.py`;
    const assignmentFolderUrl = `https://github.com/${owner}/${repo}/tree/main/assignments/${this.assignment.id}`;

    return `
      <div class="quick-access-card">
        <h3>🚀 Quick Access</h3>
        <p class="quick-access-subtitle">Open your work in GitHub (${owner}/${repo})</p>
        <div class="quick-access-buttons">
          <a href="${starterCodeUrl}" 
             class="btn btn-quick-access btn-primary" 
             target="_blank">
            📝 Open starter-code.py in GitHub
          </a>
          <a href="${assignmentFolderUrl}" 
             class="btn btn-quick-access btn-secondary" 
             target="_blank">
            📁 View Assignment Folder
          </a>
        </div>
      </div>
    `;
  }

  getFileIcon(type) {
    const icons = {
      python: "🐍",
      javascript: "📜",
      html: "🌐",
      css: "🎨",
      default: "📄",
    };
    return icons[type] || icons.default;
  }

  async loadReadmeContent() {
    try {
      const readmePath = `../../${this.assignment.path}/README.md`;
      const response = await fetch(readmePath);

      if (!response.ok) {
        throw new Error(`Failed to load README from ${readmePath}`);
      }

      const markdownContent = await response.text();
      const htmlContent = marked.parse(markdownContent);

      document.getElementById("assignment-content").innerHTML = htmlContent;
      
      // Apply syntax highlighting
      Prism.highlightAll();
      
      // Process interactive exercises
      this.processExercises();

      // Convert chunk plans into clickable paged sections
      this.setupChunkPages();
    } catch (error) {
      console.error("Failed to load README:", error);
      this.showError("Failed to load assignment content");
    }
  }

  setupChunkPages() {
    const content = document.getElementById("assignment-content");
    if (!content) return;

    // Find all task headings (### 🛠️ Task Name)
    const allHeadings = Array.from(content.querySelectorAll("h3"));
    const taskHeadings = allHeadings.filter((h) => h.textContent.includes('🛠️'));

    if (taskHeadings.length === 0) {
      return; // No tasks to paginate
    }

    // Find the sections that should always be visible (Key Concepts, Objective, etc.)
    const h2Headings = Array.from(content.querySelectorAll("h2"));
    const tasksHeadingIndex = h2Headings.findIndex((h) => /tasks/i.test(h.textContent));
    
    if (tasksHeadingIndex === -1) {
      return; // No Tasks section found
    }

    // Get all elements before the Tasks section (these stay visible)
    const tasksHeading = h2Headings[tasksHeadingIndex];
    const persistentElements = [];
    let currentNode = content.firstChild;
    
    while (currentNode && currentNode !== tasksHeading) {
      persistentElements.push(currentNode);
      currentNode = currentNode.nextSibling;
    }

    // Collect task sections
    const taskSections = [];
    taskHeadings.forEach((taskHeading, index) => {
      const section = {
        heading: taskHeading,
        nodes: [taskHeading],
        title: taskHeading.textContent.replace('🛠️', '').trim()
      };

      let node = taskHeading.nextSibling;
      const nextTaskHeading = taskHeadings[index + 1];
      const nextH2 = h2Headings[tasksHeadingIndex + 1];

      while (node) {
        if (node === nextTaskHeading || node === nextH2) {
          break;
        }
        if (node.nodeType === 1 || (node.nodeType === 3 && node.textContent.trim())) {
          section.nodes.push(node);
        }
        node = node.nextSibling;
      }

      taskSections.push(section);
    });

    if (taskSections.length === 0) {
      return;
    }

    // Get task index from URL
    const urlParams = new URLSearchParams(window.location.search);
    const taskParam = urlParams.get('task');
    let initialIndex = taskParam ? parseInt(taskParam, 10) - 1 : 0;
    
    if (initialIndex < 0 || initialIndex >= taskSections.length) {
      initialIndex = 0;
    }

    // Create navigation
    const nav = document.createElement("div");
    nav.className = "task-nav";

    const navTitle = document.createElement("div");
    navTitle.className = "task-nav-title";
    navTitle.textContent = "📋 Tasks";
    nav.appendChild(navTitle);

    const navButtons = document.createElement("div");
    navButtons.className = "task-nav-buttons";

    taskSections.forEach((section, index) => {
      const btn = document.createElement("button");
      btn.className = "task-btn";
      btn.type = "button";
      btn.dataset.taskIndex = String(index);
      btn.textContent = `Task ${index + 1}`;
      btn.title = section.title;
      navButtons.appendChild(btn);
    });

    nav.appendChild(navButtons);

    // Create task pages container
    const pagesContainer = document.createElement("div");
    pagesContainer.className = "task-pages";

    taskSections.forEach((section, index) => {
      const page = document.createElement("div");
      page.className = "task-page";
      page.dataset.taskIndex = String(index);
      
      section.nodes.forEach((node) => {
        page.appendChild(node.cloneNode(true));
      });
      
      pagesContainer.appendChild(page);
    });

    // Create prev/next controls
    const controls = document.createElement("div");
    controls.className = "task-controls";

    const prevBtn = document.createElement("button");
    prevBtn.type = "button";
    prevBtn.className = "btn task-control-btn";
    prevBtn.textContent = "← Previous Task";

    const nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.className = "btn task-control-btn";
    nextBtn.textContent = "Next Task →";

    controls.appendChild(prevBtn);
    controls.appendChild(nextBtn);

    // Insert navigation and pages after Tasks heading
    tasksHeading.insertAdjacentElement("afterend", nav);
    nav.insertAdjacentElement("afterend", pagesContainer);
    pagesContainer.insertAdjacentElement("afterend", controls);

    // Remove original task nodes from content (they're now in pages)
    taskSections.forEach((section) => {
      section.nodes.forEach((node) => {
        if (node.parentNode === content) {
          content.removeChild(node);
        }
      });
    });

    // Setup page navigation
    let currentPage = initialIndex;
    const taskButtons = Array.from(navButtons.querySelectorAll(".task-btn"));
    const taskPages = Array.from(pagesContainer.querySelectorAll(".task-page"));

    const showPage = (index) => {
      currentPage = Math.max(0, Math.min(index, taskPages.length - 1));

      taskPages.forEach((page, pageIndex) => {
        page.style.display = pageIndex === currentPage ? "block" : "none";
      });

      taskButtons.forEach((btn, btnIndex) => {
        btn.classList.toggle("active", btnIndex === currentPage);
      });

      prevBtn.disabled = currentPage === 0;
      nextBtn.disabled = currentPage === taskPages.length - 1;

      // Update URL with task parameter
      const url = new URL(window.location.href);
      url.searchParams.set("task", String(currentPage + 1));
      window.history.replaceState({}, "", url.toString());
    };

    taskButtons.forEach((btn, index) => {
      btn.addEventListener("click", () => showPage(index));
    });

    prevBtn.addEventListener("click", () => showPage(currentPage - 1));
    nextBtn.addEventListener("click", () => showPage(currentPage + 1));

    showPage(currentPage);
  }

  findNextElementByTag(startEl, tagName) {
    let current = startEl.nextElementSibling;
    while (current) {
      if (current.tagName === tagName) {
        return current;
      }
      if (current.tagName === "H2") {
        return null;
      }
      current = current.nextElementSibling;
    }
    return null;
  }

  collectTaskSections(tasksHeading) {
    const sections = [];
    let currentSection = null;
    let current = tasksHeading.nextElementSibling;

    while (current) {
      if (current.tagName === "H2") {
        break;
      }

      const next = current.nextElementSibling;

      if (current.tagName === "H3") {
        currentSection = { nodes: [current] };
        sections.push(currentSection);
      } else if (currentSection) {
        currentSection.nodes.push(current);
      }

      current = next;
    }

    return sections;
  }

  extractChunkLabel(text, index) {
    const codeMatch = text.match(/`([^`]+)`/);
    if (codeMatch) {
      return codeMatch[1];
    }

    const numberMatch = text.match(/(\d+(?:\.\d+)?)/);
    if (numberMatch) {
      return `Chunk ${numberMatch[1]}`;
    }

    return `Chunk ${index + 1}`;
  }

  processExercises() {
    const content = document.getElementById("assignment-content");
    const codeBlocks = content.querySelectorAll("pre code");
    
    codeBlocks.forEach((codeBlock, index) => {
      const codeText = codeBlock.textContent;
      
      // Check if code contains blanks (____) and exercise marker
      if (codeText.includes("____")) {
        const pre = codeBlock.parentElement;
        const exerciseData = this.findExerciseData(pre);
        
        if (exerciseData) {
          this.createInteractiveExercise(pre, codeText, exerciseData, index);
        }
      }
    });
  }

  findExerciseData(preElement) {
    // Look for HTML comments near the code block
    let sibling = preElement.previousElementSibling;
    let attempts = 0;
    
    while (sibling && attempts < 5) {
      const html = sibling.innerHTML || "";
      const commentMatch = /<!--exercise:(.+?)-->/i.exec(html);
      
      if (commentMatch) {
        try {
          return JSON.parse(commentMatch[1]);
        } catch (e) {
          // Try simple format: <!--exercise:answer=value,hint=text-->
          const simpleMatch = html.match(/<!--exercise:(.+?)-->/i);
          if (simpleMatch) {
            const params = simpleMatch[1];
            const data = {};
            
            // Parse answer
            const answerMatch = params.match(/answer=([^,]+)/);
            if (answerMatch) data.answer = answerMatch[1].trim();
            
            // Parse hint
            const hintMatch = params.match(/hint=(.+)/);
            if (hintMatch) data.hint = hintMatch[1].trim();
            
            return data;
          }
        }
      }
      
      sibling = sibling.previousElementSibling;
      attempts++;
    }
    
    // Look in next siblings too (in case comment is after)
    sibling = preElement.nextElementSibling;
    attempts = 0;
    
    while (sibling && attempts < 3) {
      const html = sibling.innerHTML || sibling.outerHTML || "";
      const commentMatch = /<!--exercise:(.+?)-->/i.exec(html);
      
      if (commentMatch) {
        try {
          const params = commentMatch[1];
          const data = {};
          
          const answerMatch = params.match(/answer=([^,]+)/);
          if (answerMatch) data.answer = answerMatch[1].trim();
          
          const hintMatch = params.match(/hint=(.+)/);
          if (hintMatch) data.hint = hintMatch[1].trim();
          
          return data;
        } catch (e) {
          console.error("Failed to parse exercise data:", e);
        }
      }
      
      sibling = sibling.nextElementSibling;
      attempts++;
    }
    
    return null;
  }

  createInteractiveExercise(preElement, codeText, exerciseData, index) {
    // Create container
    const container = document.createElement("div");
    container.className = "exercise-container";
    container.dataset.exerciseId = index;
    
    // Create code display with input fields
    const exerciseCode = document.createElement("div");
    exerciseCode.className = "exercise-code";
    
    // Split code by blanks and create inputs
    const parts = codeText.split("____");
    let codeHTML = "";
    
    parts.forEach((part, i) => {
      // Escape HTML and preserve formatting
      codeHTML += `<code class="language-python">${this.escapeHtml(part)}</code>`;
      
      if (i < parts.length - 1) {
        codeHTML += `<span class="code-blank"><input type="text" 
          data-exercise="${index}" 
          data-blank="${i}" 
          placeholder="?" 
          autocomplete="off"
          spellcheck="false" /></span>`;
      }
    });
    
    exerciseCode.innerHTML = codeHTML;
    container.appendChild(exerciseCode);
    
    // Create controls
    const controls = document.createElement("div");
    controls.className = "exercise-controls";
    
    const checkBtn = document.createElement("button");
    checkBtn.className = "btn-check";
    checkBtn.textContent = "Check Answer";
    checkBtn.onclick = () => this.checkAnswer(index, exerciseData);
    
    const resetBtn = document.createElement("button");
    resetBtn.className = "btn-reset";
    resetBtn.textContent = "Reset";
    resetBtn.onclick = () => this.resetExercise(index);
    
    controls.appendChild(checkBtn);
    
    if (exerciseData.hint) {
      const hintBtn = document.createElement("button");
      hintBtn.className = "btn-hint";
      hintBtn.textContent = "Show Hint";
      hintBtn.onclick = () => this.toggleHint(index);
      controls.appendChild(hintBtn);
    }
    
    controls.appendChild(resetBtn);
    container.appendChild(controls);
    
    // Create hint area
    if (exerciseData.hint) {
      const hintDiv = document.createElement("div");
      hintDiv.className = "exercise-hint";
      hintDiv.dataset.exerciseId = index;
      hintDiv.textContent = exerciseData.hint;
      container.appendChild(hintDiv);
    }
    
    // Create feedback area
    const feedback = document.createElement("div");
    feedback.className = "exercise-feedback";
    feedback.dataset.exerciseId = index;
    container.appendChild(feedback);
    
    // Replace pre element with container
    preElement.parentNode.replaceChild(container, preElement);
  }

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  checkAnswer(exerciseId, exerciseData) {
    const inputs = document.querySelectorAll(`input[data-exercise="${exerciseId}"]`);
    const studentAnswers = Array.from(inputs).map(input => input.value.trim());
    const correctAnswers = Array.isArray(exerciseData.answer) 
      ? exerciseData.answer 
      : [exerciseData.answer];
    
    // Check if all inputs are filled
    if (studentAnswers.some(ans => ans === "")) {
      this.showFeedback(exerciseId, false, "Please fill in all blanks before checking.");
      return;
    }
    
    // Validate answers
    const isCorrect = studentAnswers.every((answer, i) => {
      const correctAnswer = correctAnswers[Math.min(i, correctAnswers.length - 1)];
      const alternatives = typeof correctAnswer === 'string' 
        ? correctAnswer.split("|") 
        : [correctAnswer];
      
      return alternatives.some(alt => 
        answer.toLowerCase().trim() === alt.toLowerCase().trim()
      );
    });
    
    if (isCorrect) {
      this.showFeedback(
        exerciseId, 
        true, 
        exerciseData.explanation || "Great job! Your answer is correct. 🎉"
      );
      
      // Disable inputs
      inputs.forEach(input => input.disabled = true);
      
      // Update progress
      this.updateProgress();
    } else {
      this.showFeedback(
        exerciseId, 
        false, 
        "Not quite right. Try again! " + (exerciseData.hint ? "Click 'Show Hint' if you need help." : "")
      );
    }
  }

  showFeedback(exerciseId, isCorrect, message) {
    const feedback = document.querySelector(`.exercise-feedback[data-exercise-id="${exerciseId}"]`);
    
    if (feedback) {
      feedback.className = `exercise-feedback show ${isCorrect ? "correct" : "incorrect"}`;
      feedback.innerHTML = `<strong>${isCorrect ? "✓ Correct!" : "✗ Incorrect"}</strong>${message}`;
    }
  }

  toggleHint(exerciseId) {
    const hint = document.querySelector(`.exercise-hint[data-exercise-id="${exerciseId}"]`);
    
    if (hint) {
      hint.classList.toggle("show");
    }
  }

  resetExercise(exerciseId) {
    const inputs = document.querySelectorAll(`input[data-exercise="${exerciseId}"]`);
    const feedback = document.querySelector(`.exercise-feedback[data-exercise-id="${exerciseId}"]`);
    const hint = document.querySelector(`.exercise-hint[data-exercise-id="${exerciseId}"]`);
    
    inputs.forEach(input => {
      input.value = "";
      input.disabled = false;
    });
    
    if (feedback) {
      feedback.classList.remove("show");
    }
    
    if (hint) {
      hint.classList.remove("show");
    }
  }

  updateProgress() {
    // Count completed exercises
    const totalExercises = document.querySelectorAll(".exercise-container").length;
    const completedExercises = document.querySelectorAll(".exercise-feedback.correct").length;
    
    console.log(`Progress: ${completedExercises}/${totalExercises} exercises completed`);
    
    // Could add visual progress bar here in the future
  }

  showError(message) {
    const contentDiv = document.getElementById("assignment-content");
    contentDiv.innerHTML = `<div class="error">${message}</div>`;
  }
}

// Initialize the assignment page when the page loads
document.addEventListener("DOMContentLoaded", () => {
  new AssignmentPage();
});
