import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '../components/ContactForm'
import { PolymerTradeMark } from '../components/Logo'
import { productLines } from '../lib/product-lines'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/' },
  title: 'PolymerTrade: Every Grade. One Market.',
  description:
    'The marketplace for the entire polymer value chain. Virgin resin, certified recycled polymer, compounds, monomers and base oils, traded between verified counterparties, with transparent pricing and secure settlement.',
}

const pillars = [
  {
    title: 'One market for the whole chain',
    desc: 'Upstream feedstocks and downstream materials on one platform. No other marketplace covers monomers and base oils through virgin, recycled and compounded polymer.',
  },
  {
    title: 'Verified counterparties',
    desc: 'KYC-verified producers, traders and buyers. No anonymous listings, no ghost cargoes.',
  },
  {
    title: 'Certified material, proven claims',
    desc: 'Datasheets, CoAs and recycled-content certification (ISCC PLUS, GRS, EuCertPlast) attached to the trade. Digital product passports carry the proof from reactor to converter.',
  },
  {
    title: 'Transparent pricing',
    desc: 'Live market indices and real transaction data in a market notorious for opaque, negotiated pricing.',
  },
  {
    title: 'Trade to delivery',
    desc: 'Secure settlement, logistics and customs/compliance support (REACH, EPR, food-contact) handled on-platform.',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className="hero-wrap">
        <div className="hero">
          <div>
            <p className="section-label">The Polymer Marketplace</p>
            <h1>Every grade.<br /><span>One market.</span></h1>
            <p>The marketplace for the entire polymer value chain. Virgin resin, certified recycled polymer, compounds, monomers and base oils, traded between verified counterparties, with transparent pricing and secure settlement.</p>
            <div className="hero-btns">
              <a href="#contact" className="btn-primary">Join the marketplace</a>
              <Link href="/prices" className="btn-secondary">View live prices</Link>
            </div>
          </div>
          <div className="price-panel">
            <h3>Live Market Indices <span style={{ opacity: 0.6, fontWeight: 400 }}>(sample)</span></h3>
            <div className="price-grid">
              {[
                { name: 'Virgin Polymers', value: '€1,214', change: '▲ +0.4%', up: true },
                { name: 'Recycled Polymers', value: '€946', change: '▲ +0.9%', up: true },
                { name: 'Compounds', value: '€2,410', change: '▲ +0.2%', up: true },
                { name: 'Monomers', value: '€934', change: '▼ -0.1%', up: false },
                { name: 'Base Oils', value: '€843', change: '▲ +0.3%', up: true },
                { name: 'Ethylene', value: '€870', change: '▼ -0.5%', up: false },
              ].map((m) => (
                <div key={m.name} className="price-item">
                  <div className="price-metal">{m.name}</div>
                  <div className="price-value">{m.value}</div>
                  <div className={`price-change ${m.up ? 'up' : 'down'}`}>{m.change}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT LINES */}
      <section id="products">
        <div className="section-inner">
          <p className="section-label">The Value Chain</p>
          <h2 className="section-title">Five product lines, one marketplace</h2>
          <p className="section-sub">From upstream feedstocks to finished compounds, PolymerTrade covers the full polymer chain on a single platform.</p>
          <div className="product-grid">
            {productLines.map((p) => (
              <Link key={p.slug} href={`/${p.slug}`} className="product-card" style={{ borderTopColor: p.color }}>
                <div className="tag" style={{ color: p.color, fontWeight: 600, fontSize: '13px', marginBottom: '10px' }}>{p.short}</div>
                <h3>{p.name}</h3>
                <div className="tag">{p.tagline}</div>
                <div className="pc-cta" style={{ color: p.color }}>Explore →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="pillars">
        <div className="section-inner">
          <p className="section-label">Why PolymerTrade</p>
          <h2 className="section-title">Built on verification, not on faith</h2>
          <p className="section-sub">The polymer trade still runs on phone calls and relationships. PolymerTrade brings institutional-grade trust to every transaction.</p>
          <div className="pillars-grid">
            {pillars.map((p, i) => (
              <div key={p.title} className="pillar-card">
                <div className="pillar-num">{String(i + 1).padStart(2, '0')}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS / PROOF POINTS */}
      <section className="stats-strip">
        <div className="section-inner">
          <p className="section-label" style={{ color: 'var(--blue-bright)' }}>The Opportunity</p>
          <h2 className="section-title" style={{ color: '#fff' }}>A market still running on phone calls</h2>
          <p className="section-sub" style={{ color: '#A9B7C9' }}>Placeholder figures, to be replaced with sourced market data ahead of launch.</p>
          <div className="stats-grid">
            {[
              { num: '$1.1T+', label: 'Global polymer & petrochemicals market size' },
              { num: '60%+', label: 'Of volume still traded through offline channels' },
              { num: '5', label: 'Product lines covered on one platform' },
              { num: '2026', label: 'PolymerTrade launches' },
            ].map((s) => (
              <div key={s.num} className="stat-box">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className="section-inner">
          <p className="section-label">How It Works</p>
          <h2 className="section-title">From listing to settlement in four steps</h2>
          <p className="section-sub">A structured process built for the realities of the polymer trade.</p>
          <div className="steps">
            {[
              { n: '1', title: 'List or discover', desc: 'Producers and processors list verified grades. Buyers browse with full spec, TDS and CoA data.' },
              { n: '2', title: 'Verify and connect', desc: 'Both parties complete KYC. PolymerTrade confirms certifications and recycled-content claims.' },
              { n: '3', title: 'Agree terms', desc: 'Price, volume, delivery terms and payment structure agreed on-platform with full documentation.' },
              { n: '4', title: 'Trade and settle', desc: 'Settlement handled securely, with logistics and customs/compliance support end to end.' },
            ].map((s) => (
              <div key={s.n} className="step">
                <div className="step-num">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY / SIBLING BRANDS */}
      <div className="family-strip">
        <PolymerTradeMark size={40} />
        <h2>Part of the family behind WasteTrade, OreTrade &amp; FiberTrade</h2>
        <p>PolymerTrade joins WasteTrade.com, OreTrade.com and FiberTrade.com as the fourth marketplace in a family of vertical commodity marketplaces. WasteTrade trades the bale; PolymerTrade trades the pellet.</p>
        <div className="sibling-links">
          <a href="https://www.wastetrade.com" className="sibling-link" target="_blank" rel="noopener noreferrer">WasteTrade.com</a>
          <a href="https://www.oretrade.com" className="sibling-link" target="_blank" rel="noopener noreferrer">OreTrade.com</a>
          <a href="https://www.fibertrade.com" className="sibling-link" target="_blank" rel="noopener noreferrer">FiberTrade.com</a>
        </div>
      </div>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="section-inner">
          <div className="contact-inner">
            <div className="contact-info">
              <h2>Get in touch</h2>
              <p>Whether you&apos;re a producer, processor, compounder, buyer or potential investor, we want to hear from you.</p>
              <div className="contact-detail">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E56E8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                <span>hello@polymertrade.com</span>
              </div>
              <div className="contact-detail">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E56E8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>
                <span>Global operations</span>
              </div>
              <div className="contact-detail">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E56E8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c2.5 2.5 4 6 4 9.5 0 2-.8 3.8-2 5.3l-2 2.2-2-2.2c-1.2-1.5-2-3.3-2-5.3C8 8 9.5 4.5 12 2Z"/><circle cx="12" cy="10" r="1.6"/><path d="M9 17.5c-1 .7-1.6 1.8-1.6 3.5M15 17.5c1 .7 1.6 1.8 1.6 3.5"/></svg>
                <span>Platform launching 2026</span>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
