'use client'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Md Kamrul Islam',
      role: 'Weekly Intensive Package',
      content:
        'I chose the weekly package and it really helped me improve quickly. The lessons were clear, calm, and well structured. Each week I felt more confident on the road, and my driving skills improved a lot in a short time.',
      rating: 5,
    },
    {
      name: 'Muhseen Ali',
      role: 'Extended Driving Lesson',
      content:
        'Very friendly and professional instructor. He explained everything clearly and was always patient, even when I made mistakes. I felt comfortable during lessons and learned at my own pace.',
      rating: 5,
    },
    {
      name: 'Mariam Begum',
      role: 'Extended Driving Lesson',
      content:
        'I was quite nervous at the beginning, but the teaching style made me feel relaxed and confident. The lessons were easy to understand and well planned. I would definitely recommend these driving lessons.',
      rating: 5,
    },
  ];
  

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
          Trusted by learners who value patient, professional teaching
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
