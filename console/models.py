from __future__ import unicode_literals

from django.db import models


# Create your models here.
class ENodeB(models.Model):
    enbId = models.IntegerField(unique=True)
    oamIp = models.GenericIPAddressField(unique=True)


class Cell(models.Model):
    cellId = models.CharField(max_length=32)
    opState = models.CharField(max_length=16, default='DISABLED')
    admState = models.CharField(max_length=16, default='LOCKED')
    ownEnb = models.ForeignKey(ENodeB, on_delete=models.CASCADE,
                               related_name='cell')

    class Meta:
        unique_together = ('cellId', 'ownEnb')
        ordering = ['cellId']


class Board(models.Model):
    maintLED = models.CharField(max_length=16, default='OFF')
    operLED = models.CharField(max_length=16, default='OFF')
    faultLED = models.CharField(max_length=16, default='OFF')
    boardType = models.CharField(max_length=32, default='UNKNOWN')
    ownEnb = models.ForeignKey(ENodeB, on_delete=models.CASCADE,
                               related_name='board')

    class Meta:
        ordering = ['boardType']
