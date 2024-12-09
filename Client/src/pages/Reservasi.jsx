import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'
function Reservasi() {
const [formData, setFormData] = useState({
      nim: '',
      nama: '',
      buku: '',
      catatan: '',
      tanggalPengambilan: ''
    })

    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData(prevState => ({
      ...prevState,
      [name]: value
      }))
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      // Handle form submission here
      console.log('Form submitted:', formData)
    }

return (
    <div className="min-h-[calc(100vh-64px)] bg-[#F5E6D3] pt-36 ">
      <Navbar />
      <div className="max-w-3xl mx-auto mb-36 p-6">
        <form onSubmit={handleSubmit} className="bg-[#F8ECE5] rounded-lg p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* NIM Field */}
            <div className="flex items-start gap-2">
              <label className="w-32 text-gray-700 text-sm pt-2">NIM :</label>
              <input
                type="number"
                name="nim"
                value={formData.nim}
                onChange={handleChange}
                className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:border-[#B22222]"
                required
              />
            </div>

            {/* Nama Field */}
            <div className="flex items-start gap-2">
              <label className="w-32 text-gray-700 text-sm pt-2">Nama :</label>
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

        {/* Buku Field */}
        <div className="flex items-start gap-2 mt-6">
            <label className="w-32 text-gray-700 text-sm pt-2">
            Buku yang ingin<br />di pinjam :
            </label>
            <input
                type="text"
                name="buku"
                value={formData.buku}
                onChange={handleChange}
                className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:border-[#B22222]"
                required
            />
        </div>

        {/* Catatan Field */}
        <div className="flex items-start gap-2 mt-6">
            <label className="w-32 text-gray-700 text-sm pt-2">Catatan :</label>
            <textarea
                name="catatan"
                value={formData.catatan}
                onChange={handleChange}
                rows={4}
                className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:border-[#B22222] resize-none"
            />
        </div>

          {/* Tanggal Pengambilan Field */}
          <div className="flex items-start gap-2 mt-6">
            <label className="w-32 text-gray-700 text-sm pt-2">
              Tanggal<br />Pengambilan :
            </label>
            <input
              type="date"
               name="tanggalPengambilan"
              value={formData.tanggalPengambilan}
              onChange={handleChange}
              className="flex-1 p-2 rounded border border-gray-300 focus:outline-none focus:border-[#B22222]"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
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

export default Reservasi;

