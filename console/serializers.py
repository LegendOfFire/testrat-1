from rest_framework import serializers
from .models import ENodeB


class ENodeBSerializer(serializers.ModelSerializer):
    class Meta:
        model = ENodeB
        fields = ('enbId', 'oamIP')
