from django.urls import path, include
from .views import UserViewSet, UserListView, BukuViewSet, PengembalianViewSet, PeminjamanViewSet, DendaViewSet, ReservasiViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register (r'users', UserViewSet)
router.register (r'buku', BukuViewSet)
router.register (r'pengembalian', PengembalianViewSet)
router.register (r'peminjaman', PeminjamanViewSet)
router.register (r'denda', DendaViewSet)
router.register (r'reservasi', ReservasiViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/member/', UserListView.as_view(), name='member-list'),
]