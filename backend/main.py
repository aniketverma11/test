from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Operation(BaseModel):
    a: float
    b: float

@app.post("/add")
def add(op: Operation):
    return {"result": op.a + op.b}

@app.post("/subtract")
def subtract(op: Operation):
    return {"result": op.a - op.b}

@app.post("/multiply")
def multiply(op: Operation):
    return {"result": op.a * op.b}

@app.post("/divide")
def divide(op: Operation):
    if op.b == 0:
        return {"error": "Division by zero"}
    return {"result": op.a / op.b}
