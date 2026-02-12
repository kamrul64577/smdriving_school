import Link from "next/link"

export const metadata = {
    title: 'Services & Pricing | SM Driving School',
    description: 'Browse our comprehensive driving instruction services and pricing packages.',
}

export default function ServicesPage() {
    const services = [
        {
            category: 'Pay As You Go (1 Hour)',
            description: 'Flexible single lesson ideal for steady progress',
            price: '£35 / hour',
            features: [
                '1 x 60-minute lesson',
                'Suitable for beginners & intermediate learners',
                'Car and fuel included',
                'Patient, DVSA-focused instruction',
            ],
        },
        {
            category: 'Extended Lesson (2 Hours)',
            description: 'Best value for faster improvement and confidence building',
            price: '£65 / 2 hours',
            features: [
                '1 x 120-minute lesson',
                'More road time and practice',
                'Ideal for exam preparation',
                'Better continuity and skill retention',
            ],
        },
        {
            category: 'Weekly Intensive Package',
            description: 'Perfect for learners aiming to pass quickly',
            price: '£150 / week',
            features: [
                '5 x 1-hour lessons per week',
                'Discounted package rate',
                'Priority booking',
                'Structured learning plan',
                'Progress tracking toward test readiness',
            ],
        },
    ];


    return (
        <div className="relative bg-[#0b1120] text-white pt-14 min-h-screen overflow-hidden">
            {/* Background Glows */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute -top-60 -left-40 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[160px]" />
                <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[140px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-8 md:pt-16 pb-24 space-y-16">
                {/* Heading */}
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
                        Services & Pricing
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Flexible packages tailored to your needs at SM Driving School.
                    </p>
                </div>

                {/* Main Services */}
                <div className="grid md:grid-cols-2 gap-10">
                    {services.map((service) => (
                        <div
                            key={service.category}
                            className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden"
                        >
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
                            <h2 className="text-2xl font-bold text-white mb-2">{service.category}</h2>
                            <p className="text-white/70 mb-4">{service.description}</p>
                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-white/80">
                                        <span className="text-cyan-400">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                                <Link href="/contact">
                                    <button className=" cursor-pointer bg-cyan-400 text-[#0b1120] font-semibold px-6 py-2 rounded-xl hover:bg-cyan-300 transition">
                                        Book Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Services */}
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden">
                    {/* Background circles */}
                    <div className="absolute -top-12 -left-12 w-32 h-32 sm:w-40 sm:h-40 bg-blue-600/20 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -bottom-12 -right-12 w-32 h-32 sm:w-40 sm:h-40 bg-cyan-400/20 rounded-full blur-3xl -z-10"></div>

                    <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-white text-center">
                        Additional Support Services
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        {[
                            {
                                icon: '🚗',
                                title: 'Beginner Confidence Lessons',
                                price: 'Included',
                                desc: 'Extra focus on steering, clutch control, and moving off safely',
                            },
                            {
                                icon: '🧠',
                                title: 'Nervous Driver Support',
                                price: 'Included',
                                desc: 'Calm, patient lessons for anxious or first-time learners',
                            },
                            {
                                icon: '📝',
                                title: 'Mock Driving Test',
                                price: '£35 / hour',
                                desc: 'Realistic test routes with honest feedback',
                            },
                            {
                                icon: '📍',
                                title: 'Local Test Route Practice',
                                price: 'Included',
                                desc: 'Practice around common local exam routes',
                            },
                        ].map((service, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/10 backdrop-blur-md hover:scale-105 transition-transform duration-300"
                            >
                                <span className="text-4xl">{service.icon}</span>
                                <div className="text-center sm:text-left">
                                    <h4 className="font-bold text-white text-lg sm:text-xl">{service.title}</h4>
                                    <p className="text-white/70 text-sm sm:text-base">
                                        {service.price} – {service.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



            </div>
        </div>
    )
}
