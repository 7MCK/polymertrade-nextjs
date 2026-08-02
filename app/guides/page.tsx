import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../components/SchemaMarkup'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/guides/' },
  title: 'Polymer Buyer Guides',
  description:
    'Free technical guides to the polymer value chain: virgin vs recycled resin, base oil groups, polymer compounds, and monomer trading basics.',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Polymer Buyer Guides | PolymerTrade',
  description:
    'Free technical guides to the polymer value chain for buyers, converters and blenders.',
  url: 'https://www.polymertrade.com/guides/',
  isPartOf: { '@type': 'WebSite', name: 'PolymerTrade', url: 'https://www.polymertrade.com' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'PolymerTrade', item: 'https://www.polymertrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.polymertrade.com/guides/' },
  ],
}

const GUIDES = [
  {
    href: '/guides/virgin-vs-recycled-polymer-grades',
    icon: '♻️',
    title: 'Virgin vs Recycled Polymer Grades',
    desc: "A buyer's guide to choosing between virgin and recycled (PCR/PIR) resin: performance trade-offs, certification, and where each grade fits.",
  },
  {
    href: '/guides/understanding-base-oil-groups',
    icon: '🛢️',
    title: 'Understanding Base Oil Groups',
    desc: 'Group I through Group V explained: how base oils are classified, what each group is used for, and how to spec the right group for a lubricant formulation.',
  },
  {
    href: '/guides/what-are-polymer-compounds',
    icon: '🧪',
    title: 'What Are Polymer Compounds?',
    desc: 'A guide to custom formulations: how compounds and masterbatch differ from off-the-shelf resin, and how to source a spec-matched compound.',
  },
  {
    href: '/guides/monomer-trading-basics',
    icon: '⚗️',
    title: 'Monomer Trading Basics',
    desc: 'What buyers need to know about trading ethylene, propylene, styrene and other upstream feedstocks: contract structures, delivery terms and specs.',
  },
]

export default function GuidesPage() {
  return (
    <>
      <SchemaMarkup schemas={[webPageSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="badge-line">PolymerTrade Guides</p>
          <h1>Buyer guides to the polymer chain</h1>
          <p className="desc">Technical, no-fluff guides to sourcing and specifying across the polymer value chain: monomers, base oils, virgin resin, recycled resin and compounds. Written for buyers, converters and blenders who need to get the spec right the first time.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="content-inner">
          <div className="info-grid">
            {GUIDES.map((g) => (
              <Link key={g.href} href={g.href} style={{ textDecoration: 'none' }}>
                <div className="info-card" style={{ cursor: 'pointer', height: '100%' }}>
                  <div className="card-icon">{g.icon}</div>
                  <h3>{g.title}</h3>
                  <p>{g.desc}</p>
                  <span style={{ color: 'var(--blue)', fontWeight: 600, fontSize: '13px', display: 'inline-block', marginTop: '14px' }}>Read guide →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Ready to source across the polymer chain?</h2>
        <p>Join PolymerTrade and trade virgin, recycled, compound, monomer and base oil grades with verified counterparties.</p>
        <a href="/contact" className="btn-primary">Join the marketplace</a>
      </div>
    </>
  )
}
