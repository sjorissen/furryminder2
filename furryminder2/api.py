from django.contrib.auth import authenticate
from ninja import NinjaAPI
from ninja.security import django_auth
from furryminder2.models import Pet
from furryminder2.schema import GetPet, LogIn, LogInFailure

api = NinjaAPI(auth=django_auth, csrf=True)


@api.get("/test")
def test(request):
    return {'test': 'success'}


# Fetch the pet for the currently logged-in user
@api.get("/pet", response=GetPet)
def get_pet(request):
    return Pet.objects.get(user_id=request.user.id)


@api.get("/pets", response=list[GetPet])
def get_pet(request):
    print(request.user.id)
    return Pet.objects.all()
