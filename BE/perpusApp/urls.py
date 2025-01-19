from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, MemberDetailView, RegisterView, LoginView, BukuViewSet, BukuListView, PengembalianViewSet, PeminjamanViewSet, DendaViewSet, ReservasiViewSet

router = DefaultRouter()
router.register (r'users', UserViewSet)
router.register (r'buku', BukuViewSet)
router.register (r'pengembalian', PengembalianViewSet)
router.register (r'peminjaman', PeminjamanViewSet)
router.register (r'denda', DendaViewSet)
router.register (r'reservasi', ReservasiViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/member/', RegisterView.as_view(), name='member-list'),
    path('api/member/<str:username>/', MemberDetailView.as_view(), name='member-detail'),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/buku/', BukuListView.as_view(), name='buku-list'),
]