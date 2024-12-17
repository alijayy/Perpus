import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLayananOpen, setIsLayananOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State untuk token
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Memeriksa apakah token ada di localStorage
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // true jika ada token

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLayananOpen(false);
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Hapus token
    setIsAuthenticated(false);
    setIsDropdownOpen(false);
    navigate('/login');
  };

  const handleProfileClick = () => {
    if (isAuthenticated) {
      navigate('/profile'); // Jika login, menuju ke halaman Profile
    } else {
      setIsDropdownOpen(!isDropdownOpen); // Jika belum login, buka dropdown
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-[#B22222]' : 'bg-white'} shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className={`text-xl font-semibold transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-[#B22222]'
              }`}
            >
              Perpustakaan.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`hover:text-[#B22222] transition-colors duration-300 ${
                isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700'}`}>
              Home
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLayananOpen(!isLayananOpen)}
                className={`hover:text-[#B22222] transition-colors duration-300 ${isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700'}`}>
                Layanan
                <svg
                  className="w-4 h-4 ml-1 inline-block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isLayananOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu">
                    <Link
                      to="/peminjaman"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Peminjaman
                    </Link>
                    <Link
                      to="/pengembalian"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Pengembalian
                    </Link>
                    <Link
                      to="/reservasi"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Reservasi
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/koleksi"
              className={`hover:text-[#B22222] transition-colors duration-300 ${
              isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700'}`}>
              Koleksi
            </Link>
            <Link
              to="/kontak"
              className={`hover:text-[#B22222] transition-colors duration-300 ${
              isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700'}`}>
              Kontak
            </Link>
            <button
              onClick={handleProfileClick}
              className={`hover:text-[#B22222] transition-colors duration-300 ${
                isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-12 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {!isAuthenticated ? (
                    <>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Sign Up
                      </Link>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`hover:text-[#B22222] transition-colors duration-300 ${
                isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-700'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
