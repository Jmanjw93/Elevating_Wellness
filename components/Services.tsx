'use client'

import { Heart, Home, Stethoscope, Pill, Users, Brain, Activity, Shield } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Heart,
    title: 'Personal Care',
    description: 'Assistance with daily living activities, bathing, grooming, and personal hygiene.',
    features: ['ADL Support', 'Mobility Assistance', 'Personal Hygiene'],
    color: 'red'
  },
  {
    icon: Stethoscope,
    title: 'Skilled Nursing',
    description: 'Professional nursing care including medication management, wound care, and health monitoring.',
    features: ['Medication Management', 'Wound Care', 'Health Assessments'],
    color: 'blue'
  },
  {
    icon: Home,
    title: 'Companion Care',
    description: 'Friendly companionship, conversation, and assistance with light household tasks.',
    features: ['Social Interaction', 'Meal Preparation', 'Light Housekeeping'],
    color: 'green'
  },
  {
    icon: Brain,
    title: 'Memory Care',
    description: 'Specialized care for individuals with Alzheimer\'s, dementia, and memory-related conditions.',
    features: ['Cognitive Support', 'Safety Monitoring', 'Structured Activities'],
    color: 'purple'
  },
  {
    icon: Activity,
    title: 'Physical Therapy',
    description: 'In-home physical therapy to improve mobility, strength, and independence.',
    features: ['Exercise Programs', 'Mobility Training', 'Pain Management'],
    color: 'orange'
  },
  {
    icon: Pill,
    title: 'Medication Management',
    description: 'Professional oversight of medications, reminders, and coordination with healthcare providers.',
    features: ['Medication Reminders', 'Prescription Coordination', 'Dosage Monitoring'],
    color: 'indigo'
  },
  {
    icon: Users,
    title: 'Respite Care',
    description: 'Temporary care services to give family caregivers a well-deserved break.',
    features: ['Short-term Care', 'Flexible Scheduling', 'Family Support'],
    color: 'pink'
  },
  {
    icon: Shield,
    title: 'Insurance Navigation',
    description: 'Help with Medicaid, Medicare, and private insurance to maximize your benefits.',
    features: ['Benefit Verification', 'Claims Assistance', 'Coverage Optimization'],
    color: 'teal'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive home healthcare services tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const colorClasses = {
              red: 'bg-red-100 text-red-600',
              blue: 'bg-blue-100 text-blue-600',
              green: 'bg-green-100 text-green-600',
              purple: 'bg-purple-100 text-purple-600',
              orange: 'bg-orange-100 text-orange-600',
              indigo: 'bg-indigo-100 text-indigo-600',
              pink: 'bg-pink-100 text-pink-600',
              teal: 'bg-teal-100 text-teal-600',
            }

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 ${colorClasses[service.color as keyof typeof colorClasses]}`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-blue-600 font-semibold text-sm hover:text-blue-700 inline-flex items-center"
                >
                  Learn More →
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

