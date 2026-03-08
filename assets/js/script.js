// Computer Science Portal JavaScript

// Progress Tracking Module
class ProgressTracker {
  constructor() {
    this.repoContext = this.detectRepoContext();
    this.cache = new Map();
    this.CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
  }

  detectRepoContext() {
    // Try to detect from GitHub Pages URL
    const hostname = window.location.hostname;
    const path = window.location.pathname;

    if (hostname.endsWith('.github.io')) {
      const username = hostname.split('.')[0];
      // Extract repo name from path (first segment after /)
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

    // No context available (viewing template)
    return null;
  }

  getCacheKey(assignmentId) {
    return `progress-${assignmentId}`;
  }

  getCachedProgress(assignmentId) {
    const key = this.getCacheKey(assignmentId);
    const cached = this.cache.get(key);
    
    if (!cached) return null;
    if (Date.now() - cached.timestamp > this.CACHE_DURATION) {
      this.cache.delete(key);
      return null;
    }

    return cached.status;
  }

  cacheProgress(assignmentId, status) {
    const key = this.getCacheKey(assignmentId);
    this.cache.set(key, {
      status: status,
      timestamp: Date.now()
    });
    
    // Also persist to localStorage for page reloads
    try {
      localStorage.setItem(key, JSON.stringify({
        status: status,
        timestamp: Date.now()
      }));
    } catch (e) {
      console.warn('LocalStorage quota exceeded:', e);
    }
  }

  loadCacheFromStorage() {
    // Load cached progress from localStorage
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('progress-')) {
          const data = JSON.parse(localStorage.getItem(key));
          if (Date.now() - data.timestamp < this.CACHE_DURATION) {
            const assignmentId = key.replace('progress-', '');
            this.cache.set(key, data);
          } else {
            localStorage.removeItem(key);
          }
        }
      }
    } catch (e) {
      console.warn('Failed to load cache from storage:', e);
    }
  }

  async checkAssignmentProgress(assignmentId) {
    // Return cached if available
    const cached = this.getCachedProgress(assignmentId);
    if (cached) return cached;

    // No tracking if no repo context
    if (!this.repoContext) return 'unknown';

    try {
      // Check for commits in assignment folder
      const url = `https://api.github.com/repos/${this.repoContext.owner}/${this.repoContext.repo}/commits?path=assignments/${assignmentId}&page=1&per_page=1`;
      const response = await fetch(url, {
        headers: { 'Accept': 'application/vnd.github.v3+json' }
      });

      if (!response.ok) {
        if (response.status === 404) {
          // Repository or path not found
          const status = 'not-started';
          this.cacheProgress(assignmentId, status);
          return status;
        }
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const commits = await response.json();
      const status = (commits && commits.length > 0) ? 'in-progress' : 'not-started';
      this.cacheProgress(assignmentId, status);
      return status;

    } catch (error) {
      console.warn(`Could not check progress for ${assignmentId}:`, error);
      return 'unknown';
    }
  }

  async loadAllProgress(assignments) {
    const progressMap = new Map();
    
    // Load cache first
    this.loadCacheFromStorage();

    // Check all assignments with rate limit consideration
    for (const assignment of assignments) {
      const status = await this.checkAssignmentProgress(assignment.id);
      progressMap.set(assignment.id, status);
      
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    return progressMap;
  }

  getStatusIcon(status) {
    switch(status) {
      case 'complete': return '✅';
      case 'in-progress': return '🔄';
      case 'not-started': return '⭕';
      default: return '';
    }
  }

  getStatusText(status) {
    switch(status) {
      case 'complete': return 'Complete';
      case 'in-progress': return 'In Progress';
      case 'not-started': return 'Not Started';
      default: return '';
    }
  }

  showConfigDialog() {
    const owner = prompt('Enter your GitHub username:');
    const repo = prompt('Enter repository name:', 'skills-customize-your-github-copilot-experience');
    
    if (owner && repo) {
      localStorage.setItem('repo-context', JSON.stringify({ owner, repo }));
      this.repoContext = { owner, repo };
      location.reload();
    }
  }
}

class AssignmentPortal {
  constructor() {
    this.config = null;
    this.assignmentChunks = new Map();
    this.progressTracker = new ProgressTracker();
    this.progressMap = new Map();
    this.init();
  }

  async init() {
    try {
      await this.loadConfig();
      await this.loadChunkMetadata();
      this.renderCourseInfo();
      this.addProgressConfigButton();
      
      // Load progress data
      if (this.progressTracker.repoContext) {
        this.progressMap = await this.progressTracker.loadAllProgress(this.config.assignments || []);
      }
      
      this.renderNextDueAssignment();
      this.renderAllAssignments();
    } catch (error) {
      console.error("Failed to initialize portal:", error);
      this.showError("Failed to load course information");
    }
  }

  addProgressConfigButton() {
    const header = document.querySelector('.header-content');
    if (!header) return;

    const context = this.progressTracker.repoContext;
    const buttonHtml = context
      ? `<button class="btn btn-config" onclick="window.portalInstance.showProgressInfo()" title="Progress tracking: ${context.owner}/${context.repo}">📊 Progress: ${context.owner}</button>`
      : `<button class="btn btn-config" onclick="window.portalInstance.configureProgress()" title="Configure progress tracking">⚙️ Setup Progress</button>`;
    
    const buttonDiv = document.createElement('div');
    buttonDiv.innerHTML = buttonHtml;
    header.appendChild(buttonDiv);
  }

  configureProgress() {
    this.progressTracker.showConfigDialog();
  }

  showProgressInfo() {
    const context = this.progressTracker.repoContext;
    if (!context) return;
    
    const progressCount = Array.from(this.progressMap.values()).filter(s => s === 'in-progress' || s === 'complete').length;
    const totalCount = this.progressMap.size;
    
    alert(`Progress Tracking Active\n\nRepository: ${context.owner}/${context.repo}\nModules Started: ${progressCount}/${totalCount}\n\nClick OK to reconfigure.`);
    
    if (confirm('Reconfigure progress tracking?')) {
      this.configureProgress();
    }
  }

  async loadConfig() {
    const response = await fetch("config.json");
    if (!response.ok) {
      throw new Error("Failed to load configuration");
    }
    this.config = await response.json();
  }

  async loadChunkMetadata() {
    const { assignments = [] } = this.config;

    await Promise.all(
      assignments.map(async (assignment) => {
        const chunks = await this.fetchAssignmentChunks(assignment.path);
        this.assignmentChunks.set(assignment.id, chunks);
      })
    );
  }

  async fetchAssignmentChunks(path) {
    try {
      const response = await fetch(`${path}/README.md`);
      if (!response.ok) {
        return [];
      }

      const content = await response.text();
      const chunkSection = this.extractChunkSection(content);
      if (!chunkSection) {
        return [];
      }

      const lines = chunkSection
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.startsWith("-"));

      return lines
        .map((line, index) => {
          const codeMatch = line.match(/`([^`]+)`/);
          const durationMatch = line.match(/\((\d+)\s*min\)/i);

          if (!codeMatch) {
            return null;
          }

          return {
            id: codeMatch[1],
            duration: durationMatch ? Number.parseInt(durationMatch[1], 10) : 20,
            index,
          };
        })
        .filter(Boolean);
    } catch (error) {
      console.warn(`Failed to read chunk plan for ${path}:`, error);
      return [];
    }
  }

  extractChunkSection(markdown) {
    const headingRegex = /^##\s+.*chunk\s*plan.*$/gim;
    const headingMatch = headingRegex.exec(markdown);
    if (!headingMatch) {
      return "";
    }

    const start = headingMatch.index + headingMatch[0].length;
    const rest = markdown.slice(start);
    const nextHeadingMatch = rest.match(/^##\s+/m);
    const end = nextHeadingMatch ? nextHeadingMatch.index : rest.length;
    return rest.slice(0, end);
  }

  getAssignmentStatus() {
    return "active";
  }

  getAssignmentLevel(assignment) {
    const match = assignment.title && assignment.title.match(/Level\s+(\d+)/i);
    return match ? parseInt(match[1], 10) : Number.MAX_SAFE_INTEGER;
  }

  getProgramOrder(programId) {
    const programs = this.config.programs || [];
    const index = programs.findIndex((program) => program.id === programId);
    return index === -1 ? Number.MAX_SAFE_INTEGER : index;
  }

  getAssignmentSequence(assignment) {
    if (Number.isInteger(assignment.moduleOrder)) {
      return assignment.moduleOrder;
    }
    return this.getAssignmentLevel(assignment);
  }

  getProgramMeta(programId) {
    const programs = this.config.programs || [];
    return programs.find((program) => program.id === programId) || null;
  }

  renderCourseInfo() {
    const { course } = this.config;
    document.getElementById("course-title").textContent = course.title;
    document.getElementById("course-info").textContent = course.school;
    document.getElementById("course-description").textContent = course.description;
    document.title = `${course.school} - ${course.title}`;
  }

  renderNextDueAssignment() {
    const { assignments } = this.config;
    const nextDueContainer = document.getElementById("next-due-assignment");

    if (!assignments || assignments.length === 0) {
      nextDueContainer.innerHTML = '<div class="loading">No assignments available</div>';
      return;
    }

    const sortedAssignments = [...assignments].sort((a, b) => {
      const byProgram = this.getProgramOrder(a.program) - this.getProgramOrder(b.program);
      if (byProgram !== 0) {
        return byProgram;
      }
      return this.getAssignmentSequence(a) - this.getAssignmentSequence(b);
    });
    const nextAssignment = sortedAssignments[0];

    nextDueContainer.innerHTML = this.createNextDueCard(nextAssignment);
  }

  createNextDueCard(assignment) {
    const timeToComplete = assignment.timeToComplete || "Not provided";
    const levelText = `Level ${this.getAssignmentLevel(assignment)}`;
    const chunks = this.assignmentChunks.get(assignment.id) || [];
    const firstChunk = chunks[0];
    const startHref = firstChunk
      ? `assets/pages/assignment.html?id=${assignment.id}&chunk=${encodeURIComponent(firstChunk.id)}`
      : `assets/pages/assignment.html?id=${assignment.id}`;

    return `
      <h3>${assignment.title}</h3>
      <p>${assignment.description}</p>
      <div class="next-due-meta">
        <div class="next-due-date">⏱️ Estimated time: ${timeToComplete}</div>
        <div class="next-due-urgency low">📚 ${levelText}</div>
      </div>
      <div class="next-due-actions">
        <a href="${startHref}" class="btn btn-next-due">
          Start Assignment →
        </a>
      </div>
    `;
  }

  renderAllAssignments() {
    const assignmentsList = document.getElementById("assignments-list");
    const { assignments } = this.config;

    if (!assignments || assignments.length === 0) {
      assignmentsList.innerHTML = '<div class="loading">No assignments available</div>';
      return;
    }

    // Get suggested assignment
    const sortedAssignments = [...assignments].sort((a, b) => {
      const byProgram = this.getProgramOrder(a.program) - this.getProgramOrder(b.program);
      if (byProgram !== 0) {
        return byProgram;
      }
      return this.getAssignmentSequence(a) - this.getAssignmentSequence(b);
    });

    const suggestedAssignment = sortedAssignments[0];

    // Get in-progress assignments
    const inProgressAssignments = assignments.filter((assignment) => {
      const status = this.progressMap.get(assignment.id);
      return status === 'in-progress';
    });

    // Get next 2 upcoming assignments (after suggested, excluding in-progress)
    const suggestedIndex = sortedAssignments.indexOf(suggestedAssignment);
    const upcomingAssignments = sortedAssignments
      .slice(suggestedIndex + 1)
      .filter((assignment) => {
        const status = this.progressMap.get(assignment.id);
        return status !== 'in-progress';
      })
      .slice(0, 2);

    // Combine: suggested + in-progress + next 2
    const focusedAssignments = [
      suggestedAssignment,
      ...inProgressAssignments,
      ...upcomingAssignments
    ];

    // Remove duplicates (in case suggested is also in-progress)
    const uniqueFocused = Array.from(new Set(focusedAssignments));

    // Group focused assignments by program
    const focusedGroups = this.groupAssignmentsByProgram(uniqueFocused);

    assignmentsList.innerHTML = `
      <div class="focused-assignments-header">
        <h3>📌 Your Focus</h3>
        <p>Suggested next assignment + active work + upcoming modules (${uniqueFocused.length} total)</p>
      </div>
      ${focusedGroups.map((group) => this.createCompactProgramSection(group)).join("")}
    `;

    // Render sidebar with all assignments
    this.renderAssignmentsSidebar(assignments);
  }

  createCompactProgramSection(group) {
    const title = group.meta ? group.meta.title : "Additional Modules";
    const rows = group.assignments.map((assignment) => this.createAssignmentRow(assignment)).join("");

    return `
      <div class="compact-program-section">
        <h4 class="compact-program-title">${title}</h4>
        ${rows}
      </div>
    `;
  }

  renderAssignmentsSidebar(assignments) {
    const sidebarContainer = document.getElementById("assignments-sidebar");
    if (!sidebarContainer) {
      console.warn("Sidebar container not found");
      return;
    }

    const groups = this.groupAssignmentsByProgram(assignments);

    const sidebarHtml = `
      <div class="sidebar-header">
        <h3>All Assignments</h3>
        <button class="sidebar-toggle" onclick="window.portalInstance.toggleSidebar()" aria-label="Toggle sidebar">
          ✕
        </button>
      </div>
      <div class="sidebar-content">
        ${groups.map((group) => this.createSidebarProgramGroup(group)).join("")}
      </div>
    `;

    sidebarContainer.innerHTML = sidebarHtml;
  }

  createSidebarProgramGroup(group) {
    const title = group.meta ? group.meta.title : "Additional Modules";
    const items = group.assignments
      .map((assignment) => {
        const progressStatus = this.progressMap.get(assignment.id) || 'unknown';
        const progressIcon = this.progressTracker.getStatusIcon(progressStatus);
        
        return `
          <a href="assets/pages/assignment.html?id=${assignment.id}" class="sidebar-assignment-link">
            <span class="sidebar-progress-icon">${progressIcon}</span>
            <span class="sidebar-assignment-title">${assignment.title}</span>
            <span class="sidebar-module-number">M${this.getAssignmentSequence(assignment)}</span>
          </a>
        `;
      })
      .join("");

    return `
      <div class="sidebar-program-group">
        <h4 class="sidebar-program-title">${title}</h4>
        <div class="sidebar-assignments">
          ${items}
        </div>
      </div>
    `;
  }

  toggleSidebar() {
    const sidebar = document.getElementById("assignments-sidebar");
    if (!sidebar) return;
    
    sidebar.classList.toggle("sidebar-open");
  }

  groupAssignmentsByProgram(assignments) {
    const map = new Map();

    assignments.forEach((assignment) => {
      const key = assignment.program || "ungrouped";
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(assignment);
    });

    return Array.from(map.entries())
      .map(([programId, programAssignments]) => ({
        programId,
        meta: this.getProgramMeta(programId),
        assignments: programAssignments.sort(
          (a, b) => this.getAssignmentSequence(a) - this.getAssignmentSequence(b)
        ),
      }))
      .sort((a, b) => this.getProgramOrder(a.programId) - this.getProgramOrder(b.programId));
  }

  createProgramSection(group) {
    const title = group.meta ? group.meta.title : "Additional Modules";
    const description = group.meta ? group.meta.description : "";
    const starterPack = this.createStarterPack(group);
    const mapView = this.createProgramMapView(group);
    const rows = group.assignments.map((assignment) => this.createAssignmentRow(assignment)).join("");

    return `
      <section class="program-section">
        <h3 class="program-title">${title}</h3>
        <p class="program-description">${description}</p>
        ${starterPack}
        ${mapView}
        <div class="program-assignment-list">
          ${rows}
        </div>
      </section>
    `;
  }

  createStarterPack(group) {
    const meta = group.meta || {};
    const pack = meta.starterPack || {};
    const tools = (pack.tools || []).map((tool) => `<li>${tool}</li>`).join("");
    const firstModule = group.assignments[0];
    const firstHref = firstModule
      ? `assets/pages/assignment.html?id=${firstModule.id}`
      : "#";

    return `
      <div class="starter-pack-card">
        <div class="starter-pack-head">Program Starter Pack</div>
        <p class="starter-pack-outcome">${pack.outcome || "Follow the module map and submit milestone evidence to progress."}</p>
        <ul class="starter-pack-tools">
          ${tools || "<li>Python 3, editor, and course repository</li>"}
        </ul>
        <div class="starter-pack-actions">
          <a href="${firstHref}" class="btn btn-starter">Start Program</a>
          <span class="starter-badge-goal">${pack.badgeGoal || "Badge: Complete all modules + capstone evidence"}</span>
        </div>
      </div>
    `;
  }

  createProgramMapView(group) {
    const nodes = group.assignments
      .map((assignment, idx) => {
        const href = `assets/pages/assignment.html?id=${assignment.id}`;
        const gate = this.isMilestoneGate(assignment)
          ? '<span class="program-map-gate">Gate</span>'
          : "";
        return `
          <a class="program-map-node" href="${href}">
            <span class="program-map-index">${idx + 1}</span>
            <span class="program-map-label">Module ${this.getAssignmentSequence(assignment)}</span>
            ${gate}
          </a>
        `;
      })
      .join('<span class="program-map-arrow">→</span>');

    return `
      <div class="program-map-wrap">
        <div class="program-map-title">Program Map View</div>
        <div class="program-map-track">${nodes}</div>
      </div>
    `;
  }

  isMilestoneGate(assignment) {
    if (typeof assignment.milestoneGate === "boolean") {
      return assignment.milestoneGate;
    }
    return Number.isInteger(assignment.moduleOrder) && assignment.moduleOrder % 2 === 0;
  }

  createAssignmentRow(assignment) {
    const timeToComplete = assignment.timeToComplete || "Not provided";
    const chunks = this.assignmentChunks.get(assignment.id) || [];

    const dynamicStatus = this.getAssignmentStatus(assignment);
    
    // Get progress status
    const progressStatus = this.progressMap.get(assignment.id) || 'unknown';
    const progressIcon = this.progressTracker.getStatusIcon(progressStatus);
    const progressText = this.progressTracker.getStatusText(progressStatus);
    const progressBadge = progressStatus !== 'unknown'
      ? `<span class="progress-badge progress-${progressStatus}" title="${progressText}">${progressIcon} ${progressText}</span>`
      : '';

    const chunkLinks = chunks.length
      ? `
        <div class="assignment-chunks">
          ${chunks
            .map(
              (chunk) => `
            <a href="assets/pages/assignment.html?id=${assignment.id}&chunk=${encodeURIComponent(chunk.id)}" class="btn btn-chunk">
              ${chunk.id} (${chunk.duration} min)
            </a>
          `
            )
            .join("")}
        </div>
      `
      : "";

    const primaryHref = chunks.length
      ? `assets/pages/assignment.html?id=${assignment.id}&chunk=${encodeURIComponent(chunks[0].id)}`
      : `assets/pages/assignment.html?id=${assignment.id}`;

    const milestoneTag = this.isMilestoneGate(assignment)
      ? '<span class="milestone-chip">Milestone Gate</span>'
      : "";

    return `
      <div class="assignment-row">
        <div class="assignment-info">
          <div class="assignment-header">
            ${progressBadge}
            <h3>${assignment.title}</h3>
          </div>
          <p>${assignment.description}</p>
          <div class="assignment-quick-meta">
            <span class="module-sequence">Module ${this.getAssignmentSequence(assignment)}</span>
            <span class="time-estimate">⏱️ ${timeToComplete}</span>
            <span class="status ${dynamicStatus}">available</span>
            ${milestoneTag}
          </div>
          ${chunkLinks}
        </div>
        <div class="assignment-actions-compact">
          <a href="${primaryHref}" class="btn btn-primary">
            View Details
          </a>
        </div>
      </div>
    `;
  }

  showError(message) {
    const assignmentsList = document.getElementById("assignments-list");
    assignmentsList.innerHTML = `<div class="error">${message}</div>`;
  }
}

// Initialize the portal when the page loads
document.addEventListener("DOMContentLoaded", () => {
  window.portalInstance = new AssignmentPortal();
});
