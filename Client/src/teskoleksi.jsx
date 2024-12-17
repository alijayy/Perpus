import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/ui/SearchBar";

const Koleksi = () => {
  const [bukuList, setBukuList] = useState([]);

  // Fetch data dari API Django
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/buku/")
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
      <div className="min-h-screen bg-gray-50 py-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-10 pt-24">
          Koleksi Buku Perpustakaan
        </h1>
        {/* <div className="flex container mx-auto">
          {/* Sid
          <div className="w-1/4 p-4 bg-white rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-6 text-gray-700">Kategori</h2>
            <ul className="space-y-4 text-gray-600">
              {[
                "Ilmu Pengetahuan Alam",
                "Seni Kebudayaan",
                "Agama dan Kepercayaan",
                "Sosial Politik",
                "Bahasa dan Sastra",
                "Pendidikan Jasmani",
              ].map((kategori, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-red-600 transition duration-200"
                  >
                    {kategori}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Daftar Buku */}
          <div className="flex-1 p-6">
            <div className="flex mb-6 items-center justify-between">
              <SearchBar />
            </div>

            {/* Grid Buku */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bukuList.length > 0 ? (
                bukuList.map((buku) => (
                  <div
                    key={buku.id}
                    className="bg-yellow-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  >
                    {/* Gambar Buku */}
                    {buku.image_url && (
                      <img
                        src={buku.image_url}
                        alt={buku.judul_buku}
                        className="w-full h-32 md:h-40 lg:h-48 object-cover object-center rounded-md mb-4"
                      />
                    )}
                    {/* Detail Buku */}
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">
                      {buku.judul_buku}
                    </h3>
                    <p className="text-sm text-gray-700">
                      <strong>Penulis:</strong> {buku.penulis}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Tahun Terbit:</strong>{" "}
                      {buku.tahun_terbit
                        ? new Date(buku.tahun_terbit).getFullYear()
                        : "Tidak diketahui"}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Status:</strong>{" "}
                      {buku.status_buku === "T" ? "Tersedia" : "Dipinjam"}
                    </p>
                  </div>
                ))
              ) : (
                <p className="col-span-3 text-center text-gray-600">
                  Tidak ada buku yang ditemukan.
                </p>
              )}
            </div>
          </div>
        </div>
      
      <Footer />
    </>
  );
};

export default Koleksi;