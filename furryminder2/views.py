import json

from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from furryminder2.schema import LogIn, LogInFailure


def login_view(request):
    payload = LogIn(**json.loads(request.body.decode("utf-8")))
    user = authenticate(request, username=payload.username, password=payload.password)
    if user is not None:
        login(request, user)
        return JsonResponse({}, status=200)
    return JsonResponse(LogInFailure(
        message="username and password combination not recognized soz"
    ).dict(), status=401)


def logout_view(request):
    logout(request)
    return JsonResponse({}, status=200)
