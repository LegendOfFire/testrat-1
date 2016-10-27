from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from .models import ENodeB
from .serializers import ENodeBSerializer


# Create your views here.
class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content to json.
    """

    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


@csrf_exempt
def enb_list(request):
    """
    List all eNodeB or add a new ENodeB
    """

    if request.method == 'GET':
        enbs = ENodeB.objects.all()
        serializer = ENodeBSerializer(enbs, many=True)
        return JSONResponse(serializer.data)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ENodeBSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data, status=201)

        return JSONResponse(serializer.errors, status=400)


@csrf_exempt
def enb_detail(request, pk):
    """
    Retrive, update or delete an ENodeB
    """

    try:
        enb = ENodeB.objects.get(pk=pk)
    except ENodeB.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = ENodeBSerializer(enb)
        return JSONResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = ENodeBSerializer(enb, data=data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data)

        return JSONResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        enb.delete()
        return HttpResponse(status=204)


def index(request):
    return render(request, 'console/index.html', {})
