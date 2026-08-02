import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/privacy/' },
  title: 'Privacy Policy',
  description: 'PolymerTrade privacy policy: how we collect, use and protect your data.',
}

export default function PrivacyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="badge-line">Legal</p>
          <h1>Privacy Policy</h1>
          <p className="desc">Last updated: 2026. This policy explains how PolymerTrade collects, uses and protects information.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="content-inner">
          <h2>1. Information we collect</h2>
          <p>We collect information you provide directly to us, such as when you register interest in the marketplace, submit a contact form, or complete counterparty verification (KYC). This may include your name, company, email address, role, and business documentation required for verification.</p>
          <p>We also collect standard technical information automatically, such as browser type, device information and usage data via analytics tools.</p>

          <h2 style={{ marginTop: '32px' }}>2. How we use information</h2>
          <p>We use the information we collect to operate and improve the PolymerTrade marketplace, verify counterparties, communicate with you about your account or enquiry, and comply with legal and regulatory obligations, including KYC/AML requirements applicable to commodity trading platforms.</p>

          <h2 style={{ marginTop: '32px' }}>3. Sharing of information</h2>
          <p>We do not sell personal information. We may share information with service providers who support our operations (such as verification providers, hosting and analytics providers), or where required by law.</p>

          <h2 style={{ marginTop: '32px' }}>4. Data security</h2>
          <p>We use reasonable technical and organizational measures designed to protect information against unauthorized access, alteration or disclosure.</p>

          <h2 style={{ marginTop: '32px' }}>5. Your rights</h2>
          <p>Depending on your jurisdiction, you may have rights to access, correct, or request deletion of your personal data. To exercise these rights, contact us at the address below.</p>

          <h2 style={{ marginTop: '32px' }}>6. Contact</h2>
          <p>Questions about this policy can be directed to <a href="mailto:privacy@polymertrade.com">privacy@polymertrade.com</a>.</p>
        </div>
      </section>
    </>
  )
}
