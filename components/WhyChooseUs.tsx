'use client'

import { CheckCircle, Shield, Clock, Users, Award, Heart } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed, bonded, and insured for your peace of mind'
  },
  {
    icon: Users,
    title: 'Experienced Caregivers',
    description: 'Background-checked, certified professionals with years of experience'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock care available whenever you need it'
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Rigorous quality standards and regular care plan reviews'
  },
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'Person-centered approach with genuine care and respect'
  },
  {
    icon: CheckCircle,
    title: 'Insurance Accepted',
    description: 'Medicaid, Medicare, and most private insurance plans accepted'
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Elevating Wellness?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional home healthcare that puts you first
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl border-2 border-gray-100 hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Personalized Care Plans
                </h3>
                <p className="text-gray-700 mb-6">
                  Every client receives a customized care plan developed in collaboration with 
                  you, your family, and your healthcare providers. We adapt our services to 
                  meet your changing needs.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Initial assessment and care plan development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Regular care plan reviews and adjustments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Family involvement and communication</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Service Areas</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ St. Louis City</li>
                  <li>✓ St. Louis County</li>
                  <li>✓ St. Charles County</li>
                  <li>✓ Jefferson County</li>
                  <li>✓ Franklin County</li>
                  <li>✓ Surrounding Metro Areas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

