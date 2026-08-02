import type { Metadata } from 'next'
import SchemaMarkup from '../../components/SchemaMarkup'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/for-buyers/' },
  title: 'For Buyers',
  description:
    'Source virgin resin, certified recycled polymer, compounds, monomers and base oils from verified producers and traders on PolymerTrade.',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'For Buyers | PolymerTrade',
  description:
    'Source virgin resin, certified recycled polymer, compounds, monomers and base oils from verified producers and traders on PolymerTrade.',
  url: 'https://www.polymertrade.com/for-buyers/',
  isPartOf: { '@type': 'WebSite', name: 'PolymerTrade', url: 'https://www.polymertrade.com' },
}

export default function ForBuyersPage() {
  return (
    <>
      <SchemaMarkup schemas={[webPageSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="badge-line">For Buyers</p>
          <h1>Source with proof, not promises</h1>
          <p className="desc">Buy virgin resin, certified recycled polymer, compounds, monomers and base oils from KYC-verified counterparties, with certification attached to every listing.</p>
          <a href="/contact" className="btn-primary">Register as a buyer</a>
        </div>
      </div>

      <section className="content-section">
        <div className="content-inner">
          <h2>Why buy on PolymerTrade</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">✅</div>
              <h3>Verified counterparties</h3>
              <p>Every seller is KYC-verified before listing. No anonymous cargoes, no unverifiable claims.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">📄</div>
              <h3>Certified material</h3>
              <p>TDS, CoA and recycled-content certification (ISCC PLUS, GRS, EuCertPlast) attached to every listing you view.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">📊</div>
              <h3>Transparent pricing</h3>
              <p>Reference live market indices and real transaction data instead of negotiating blind.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🔒</div>
              <h3>Secure settlement</h3>
              <p>Secure settlement and logistics/compliance support handled on-platform, trade to delivery.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🧾</div>
              <h3>Compliance-ready</h3>
              <p>REACH, EPR and food-contact (EFSA/FDA) documentation attached where relevant to the grade.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🔗</div>
              <h3>Digital product passports</h3>
              <p>Carry certification proof from reactor to converter, auditable on demand for your own customers.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Start sourcing on PolymerTrade</h2>
        <p>Register your company and get verified access to the full polymer chain.</p>
        <a href="/contact" className="btn-primary">Register as a buyer</a>
      </div>
    </>
  )
}
