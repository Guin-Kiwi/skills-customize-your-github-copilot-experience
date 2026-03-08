// Computer Science Portal JavaScript

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

    const groups = this.groupAssignmentsByProgram(assignments);
    assignmentsList.innerHTML = groups.map((group) => this.createProgramSection(group)).join("");
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
          <h3>${assignment.title}</h3>
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
  new AssignmentPortal();
});
