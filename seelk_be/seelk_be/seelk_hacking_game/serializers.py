from django.contrib.auth.models import User, Group
from rest_framework import serializers
from seelk_be.seelk_hacking_game.models import seelk_alert, BTC_last_value


# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = User
#         fields = ['url', 'username', 'email', 'groups']


# class GroupSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Group
#         fields = ['url', 'name']


# Seelk User Serializer
# class SeelkUserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = seelk_user
#         fields = '__all__'


# Seelk Alert Serializer
class SeelkAlertSerializer(serializers.ModelSerializer):
    class Meta:
        model = seelk_alert
        fields = '__all__'


# BTC Last Value Serializer
class BTCLastValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = BTC_last_value
        fields = '__all__'