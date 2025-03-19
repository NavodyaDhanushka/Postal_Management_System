import uuid
from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from Backend.core.database import get_db
from Backend.models.messages import Message
from Backend.schemas.messages import MessageCreate, MessageResponse

router = APIRouter(prefix="/messages", tags=["Messages"])

@router.post("/create", response_model=MessageResponse)
def create_message(message: MessageCreate, db: Session = Depends(get_db)):
    # Automatically generate a unique ID code for the message
    unique_code = str(uuid.uuid4())  # Generate a unique UUID for the message

    # Create a new message object with the provided data
    new_message = Message(
        email=message.email,
        subject=message.subject,
        message=message.message,
        company=message.company,
        code=unique_code,  # Store the unique code in the database
        reply="no reply",  # Default to "no reply"
        status="pending"  # Default to "pending"
    )

    # Add the new message to the session and commit to save it to the database
    db.add(new_message)
    db.commit()

    # Refresh the message to load the generated fields (e.g., ID)
    db.refresh(new_message)

    # Return the created message, now with the unique ID and code
    return new_message
