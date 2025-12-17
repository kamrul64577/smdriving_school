import ContactForm from '@/components/ContactForm'
import Link from 'next/link'
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export const metadata = {
    title: 'Contact Us | SM Driving School',
    description: 'Get in touch to book your driving lessons or inquire about our services.',
}

export default function ContactPage() {
    const contacts = [
        {
            title: 'WhatsApp',
            icon: <FaWhatsapp size={40} className="text-green-500" />,
            href: 'https://wa.me/447446095099?text=Hello%20SM%20Driving%20School,%20I%20would%20like%20to%20book%20a%20lesson.',
            description: 'Quick messages & updates',
            external: true,
        },
        {
            title: 'Call',
            icon: <FaPhoneAlt size={40} className="text-cyan-400" />,
            href: 'tel:+447446095099',
            description: 'Mon-Fri, 8am-7pm',
            external: false,
        },
        {
            title: 'Email',
            icon: <FaEnvelope size={40} className="text-yellow-400" />,
            href: 'mailto:shiraj.ali1977@gmail.com',
            description: '24/7 responses',
            external: false,
        },
    ]

    return (
        <div className="relative bg-[#0b1120] text-white min-h-screen overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[160px]" />
                <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[140px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24 space-y-16">
                {/* Heading */}
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
                        Contact Us
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Ready to start your driving journey? Get in touch with us today!
                    </p>
                </div>

                {/* Contact Methods */}
                <div className="grid md:grid-cols-3 gap-8">
                    {contacts.map((contact) => (
                        <a
                            key={contact.title}
                            href={contact.href}
                            //   target="_blank"
                            //   rel="noopener noreferrer"
                            target={contact.external ? '_blank' : undefined}
                            rel={contact.external ? 'noopener noreferrer' : undefined}
                            className="group relative block rounded-3xl p-8 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:scale-105 transition-transform duration-300 hover:bg-white/20"
                        >
                            <div className="flex flex-col items-center">
                                <div className="mb-4">{contact.icon}</div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400">{contact.title}</h3>
                                <p className="text-white/70 text-center">{contact.description}</p>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Contact Form & Office Info */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl hover:scale-105 transition-transform duration-300">
                        <h2 className="text-3xl font-bold mb-6 text-cyan-400">Send us a Message</h2>
                        <ContactForm />
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform duration-300">
                            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Office Hours</h2>
                            <div className="space-y-4 text-white/80">
                                <div>
                                    <p className="font-bold">Monday - Friday</p>
                                    <p>8:00 AM - 7:00 PM</p>
                                </div>
                                <div>
                                    <p className="font-bold">Saturday</p>
                                    <p>9:00 AM - 5:00 PM</p>
                                </div>
                                <div>
                                    <p className="font-bold">Sunday</p>
                                    <p>10:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl border-l-4 border-cyan-400 rounded-l p-6 shadow-2xl">
                            <h3 className="text-2xl font-bold mb-2 text-cyan-400">Quick Response Time</h3>
                            <p className="text-white/70 mb-4">
                                We typically respond to inquiries within 2 hours during business hours. Weekend and evening messages will be replied to the next business day.
                            </p>
                            <div className="bg-cyan-400/10 p-4 rounded">
                                <p className="font-bold mb-2">💡 Pro Tip</p>
                                <p className="text-white/70 text-sm">
                                    WhatsApp is our fastest communication method. Click the the WhatsApp icon to start chatting!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
