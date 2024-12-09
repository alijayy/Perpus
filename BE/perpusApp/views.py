from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from .models import buku, peminjaman, pengembalian, member, denda, reservasi
from .serializers import BukuSerializer, PeminjamanSerializer, PengembalianSerializer, memberSerializer, dendaSerializer, reservasiSerializer

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = member.objects.all()
    serializer_class = memberSerializer

class UserListView(APIView):
    def get(self, request):
        user = member.objects.all()
        serializer = memberSerializer(user, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = memberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Akun berhasil dibuat!"}, serializer.data, status=201)
        return Response(serializer.errors, status=400)

class PengembalianViewSet(viewsets.ModelViewSet):
    queryset = pengembalian.objects.all()
    serializer_class = PengembalianSerializer

class PeminjamanViewSet(viewsets.ModelViewSet):
    queryset = peminjaman.objects.all()
    serializer_class = PeminjamanSerializer

class DendaViewSet(viewsets.ModelViewSet):
    queryset = denda.objects.all()
    serializer_class = dendaSerializer

class ReservasiViewSet(viewsets.ModelViewSet):
    queryset = reservasi.objects.all()
    serializer_class = reservasiSerializer

class BukuViewSet(viewsets.ModelViewSet):
    queryset = buku.objects.all()
    serializer_class = BukuSerializer