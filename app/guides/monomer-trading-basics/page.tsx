import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Monomer Trading Basics: What Buyers Need to Know',
  author: { '@type': 'Organization', name: 'PolymerTrade', url: 'https://www.polymertrade.com' },
  publisher: {
    '@type': 'Organization',
    name: 'PolymerTrade',
    logo: { '@type': 'ImageObject', url: 'https://www.polymertrade.com/logo.svg' },
  },
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.polymertrade.com/guides/monomer-trading-basics/' },
  about: { '@type': 'Thing', name: 'Monomer trading' },
  keywords: ['monomer trading', 'ethylene trading', 'propylene trading', 'styrene trading', 'MEG trading', 'PTA trading'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a monomer in the polymer industry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A monomer is the small, reactive molecule that polymerizes into a long-chain polymer. Ethylene polymerizes into polyethylene, propylene into polypropylene, and styrene into polystyrene. Monomers are the upstream feedstock that polymer producers convert into resin.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between bulk, contract and spot monomer trading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bulk trading refers to large-volume shipments, typically by tanker or rail car, priced against a benchmark index. Contract trading is a longer-term supply agreement between a producer and buyer at agreed volumes and pricing terms, often monthly-settled against a published contract price. Spot trading is a one-off transaction at the current market price for immediate or near-term delivery.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are MEG and PTA used for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MEG (monoethylene glycol) and PTA (purified terephthalic acid) are the two monomers that react together to produce PET resin, used in polyester fiber, bottles and packaging film. Both are traded as bulk commodity feedstocks with their own benchmark pricing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does monomer trading require KYC verification?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Monomer cargoes involve high-value, often hazardous bulk chemical shipments with significant counterparty and logistics risk. KYC verification confirms the identity, ownership and legal standing of both producer and buyer before a trade proceeds, reducing settlement and compliance risk on transactions that can run into the millions of dollars per shipment.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'PolymerTrade', item: 'https://www.polymertrade.com' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.polymertrade.com/guides/' },
    { '@type': 'ListItem', position: 3, name: 'Monomer Trading Basics', item: 'https://www.polymertrade.com/guides/monomer-trading-basics/' },
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/guides/monomer-trading-basics/' },
  title: 'Monomer Trading Basics: What Buyers Need to Know',
  description:
    'Monomer trading explained: what monomers are, bulk vs contract vs spot terms, the core monomer set (ethylene, propylene, styrene, VCM, MEG, PTA, butadiene), and what to verify before trading.',
}

export default function MonomerTradingGuide() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="badge-line">PolymerTrade Guide</p>
          <h1>Monomer Trading Basics</h1>
          <p className="tagline">What buyers need to know</p>
          <p className="desc">Monomers sit at the very start of the polymer chain, and trading them looks more like bulk chemical trading than resin trading. Here is what buyers need to understand before their first cargo.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="content-inner">
          <h2>What a monomer is, and why it is traded separately</h2>
          <p>
            A monomer is the small, reactive molecule that links together into long polymer chains during polymerization. Ethylene polymerizes into polyethylene, propylene into polypropylene, styrene into polystyrene, and vinyl chloride monomer (VCM) into PVC. Monomers are produced by petrochemical crackers and refineries, then sold onward to polymer producers who run the polymerization step, which means monomer trading sits one full step upstream of resin trading, with its own pricing dynamics, contract structures and logistics.
          </p>

          <h2 style={{ marginTop: '40px' }}>The core monomer set</h2>
          <div className="price-table-wrap">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Monomer</th>
                  <th>Polymerizes into</th>
                  <th>Typical logistics</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ethylene</td>
                  <td>Polyethylene (PE)</td>
                  <td>Pipeline, refrigerated/pressurized vessel</td>
                </tr>
                <tr>
                  <td>Propylene</td>
                  <td>Polypropylene (PP)</td>
                  <td>Pipeline, pressurized rail/road tanker</td>
                </tr>
                <tr>
                  <td>Styrene</td>
                  <td>Polystyrene (PS), ABS</td>
                  <td>Bulk tanker, isotank</td>
                </tr>
                <tr>
                  <td>VCM</td>
                  <td>Polyvinyl chloride (PVC)</td>
                  <td>Pressurized vessel, specialized handling</td>
                </tr>
                <tr>
                  <td>MEG</td>
                  <td>PET (with PTA)</td>
                  <td>Bulk tanker, drum</td>
                </tr>
                <tr>
                  <td>PTA</td>
                  <td>PET (with MEG)</td>
                  <td>Bulk, bagged</td>
                </tr>
                <tr>
                  <td>Butadiene</td>
                  <td>Synthetic rubber, ABS</td>
                  <td>Pressurized vessel</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '16px' }}>
            MEG and PTA are worth noting specifically: they react together, not independently, to produce PET resin, which is why the two are almost always discussed as a pair in PET supply-chain analysis, even though they are traded as separate commodities with separate benchmark pricing.
          </p>

          <h2 style={{ marginTop: '40px' }}>Bulk, contract and spot terms</h2>
          <p>
            Monomer trading happens across three main commercial structures. Bulk trading covers large-volume shipments, typically moved by tanker, rail car or pipeline, priced against a published benchmark index for that monomer. Contract trading is a longer-term supply agreement, commonly settled monthly against an agreed contract price formula, giving both producer and buyer supply and demand certainty over a defined period. Spot trading is a one-off transaction at the prevailing market price, used to cover short-term supply gaps or to capture favorable pricing outside a standing contract.
          </p>
          <p>
            Most industrial buyers run a blended strategy: a contract position covering baseline volume needs, supplemented by spot purchases to manage demand swings or take advantage of favorable pricing windows. PolymerTrade supports listing and RFQ terms across all three structures rather than forcing monomer trades into a single commercial model.
          </p>

          <h2 style={{ marginTop: '40px' }}>What to verify before trading</h2>
          <p>
            Monomer cargoes are high-value, often hazardous bulk chemical shipments, and the counterparty, logistics and documentation risk is correspondingly higher than for finished resin. Before trading, confirm producer KYC verification (company identity, ownership and legal standing), cargo documentation (specification, quantity, quality certificate), and delivery terms (Incoterms, vessel or transport arrangement, and any handling requirements specific to that monomer, such as VCM's pressurized-vessel requirement or styrene's inhibitor and temperature-control needs in transit).
          </p>
          <p>
            On PolymerTrade, every monomer counterparty completes KYC before their first trade, and cargo documentation is handled on-platform rather than through disconnected email attachments, reducing the paperwork risk that has historically made monomer trading a relationship-dependent, phone-based business.
          </p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Trade monomers with verified counterparties</h2>
        <p>Browse ethylene, propylene, styrene and other upstream feedstocks on PolymerTrade.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/monomers" className="btn-primary">Monomers</Link>
          <Link href="/guides" className="btn-secondary">More guides</Link>
        </div>
      </div>
    </>
  )
}
