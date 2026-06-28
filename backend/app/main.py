from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

from app.database import Base
from app.database import engine

from app.routers.contact import router as contact_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Contact API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact_router)


@app.get("/")
def home():
    return {
        "status": "Running",
        "application": "Contact API",
    }