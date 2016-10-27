from rest_framework import serializers
from .models import ENodeB, Cell


class CellSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cell
        fields = ('cellId', 'opState', 'admState')


class ENodeBSerializer(serializers.ModelSerializer):
    cell = CellSerializer(many=True, read_only=True)

    class Meta:
        model = ENodeB
        fields = ('enbId', 'oamIp', 'cell')
