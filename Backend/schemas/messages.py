from pydantic import BaseModel
from typing import Optional

class MessageCreate(BaseModel):
    email: str
    subject: str
    message: str
    company: Optional[str] = None
    # No need to include reply or status here as they are set by default in the model

    class Config:
        orm_mode = True

class MessageResponse(MessageCreate):
    id: int
    code: str  # Include the unique code in the response
    reply: str  # Add reply to the response
    status: str  # Add status to the response

    class Config:
        orm_mode = True
