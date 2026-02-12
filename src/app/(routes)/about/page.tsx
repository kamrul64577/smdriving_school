export const metadata = {
    title: 'About Us | SM Driving School',
    description: 'Meet our experienced driving instructors with 15+ years expertise.',
  }
  
  export default function About() {
    return (
      <div className="relative bg-[#0b1120] text-white overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[160px]" />
          <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[140px]" />
        </div>
  
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-24 space-y-16">
          {/* Page Heading */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
              About Your Instructor
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A dedicated, fully qualified driving instructor committed to helping you become a safe, skilled, and confident driver.
            </p>
          </div>
  
          {/* Instructor + Qualifications */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Instructor Card */}
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl -z-10"></div>
              <div className="text-6xl mb-6 text-center">👨‍🏫</div>
              <h2 className="text-3xl font-bold mb-4 text-white text-center">Meet Shiraj Ali</h2>
              <p className="text-white/70 text-center">
              Passionate about teaching and focused on your success, offering patient guidance and structured lessons every step of the way.
              </p>
            </div>
  
            {/* Qualifications */}
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
              <h3 className="text-2xl font-bold mb-6 text-white">Qualifications & Certifications</h3>
              <ul className="space-y-5">
                {[
                  { title: 'DVSA Approved Instructor', desc: 'Registered with the DVSA' },
                  { title: 'Enhanced DBS Checked', desc: 'Full background verification' },
                  { title: 'First Aid Certified', desc: 'Current certification maintained' },
                  { title: 'Defensive Driving Expert', desc: 'Advanced training techniques' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-cyan-400 text-2xl">✓</span>
                    <div>
                      <p className="font-bold text-white">{item.title}</p>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* Why Students Choose Us */}
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden">
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl -z-10"></div>
  
            <h3 className="text-3xl font-bold mb-10 text-white text-center">Why Students Choose SM Driving School</h3>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { icon: '🎯', title: '98% Pass Rate', desc: 'Our proven teaching methods ensure success' },
                { icon: '⏰', title: 'Flexible Scheduling', desc: 'Book lessons at times that suit you' },
                { icon: '🚗', title: 'Modern Vehicle', desc: 'Comfortable and well-maintained cars' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  