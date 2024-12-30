import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Login from './pages/Login'
import Layanan from './pages/Layanan'
import Reservasi from './pages/Reservasi'
import Pengembalian from './pages/Pengembalian'
import Peminjaman from './pages/Peminjaman'
import Koleksi from './pages/Koleksi'
import Kontak from './pages/Kontak';
import Profile from './pages/Profile';
import Riwayat from './pages/Riwayat';
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path='/login'
          element={<Login setIsAuthenticated={setIsAuthenticated} />}/>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/peminjaman" element={<Peminjaman />} />
        <Route path="/pengembalian" element={<Pengembalian />} />
        <Route path="/reservasi" element={<Reservasi />} />
        <Route path="/koleksi" element={<Koleksi />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/riwayat" element={<Riwayat />} />

      </Routes>
    </Router>
  )
}

export default App