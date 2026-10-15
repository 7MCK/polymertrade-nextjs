import type { Metadata } from 'next'
import ContactForm from '../../components/ContactForm'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/contact/' },
  title: 'Contact',
  description: 'Get in touch with PolymerTrade: producers, processors, compounders, buyers and investors welcome.',
}

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="badge-line">Contact</p>
          <h1>Get in touch</h1>
          <p className="desc">Whether you&apos;re a producer, processor, compounder, buyer, logistics partner or potential investor, we want to hear from you.</p>
        </div>
      </div>

      <section className="contact">
        <div className="section-inner">
          <div className="contact-inner">
            <div className="contact-info">
              <h2>PolymerTrade</h2>
              <p>The digital marketplace for the entire polymer value chain. Every grade. One market.</p>
              <div className="contact-detail">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E56E8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                <span>hello@polymertrade.com</span>
              </div>
              <div className="contact-detail">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1E56E8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                <span>investors@polymertrade.com</span>
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
