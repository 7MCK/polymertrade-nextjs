import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/careers/' },
  title: 'Careers',
  description: 'Careers at PolymerTrade — join the team building the marketplace for the entire polymer value chain.',
}

export default function CareersPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="badge-line">Careers</p>
          <h1>Build the marketplace for the polymer chain</h1>
          <p className="desc">PolymerTrade is built by the team behind WasteTrade.com, OreTrade.com and FiberTrade.com. We&apos;re building out the team as the platform approaches launch.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="content-inner">
          <h2>Open roles</h2>
          <p>We don&apos;t have open roles listed at this time. PolymerTrade is currently in pre-launch, building the product and verification infrastructure described throughout this site.</p>
          <p>If you have relevant experience in commodity trading platforms, polymer/petrochemical markets, KYC/compliance systems, or marketplace engineering, we&apos;d still like to hear from you — send a note to the address below and we&apos;ll keep it on file.</p>
          <h2 style={{ marginTop: '40px' }}>General enquiries</h2>
          <p>Email us at <a href="mailto:careers@polymertrade.com">careers@polymertrade.com</a> with a short note on your background and area of interest.</p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Stay in touch</h2>
        <p>Follow PolymerTrade as we build toward launch in 2026.</p>
        <a href="/contact" className="btn-primary">Contact us</a>
      </div>
    </>
  )
}
