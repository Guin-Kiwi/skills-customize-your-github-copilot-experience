// Mergington High School - Computer Science Portal JavaScript

class AssignmentPortal {
  constructor() {
    this.config = null;
    this.assignmentChunks = new Map();
    this.init();
  }

  async init() {
    try {
      await this.loadConfig();
      await this.loadChunkMetadata();
      this.renderCourseInfo();
      this.renderNextDueAssignment();
      this.renderAllAssignments();
    } catch (error) {
      console.error("Failed to initialize portal:", error);
      this.showError("Failed to load course information");
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

    const sortedAssignments = [...assignments].sort(
      (a, b) => this.getAssignmentLevel(a) - this.getAssignmentLevel(b)
    );
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

    // Sort assignments by level: easiest first
    const sortedAssignments = [...assignments].sort(
      (a, b) => this.getAssignmentLevel(a) - this.getAssignmentLevel(b)
    );

    const assignmentRows = sortedAssignments
      .map((assignment) => this.createAssignmentRow(assignment))
      .join("");

    assignmentsList.innerHTML = assignmentRows;
  }

  createAssignmentRow(assignment) {
    const timeToComplete = assignment.timeToComplete || "Not provided";
    const chunks = this.assignmentChunks.get(assignment.id) || [];

    const dynamicStatus = this.getAssignmentStatus(assignment);

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

    return `
      <div class="assignment-row">
        <div class="assignment-info">
          <h3>${assignment.title}</h3>
          <p>${assignment.description}</p>
          <div class="assignment-quick-meta">
            <span class="time-estimate">⏱️ ${timeToComplete}</span>
            <span class="status ${dynamicStatus}">available</span>
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
  new AssignmentPortal();
});
