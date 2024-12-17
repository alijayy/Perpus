import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Assuming Footer is already created
import SearchBar from '@/components/ui/SearchBar';

function Koleksi () {
  const [bukuList, setBukuList] = useState([]);

  // Fetch data from API Django
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/buku/") // Replace with your actual API URL
      .then((response) => {
        setBukuList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F5E6D3] p-6 px-16 py-32">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Koleksi Buku
        </h1>
        <div className="flex">
          {/* Kategori Buku */}
          <div className="w-1/4 p-4 bg-white shadow-md">
            <h2 className="text-lg font-semibold mb-4">Perpustakaan.</h2>
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:text-red-600">
                  Ilmu Pengetahuan Alam
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Seni Kebudayaan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Agama dan Kepercayaan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Sosial Politik
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Bahasa dan Sastra
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-600">
                  Pendidikan Jasmani
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom Buku */}
          <div className="flex-1 p-4 ">

            <SearchBar />

            <div className="grid grid-cols-3 gap-4">
              {/* Render Buku List */}
              {bukuList.length > 0 ? (
                bukuList.map((buku) => (
                  <div
                    key={buku.id} // Assuming id is the identifier
                    className="bg-yellow-100 p-4 rounded-md shadow-md"
                  >
                    <h3 className="font-semibold text-xl">{buku.judul_buku}</h3>
                    <p>Penulis: {buku.penulis}</p>
                    <p>
                      Tahun Terbit: {new Date(buku.tahun_terbit).getFullYear()}
                    </p>
                    <p>
                      Status:{" "}
                      {buku.status_buku === "T" ? "Tersedia" : "Dipinjam"}
                    </p>
                  </div>
                ))
              ) : (
                <p className="col-span-3 text-center text-gray-600">
                  No books found.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Koleksi;