from seelk_be.seelk_hacking_game.models import seelk_alert, BTC_last_value
from rest_framework import viewsets, permissions
from seelk_be.seelk_hacking_game.serializers import SeelkAlertSerializer, BTCLastValueSerializer
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings

# Seelk User ViewSet
# class SeelkUserViewSet(viewsets.ModelViewSet):
#     queryset = seelk_user.objects.all()
#     permission_classes = [
#         permissions.AllowAny
#     ]
#     serializer_class = SeelkUserSerializer


# Seelk Alert ViewSet
class SeelkAlertViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = SeelkAlertSerializer

    def get_queryset(self):
        return seelk_alert.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


# Seelk Alert ViewSet
class BTCLastValueViewSet(viewsets.ViewSet):
    # queryset = BTC_last_value.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]

    def create(self, request):
        # subject = 'Thank you for registering to our site'
        # message = ' it  means a world to us '
        # email_from = settings.EMAIL_HOST_USER
        # recipient_list = ['avelarian@gmail.com',]
        # send_mail( subject, message, email_from, recipient_list )

        last_value = BTC_last_value.objects.latest('time')
        last_value_rate = last_value.rate
        new_value = request.data
        user_alerts = seelk_alert.objects.filter(user=request.user)
        for alert in user_alerts:
            if alert.alert_param < new_value["rate"] and alert.alert_param > last_value_rate and alert.alert_mov == "d":
                subject = alert.alert_name
                message = alert.alert_message
                email_from = settings.EMAIL_HOST_USER
                recipient_list = [request.user.email,]
                send_mail( subject, message, email_from, recipient_list )
            elif alert.alert_param > new_value["rate"] and alert.alert_param < last_value_rate and alert.alert_mov == "u":
                subject = alert.alert_name
                message = alert.alert_message
                email_from = settings.EMAIL_HOST_USER
                recipient_list = [request.user.email,]
                send_mail( subject, message, email_from, recipient_list )
            elif alert.alert_mov == "b":
                if alert.alert_param < new_value["rate"] and alert.alert_param > last_value_rate:
                    subject = alert.alert_name
                    message = alert.alert_message
                    email_from = settings.EMAIL_HOST_USER
                    recipient_list = [request.user.email,]
                    send_mail( subject, message, email_from, recipient_list )
                elif alert.alert_param > new_value["rate"] and alert.alert_param < last_value_rate:
                    subject = alert.alert_name
                    message = alert.alert_message
                    email_from = settings.EMAIL_HOST_USER
                    recipient_list = [request.user.email,]
                    send_mail( subject, message, email_from, recipient_list )

        serializer = BTCLastValueSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        btc_last_value = serializer.save()

        return Response({
            "message": "Alerts were sent."
        })
