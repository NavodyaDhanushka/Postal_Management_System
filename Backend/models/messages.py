from sqlalchemy import Column, Integer, String, Text
from Backend.core.database import Base

class Message(Base):
    __tablename__ = "messages"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    email = Column(String(100), nullable=False)
    subject = Column(String(255), nullable=False)
    message = Column(Text, nullable=False)
    company = Column(String(255), nullable=True)
    code = Column(String(255), nullable=True, unique=True)
    reply = Column(String(255), default="no reply")  # New column with default "no reply"
    status = Column(String(255), default="pending")  # New column with default "pending"
