import type { Metadata } from 'next'
import { mockListings } from '../../lib/mock-listings'
import SchemaMarkup from '../../components/SchemaMarkup'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/marketplace/' },
  title: 'Marketplace: Listings & RFQs',
  description:
    'Browse sample listings and RFQs across virgin polymers, recycled polymers, compounds, monomers and base oils. Illustrative data, with the live marketplace coming at launch.',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'PolymerTrade Marketplace: Listings & RFQs',
  description:
    'Browse listings and RFQs across virgin polymers, recycled polymers, compounds, monomers and base oils.',
  url: 'https://www.polymertrade.com/marketplace/',
  isPartOf: { '@type': 'WebSite', name: 'PolymerTrade', url: 'https://www.polymertrade.com' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'PolymerTrade', item: 'https://www.polymertrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Marketplace', item: 'https://www.polymertrade.com/marketplace/' },
  ],
}

export default function MarketplacePage() {
  return (
    <>
      <SchemaMarkup schemas={[webPageSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="badge-line">Marketplace</p>
          <h1>Listings &amp; RFQs</h1>
          <p className="desc">A preview of what trades on PolymerTrade. The cards below are sample data to illustrate the marketplace. Live listings open with platform launch.</p>
          <a href="/contact" className="btn-primary">Join the marketplace</a>
        </div>
      </div>

      <section className="content-section">
        <div className="content-inner">
          <span className="badge-soon">Sample listings (illustrative only)</span>
          <div className="listing-grid">
            {mockListings.map((l) => (
              <div key={l.title} className="listing-card">
                <div className="listing-top">
                  <span className="listing-tag" style={{ background: l.color }}>{l.category}</span>
                  <span className="listing-tag" style={{ background: l.type === 'RFQ' ? 'var(--ink)' : 'var(--slate)' }}>{l.type}</span>
                </div>
                <h3>{l.title}</h3>
                <div className="listing-meta">Volume: {l.volume}</div>
                <div className="listing-meta">Location: {l.location}</div>
                <div className="listing-price">{l.price}</div>
                <div className="listing-verified">✓ Verified counterparty (sample)</div>
              </div>
            ))}
          </div>
          <div className="disclaimer-note">
            All listings and RFQs shown here are sample/illustrative data for demonstration purposes only. No real trades are represented. Live marketplace listings open with platform launch.
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Get early access</h2>
        <p>Register now to be among the first verified members when listings open.</p>
        <a href="/contact" className="btn-primary">Join the marketplace</a>
      </div>
    </>
  )
}
