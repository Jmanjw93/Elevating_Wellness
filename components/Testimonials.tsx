'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'St. Louis, MO',
    rating: 5,
    text: 'Elevating Wellness provided exceptional care for my mother. The caregivers were compassionate, professional, and always on time. They truly became part of our family.',
    service: 'Personal Care & Companion Services'
  },
  {
    name: 'Michael Chen',
    location: 'St. Charles, MO',
    rating: 5,
    text: 'The skilled nursing team helped manage my father\'s medications and health monitoring. Their expertise gave us peace of mind, and the insurance navigation was incredibly helpful.',
    service: 'Skilled Nursing & Medication Management'
  },
  {
    name: 'Patricia Williams',
    location: 'Jefferson County, MO',
    rating: 5,
    text: 'As a family caregiver, the respite care services were a lifesaver. Knowing my loved one was in good hands allowed me to take much-needed breaks. Highly recommend!',
    service: 'Respite Care'
  },
  {
    name: 'Robert Martinez',
    location: 'St. Louis County, MO',
    rating: 5,
    text: 'The memory care program for my wife with Alzheimer\'s has been outstanding. The caregivers are specially trained and provide activities that keep her engaged and happy.',
    service: 'Memory Care'
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from families we've had the privilege to serve
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <Quote className="text-blue-500 mr-2" size={24} />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
                <div className="text-sm text-blue-600 mt-1">{testimonial.service}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

