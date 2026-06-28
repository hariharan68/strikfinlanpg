from pydantic import BaseModel, EmailStr


class ContactCreate(BaseModel):

    full_name: str

    email: EmailStr

    subject: str | None = None

    message: str


class ContactResponse(ContactCreate):

    id: int

    class Config:
        from_attributes = True