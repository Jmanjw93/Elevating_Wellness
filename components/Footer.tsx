'use client'

import Link from 'next/link'
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Heart className="text-white" size={20} />
              </div>
              <div className="font-bold text-white">Elevating Wellness</div>
            </div>
            <p className="text-sm mb-4">
              Providing compassionate, professional home healthcare services in St. Louis, Missouri and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/book-service" className="hover:text-blue-400 transition-colors">
                  Book Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/personal-care" className="hover:text-blue-400 transition-colors">
                  Personal Care
                </Link>
              </li>
              <li>
                <Link href="/services/skilled-nursing" className="hover:text-blue-400 transition-colors">
                  Skilled Nursing
                </Link>
              </li>
              <li>
                <Link href="/services/memory-care" className="hover:text-blue-400 transition-colors">
                  Memory Care
                </Link>
              </li>
              <li>
                <Link href="/services/respite-care" className="hover:text-blue-400 transition-colors">
                  Respite Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Phone className="mr-3 mt-1 flex-shrink-0" size={18} />
                <a href="tel:+13145550123" className="hover:text-blue-400 transition-colors">
                  (314) 555-0123
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 mt-1 flex-shrink-0" size={18} />
                <a href="mailto:info@elevatingwellness.com" className="hover:text-blue-400 transition-colors">
                  info@elevatingwellness.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>
                  St. Louis, MO<br />
                  Serving surrounding areas
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Elevating Wellness. All rights reserved. | 
            <Link href="/privacy" className="ml-2 hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            {' | '}
            <Link href="/terms" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Licensed Home Healthcare Provider | Accepting Medicaid, Medicare, and Private Pay
          </p>
        </div>
      </div>
    </footer>
  )
}

