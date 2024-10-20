'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Fan, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-slate-100 flex justify-between items-center py-4 px-6">
      <Link href="/">
        <Fan className='w-10 h-10 text-black animate-spin' />
      </Link>
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/" className="text-gray-700 hover:text-gray-900 font-light text-sm">WORK</Link>
        <Link href="/about" className="text-gray-700 hover:text-gray-900 font-light text-sm">ABOUT</Link>
        <Link href="/resume" className="text-gray-700 hover:text-gray-900 font-light text-sm">RESUME</Link>
        <button className="bg-gray-900 text-white px-4 py-2 text-sm font-light">EMAIL</button>
      </div>
      <div className="md:hidden">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md py-2 px-4 md:hidden z-50">
          <Link href="/" className="block py-2 text-gray-700 hover:text-gray-900 font-light text-sm">WORK</Link>
          <Link href="/about" className="block py-2 text-gray-700 hover:text-gray-900 font-light text-sm">ABOUT</Link>
          <Link href="/resume" className="block py-2 text-gray-700 hover:text-gray-900 font-light text-sm">RESUME</Link>
          <button className="block w-full text-left py-2 text-gray-700 hover:text-gray-900 font-light text-sm">EMAIL</button>
        </div>
      )}
    </nav>
  )
}