import datetime
import random

from django.db import models
from django.db.models import IntegerChoices, TextChoices
from django.utils.timezone import now


def random_color() -> str:
    return random.choice(Pet.ColorChoices.choices)[0]


class Pet(models.Model):
    class AccessoryChoices(IntegerChoices):
        BOW = 0, "Bow"
        HAT = 1, "Hat"

    class ColorChoices(TextChoices):
        RED = "R", "Red"
        BLUE = "B", "Blue"
        YELLOW = "Y", "Yellow"

    name = models.CharField(max_length=250, default="Billy")
    birthday = models.DateTimeField(auto_now_add=True)
    health = models.IntegerField(default=150)
    color = models.CharField(max_length=1, choices=ColorChoices.choices, default=random_color)
    accessory = models.SmallIntegerField(choices=AccessoryChoices.choices, null=True, blank=True)

    @property
    def alive(self) -> bool:
        return self.health > 0

    @property
    def age(self) -> datetime.timedelta:
        return now() - self.birthday


class Task(models.Model):
    name = models.CharField(max_length=250)
    description = models.CharField(max_length=250)
    due = models.DateTimeField()
    repeat = models.CharField(max_length=250)
    complete = models.BooleanField(default=False)