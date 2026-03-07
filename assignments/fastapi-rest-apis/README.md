# 📘 Assignment: Level 5 - Building REST APIs with FastAPI

## 🎯 Objective

Learn how to build modern REST APIs using the FastAPI framework. You'll create a functional API with multiple endpoints, handle HTTP requests and responses, implement data validation, and test your API using interactive documentation.

## 📝 Tasks

### 🛠️ Create a Basic FastAPI Application

#### Description
Set up a FastAPI application with a simple health check endpoint and learn the fundamentals of route creation and response handling.

#### Requirements
Completed program should:

- Install FastAPI and uvicorn using pip
- Create a basic FastAPI app instance
- Implement a GET endpoint at `/` that returns a welcome message
- Implement a GET endpoint at `/health` that returns the API status
- Run the application using uvicorn and verify it works

### 🛠️ Build CRUD Endpoints for a Todo List

#### Description
Create a complete set of CRUD (Create, Read, Update, Delete) endpoints to manage a simple todo list using in-memory storage.

#### Requirements
Completed program should:

- Define a Todo model with fields: `id`, `title`, `description`, and `completed`
- Implement POST `/todos` to create a new todo item
- Implement GET `/todos` to retrieve all todo items
- Implement GET `/todos/{id}` to retrieve a specific todo by ID
- Implement PUT `/todos/{id}` to update an existing todo
- Implement DELETE `/todos/{id}` to delete a todo
- Use appropriate HTTP status codes (200, 201, 404, etc.)

### 🛠️ Add Data Validation and Documentation

#### Description
Enhance your API with Pydantic models for automatic data validation and explore FastAPI's built-in interactive documentation.

#### Requirements
Completed program should:

- Use Pydantic BaseModel for request and response schemas
- Add field validation (e.g., title must not be empty, completed must be boolean)
- Include example values in the models for documentation
- Test all endpoints using the automatic Swagger UI at `/docs`
- Verify error handling for invalid requests (e.g., wrong data types, missing fields)
