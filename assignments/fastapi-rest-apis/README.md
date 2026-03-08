# 📘 Assignment: Level 8 - Building REST APIs with FastAPI

## 🎯 Objective

Expose analysis-ready metrics through a validated API so data products can serve both business users and technical pipelines.

## 🔗 Builds On

- `Level 11: Database Programming with SQLAlchemy`

## 🚀 Unlocks Next

- `Level 12: Web GUI with Streamlit`

## ⏱️ 20-Minute Chunk Plan

- `8.1` (20 min): Create FastAPI app and health endpoint.
- `8.2` (20 min): Add metrics list and detail endpoints.
- `8.3` (20 min): Add validation and error responses.
- `8.4` (20 min): Test API behavior and document examples.

## 📝 Tasks

### 🛠️ Bootstrap the Metrics API (`Both`)

#### Description
Set up a FastAPI app with baseline endpoints and consistent response structure.

#### Requirements
Completed program should:

- Initialize FastAPI app and run with `uvicorn`.
- Implement `GET /` and `GET /health` endpoints.
- Return JSON responses with clear keys.
- Add one in-memory sample metric payload for testing.

### 🛠️ Implement CRUD for KPI Records (`BA` + `JDS`)

#### Description
Create endpoints to manage KPI definitions and current values.

#### Requirements
Completed program should:

- Implement POST, GET (all), GET by ID, PUT, and DELETE endpoints for `/kpis`.
- Use Pydantic models for request and response validation.
- Return correct status codes (`201`, `200`, `404`, `422`).
- Include at least one BA-focused field (`business_owner`) and one JDS-focused field (`calculation_version`).

### 🛠️ Validate and Document API Quality (`Both`)

#### Description
Prove endpoint behavior with manual checks and lightweight automated tests.

#### Requirements
Completed program should:

- Verify endpoints in `/docs` and collect example request/response pairs.
- Add at least 3 tests (or scripted checks) for success and failure cases.
- Document one data contract decision in `artifacts/api-contract-notes.md`.
- Record one known limitation and a next-step improvement.

## 🏆 Achievement Evidence

To mark this assignment complete, submit:

- `Code Artifact`: FastAPI app with validated KPI CRUD endpoints.
- `Interpretation Artifact`: Short API contract notes explaining design decisions.
- `Verification Artifact`: Test/check output plus sample API responses from `/docs` or curl.
