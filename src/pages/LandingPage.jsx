import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/navbar';
import SearchBar from '@/components/ui/SearchBar';
import Footer from '@/components/Footer';
import BookCard from '@/components/ui/book-card';
import axios from 'axios';

function home() {
  const [username, setUsername] = useState('');
  const [bukuList, setBukuList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("username");
    setUsername(user);
    axios.get("http://127.0.0.1:8000/api/buku/") 
      .then((response) => {
        setBukuList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[#F5E6D3] pt-4">
      <Navbar />

      <main className="max-w-7xl mx-auto px-24 py-8 pt-24">
        <section className="mb-16 gap-10">
          {username && (
            <h1 className="text-4xl font-bold text-gray-900 mb-2 text-underline">
              Selamat datang {username} !
            </h1>
          )}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Buku jendela ilmu.
          </h1>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Perpustakaan Digital: Membuka Jendela Dunia, Satu Halaman Sekaligus.
          </p>
          {/* <SearchBar /> */}
        </section>

        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Rekomendasi Buku
            </h2>
            <button onClick={() => navigate('/koleksi')} className="px-6 py-2 bg-[#B22222] text-white rounded-md hover:bg-[#8B0000] transition-colors">
              Lihat Semua
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {bukuList.slice(0, 12).map((buku, i) => (
              <BookCard 
                key={i} 
                title={buku.judul_buku} 
                image={buku.image_url} 
              />
            ))}
          </div>
        </section>

        <section className="bg-[#FFF9E5] rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img
                src="https://i.pinimg.com/736x/e4/64/9b/e4649b188c9d293c995c10dcc2877c2b.jpg"
                alt="gambar orang "
                className="w-72 h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Mau reservasi?
              </h2>
              <button onClick={() => navigate('/reservasi')} className="px-6 py-2 bg-[#B22222] text-white rounded-md hover:bg-[#8B0000] transition-colors">
                Reservasi Sekarang
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default home;