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
              <div className="contact-detail"><span>✉️</span><span>hello@polymertrade.com</span></div>
              <div className="contact-detail"><span>💼</span><span>investors@polymertrade.com</span></div>
              <div className="contact-detail"><span>🌍</span><span>Global operations</span></div>
              <div className="contact-detail"><span>🚀</span><span>Platform launching 2026</span></div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
