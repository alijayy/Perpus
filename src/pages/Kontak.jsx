import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function Kontak() {
  const teamMembers = [
    {
      name: "Aam Trianawati",
      role: ["Co-founder, Chairman,", "Executive Director"],
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      name: "Ali Zainal Abidin Zaky",
      role: ["Co-founder, Chairman,", "Executive Director"],
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      name: "Hilma Nurul Farohah",
      role: ["Co-founder, Chairman,", "Executive Director"],
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      name: "Rina Tri Agustianis",
      role: ["Co-founder, Chairman,", "Executive Director"],
      image: "/placeholder.svg?height=200&width=200"
    }
  ]
    return (
        <>
        {/* Kontak Section */}
        <Navbar />
        <div className="min-h-screen bg-[#F5E6D3] pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">
          Kelompok 8
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white w-48 h-48 rounded-full overflow-hidden mb-4 grayscale shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-center mb-1">
                {member.name}
              </h3>
              {member.role.map((line, i) => (
                <p key={i} className="text-sm text-gray-600 text-center">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
        <Footer />
        </>
    )
}

export default Kontak;
