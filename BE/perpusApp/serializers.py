from rest_framework import serializers
from .models import buku, peminjaman, pengembalian, member, denda, reservasi

class BukuSerializer(serializers.ModelSerializer):
    class Meta:
        model = buku
        fields = '__all__'

class PeminjamanSerializer(serializers.ModelSerializer):
    class Meta:
        model = peminjaman
        fields = '__all__'

class PengembalianSerializer(serializers.ModelSerializer):
    class Meta:
        model = pengembalian
        fields = '__all__'


class memberSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = member
        fields = '__all__'

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError({"password": "Password tidak sama"})
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        member = member.objects.create(**validated_data)
        member.set_password(validated_data['password'])
        member.save()
        return member


class dendaSerializer(serializers.ModelSerializer):
    class Meta:
        model = denda
        fields = '__all__'

class reservasiSerializer(serializers.ModelSerializer):
    class Meta:
        model = reservasi
        fields = '__all__'