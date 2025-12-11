import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ServiceArea from '@/components/ServiceArea'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <ServiceArea />
      <Testimonials />
      <CTA />
    </main>
  )
}
