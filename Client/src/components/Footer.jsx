function Footer() {
  return (
    <footer className="bg-[#B22222] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="font-semibold mb-2">Tentang Kami</h3>
            <div className="h-1 w-12 bg-white mb-4"></div>
            <p className="text-sm">Informasi</p>
            <p className="text-sm">Visi & Misi</p>
            <p className="text-sm">Struktur Organisasi</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold mb-2">Layanan</h3>
            <div className="h-1 w-12 bg-white mb-4"></div>
            <p className="text-sm">Peminjaman</p>
            <p className="text-sm">Pengembalian</p>
            <p className="text-sm">Perpanjangan</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold mb-2">Kontak</h3>
            <div className="h-1 w-12 bg-white mb-4"></div>
            <p className="text-sm">Alamat</p>
            <p className="text-sm">Email</p>
            <p className="text-sm">Telepon</p>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 Perpustakaan Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;