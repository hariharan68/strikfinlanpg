from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database import get_db

from app.schemas.contact import ContactCreate

from app.services.contact import save_contact

router = APIRouter(
    prefix="/api/contact",
    tags=["Contact"],
)


@router.post("/")
def create_contact(
    contact: ContactCreate,
    db: Session = Depends(get_db),
):

    result = save_contact(db, contact)

    return {
        "success": True,
        "message": "Message saved successfully",
        "data": result,
    }