import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function register(){
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setData] = useState([]);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  useEffect(() => {
    axios.get('http://localhost:8000/api/users/')
      .then(Response => {
        setData(Response.data);
      })
      .catch(error => {
        console.error('Error Fetching data:', error);
      })
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Handle registration logic here
    try {
      // Mengirim data ke API menggunakan Axios
      const response = await axios.post('http://localhost:8000/api/users/', {
        email: formData.email,
        password: formData.password,
        confirm_password: formData.confirmPassword,
      });

      alert(response.data.message || 'Registrasi berhasil!');
      navigate('/login'); // Redirect ke halaman login
    } catch (error) {
      // Tangkap dan tampilkan pesan error
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.detail || 'Gagal Mendaftar. Periksa kembali data Anda.');

      } else {
        setErrorMessage('Terjadi kesalahan. Silakan coba lagi.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5E6D3]">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-[#B22222] mb-6 text-center">Daftar</h2>
        {errorMessage && (
          <div className='mb-4 text-red-500 text-sm text-center'>
            {errorMessage}
          </div>
        )}








        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#B22222]"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password :
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#B22222]"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Konfirmasi Password :
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#B22222]"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/*onClick={() => navigate('/login')}*/}
          <button type="submit" className="w-full bg-[#B22222] text-white py-2 px-4 rounded-md hover:bg-[#8B0000] focus:outline-none focus:ring-2 focus:ring-[#B22222] focus:ring-opacity-50">
            Daftar
          </button>
        </form>
      </div>
    </div>
    )
}

export default register;