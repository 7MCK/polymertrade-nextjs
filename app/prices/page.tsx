import type { Metadata } from 'next'
import { samplePrices, indexCards } from '../../lib/price-data'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/prices/' },
  title: 'Live Prices — Polymer Market Indices',
  description:
    'Illustrative market indices and grade-level pricing across virgin polymers, recycled polymers, compounds, monomers and base oils. Sample data — live feed to be wired in ahead of launch.',
}

export default function PricesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="badge-line">Live Prices</p>
          <h1>Polymer market indices</h1>
          <p className="desc">
            Transparent pricing is one of PolymerTrade&apos;s five founding pillars. The figures below are illustrative/sample data for now — structured so a live market-data feed can be wired in ahead of launch.
          </p>
        </div>
      </div>

      <section className="content-section">
        <div className="content-inner">
          <span className="badge-soon">Sample data — illustrative only</span>
          <h2>Market indices by product line</h2>
          <div className="index-cards price-index-grid">
            {indexCards.map((c) => (
              <div key={c.name} className="price-index-card" style={{ '--accent': c.accent } as React.CSSProperties}>
                <div className="pic-name">{c.name}</div>
                <div className="pic-value">{c.value}</div>
                <div className={`pic-change ${c.up ? 'up' : 'down'}`}>{c.up ? '▲' : '▼'} {c.change}</div>
              </div>
            ))}
          </div>
          <div className="disclaimer-note">
            These indices are illustrative placeholder figures for demonstration purposes and do not reflect real market transactions. Live pricing data will replace this sample dataset ahead of platform launch.
          </div>
        </div>
      </section>

      <section className="content-section alt">
        <div className="content-inner">
          <h2>Grade-level pricing</h2>
          <p>Representative grade pricing across the five PolymerTrade product lines. All figures below are sample data.</p>
          <div className="price-table-wrap">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Grade</th>
                  <th>Product line</th>
                  <th className="mono">Price</th>
                  <th className="mono">Unit</th>
                  <th className="mono">24h change</th>
                </tr>
              </thead>
              <tbody>
                {samplePrices.map((r) => (
                  <tr key={r.grade}>
                    <td className="mono">{r.grade}</td>
                    <td>{r.category}</td>
                    <td className="mono">{r.currency}{r.price}</td>
                    <td className="mono">{r.unit}</td>
                    <td className={`mono ${r.up ? 'up' : 'down'}`}>{r.up ? '▲' : '▼'} {r.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="disclaimer-note">
            Sample / illustrative data only. Not to be used for trading, hedging or investment decisions. Real transaction data will be integrated as PolymerTrade launches.
          </div>
        </div>
      </section>
    </>
  )
}
