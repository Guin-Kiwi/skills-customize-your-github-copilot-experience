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

    // Render download links
    this.renderDownloadLinks();

    // Load and render README content
    await this.loadReadmeContent();
  }

  renderDownloadLinks() {
    const { attachments = [] } = this.assignment;

    if (attachments.length === 0) {
      return;
    }

    const downloadsSection = document.getElementById("downloads-section");
    const downloadLinks = document.getElementById("download-links");

    const links = attachments
      .map((attachment) => {
        const icon = this.getFileIcon(attachment.type);
        return `
                <a href="../../${this.assignment.path}/${attachment.file}" 
                   download 
                   class="btn btn-download">
                   ${icon} Download ${attachment.name}
                </a>
            `;
      })
      .join(" ");

    downloadLinks.innerHTML = links;
    downloadsSection.style.display = "block";
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
    const headings = Array.from(content.querySelectorAll("h2"));
    const chunkHeading = headings.find((h) => /chunk\s*plan/i.test(h.textContent));
    const tasksHeading = headings.find((h) => /tasks/i.test(h.textContent));

    if (!chunkHeading || !tasksHeading) {
      return;
    }

    const chunkList = this.findNextElementByTag(chunkHeading, "UL");
    if (!chunkList) {
      return;
    }

    const chunkItems = Array.from(chunkList.querySelectorAll("li"));
    const taskSections = this.collectTaskSections(tasksHeading);

    if (chunkItems.length === 0 || taskSections.length === 0) {
      return;
    }

    // Normalize heading to the requested cadence.
    chunkHeading.textContent = chunkHeading.textContent.replace("30-Minute", "20-Minute");

    const pageCount = Math.min(chunkItems.length, taskSections.length);
    const nav = document.createElement("div");
    nav.className = "chunk-nav";

    const pagesContainer = document.createElement("div");
    pagesContainer.className = "chunk-pages";

    const pageElements = [];

    let initialIndex = 0;

    for (let i = 0; i < pageCount; i++) {
      const label = this.extractChunkLabel(chunkItems[i].textContent, i);

      if (this.chunkId && this.chunkId === label) {
        initialIndex = i;
      }

      const btn = document.createElement("button");
      btn.className = "chunk-btn";
      btn.type = "button";
      btn.dataset.chunkIndex = String(i);
      btn.textContent = `${label} (20 min)`;
      nav.appendChild(btn);

      const page = document.createElement("section");
      page.className = "chunk-page";
      page.dataset.chunkIndex = String(i);

      taskSections[i].nodes.forEach((node) => page.appendChild(node));
      pagesContainer.appendChild(page);
      pageElements.push(page);
    }

    const controls = document.createElement("div");
    controls.className = "chunk-controls";

    const prevBtn = document.createElement("button");
    prevBtn.type = "button";
    prevBtn.className = "btn chunk-control-btn";
    prevBtn.textContent = "Previous";

    const nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.className = "btn chunk-control-btn";
    nextBtn.textContent = "Next";

    controls.appendChild(prevBtn);
    controls.appendChild(nextBtn);

    tasksHeading.insertAdjacentElement("afterend", nav);
    nav.insertAdjacentElement("afterend", pagesContainer);
    pagesContainer.insertAdjacentElement("afterend", controls);

    let currentPage = 0;
    const navButtons = Array.from(nav.querySelectorAll(".chunk-btn"));

    const showPage = (index) => {
      currentPage = Math.max(0, Math.min(index, pageElements.length - 1));

      pageElements.forEach((pageEl, pageIndex) => {
        pageEl.classList.toggle("active", pageIndex === currentPage);
      });

      navButtons.forEach((btn, btnIndex) => {
        btn.classList.toggle("active", btnIndex === currentPage);
      });

      prevBtn.disabled = currentPage === 0;
      nextBtn.disabled = currentPage === pageElements.length - 1;

      const activeBtn = navButtons[currentPage];
      if (activeBtn) {
        const activeChunk = activeBtn.textContent.split(" ")[0];
        const url = new URL(window.location.href);
        url.searchParams.set("chunk", activeChunk);
        window.history.replaceState({}, "", url.toString());
      }
    };

    navButtons.forEach((btn, index) => {
      btn.addEventListener("click", () => showPage(index));
    });

    prevBtn.addEventListener("click", () => showPage(currentPage - 1));
    nextBtn.addEventListener("click", () => showPage(currentPage + 1));

    showPage(initialIndex);
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
