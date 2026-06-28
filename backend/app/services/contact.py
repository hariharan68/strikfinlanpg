from sqlalchemy.orm import Session

from app.models.contact import Contact


def save_contact(db: Session, contact):

    obj = Contact(
        full_name=contact.full_name,
        email=contact.email,
        subject=contact.subject,
        message=contact.message,
    )

    db.add(obj)

    db.commit()

    db.refresh(obj)

    return obj