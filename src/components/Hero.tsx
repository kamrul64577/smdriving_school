'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-[#0b1120] text-white overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left */}
        <div>
          <span className="inline-block mb-6 rounded-full border border-white/20 px-4 py-1 text-sm tracking-wide text-white/80">
            DVSA Approved Driving Instructor
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Learn to Drive <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              With Confidence
            </span>
          </h1>

          <p className="text-lg text-white/70 max-w-xl mb-10">
            Premium one-to-one driving lessons designed to help you pass your test
            faster and become a safe, confident driver for life.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-7 py-3 font-semibold text-[#0b1120] hover:bg-white/90 transition"
            >
              Book Your Lesson
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-white/30 px-7 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              View Prices
            </Link>
          </div>
        </div>

        {/* Right card */}
        <div className="relative">
          <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 shadow-2xl">
            <h3 className="text-xl font-semibold mb-6">
              Why Students Choose Me
            </h3>

            <ul className="space-y-5 text-white/80">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                High first-time pass rate
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                Calm & patient teaching style
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Flexible lesson scheduling
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                Manual lessons
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
