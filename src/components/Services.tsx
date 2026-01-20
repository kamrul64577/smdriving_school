'use client'

import { Service } from '@/types'
import Link from 'next/link';

const services: Service[] = [
  {
    id: '1',
    name: 'Standard Driving Lesson (1 Hour)',
    description: 'One-to-one professional driving lesson suitable for all skill levels.',
    price: '£35 / hour',
  },
  {
    id: '2',
    name: 'Extended Driving Lesson (2 Hours)',
    description: 'Longer lesson for faster progress, better confidence, and test readiness.',
    price: '£65 / 2 hours',
  },
  {
    id: '3',
    name: 'Weekly Intensive Package',
    description: 'Ideal for learners who want quicker results with regular practice.',
    price: '£150 / week (5 hours)',
  },
];


export default function Services() {
  return (
    <section className="relative bg-[#0b1120] py-14 text-white overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-96 w-96 bg-blue-500/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 bg-cyan-400/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <span className="inline-block mb-4 text-sm tracking-widest text-blue-400 uppercase">
            Services & Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Premium Driving <br /> Instruction
          </h2>
          <p className="text-lg text-white/70">
            Carefully designed lesson packages focused on safety, confidence, and
            long-term driving excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/30 hover:bg-white/10"
            >
              {/* Accent line */}
              <div className="mb-6 h-px w-12 bg-gradient-to-r from-blue-400 to-cyan-300" />

              <h3 className="text-xl font-semibold mb-3">
                {service.name}
              </h3>

              <p className="text-white/70 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-blue-300">
                  {service.price}
                </span>

                <span className="text-sm text-white/50 group-hover:text-white transition">
                  <Link href="/services">Learn more →</Link>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
