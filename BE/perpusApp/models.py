from django.db import models # type: ignore

# Create your models here.
class member(models.Model):
    jenis_anggota = [
        ('M', 'Mahasiswa'),
        ('D', 'Dosen'),
        ('U', 'Umum'),
    ]

    gender = [
        ('L', 'Laki-laki'),
        ('P', 'Perempuan'),
    ]

    nama = models.CharField(max_length=100)
    password = models.CharField(max_length=50)
    gender = models.CharField(max_length=20, choices=gender, null=True)
    email = models.EmailField()
    jenis_anggota = models.CharField(max_length=30, choices=jenis_anggota, default='U')

    def __str__(self):
        return self.nama
    
    class Meta:
        db_table = 'member'

class buku(models.Model):
    status_buku = [
        ('T', 'Tersedia'),
        ('D', 'Dipinjam'),
        ('R', 'Reservasi'),
    ]
    
    penulis = models.CharField(max_length=100)
    penerbit = models.CharField(max_length=100)
    tahun_terbit = models.DateField()
    nomor_isbn = models.CharField(max_length=100)
    judul_buku = models.CharField(max_length=100)
    jumlah_buku = models.IntegerField()
    status_buku = models.CharField(max_length=30, choices=status_buku) 
    nama_kategori = models.CharField(max_length=50) #choices

    def __str__(self):
        return self.judul_buku
    
    class Meta:
        db_table = 'buku'

class peminjaman(models.Model):
    status_peminjaman = [
        ('P', 'Dipinjam'),
        ('K', 'DiKembalikam'),
    ]

    id_member = models.ForeignKey(member, on_delete=models.CASCADE, related_name='id_member')
    id_buku = models.ForeignKey(buku, on_delete=models.CASCADE, related_name='id_buku')
    tgl_peminjaman = models.DateField()
    batas_peminjaman = models.DateTimeField()
    status_peminjaman = models.CharField(max_length=30, choices=status_peminjaman) 

    def __str__(self):
        return str(self.id_member)

    class Meta:
        db_table = 'peminjaman'

class reservasi(models.Model):
    status_reservasi = [
        ('A', 'Aktif'),
        ('C', 'Dibatalkan'),
        ('S', 'Selesai'),
    ]

    id_member = models.ForeignKey(member, on_delete=models.CASCADE, related_name='id_member_reservasi')
    id_buku = models.ForeignKey(buku, on_delete=models.CASCADE, related_name='id_buku_reservasi')
    tgl_reservasi = models.DateField()
    tgl_pengembalian = models.DateField()
    status_reservasi = models.CharField(max_length=30, choices=status_reservasi) 

    def __str__(self):
        return str(self.id_member)

    class Meta:
        db_table = 'reservasi'

class pengembalian(models.Model):
    status_pengembalian = [
        ('D', 'Dikembalikan'),
        ('T', 'Terlambat'),
    ]

    id_peminjaman = models.ForeignKey(peminjaman, on_delete=models.CASCADE, related_name='id_peminjaman')
    tgl_pengembalian = models.DateField()
    status_pengembalian = models.CharField(max_length=30, choices=status_pengembalian)

    def __str__(self):
        return str(self.id_peminjaman)

    class Meta:
        db_table = 'pengembalian'

class denda(models.Model):
    status_denda = [
        ('L', 'Lunas'),
        ('B', 'Belum Lunas'),
    ]

    id_peminjaman = models.ForeignKey(peminjaman, on_delete=models.CASCADE, related_name='id_peminjaman_denda')
    id_pengembalian = models.ForeignKey(pengembalian, on_delete=models.CASCADE, related_name='id_pengembalian_denda')
    jml_hari = models.IntegerField()
    tgl_denda = models.DateField()
    jml_denda = models.IntegerField()
    status_denda = models.CharField(max_length=30, choices=status_denda) 

    def __str__(self):
        return str(self.id_peminjaman)

    class Meta:
        db_table = 'denda'

