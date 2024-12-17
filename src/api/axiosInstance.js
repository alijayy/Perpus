import axios from 'axios';

// Buat instance axios dengan konfigurasi dasar
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/', // Sesuaikan baseURL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Tambahkan interceptor untuk menambahkan token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Ambil token dari localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Tambahkan header Authorization
  }
  return config;
}, (error) => {
  return Promise.reject(error); // Tangani error
});

export default axiosInstance;
