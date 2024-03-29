from ninja import Schema
from datetime import date


class NewPet(Schema):
    name: str


class GetPet(Schema):
    name: str
    health: int
    alive: bool


class LogIn(Schema):
    username: str
    password: str


class LogInFailure(Schema):
    message: str
