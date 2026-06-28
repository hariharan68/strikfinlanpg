from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text
from sqlalchemy import DateTime
from sqlalchemy.sql import func

from app.database import Base


class Contact(Base):

    __tablename__ = "contact_messages"

    id = Column(Integer, primary_key=True, index=True)

    full_name = Column(String(100), nullable=False)

    email = Column(String(200), nullable=False)

    subject = Column(String(250))

    message = Column(Text, nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())