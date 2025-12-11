'use client'

import { Calendar, Phone, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your home healthcare needs. 
            We accept government assistance and private pay.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Calendar className="mx-auto mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Free Consultation</h3>
              <p className="text-sm opacity-90 mb-4">
                Discuss your needs with our care coordinator
              </p>
              <Link
                href="/book-service"
                className="inline-flex items-center text-sm font-semibold hover:underline"
              >
                Book Now <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Phone className="mx-auto mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <p className="text-sm opacity-90 mb-4">
                Speak with our team directly
              </p>
              <a
                href="tel:+13145550123"
                className="inline-flex items-center text-sm font-semibold hover:underline"
              >
                (314) 555-0123
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Mail className="mx-auto mb-4" size={32} />
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="text-sm opacity-90 mb-4">
                Send us your questions
              </p>
              <a
                href="mailto:info@elevatingwellness.com"
                className="inline-flex items-center text-sm font-semibold hover:underline"
              >
                info@elevatingwellness.com
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-service"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Calendar className="mr-2" size={20} />
              Schedule Free Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white hover:bg-white/20 transition-all duration-200"
            >
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

