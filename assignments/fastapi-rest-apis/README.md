# 📘 Assignment: Level 8 - Building REST APIs with FastAPI

## 🎯 Objective

Expose analysis-ready metrics through a validated API so data products can serve both business users and technical pipelines.

## 🔗 Builds On

- `Level 11: Database Programming with SQLAlchemy`

## 🚀 Unlocks Next

- `Level 12: Web GUI with Streamlit`

## 🔑 Key Concepts

Before you start, explore these essential FastAPI patterns:

**1. @app.get() - Defining Routes**
```python
from fastapi import FastAPI

app = FastAPI()

@app.<!--exercise:answer=get,hint=What decorator creates a GET endpoint?-->("/health")
def health_check():
	return {"status": "ok"}
```

**2. Path Parameters - Dynamic URLs**
```python
@app.get("/kpis/{<!--exercise:answer=kpi_id,hint=What parameter name captures the dynamic part of the URL?-->}")
def get_kpi(kpi_id: int):
	return {"id": kpi_id, "name": "Revenue"}
```

**3. Request/Response Models - Validation with Pydantic**
```python
from pydantic import BaseModel

class KPI(BaseModel):
	name: str
	value: float

@app.post("/kpis")
def create_kpi(kpi: <!--exercise:answer=KPI,hint=What type annotation ensures automatic validation?-->):
	return kpi
```

**4. status_code Parameter - HTTP Responses**
```python
@app.post("/kpis", <!--exercise:answer=status_code=201,hint=What parameter sets the HTTP status code for successful creation?-->)
def create_kpi(kpi: KPI):
	return kpi
```


## 📝 Tasks

### 🛠️ Bootstrap the Metrics API (`Both`)
### 🛠️ Bootstrap the Metrics API (20 min) (`Both`)

#### Description
Set up a FastAPI app with baseline endpoints and consistent response structure.

#### Requirements
Completed program should:

- Initialize FastAPI app and run with `uvicorn`.
- Implement `GET /` and `GET /health` endpoints.
- Return JSON responses with clear keys.
- Add one in-memory sample metric payload for testing.

### 🛠️ Implement CRUD for KPI Records (`BA` + `JDS`)
### 🛠️ Implement CRUD for KPI Records (40 min) (`BA` + `JDS`)

#### Description
Create endpoints to manage KPI definitions and current values.

#### Requirements
Completed program should:

- Implement POST, GET (all), GET by ID, PUT, and DELETE endpoints for `/kpis`.
- Use Pydantic models for request and response validation.
- Return correct status codes (`201`, `200`, `404`, `422`).
- Include at least one BA-focused field (`business_owner`) and one JDS-focused field (`calculation_version`).

### 🛠️ Validate and Document API Quality (`Both`)
### 🛠️ Validate and Document API Quality (20 min) (`Both`)

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
