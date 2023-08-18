import datetime
import random

from django.db import models
from django.db.models import IntegerChoices, TextChoices
from django.utils.timezone import now


# Randomly assign a color to a new pet.
def random_color() -> str:
    return random.choice(Pet.ColorChoices.choices)[0]


class Pet(models.Model):
    # The different accessories a pet can wear
    class AccessoryChoices(IntegerChoices):
        BOW = 0, "Bow"
        HAT = 1, "Hat"

    # Pet color options
    class ColorChoices(TextChoices):
        RED = "R", "Red"
        BLUE = "B", "Blue"
        YELLOW = "Y", "Yellow"

    user = models.ForeignKey("auth.User", on_delete=models.CASCADE)  # the user the pet belongs to
    name = models.CharField(max_length=250, default="Billy")  # name given by user
    birthday = models.DateTimeField(auto_now_add=True)  # date/time pet was created (for calculating age)
    health = models.IntegerField(default=150)  # current health
    color = models.CharField(max_length=1, choices=ColorChoices.choices, default=random_color)  # pet's current color
    accessory = models.SmallIntegerField(choices=AccessoryChoices.choices, null=True, blank=True)  # what pet is wearing

    # Check pet's current health. If its health is at 0, pet is "dead" (alive = false).
    @property
    def alive(self) -> bool:
        return self.health > 0

    # Calculate pet's age
    @property
    def age(self) -> datetime.timedelta:
        return now() - self.birthday

    # Pet object referred to as pet's name
    def __str__(self):
        return self.name


class Task(models.Model):
    name = models.CharField(max_length=250)
    description = models.CharField(max_length=250)
    due = models.DateTimeField()
    repeat = models.CharField(max_length=250)
    complete = models.BooleanField(default=False)
