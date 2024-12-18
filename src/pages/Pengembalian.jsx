import React from "react";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


function Pengembalian() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = {}
  const formData = {}

  //Sample, harusnya ada dri database
  const bookData = [
    {
      kodeBuku: 'A493',
      judulBuku: 'Tegar',
      pengarang: 'Youra Tehzib',
      totalBuku: 1
    },
    {
      kodeBuku: 'B721',
      judulBuku: 'Pulang',
      pengarang: 'Tere Liye',
      totalBuku: 1
    },
    {
      kodeBuku: 'C105',
      judulBuku: 'Laskar Pelangi',
      pengarang: 'Andrea Hirata',
      totalBuku: 2
    }
  ]

  return (
  <div className="min-h-screen bg-[#F5E6D3] pt-24">
      <Navbar />
      <div className="max-w-4xl mx-auto p-32"> {/*p-6 */}
        <h1 className="text-2xl font-bold text-center mb-6">PENGEMBALIAN</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User Info Section */}
          <div className="bg-[#F8ECE5] rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <label className="w-32 text-gray-700">Email :</label>
                <input
                  type="text"
                  name="nim"
                  value={formData.nim}
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
                <label className="w-32 text-gray-700">Nama :</label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:border-[#B22222]"
                  required
                />
              </div>
            </div>
          </div>

          {/* Book Data Section */}
          <div className="bg-[#F8ECE5] rounded-lg overflow-hidden">
            <div className="bg-[#E8B69F] px-4 py-2 text-center font-semibold">
              DATA BUKU
            </div>
            <div className="p-4 overflow-x-auto">
              <table className="w-full min-w-max">
                <thead>
                  <tr className="bg-[#E8D5D5]">
                    <th className="py-2 px-4 text-left">Kode Buku</th>
                    <th className="py-2 px-4 text-left">Judul Buku</th>
                    <th className="py-2 px-4 text-left">Pengarang</th>
                    <th className="py-2 px-4 text-left">Total Buku</th>
                  </tr>
                </thead>
                <tbody>
                  {bookData.map((book, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-2 px-4">{book.kodeBuku}</td>
                      <td className="py-2 px-4">{book.judulBuku}</td>
                      <td className="py-2 px-4">{book.pengarang}</td>
                      <td className="py-2 px-4">{book.totalBuku}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dates Section */}
          <div className="bg-[#F8ECE5] rounded-lg p-6">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <label className="w-32 text-gray-700">Tanggal Pinjam :</label>
                <input
                  type="date"
                  name="tanggalPinjam"
                  value={formData.tanggalPinjam}
                  onChange={handleChange}
                  className="p-2 rounded border border-gray-300 focus:outline-none focus:border-[#B22222]"
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
                  className="p-2 rounded border border-gray-300 focus:outline-none focus:border-[#B22222]"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
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
  );
}

export default Pengembalian;