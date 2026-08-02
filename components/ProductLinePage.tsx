import Link from 'next/link'
import type { ProductLine } from '../lib/product-lines'
import SchemaMarkup from './SchemaMarkup'

export default function ProductLinePage({ line }: { line: ProductLine }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: line.name,
    description: line.description,
    category: 'Polymers',
    brand: { '@type': 'Brand', name: 'PolymerTrade' },
  }
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'PolymerTrade', item: 'https://www.polymertrade.com' },
      { '@type': 'ListItem', position: 2, name: line.name, item: `https://www.polymertrade.com/${line.slug}/` },
    ],
  }

  return (
    <>
      <SchemaMarkup schemas={[schema, breadcrumb]} />
      <div className="page-hero" style={{ '--accent': line.color } as React.CSSProperties}>
        <div className="page-hero-inner">
          <p className="badge-line">{line.short} · PolymerTrade</p>
          <h1>{line.name}</h1>
          <p className="tagline">{line.tagline}</p>
          <p className="desc">{line.description}</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn-primary" style={{ background: line.color }}>Request access</a>
            <Link href="/prices" className="btn-secondary">View live prices</Link>
          </div>
        </div>
      </div>

      <section className="content-section">
        <div className="content-inner">
          <h2>Grades &amp; specifications</h2>
          <p>Every listing on PolymerTrade in this category carries full specification data so buyers can verify fit before they trade.</p>
          <div className="grade-grid" style={{ '--accent': line.color } as React.CSSProperties}>
            {line.grades.map((g) => (
              <div key={g} className="grade-pill" style={{ borderTopColor: line.color }}>{g}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="content-inner">
          <h2>Certifications &amp; verification</h2>
          <p>Certified claims, attached to the trade, not left to a data sheet in an email.</p>
          <div className="info-grid">
            {line.certifications.map((c) => (
              <div key={c} className="info-card">
                <div className="card-icon">✅</div>
                <h3>{c}</h3>
                <p>Verified as part of the listing record and carried through to settlement.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner">
          <h2>Why trade {line.short} on PolymerTrade</h2>
          <div className="steps-3">
            <div className="step-3">
              <div className="step-num" style={{ borderColor: line.color, color: line.color }}>1</div>
              <h3>Verified counterparties</h3>
              <p>Every producer, trader and buyer is KYC-verified before their first trade. No anonymous listings.</p>
            </div>
            <div className="step-3">
              <div className="step-num" style={{ borderColor: line.color, color: line.color }}>2</div>
              <h3>Transparent pricing</h3>
              <p>Live market indices and real transaction data replace opaque, negotiated pricing.</p>
            </div>
            <div className="step-3">
              <div className="step-num" style={{ borderColor: line.color, color: line.color }}>3</div>
              <h3>Secure settlement</h3>
              <p>Trade to delivery, with logistics and customs/compliance support handled on-platform.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Trade {line.name.toLowerCase()} on PolymerTrade</h2>
        <p>Join as a verified producer, trader or buyer and access the {line.short.toLowerCase()} market.</p>
        <a href="/contact" className="btn-primary">Join the marketplace</a>
      </div>
    </>
  )
}
