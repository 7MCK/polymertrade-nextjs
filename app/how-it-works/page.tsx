import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../components/SchemaMarkup'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/how-it-works/' },
  title: 'How It Works',
  description:
    'How PolymerTrade works: verify, list or discover, agree terms, and settle securely for the entire polymer value chain.',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'How It Works | PolymerTrade',
  description:
    'How PolymerTrade works: verify, list or discover, agree terms, and settle securely for the entire polymer value chain.',
  url: 'https://www.polymertrade.com/how-it-works/',
  isPartOf: { '@type': 'WebSite', name: 'PolymerTrade', url: 'https://www.polymertrade.com' },
}

export default function HowItWorksPage() {
  return (
    <>
      <SchemaMarkup schemas={[webPageSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="badge-line">How It Works</p>
          <h1>From listing to settlement</h1>
          <p className="desc">A structured process built for the realities of the polymer trade: verified counterparties, certified material and secure settlement at every stage.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="content-inner">
          <div className="steps-3">
            <div className="step-3">
              <div className="step-num">1</div>
              <h3>Verify</h3>
              <p>Every producer, processor, trader and buyer completes KYC verification before their first trade. No anonymous listings, no ghost cargoes.</p>
            </div>
            <div className="step-3">
              <div className="step-num">2</div>
              <h3>List or discover</h3>
              <p>Producers and processors list verified grades with full TDS, CoA and recycled-content certification attached. Buyers browse by grade, certification and specification.</p>
            </div>
            <div className="step-3">
              <div className="step-num">3</div>
              <h3>Agree terms</h3>
              <p>Price, volume, delivery terms and payment structure are agreed on-platform with full documentation and transparent, market-referenced pricing.</p>
            </div>
          </div>
          <div className="steps-3" style={{ marginTop: '24px' }}>
            <div className="step-3">
              <div className="step-num">4</div>
              <h3>Settle securely</h3>
              <p>Settlement, logistics and customs/compliance support (REACH, EPR, food-contact) are handled on-platform, trade to delivery.</p>
            </div>
            <div className="step-3">
              <div className="step-num">5</div>
              <h3>Trace the claim</h3>
              <p>Digital product passports carry certification proof (recycled content, origin, TDS/CoA) from reactor to converter, auditable on demand.</p>
            </div>
            <div className="step-3">
              <div className="step-num">6</div>
              <h3>Trade again</h3>
              <p>Trade history and verification status carry forward, making every subsequent transaction faster to close.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="content-inner" style={{ textAlign: 'center' }}>
          <h2>Choose your path</h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
            <Link href="/for-buyers" className="btn-primary">I&apos;m a buyer</Link>
            <Link href="/for-sellers" className="btn-secondary on-light">I&apos;m a seller</Link>
          </div>
        </div>
      </section>

      <div className="cta-section">
        <h2>Join the PolymerTrade marketplace</h2>
        <p>Every grade, one market, verified counterparties.</p>
        <a href="/contact" className="btn-primary">Join the marketplace</a>
      </div>
    </>
  )
}
