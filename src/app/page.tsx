import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: 'SM Driving School | Professional Driving Instruction',
  description: 'Expert driving lessons in London. High pass rates, flexible scheduling.',
  keywords: 'driving instructor, driving lessons, test preparation, London',
  openGraph: {
    title: 'SM Driving School',
    description: 'Professional driving instruction with 5+ years experience',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Testimonials />
    </main>
  )
}