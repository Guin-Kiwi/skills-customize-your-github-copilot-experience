"""
FastAPI REST API Starter Code
Student: Complete the tasks below to build a functional REST API

Before starting:
1. Install dependencies: pip install fastapi uvicorn
2. Run the server: uvicorn starter-code:app --reload
3. Visit http://localhost:8000/docs for interactive documentation
"""

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from typing import List, Optional

# Initialize FastAPI app
app = FastAPI(
    title="Todo API",
    description="A simple REST API for managing todos",
    version="1.0.0"
)

# TODO: Define your Pydantic models here
# Example:
# class Todo(BaseModel):
#     id: int
#     title: str = Field(..., min_length=1, max_length=100)
#     description: Optional[str] = None
#     completed: bool = False

# In-memory storage for todos
todos_db = []
next_id = 1


# TODO: Implement your endpoints here

@app.get("/")
def read_root():
    """Welcome endpoint"""
    # TODO: Return a welcome message
    pass


@app.get("/health")
def health_check():
    """Health check endpoint"""
    # TODO: Return API status
    pass


# TODO: Implement CRUD endpoints
# - POST /todos - Create a new todo
# - GET /todos - Get all todos
# - GET /todos/{id} - Get a specific todo
# - PUT /todos/{id} - Update a todo
# - DELETE /todos/{id} - Delete a todo
