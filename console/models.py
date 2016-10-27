from __future__ import unicode_literals

from django.db import models


# Create your models here.
class ENodeB(models.Model):
    enbId = models.IntegerField(unique=True)
    oamIp = models.GenericIPAddressField(unique=True)
