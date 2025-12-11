'use client'

import { MapPin, Navigation } from 'lucide-react'

const areas = [
  'St. Louis City',
  'St. Louis County',
  'St. Charles County',
  'Jefferson County',
  'Franklin County',
  'Madison County (IL)',
  'St. Clair County (IL)',
]

export default function ServiceArea() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <MapPin size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Service Area
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Proudly serving St. Louis, Missouri and surrounding communities
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Areas We Serve</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {areas.map((area, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-white/10 rounded-lg p-3 backdrop-blur-sm"
                    >
                      <Navigation className="mr-3" size={20} />
                      <span className="font-semibold">{area}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-lg opacity-90">
                  Don't see your area? <span className="font-semibold">Contact us</span> to see if we can serve you!
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 text-gray-900">
                <h4 className="text-xl font-bold mb-4">Interactive Service Area Map</h4>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-600">Interactive map coming soon</p>
                    <p className="text-sm text-gray-500 mt-2">Enter your ZIP code to check availability</p>
                  </div>
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Enter ZIP code"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                  />
                  <button className="w-full mt-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all">
                    Check Availability
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

