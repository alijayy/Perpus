import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';

function Profile() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("username");
    setUsername(user); // Set username di state
  }, []); // Menambahkan [] agar hanya dijalankan sekali setelah komponen pertama kali dirender

  const handleLogout = () => {
    localStorage.removeItem('token'); // Menghapus token
    localStorage.removeItem('username'); // Menghapus username
    navigate('/login');
  };

  const handleUpdate = () => {
    console.log('Update profile');
    // Add your update logic here
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
                className="text-gray-600 hover:text-[#B22222]"
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
                Log out
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-center mb-6">Data Diri</h1>
            <div className="bg-[#FFF9E5] rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <label className="w-32 text-gray-700">Nama :</label>
                  <div className="flex-1">
                    <input
                      type="text"
                      value={username}
                      readOnly
                      className="w-full p-2 bg-white rounded border border-gray-300"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <label className="w-32 text-gray-700">Gender :</label>
                  <div className="flex-1">
                    <input
                      type="text"
                      value="-"
                      readOnly
                      className="w-full p-2 bg-white rounded border border-gray-300"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <label className="w-32 text-gray-700">Jenis Anggota :</label>
                  <div className="flex-1">
                    <input
                      type="text"
                      value="-"
                      readOnly
                      className="w-full p-2 bg-white rounded border border-gray-300"
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    onClick={handleUpdate}
                    className="bg-[#B22222] text-white px-6 py-2 rounded hover:bg-[#8B0000] transition-colors"
                  >
                    Perbarui
                  </button>
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

export default Profile;
