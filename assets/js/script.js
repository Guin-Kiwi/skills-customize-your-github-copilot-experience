// Mergington High School - Computer Science Portal JavaScript

class AssignmentPortal {
  constructor() {
    this.config = null;
    this.init();
  }

  async init() {
    try {
      await this.loadConfig();
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

    return `
      <h3>${assignment.title}</h3>
      <p>${assignment.description}</p>
      <div class="next-due-meta">
        <div class="next-due-date">⏱️ Estimated time: ${timeToComplete}</div>
        <div class="next-due-urgency low">📚 ${levelText}</div>
      </div>
      <div class="next-due-actions">
        <a href="assets/pages/assignment.html?id=${assignment.id}" class="btn btn-next-due">
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

    const dynamicStatus = this.getAssignmentStatus(assignment);

    return `
      <div class="assignment-row">
        <div class="assignment-info">
          <h3>${assignment.title}</h3>
          <p>${assignment.description}</p>
          <div class="assignment-quick-meta">
            <span class="time-estimate">⏱️ ${timeToComplete}</span>
            <span class="status ${dynamicStatus}">available</span>
          </div>
        </div>
        <div class="assignment-actions-compact">
          <a href="assets/pages/assignment.html?id=${assignment.id}" class="btn btn-primary">
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
