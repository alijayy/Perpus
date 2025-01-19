import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Profile() {
  const [username, setUsername] = useState("");
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    gender: "",
    jenis_anggota: "",
  })

  useEffect(() => {
    const user = localStorage.getItem("username");
    setUsername(user);

    const fetchUserData = async () => {
      try {
        console.log('Fetching data for user: ${username}');
        const Response = await axios.get(`http://localhost:8000/api/member/${user}/`);
        const { nama, email, gender, jenis_anggota } = Response.data;
        setFormData({ nama, email, gender, jenis_anggota });
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    }

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8000/api/member/${username}/`, formData);
      MySwal.fire({
        title: 'Profil berhasil diperbarui!',
        text: '',
        icon: 'success',
      })
    } catch (error) {
      console.error("Gagal memperbarui profil:", error);
      MySwal.fire({
        title: 'Error!',
        text: 'Terjadi kesalahan. Coba lagi.',
        icon: 'error',
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
  };


  return (
    <div className="min-h-screen bg-[#F5E6D3] pt-24">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* SIDEBAR */}
          <div className="w-full md:w-64 space-y-6">
            <div className="flex flex-col items-center">
              <div className="bg-white w-32 h-32 rounded-full overflow-hidden mb-8 shadow-lg">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  className="w-full h-full object-cover "
                  alt="profile-pic"
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
          {/* END SIDEBAR */}

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-center mb-6">Data Diri</h1>

            <div className="bg-[#FFF9E5] rounded-lg p-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <label className="w-32 text-gray-700">Nama :</label>
                  <div className="flex-1">
                    <input
                      type="text"
                      id="nama"
                      name="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      className="w-full p-2 bg-white rounded border border-gray-300"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <label className="w-32 text-gray-700">Email :</label>
                  <div className="flex-1">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 bg-white rounded border border-gray-300"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <label className="w-32 text-gray-700">Gender :</label>
                  <div className="flex-1">
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full p-2 bg-white rounded border border-gray-300">
                      <option value="">Pilih Gender</option>
                      <option value="L">Laki-Laki</option>
                      <option value="P">Perempuan</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <label className="w-32 text-gray-700">Jenis Anggota :</label>
                  <div className="flex-1">
                    <select
                      name="jenis_anggota"
                      value={formData.jenis_anggota}
                      onChange={handleChange}
                      className="w-full p-2 bg-white rounded border border-gray-300"
                    >
                      <option value="">Pilih Jenis Anggota</option>
                      <option value="U">Umum</option>
                      <option value="M">Mahasiswa</option>
                      <option value="D">Dosen</option>
                    </select>
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