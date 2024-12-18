function SearchBar() {
  return (
    <div className="flex gap-2 max-w-md w-full mb-10">
      <input
        type="text"
        placeholder="Cari nomor ISBN"
        className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#B22222]"
      />
      <button className="px-6 py-2 bg-[#B22222] text-white rounded-md hover:bg-[#8B0000] transition-colors">
        Cari
      </button>
    </div>
  )
}

export default SearchBar;  