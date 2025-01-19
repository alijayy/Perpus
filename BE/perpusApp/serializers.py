from rest_framework import serializers
from .models import Buku, Peminjaman, Pengembalian, Member, Denda, Reservasi

class BukuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Buku
        fields = '__all__'

class PeminjamanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Peminjaman
        fields = '__all__'

class PengembalianSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pengembalian
        fields = '__all__'

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'

class DendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Denda
        fields = '__all__'

class ReservasiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservasi
        fields = '__all__'