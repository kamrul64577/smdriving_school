import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://prodrive.example.com'),
  title: {
    default: 'ProDrive Academy | Professional Driving Instruction',
    template: '%s | ProDrive Academy',
  },
  description:
    'Expert driving instruction in London. High pass rates, flexible scheduling. Book your lessons today!',
  keywords: [
    'driving instructor',
    'driving lessons',
    'test preparation',
    'London',
    'DVSA approved',
  ],
  authors: [{ name: 'ProDrive Academy' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://prodrive.example.com',
    siteName: 'ProDrive Academy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}