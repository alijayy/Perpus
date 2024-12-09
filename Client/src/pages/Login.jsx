import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle login logic here
        console.log('Login attempted', { username, password, rememberMe })
    }

    return(
    <div className="min-h-screen flex items-center justify-center bg-[#F5E6D3]">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-[#B22222] mb-6 text-center">Masuk</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Nama Pengguna
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#B22222]"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#B22222]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-[#B22222] focus:ring-[#B22222] border-gray-300 rounded"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                Ingat Saya
              </label>
            </div>
            <a href="#" className="text-sm text-[#B22222] hover:underline">
              Lupa Password?
            </a>
          </div>
          <button onClick={() => navigate('/')} className="w-full bg-[#B22222] text-white py-2 px-4 rounded-md hover:bg-[#8B0000] focus:outline-none focus:ring-2 focus:ring-[#B22222] focus:ring-opacity-50">
            Masuk
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Gak punya akun?{' '}
          <button onClick={() => navigate('/register')}  className="text-[#B22222] hover:underline">
            Daftar
          </button>
        </p>
      </div>
    </div>
    )
}

export default login;