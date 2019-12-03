from django.db import models
from seelk_be.seelk_hacking_game.constants import ALERT_MOV_OPTIONS
from django.contrib.auth.models import User

# class seelk_user(models.Model):
#     name = models.CharField(max_length=100)
#     email = models.EmailField(max_length=100, unique=True)
#     created_at = models.DateField(auto_now_add=True)


class seelk_alert(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    alert_param = models.DecimalField(max_digits=12, decimal_places=4)
    created_at = models.DateField(auto_now_add=True)
    alert_name = models.CharField(max_length=100, default="Alert")
    alert_message = models.TextField(blank=True)
    alert_mov = models.CharField(max_length=10, choices=ALERT_MOV_OPTIONS, default="b")


class BTC_last_value(models.Model):
    time = models.DateTimeField()
    asset_id_base = models.CharField(max_length=25)
    asset_id_quote = models.CharField(max_length=25)
    rate = models.DecimalField(max_digits=12, decimal_places=4)
