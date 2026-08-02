import type { Metadata } from 'next'
import SchemaMarkup from '../../components/SchemaMarkup'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/verification/' },
  title: 'Verification & Trust',
  description:
    'How PolymerTrade verifies counterparties and certifies material claims: KYC, ISCC PLUS, GRS, EuCertPlast and digital product passports.',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Verification & Trust | PolymerTrade',
  description:
    'How PolymerTrade verifies counterparties and certifies material claims: KYC, ISCC PLUS, GRS, EuCertPlast and digital product passports.',
  url: 'https://www.polymertrade.com/verification/',
  isPartOf: { '@type': 'WebSite', name: 'PolymerTrade', url: 'https://www.polymertrade.com' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'PolymerTrade', item: 'https://www.polymertrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Verification & Trust', item: 'https://www.polymertrade.com/verification/' },
  ],
}

export default function VerificationPage() {
  return (
    <>
      <SchemaMarkup schemas={[webPageSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="badge-line">Verification &amp; Trust</p>
          <h1>Verified counterparties. Certified material.</h1>
          <p className="desc">PolymerTrade brings institutional-grade trust to a market that still runs on phone calls and faith. Here is how verification works, end to end.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="content-inner">
          <h2>Counterparty verification (KYC)</h2>
          <p>Every producer, processor, compounder, trader and buyer on PolymerTrade completes Know Your Customer (KYC) verification before their first trade. This confirms company identity, ownership and legal standing: no anonymous listings, no ghost cargoes.</p>
          <h2 style={{ marginTop: '40px' }}>Certified material, proven claims</h2>
          <p>Datasheets, certificates of analysis and recycled-content certification are attached directly to the trade record, not left in an email attachment. Buyers can verify a claim before they commit, and carry that proof forward to their own customers.</p>
        </div>
      </section>

      <section className="content-section alt">
        <div className="content-inner">
          <h2>Certifications recognized on PolymerTrade</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">🌐</div>
              <h3>ISCC PLUS</h3>
              <p>International Sustainability &amp; Carbon Certification for circular and bio-based feedstocks, tracked through mass balance chain of custody.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">♻️</div>
              <h3>GRS: Global Recycled Standard</h3>
              <p>Verifies recycled input content and tracks it through the full supply chain, alongside social and environmental practice criteria.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🏭</div>
              <h3>EuCertPlast</h3>
              <p>European certification scheme for plastics recyclers, verifying recycled content and traceability of recyclate.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🍽️</div>
              <h3>EFSA / FDA food-contact</h3>
              <p>Food-contact grades of recycled polymer are flagged against the relevant EFSA (EU) or FDA (US) approval status.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">📋</div>
              <h3>TDS &amp; CoA</h3>
              <p>Technical data sheets and certificates of analysis are required on virgin and engineering polymer listings.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🧾</div>
              <h3>REACH / EPR compliance</h3>
              <p>Compliance documentation for REACH and Extended Producer Responsibility schemes is handled as part of the trade.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="content-inner">
          <h2>Digital product passports</h2>
          <p>Every trade on PolymerTrade can carry a digital product passport: a permanent, auditable record that travels with the material from reactor to converter. It carries origin, certification status, recycled-content proof and chain-of-custody data, so the next buyer in the chain can verify the claim instantly rather than take it on faith.</p>
          <h2 style={{ marginTop: '40px' }}>Secure settlement</h2>
          <p>Trade to delivery, PolymerTrade handles secure settlement, logistics coordination and customs/compliance support so counterparties can focus on the trade itself, not the paperwork around it.</p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Trade with verified confidence</h2>
        <p>Join PolymerTrade and trade the whole polymer chain with proof attached to every transaction.</p>
        <a href="/contact" className="btn-primary">Join the marketplace</a>
      </div>
    </>
  )
}
