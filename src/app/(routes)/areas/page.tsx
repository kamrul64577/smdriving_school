import MapEmbed from '@/components/MapEmbed'

export const metadata = {
  title: 'Areas Covered | SM Driving School',
  description: 'We provide professional driving instruction across Manchester and surrounding areas.',
}

export default function AreasCoverage() {
  const areas = [
    { zone: 'Eccles & Salford', regions: ['Eccles', 'Salford'] },
    { zone: 'Swinton & Worsley', regions: ['Swinton', 'Worsley'] },
    { zone: 'Walkden & Didsbury', regions: ['Walkden', 'Didsbury'] },
    { zone: 'Longsight & Manchester City', regions: ['Longsight', 'Manchester City Centre'] },
    { zone: 'Other Surrounding Areas', regions: ['Prestwich', 'Urmston', 'Altrincham', 'Sale'] },
  ]

  return (
    <div className="relative bg-[#0b1120] text-white min-h-screen overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-24 space-y-16">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Areas We Cover
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Professional driving instruction across Manchester and surrounding regions.
          </p>
        </div>

        {/* Area Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div
              key={area.zone}
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden"
            >
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl -z-10"></div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">{area.zone}</h3>
              <ul className="space-y-2 text-white/80">
                {area.regions.map((region) => (
                  <li key={region} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {region}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="relative mt-12">
          <h3 className="text-3xl font-bold mb-6 text-white text-center">Service Map</h3>
          <MapEmbed />
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 text-center shadow-2xl hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-4 text-white">Don't See Your Area?</h3>
          <p className="mb-6 text-white/70">
            Contact us to discuss custom arrangements or lessons outside our standard coverage areas.
          </p>
          <a href="/contact" className="inline-block bg-cyan-400 text-[#0b1120] font-semibold px-8 py-3 rounded-xl hover:bg-cyan-300 transition">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  )
}
