import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  return (
    <header className="bg-hospital-cyan/95 text-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/') }>
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">🏥</div>
          <div>
            <h1 className="text-lg font-semibold">HC+</h1>
            <p className="text-xs">Suporte ágil para agendamentos</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">Sobre</Link>
          <Link to="/team" className="hover:underline">Integrantes</Link>
          <Link to="/faq" className="hover:underline">FAQ</Link>
          <Link to="/contact" className="bg-white text-hospital-cyan px-3 py-2 rounded-md font-medium">Contato</Link>
        </nav>

        <div className="md:hidden">
          <button className="p-2 bg-white/20 rounded">☰</button>
        </div>
      </div>
    </header>
  )
}
