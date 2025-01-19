import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import SearchBar from '@/components/ui/SearchBar';

function Koleksi () {
  const [bukuList, setBukuList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/api/buku/") 
  //     .then((response) => {
  //       setBukuList(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  useEffect(() => {
    const fetchBuku = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/buku/", {
          params: { search: searchTerm }, // Tambahkan query parameter "search"
        });
        setBukuList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchBuku();
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F5E6D3] p-6 px-24 py-32">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Koleksi Buku
        </h1>
        <div className="flex">
          {/* kategori buku */}
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

          <div className="flex-1 p-4 ">
            <SearchBar onSearch={handleSearch} />
            <div className="grid grid-cols-3 gap-4">
              {bukuList.length > 0 ? (
                bukuList.map((buku) => (
                  <div
                    key={buku.id} 
                    className="bg-yellow-100 p-4 rounded-md shadow-md"
                  >
                    {buku.image_url && (
                      <img
                      src={buku.image_url}
                      alt={buku.judul_buku}
                      className="w-full h-24 md:h-40 lg:h-48 object-cover object-center rounded-md mb-4"
                    />
                    )}

                    <h3 className="font-semibold text-xl">
                      {buku.judul_buku}
                    </h3>
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