import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

function Riwayat() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('username');
    setUsername(user);
  }, []);

  const borrowingHistory = [
    {
      judulBuku: "React JS Fundamentals",
      tanggalPeminjaman: "2024-01-15",
      tanggalPengembalian: "2024-01-22",
      status: "Dikembalikan",
      denda: "Rp0"
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem('token'); // Menghapus token
    localStorage.removeItem('username'); // Menghapus username
    navigate('/login');
  };

  const handleUpdate = () => {
    console.log('Update profile');
    // Logika update profil bisa ditambahkan di sini
  };

  return (
    <div className="min-h-screen bg-[#F5E6D3] pt-24">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="w-full md:w-64 space-y-6">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold">{username}</h2>
            </div>
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/riwayat"
                className="text-[#B22222] font-medium"
              >
                Riwayat Peminjaman
              </Link>
              <Link 
                to="/profile"
                className="text-gray-600 hover:text-[#B22222]"
              >
                Edit profil
              </Link>
              <button 
                onClick={handleLogout}
                className="text-left text-gray-600 hover:text-[#B22222]"
              >
                log out
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold  text-center mb-6">Riwayat peminjaman</h1>
            
            <div className="bg-[#FFF9E5] rounded-lg p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#E8D5D5]">
                      <th className="py-2 px-4 text-left">Judul Buku</th>
                      <th className="py-2 px-4 text-left">Tanggal peminjaman</th>
                      <th className="py-2 px-4 text-left">Tanggal pengembalian</th>
                      <th className="py-2 px-4 text-left">Status</th>
                      <th className="py-2 px-4 text-left">Denda</th>
                    </tr>
                  </thead>
                  <tbody>
                    {borrowingHistory.map((item, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-2 px-4">{item.judulBuku}</td>
                        <td className="py-2 px-4">{item.tanggalPeminjaman}</td>
                        <td className="py-2 px-4">{item.tanggalPengembalian}</td>
                        <td className="py-2 px-4">{item.status}</td>
                        <td className="py-2 px-4">{item.denda}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Buku</span>
                  <span>{borrowingHistory.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Riwayat;
