from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from .models import Buku, Peminjaman, Pengembalian, Member, Denda, Reservasi
from .serializers import BukuSerializer, PeminjamanSerializer, PengembalianSerializer, MemberSerializer, DendaSerializer, ReservasiSerializer

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

class RegisterView(APIView):
    def post(self, request):
        print("POST request recieved") 
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        user = User.objects.create_user(username=username, email=email, password=password)
        member = Member.objects.create(user=user, username=username, email=email) #kurang create user
        return Response({'success': 'Pendaftaran sukses'}, status=status.HTTP_201_CREATED)

    def get(self, request):
        user = Member.objects.all()
        serializer = MemberSerializer(user, many=True)
        return Response(serializer.data)

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')# ganti username
        password = request.data.get('password')
        print(f"username: {username}, password: {password}")
        user = authenticate(request, username=username, password=password)

        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            return Response({   'token': token.key,
                                'nama': user.username}, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid username atau password '}, status=status.HTTP_401_UNAUTHORIZED) 

class PengembalianViewSet(viewsets.ModelViewSet):
    queryset = Pengembalian.objects.all()
    serializer_class = PengembalianSerializer

class PeminjamanViewSet(viewsets.ModelViewSet):
    queryset = Peminjaman.objects.all()
    serializer_class = PeminjamanSerializer

class DendaViewSet(viewsets.ModelViewSet):
    queryset = Denda.objects.all()
    serializer_class = DendaSerializer

class ReservasiViewSet(viewsets.ModelViewSet):
    queryset = Reservasi.objects.all()
    serializer_class = ReservasiSerializer

class BukuViewSet(viewsets.ModelViewSet):
    queryset = Buku.objects.all()
    serializer_class = BukuSerializer