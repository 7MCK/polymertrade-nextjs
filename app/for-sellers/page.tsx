import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/for-sellers/' },
  title: 'For Sellers',
  description:
    'List virgin resin, certified recycled polymer, compounds, monomers and base oils to a global network of verified buyers on PolymerTrade.',
}

export default function ForSellersPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="badge-line">For Sellers</p>
          <h1>Reach verified buyers, faster</h1>
          <p className="desc">List virgin resin, certified recycled polymer, compounds, monomers or base oils, and reach a global network of KYC-verified buyers who trade on transparent pricing.</p>
          <a href="/contact" className="btn-primary">Register as a seller</a>
        </div>
      </div>

      <section className="content-section">
        <div className="content-inner">
          <h2>Why list on PolymerTrade</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="card-icon">🌍</div>
              <h3>Global reach</h3>
              <p>Reach verified buyers across the full downstream chain, from converters to compounders to distributors.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">✅</div>
              <h3>Verified buyers only</h3>
              <p>Every buyer completes KYC before they can transact. Trade with confidence, not with strangers.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🏆</div>
              <h3>Certification pays</h3>
              <p>ISCC PLUS, GRS and EuCertPlast certification attached to your listing helps you command a fair, transparent price.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">📊</div>
              <h3>Market-referenced pricing</h3>
              <p>Price against live indices instead of negotiating from a weaker information position.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🔒</div>
              <h3>Secure settlement</h3>
              <p>Get paid securely, with logistics and customs/compliance support handled on-platform.</p>
            </div>
            <div className="info-card">
              <div className="card-icon">🔗</div>
              <h3>Provable claims</h3>
              <p>Digital product passports let your buyers verify your certification claims instantly, with no back-and-forth.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Start listing on PolymerTrade</h2>
        <p>Register your company and reach verified buyers across the polymer chain.</p>
        <a href="/contact" className="btn-primary">Register as a seller</a>
      </div>
    </>
  )
}
