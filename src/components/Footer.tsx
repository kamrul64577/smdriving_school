'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-[#0b1120] text-white py-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">🚗 SM Driving School</h3>
            <p className="text-white/70">
              Professional driving instruction for all levels.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors duration-300">About</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link href="/areas" className="hover:text-cyan-400 transition-colors duration-300">Areas</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="tel:+447700900000" className="hover:text-cyan-400 transition-colors duration-300">
                  +44 7446095099
                </a>
              </li>
              <li>
                <a href="mailto:info@prodrive.com" className="hover:text-cyan-400 transition-colors duration-300">
                  info@smdrivingschool.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 text-white/70">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Facebook</a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Instagram</a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Twitter</a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-white/50 text-sm">
            © 2025 SM Driving School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
