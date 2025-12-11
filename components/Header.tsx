'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Heart } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <Heart className="text-white" size={24} />
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900">Elevating Wellness</div>
              <div className="text-xs text-gray-600">Home Healthcare</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-service"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Book Service
            </Link>
            <a
              href="tel:+13145550123"
              className="flex items-center space-x-2 text-blue-600 font-semibold"
            >
              <Phone size={18} />
              <span>(314) 555-0123</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book-service"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-lg text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Service
              </Link>
              <a
                href="tel:+13145550123"
                className="flex items-center justify-center space-x-2 text-blue-600 font-semibold"
              >
                <Phone size={18} />
                <span>(314) 555-0123</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

