from rest_framework import serializers
from .models import ENodeB, Cell, Board


class CellSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cell
        fields = ('cellId', 'opState', 'admState')


class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = ('maintLED', 'operLED', 'faultLED', 'boardType')


class ENodeBSerializer(serializers.ModelSerializer):
    cell = CellSerializer(many=True, read_only=True)
    board = BoardSerializer(many=True, read_only=True)

    class Meta:
        model = ENodeB
        fields = ('enbId', 'oamIp', 'cell', 'board')
