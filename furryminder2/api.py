from typing import List

from ninja import NinjaAPI
from furryminder2.models import Pet
from furryminder2.schema import GetPet

api = NinjaAPI()


@api.get("/test")
def test(request):
    return {'test': 'success'}


@api.get("/pets")
def get_pet(request, response=GetPet):
    return Pet.objects.first()
