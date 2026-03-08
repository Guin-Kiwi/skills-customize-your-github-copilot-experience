# FastAPI REST API Starter Code

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

# In-memory storage for todos
todos_db = []
next_id = 1


# TODO: Implement your endpoints here

@app.get("/")
def read_root():
    """Welcome endpoint"""
    pass


@app.get("/health")
def health_check():
    """Health check endpoint"""
    pass


# TODO: Implement CRUD endpoints
