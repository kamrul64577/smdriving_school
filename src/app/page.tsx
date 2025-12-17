import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: 'ProDrive Academy | Professional Driving Instruction',
  description: 'Expert driving lessons in London. High pass rates, flexible scheduling.',
  keywords: 'driving instructor, driving lessons, test preparation, London',
  openGraph: {
    title: 'ProDrive Academy',
    description: 'Professional driving instruction with 15+ years experience',
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