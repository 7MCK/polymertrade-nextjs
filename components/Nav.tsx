'use client'
import Link from 'next/link'
import { useState } from 'react'
import { PolymerTradeMark, PolymerTradeWordmark } from './Logo'
import WaitlistModal from './WaitlistModal'
import { productLines } from '../lib/product-lines'

export default function Nav() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <nav className="main-nav">
        <Link href="/" className="logo">
          <PolymerTradeMark size={30} dark />
          <PolymerTradeWordmark dark size={19} />
        </Link>
        <ul>
          <li className="nav-dropdown">
            <Link href="/marketplace">Product Lines ▾</Link>
            <div className="nav-dropdown-menu">
              {productLines.map((p) => (
                <Link key={p.slug} href={`/${p.slug}`}>{p.name}</Link>
              ))}
            </div>
          </li>
          <li><Link href="/prices">Live Prices</Link></li>
          <li><Link href="/how-it-works">How It Works</Link></li>
          <li><Link href="/verification">Verification</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><a href="#" className="nav-cta" onClick={(e) => { e.preventDefault(); setModalOpen(true) }}>Join the marketplace</a></li>
        </ul>
      </nav>
      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
