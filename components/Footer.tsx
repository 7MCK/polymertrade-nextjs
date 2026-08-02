import Link from 'next/link'
import { PolymerTradeMark, PolymerTradeWordmark } from './Logo'
import { productLines } from '../lib/product-lines'

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <PolymerTradeMark size={28} dark />
              <PolymerTradeWordmark dark size={18} />
            </Link>
            <p>The digital marketplace for the entire polymer value chain: monomers, base oils, virgin resin, certified recycled polymer and engineered compounds. Every grade. One market.</p>
          </div>
          <div className="footer-col">
            <h4>Product Lines</h4>
            <ul>
              {productLines.map((p) => (
                <li key={p.slug}><Link href={`/${p.slug}`}>{p.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Platform</h4>
            <ul>
              <li><Link href="/prices">Live Prices</Link></li>
              <li><Link href="/marketplace">Marketplace</Link></li>
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/for-buyers">For Buyers</Link></li>
              <li><Link href="/for-sellers">For Sellers</Link></li>
              <li><Link href="/verification">Verification &amp; Trust</Link></li>
              <li><Link href="/guides">Guides</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Sibling Marketplaces</h4>
            <ul>
              <li><a href="https://www.wastetrade.com" target="_blank" rel="noopener noreferrer">WasteTrade.com</a></li>
              <li><a href="https://www.oretrade.com" target="_blank" rel="noopener noreferrer">OreTrade.com</a></li>
              <li><a href="https://www.fibertrade.com" target="_blank" rel="noopener noreferrer">FiberTrade.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© {new Date().getFullYear()} PolymerTrade.com. Every grade. One market.</div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/polymertrade" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://x.com/polymertrade" target="_blank" rel="noopener noreferrer">X</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
