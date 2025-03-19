from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from Backend.core.database import Base, engine
from Backend.routers import admin, messages  # Import the message router

app = FastAPI()

# Add CORS middleware to allow requests from specific origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to your frontend's origin
    allow_credentials=True,
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Create database tables
Base.metadata.create_all(bind=engine)

# Include routers for both admin and message
app.include_router(admin.router)
app.include_router(messages.router)  # Add the message router

@app.get("/")
def root():
    return {"message": "Welcome to the Postal Management System"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8010)
