from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from Backend.core.database import get_db
from Backend.models.admin import Admin
from Backend.schemas.admin import AdminCreate, TokenResponse, AdminLogin

from Backend.utils.auth import hash_password, create_access_token, verify_password

router = APIRouter(prefix="/admin", tags=["Admin"])


# Register Admin
@router.post("/register", response_model=TokenResponse)
def register_admin(admin: AdminCreate, db: Session = Depends(get_db)):
    existing_admin = db.query(Admin).filter(Admin.username == admin.username).first()
    if existing_admin:
        raise HTTPException(status_code=400, detail="Username already exists")

    hashed_password = hash_password(admin.password)
    new_admin = Admin(username=admin.username, email=admin.email, password_hash=hashed_password)

    db.add(new_admin)
    db.commit()
    db.refresh(new_admin)

    token = create_access_token({"sub": new_admin.username})
    return {"access_token": token, "token_type": "bearer"}


# Admin Login
@router.post("/login", response_model=TokenResponse)
def login_admin(admin: AdminLogin, db: Session = Depends(get_db)):
    db_admin = db.query(Admin).filter(Admin.username == admin.username).first()
    if not db_admin or not verify_password(admin.password, db_admin.password_hash):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

    token = create_access_token({"sub": db_admin.username})
    return {"access_token": token, "token_type": "bearer"}
