import React from "react";
import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

function Peminjaman() {
  const [formData, setFormData] = useState({
    email: '',
    nama: '',
    noTransaksi: '',
    tgl_peminjaman: '',
    tgl_pengembalian: ''
  })

  const [searchData, setSearchData] = useState({
    nomor_isbn: '',
    judul_buku: '',
    penulis: ''
  })

  const [books, setBooks] = useState([
    {
      kodeBuku: 'A493',
      judulBuku: 'Tegar',
      pengarang: 'Youra Tehzib',
      totalBuku: 1
    }
  ])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearchChange = (e) => {
    const { name, value } = e.target
    setSearchData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleAddBook = () => {
    if (searchData.kodeBuku && searchData.judulBuku && searchData.pengarang) {
      setBooks(prevBooks => [...prevBooks, {
        kodeBuku: searchData.kodeBuku,
        judulBuku: searchData.judulBuku,
        pengarang: searchData.pengarang,
        totalBuku: 1
      }])
      setSearchData({ kodeBuku: '', judulBuku: '', pengarang: '' })
    }
  }

  const handleDeleteBook = (index) => {
    setBooks(prevBooks => prevBooks.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', { ...formData, books })
  }

  return (
    <div className="min-h-screen bg-[#F5E6D3]">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 pt-24">
        <h1 className="text-2xl font-bold text-center mb-6">PEMINJAMAN</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-[#F8ECE5] rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <label className="w-24 text-gray-700">Email :</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:border-[#B22222]"
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="w-32 text-gray-700">No. Transaksi :</label>
                <input
                  type="text"
                  name="noTransaksi"
                  value={formData.noTransaksi}
                  onChange={handleChange}
                  className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:border-[#B22222]"
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="w-24 text-gray-700">Nama :</label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:border-[#B22222]"
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="w-32 text-gray-700">Tanggal Pinjam :</label>
                <input
                  type="date"
                  name="tanggalPinjam"
                  value={formData.tanggalPinjam}
                  onChange={handleChange}
                  className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:border-[#B22222]"
                  required
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="w-32 text-gray-700">Tanggal Kembali :</label>
                <input
                  type="date"
                  name="tanggalKembali"
                  value={formData.tanggalKembali}
                  onChange={handleChange}
                  className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:border-[#B22222]"
                  required
                />
              </div>
            </div>
          </div>

          <div className="bg-[#F8ECE5] rounded-lg overflow-hidden">
            <div className="bg-[#E8B69F] px-4 py-2 text-center font-semibold">
              DATA BUKU
            </div>
            <div className="p-4">

              <div className="flex gap-2 mb-4">
                <div className="flex-1 flex items-center gap-2">
                  <label className="whitespace-nowrap text-gray-700">Kode Buku:</label>
                  <input
                    type="text"
                    name="kodeBuku"
                    value={searchData.kodeBuku}
                    onChange={handleSearchChange}
                    className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:border-[#B22222] bg-[#F2E2D9]"
                  />
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <input
                    type="text"
                    name="judulBuku"
                    value={searchData.judulBuku}
                    onChange={handleSearchChange}
                    placeholder="Judul Buku"
                    className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:border-[#B22222] bg-[#F2E2D9]"
                  />
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <input
                    type="text"
                    name="pengarang"
                    value={searchData.pengarang}
                    onChange={handleSearchChange}
                    placeholder="Pengarang"
                    className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:border-[#B22222] bg-[#F2E2D9]"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleAddBook}
                  className="p-2 text-gray-600 hover:text-[#B22222]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="p-2 text-gray-600 hover:text-[#B22222]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              <table className="w-full">
                <thead>
                  <tr className="bg-[#E8D5D5]">
                    <th className="py-2 px-4 text-left">Kode Buku</th>
                    <th className="py-2 px-4 text-left">Judul Buku</th>
                    <th className="py-2 px-4 text-left">Pengarang</th>
                    <th className="py-2 px-4 text-left">Total Buku</th>
                    <th className="py-2 px-4 text-left">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-2 px-4">{book.kodeBuku}</td>
                      <td className="py-2 px-4">{book.judulBuku}</td>
                      <td className="py-2 px-4">{book.pengarang}</td>
                      <td className="py-2 px-4">{book.totalBuku}</td>
                      <td className="py-2 px-4">
                        <button
                          type="button"
                          onClick={() => handleDeleteBook(index)}
                          className="text-gray-600 hover:text-[#B22222]"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#B22222] text-white px-6 py-2 rounded hover:bg-[#8B0000] transition-colors"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Peminjaman;