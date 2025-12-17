'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 backdrop-blur-xl bg-[#0b1120]/70 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-gray-200 flex items-center gap-2 hover:scale-105 transition-transform duration-300"
        >
          🚗 SM Driving School
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {["Home","About","Services","Areas"].map((link) => (
            <Link
              key={link}
              href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className="text-white/80 hover:text-white font-medium transition-all duration-300 relative group"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 bg-cyan-400 text-[#0b1120] rounded-xl font-semibold shadow-lg hover:bg-cyan-300 transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden relative">
          <button
            className="text-white/80 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-[#0b1120]/90 backdrop-blur-xl rounded-2xl shadow-2xl py-2 border border-white/10 animate-slide-down">
              {["Home","About","Services","Areas"].map((link) => (
                <Link
                  key={link}
                  href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="block px-6 py-3 text-white/80 font-medium hover:bg-white/5 rounded-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block mx-6 mt-2 px-6 py-3 bg-cyan-400 text-[#0b1120] rounded-xl font-semibold shadow-lg hover:bg-cyan-300 transition-all"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Slide-down animation */}
      <style jsx>{`
        .animate-slide-down {
          animation: slide-down 0.25s ease-out forwards;
        }
        @keyframes slide-down {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  )
}
