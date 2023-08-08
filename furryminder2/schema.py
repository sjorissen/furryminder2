from ninja import Schema
from datetime import date


class NewPet(Schema):
    name: str


class GetPet(Schema):
    name: str
    health: str
    # alive: bool
