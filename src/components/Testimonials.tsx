'use client'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'First Attempt Pass',
      content:
        "John's teaching style is excellent. He identified my weak areas immediately and focused on them. Passed my test first time!",
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Nervous Driver',
      content:
        'I was very anxious about driving. John made me feel comfortable and confident. Best investment I made!',
      rating: 5,
    },
    {
      name: 'Emma Wilson',
      role: 'Test Preparation',
      content:
        'The intensive package was perfect. 5 lessons a week really accelerated my progress. Highly recommended!',
      rating: 5,
    },
    {
      name: 'David Martinez',
      role: 'Advanced Training',
      content:
        "After years of nervous driving, John's advanced training transformed my confidence on motorways.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-[#0b1120] text-white relative overflow-hidden">
      {/* Background glow circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[140px]" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            What Students Say
          </h2>
          <p className="text-xl text-white/60">
            Trusted by hundreds of satisfied learners
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.name}
              className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              {/* Glowing top accent */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-cyan-400/20 blur-2xl -z-10"></div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-cyan-400 text-xl">★</span>
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 mb-6 italic leading-relaxed">"{testimonial.content}"</p>

              {/* Author */}
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-cyan-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
