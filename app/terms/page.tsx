import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/terms/' },
  title: 'Terms of Service',
  description: 'PolymerTrade terms of service governing use of the marketplace.',
}

export default function TermsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="badge-line">Legal</p>
          <h1>Terms of Service</h1>
          <p className="desc">Last updated: 2026. Please read these terms carefully before using PolymerTrade.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="content-inner">
          <h2>1. Acceptance of terms</h2>
          <p>By accessing or using the PolymerTrade website or marketplace, you agree to be bound by these Terms of Service. If you do not agree, do not use the platform.</p>

          <h2 style={{ marginTop: '32px' }}>2. Nature of the platform</h2>
          <p>PolymerTrade is a B2B marketplace facilitating physical trade of polymer-chain materials — monomers, base oils, virgin polymers, recycled polymers and compounds — between verified industrial counterparties. PolymerTrade is not a financial exchange and does not itself buy, sell or take title to traded material unless expressly stated.</p>

          <h2 style={{ marginTop: '32px' }}>3. Verification requirements</h2>
          <p>Access to trade on PolymerTrade requires successful completion of KYC (Know Your Customer) verification. PolymerTrade may suspend or terminate access for counterparties who fail verification or violate these terms.</p>

          <h2 style={{ marginTop: '32px' }}>4. Listings and claims</h2>
          <p>Users are responsible for the accuracy of listings, specifications and certification claims they submit. PolymerTrade facilitates the attachment and verification of supporting documentation but does not independently test material unless expressly stated.</p>

          <h2 style={{ marginTop: '32px' }}>5. Limitation of liability</h2>
          <p>PolymerTrade is provided on an &quot;as is&quot; basis. To the maximum extent permitted by law, PolymerTrade disclaims liability for losses arising from use of the platform, including reliance on listing data, pricing indices, or third-party certification claims.</p>

          <h2 style={{ marginTop: '32px' }}>6. Governing law</h2>
          <p>These terms are governed by the laws of the jurisdiction in which PolymerTrade is incorporated, without regard to conflict of laws principles.</p>

          <h2 style={{ marginTop: '32px' }}>7. Contact</h2>
          <p>Questions about these terms can be directed to <a href="mailto:legal@polymertrade.com">legal@polymertrade.com</a>.</p>
        </div>
      </section>
    </>
  )
}
