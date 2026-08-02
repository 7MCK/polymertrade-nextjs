import type { Metadata } from 'next'
import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'PolymerTrade: Every Grade. One Market.',
    template: '%s | PolymerTrade',
  },
  description:
    'PolymerTrade is the digital marketplace for the entire polymer value chain, covering monomers, base oils, virgin resin, certified recycled polymer and engineered compounds. Verified counterparties, transparent pricing, secure settlement.',
  metadataBase: new URL('https://www.polymertrade.com'),
  openGraph: {
    siteName: 'PolymerTrade',
    type: 'website',
    title: 'PolymerTrade: Every Grade. One Market.',
    description:
      'The marketplace for the entire polymer value chain. Virgin resin, certified recycled polymer, compounds, monomers and base oils, traded between verified counterparties.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PolymerTrade: Every Grade. One Market.',
    description: 'The marketplace for the entire polymer value chain.',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PolymerTrade',
  alternateName: 'PolymerTrade.com',
  description:
    'PolymerTrade is the digital marketplace for the entire polymer value chain. From monomers and base oils to virgin resin, certified recycled polymer and engineered compounds, PolymerTrade connects verified producers, processors and buyers worldwide.',
  url: 'https://www.polymertrade.com',
  logo: 'https://www.polymertrade.com/logo.svg',
  foundingDate: '2026',
  knowsAbout: [
    'Virgin polymer trading',
    'Recycled polymer / rPET / rHDPE / rPP',
    'Polymer compounds and masterbatch',
    'Monomer trading (ethylene, propylene, styrene)',
    'Base oil trading',
    'ISCC PLUS certification',
    'GRS Global Recycled Standard',
    'EuCertPlast',
    'Digital product passports',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@polymertrade.com',
    contactType: 'customer service',
  },
  sameAs: [
    'https://www.linkedin.com/company/polymertrade',
    'https://www.wastetrade.com',
    'https://www.oretrade.com',
    'https://www.fibertrade.com',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
