from django.contrib import admin
from django.contrib.admin import register
from furryminder2 import models


@register(models.Pet)
class PetAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "user"]
