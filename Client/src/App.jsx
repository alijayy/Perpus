import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Register from './pages/Register'
import Login from './pages/Login'
import Layanan from './pages/Layanan'
import Reservasi from './pages/Reservasi'
// import Navbar from './components/navbar'
// import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/reservasi" element={<Reservasi />} />
      </Routes>
    </Router>
  )
}

export default App