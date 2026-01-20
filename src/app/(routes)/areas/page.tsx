import MapEmbed from '@/components/MapEmbed'
import { MapPin, Phone, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Areas Covered | SM Driving School',
  description: 'We provide professional driving instruction across Manchester and surrounding areas.',
}

export default function AreasCoverage() {
  const areas = [
    {
      name: 'Eccles',
      icon: '🏢',
      color: 'from-blue-600 to-blue-400'
    },
    {
      name: 'Salford',
      icon: '🏙️',
      color: 'from-cyan-600 to-cyan-400'
    },
    {
      name: 'Swinton',
      icon: '🌳',
      color: 'from-green-600 to-green-400'
    },
    {
      name: 'Worsley',
      icon: '🏘️',
      color: 'from-emerald-600 to-emerald-400'
    },
    {
      name: 'Walkden',
      icon: '🏞️',
      color: 'from-teal-600 to-teal-400'
    },
    {
      name: 'Stockport',
      icon: '🏛️',
      color: 'from-indigo-600 to-indigo-400'
    },
    {
      name: 'Cheethamhill',
      icon: '🏢',
      color: 'from-purple-600 to-purple-400'
    },
  
    {
      name: 'Didsbury',
      icon: '🌲',
      color: 'from-lime-600 to-lime-400'
    },
    {
      name: 'Atherton',
      icon: '🏘️',
      color: 'from-orange-600 to-orange-400'
    },
    {
      name: 'Bolton',
      icon: '🏙️',
      color: 'from-red-600 to-red-400'
    },
    {
      name: 'Prestwich',
      icon: '🏞️',
      color: 'from-pink-600 to-pink-400'
    },
    {
      name: 'Sale',
      icon: '🏢',
      color: 'from-purple-600 to-purple-400'
    },
    {
      name: 'Other Areas',
      icon: '📍',
      color: 'from-yellow-600 to-yellow-400'
    },
  ]

  const benefits = [
    { title: 'Professional Instructors', description: 'Experienced and qualified driving professionals' },
    { title: 'Flexible Scheduling', description: 'Lessons at times that work for you' },
    { title: 'Modern Vehicles', description: 'Well-maintained cars with dual controls' },
    { title: 'Competitive Rates', description: 'Transparent pricing with no hidden costs' },
  ]

  return (
    <div className="relative bg-gradient-to-b from-[#0b1120] via-[#1a2847] to-[#0b1120] text-white min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/30 to-cyan-400/20 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-[140px] transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-20">
        {/* Hero Section */}
        <div className="relative text-center pt-8 md:pt-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400">Coverage Area</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-transparent">
            Areas We Cover
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Professional driving instruction across <span className="text-cyan-400 font-semibold">Manchester</span> and surrounding regions with expert certified instructors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a href="/contact" className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl">
              Book a Lesson
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="tel:+441234567890" className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm">
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>

        {/* Area Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {areas.map((area, idx) => (
            <div
              key={area.name}
              className={`group relative overflow-hidden rounded-2xl backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-300 p-6 hover:scale-105 hover:shadow-2xl`}
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))`,
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br ${area.color} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`} />

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="text-4xl mb-3 block">{area.icon}</div>

                {/* Area Name */}
                <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-white transition-all">
                  {area.name}
                </h3>

                {/* Hover effect bar */}
                <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/20 pointer-events-none transition-all" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 py-12">
          {[
            { label: 'Areas Covered', value: '15+' },
            { label: 'Happy Students', value: '2000+' },
            { label: 'Certified Instructors', value: '25+' },
            { label: 'Years Experience', value: '10+' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-white/70 font-semibold text-sm md:text-base">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="relative py-12">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-transparent">
            Why Choose SM Driving School
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:border-cyan-400/50 transition-all hover:shadow-2xl"
              >
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-2xl group-hover:from-cyan-400/50 group-hover:to-blue-500/50 transition-all" />

                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="relative py-12">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-8 bg-gradient-to-r from-white via-cyan-300 to-white bg-clip-text text-transparent">
            Service Coverage Map
          </h2>
          <p className="text-center text-white/70 mb-10 max-w-2xl mx-auto">
            See all the areas we currently serve across Manchester and the surrounding regions.
          </p>

          <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-xl shadow-2xl">
            <div className="relative h-96 md:h-[500px]">
              <MapEmbed />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="relative bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-purple-600/20 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden p-12 md:p-16 shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

            <div className="relative z-10 max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Don't See Your Area?
              </h3>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Contact us to discuss custom arrangements or professional driving lessons outside our standard coverage areas. We're committed to helping you achieve your driving goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+441234567890"
                  className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center py-12 border-t border-white/10">
          <p className="text-white/60 text-sm">
            Need help? Our team is available Monday to Sunday, 7 AM - 9 PM
          </p>
        </div>
      </div>
    </div>
  )
}