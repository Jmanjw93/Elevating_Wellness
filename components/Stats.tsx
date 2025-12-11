'use client'

import { useEffect, useState } from 'react'
import { Users, Heart, Award, Clock } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'Clients Served', color: 'blue' },
  { icon: Heart, value: '98%', label: 'Satisfaction Rate', color: 'red' },
  { icon: Award, value: '50+', label: 'Certified Caregivers', color: 'yellow' },
  { icon: Clock, value: '24/7', label: 'Available Care', color: 'green' },
]

export default function Stats() {
  const [counted, setCounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setCounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  <Icon size={32} />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

