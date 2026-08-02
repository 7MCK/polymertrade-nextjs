import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../components/SchemaMarkup'
import { PolymerTradeMark } from '../../components/Logo'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About PolymerTrade',
  description:
    'PolymerTrade is the digital marketplace for the entire polymer value chain, connecting verified producers, processors and buyers worldwide.',
  author: { '@type': 'Organization', name: 'PolymerTrade', url: 'https://www.polymertrade.com' },
  publisher: {
    '@type': 'Organization',
    name: 'PolymerTrade',
    logo: { '@type': 'ImageObject', url: 'https://www.polymertrade.com/logo.svg' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.polymertrade.com/about/' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'PolymerTrade', item: 'https://www.polymertrade.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.polymertrade.com/about/' },
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/about/' },
  title: 'About PolymerTrade — The Marketplace for the Whole Polymer Chain',
  description:
    'PolymerTrade is the digital marketplace for the entire polymer value chain — monomers, base oils, virgin resin, certified recycled polymer and engineered compounds. Verified counterparties, transparent pricing, secure settlement.',
}

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="badge-line">About PolymerTrade</p>
          <h1>The marketplace for the<br />whole polymer chain</h1>
          <p className="desc">
            For producers, processors, compounders and buyers across the polymer industry, PolymerTrade is the digital marketplace that covers the entire value chain — monomers, base oils, virgin polymers, certified recycled resin and engineered compounds — with verified counterparties, transparent pricing and secure settlement on every trade.
          </p>
          <a href="/contact" className="btn-primary">Get in Touch</a>
        </div>
      </div>

      <section className="content-section">
        <div className="content-inner">
          <h2>Mission, Vision, Promise</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">🎯</div>
              <h3>Mission</h3>
              <p>To make the world&apos;s polymer markets transparent, trusted and traded in one place.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🔭</div>
              <h3>Vision</h3>
              <p>Every tonne of polymer — virgin or circular — traceable from reactor to converter.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🤝</div>
              <h3>Promise</h3>
              <p>Verified counterparties. Real prices. Certified material. Settled securely.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="content-inner">
          <h2>What PolymerTrade Does</h2>
          <p>
            PolymerTrade is the marketplace for the whole polymer chain — monomers, base oils, virgin resin, recycled polymer and compounds — with every counterparty verified and every trade settled securely.
          </p>
          <p>
            Unlike listing portals and broker networks, PolymerTrade brings institutional-grade trust to a market that still runs on phone calls and faith. Datasheets, certificates of analysis and recycled-content certification (ISCC PLUS, GRS, EuCertPlast) travel with every trade. Digital product passports carry that proof from reactor to converter.
          </p>
          <p>
            This is not a financial exchange. PolymerTrade facilitates physical B2B trading between industrial counterparties: producers, processors, compounders, traders and buyers. All counterparties are KYC verified before their first trade, and settlement is handled securely with full documentation on every transaction.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner">
          <h2>The Problem We Solve</h2>
          <p>
            The polymer industry spans monomer producers, resin manufacturers, recyclers, compounders and thousands of downstream converters — yet most of that trade is negotiated by phone, priced opaquely, and documented inconsistently. Recycled-content claims are hard to verify. Certification data lives in email attachments, not in the trade record.
          </p>
          <p>
            At the same time, regulation is tightening. Extended Producer Responsibility (EPR) schemes, REACH compliance and food-contact approvals (EFSA, FDA) all require documented, auditable claims. Buyers of recycled polymer increasingly need proof — not assurances — that recycled content is real and certified.
          </p>
          <p>
            PolymerTrade solves this by building the verification and documentation infrastructure the next decade of polymer trade requires — one marketplace, covering the full chain, with proof attached to every trade.
          </p>
        </div>
      </section>

      <section className="content-section alt">
        <div className="content-inner" style={{ textAlign: 'center' }}>
          <PolymerTradeMark size={48} />
          <h2 style={{ marginTop: '20px' }}>Part of the WasteTrade family</h2>
          <p style={{ maxWidth: '640px', margin: '0 auto 24px' }}>
            PolymerTrade is built by the team behind WasteTrade.com, OreTrade.com and FiberTrade.com. PolymerTrade joins the family as the fourth marketplace in a portfolio of vertical commodity platforms. WasteTrade trades the bale; PolymerTrade trades the pellet.
          </p>
          <div className="sibling-links" style={{ justifyContent: 'center' }}>
            <a href="https://www.wastetrade.com" className="sibling-link" target="_blank" rel="noopener noreferrer">WasteTrade.com</a>
            <a href="https://www.oretrade.com" className="sibling-link" target="_blank" rel="noopener noreferrer">OreTrade.com</a>
            <a href="https://www.fibertrade.com" className="sibling-link" target="_blank" rel="noopener noreferrer">FiberTrade.com</a>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner">
          <h2>Contact</h2>
          <p>General enquiries: <a href="mailto:hello@polymertrade.com">hello@polymertrade.com</a></p>
          <p>Investor enquiries: <a href="mailto:investors@polymertrade.com">investors@polymertrade.com</a></p>
          <p>Website: <a href="https://www.polymertrade.com">www.polymertrade.com</a></p>
          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/verification" className="btn-primary">Verification &amp; Trust</Link>
            <Link href="/prices" className="btn-secondary on-light">Live Prices</Link>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Join the PolymerTrade marketplace</h2>
        <p>Be among the first verified members trading the entire polymer chain in one place.</p>
        <a href="/contact" className="btn-primary">Join the marketplace</a>
      </div>
    </>
  )
}
