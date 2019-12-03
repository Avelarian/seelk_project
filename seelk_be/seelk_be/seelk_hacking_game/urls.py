from rest_framework import routers
from seelk_be.seelk_hacking_game.api  import SeelkAlertViewSet, BTCLastValueViewSet


router = routers.DefaultRouter()
# router.register('api/seelk-user', SeelkUserViewSet, 'SeelkUser')
router.register('api/seelk-alert', SeelkAlertViewSet, 'SeelkAlert')
router.register('api/btc-last-value', BTCLastValueViewSet, 'BTCLastValue')

urlpatterns = router.urls