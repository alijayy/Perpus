import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function login({ setIsAuthenticated }) {
  const [nama, setUsername] = useState(''); // Nama pengguna
  const [password, setPassword] = useState(''); // Password
  const [rememberMe, setRememberMe] = useState(false); // Checkbox "ingat saya"
  const navigate = useNavigate();

  useEffect(() => {
    // Ambil token dari localStorage jika sudah login sebelumnya
    const token = localStorage.getItem('token');
    if (token) {
      axios.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      }, (error) => {
        return Promise.reject(error);
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Request ke server
      const Response = await axios.post("http://localhost:8000/api/login/", { // endpoint API
        nama,
        password,
      });

      // Simpan Token dan Username di localStorage
      localStorage.setItem("token", Response.data.token); // Simpan token
      localStorage.setItem("username", Response.data.nama); // Simpan nama pengguna

      setIsAuthenticated(true); // Set state isAuthenticated
      alert("Login Berhasil");

      navigate('/'); // Redirect ke halaman utama
    } catch (error) {
      console.error("Login Gagal:", error);
      alert("Login gagal. Coba lagi");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5E6D3]">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-[#B22222] mb-6 text-center">Masuk</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-1">
              Nama Pengguna
            </label>
            <input
              type="text"
              id="nama"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#B22222]"
              value={nama}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#B22222]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-[#B22222] focus:ring-[#B22222] border-gray-300 rounded"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Ingat Saya
              </label>
            </div>
            <a href="#" className="text-sm text-[#B22222] hover:underline">
              Lupa Sandi?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#B22222] text-white py-2 px-4 rounded-md hover:bg-[#8B0000] focus:outline-none focus:ring-2 focus:ring-[#B22222] focus:ring-opacity-50"
          >
            Masuk
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Gak punya akun?{' '}
          <button onClick={() => navigate('/register')} className="text-[#B22222] hover:underline">
            Daftar
          </button>
        </p>
      </div>
    </div>
  );
}

export default login;
