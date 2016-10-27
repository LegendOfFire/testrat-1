from __future__ import unicode_literals

from django.db import models


# Create your models here.
class ENodeB(models.Model):
    enbId = models.IntegerField(unique=True)
    oamIp = models.GenericIPAddressField(unique=True)


class Cell(models.Model):
    CELL_OP_STATUS_CHOICES = (
        ('ENABLED', 'ENABLED'),
        ('DISABLED', 'DISABLED')
    )
    CELL_ADM_STATUS_CHOICES = (
        ('LOCKED', 'LOCKED'),
        ('UNCLOCKED', 'UNCLOCKED')
    )
    cellId = models.IntegerField(unique=True)
    opState = models.CharField(choices=CELL_OP_STATUS_CHOICES, max_length=16,
                               default='DISABLED')
    admState = models.CharField(choices=CELL_ADM_STATUS_CHOICES, max_length=16,
                                default='LOCKED')
    ownEnb = models.ForeignKey(ENodeB, on_delete=models.CASCADE,
                               related_name='cell')

    class Meta:
        unique_together = ('cellId', 'ownEnb')
        ordering = ['cellId']
