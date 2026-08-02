import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Are Polymer Compounds? A Guide to Custom Formulations',
  author: { '@type': 'Organization', name: 'PolymerTrade', url: 'https://www.polymertrade.com' },
  publisher: {
    '@type': 'Organization',
    name: 'PolymerTrade',
    logo: { '@type': 'ImageObject', url: 'https://www.polymertrade.com/logo.svg' },
  },
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.polymertrade.com/guides/what-are-polymer-compounds/' },
  about: { '@type': 'Thing', name: 'Polymer compounding' },
  keywords: ['polymer compounds', 'masterbatch', 'glass-filled compound', 'flame retardant compound', 'custom resin formulation'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a polymer compound?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A polymer compound is a base resin that has been modified with fillers, reinforcements, additives or other polymers to achieve specific mechanical, thermal, electrical or flame-retardant properties that the unmodified resin does not have on its own.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a compound and masterbatch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A compound is a ready-to-mold formulation, blended and pelletized at the final use concentration. Masterbatch is a concentrated additive or color carrier, designed to be diluted into a base resin by the end processor at a specified letdown ratio, rather than used at full concentration.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does glass-filled mean in a compound?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Glass-filled means chopped glass fiber or glass beads have been compounded into the base resin, typically at 10 to 40 percent by weight, to increase stiffness, dimensional stability and heat resistance compared to the unfilled resin.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I source a custom compound?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because compounds are formulated rather than commodity stock, sourcing typically works by submitting a spec-matched request (target properties, base resin, filler type and loading, flame-rating requirement) to compounders who can formulate and quote against that spec, rather than browsing standing listings.',
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
    { '@type': 'ListItem', position: 3, name: 'What Are Polymer Compounds?', item: 'https://www.polymertrade.com/guides/what-are-polymer-compounds/' },
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/guides/what-are-polymer-compounds/' },
  title: 'What Are Polymer Compounds? A Guide to Custom Formulations',
  description:
    'Polymer compounds explained: how compounds and masterbatch differ from off-the-shelf resin, glass and mineral filling, flame-retardant formulations, and how to source a spec-matched compound.',
}

export default function CompoundsGuide() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="badge-line">PolymerTrade Guide</p>
          <h1>What Are Polymer Compounds?</h1>
          <p className="tagline">A guide to custom formulations</p>
          <p className="desc">Compounds are where resin becomes solution-specific. Here is what actually goes into a compound, how it differs from masterbatch, and how to source one.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="content-inner">
          <h2>Compounding: resin plus formulation</h2>
          <p>
            A polymer compound starts with a base resin, virgin or recycled, and adds fillers, reinforcements, colorants, stabilizers or flame retardants to reach a target set of properties the unmodified resin cannot achieve alone. The result is a ready-to-mold pellet formulated to a specific mechanical, thermal, electrical or regulatory requirement, rather than a generic commodity grade.
          </p>
          <p>
            Compounding is a distinct manufacturing step from resin production. A compounder buys base resin (from a virgin or recycled supplier), adds the formulation ingredients through a melt-compounding process, typically on a twin-screw extruder, and sells the finished compound onward to an injection molder, extruder or other converter.
          </p>

          <h2 style={{ marginTop: '40px' }}>Common compound categories</h2>
          <div className="price-table-wrap">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>What it adds</th>
                  <th>Why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Glass-filled</td>
                  <td>Chopped glass fiber or glass beads, typically 10&ndash;40% by weight</td>
                  <td>Increases stiffness, dimensional stability and heat resistance</td>
                </tr>
                <tr>
                  <td>Mineral-filled</td>
                  <td>Talc, calcium carbonate or other mineral filler</td>
                  <td>Reduces cost and shrinkage, improves dimensional stability</td>
                </tr>
                <tr>
                  <td>Flame-retardant (FR)</td>
                  <td>Halogenated or halogen-free flame-retardant additives</td>
                  <td>Meets electrical, electronics or construction fire-safety standards</td>
                </tr>
                <tr>
                  <td>Impact modified</td>
                  <td>Rubber or elastomer toughening agents</td>
                  <td>Improves impact resistance, especially at low temperature</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 style={{ marginTop: '40px' }}>Compounds vs masterbatch</h2>
          <p>
            Masterbatch is often confused with compounds but serves a different function. Masterbatch is a highly concentrated carrier of color or additive, typically 20 to 50 percent active ingredient by weight, designed to be let down (diluted) into a base resin by the end processor at a specified ratio, commonly 1 to 5 percent, at the point of molding or extrusion. A compound, by contrast, is used directly at the final concentration; no further dilution is expected.
          </p>
          <p>
            Masterbatch gives converters flexibility to color or additive-treat a standard resin themselves without buying a fully custom compound, while a compound gives a fixed, guaranteed formulation with no dilution step or dosing error risk on the converter's line.
          </p>

          <h2 style={{ marginTop: '40px' }}>Flame-rating documentation</h2>
          <p>
            Flame-retardant compounds intended for electrical, electronics or construction applications typically need to meet a recognized flammability standard, most commonly UL94, which rates materials on flame spread and self-extinguishing behavior (ratings such as V-0, V-1, V-2, HB). A genuine FR compound listing should carry UL94 (or the relevant regional equivalent) test documentation specific to that formulation and part thickness, since flame rating can vary with wall thickness even for the same formulation.
          </p>

          <h2 style={{ marginTop: '40px' }}>How to source a custom compound</h2>
          <p>
            Because compounds are formulated to order rather than stocked as standing commodity inventory, sourcing works differently from buying virgin or recycled resin off a listing. On PolymerTrade, buyers post a spec-matched sourcing request specifying the base resin, target mechanical or thermal properties, filler type and loading, and any flame-rating or regulatory requirement, and reach compounders who can formulate and quote against that exact spec.
          </p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Post a spec-matched compound request</h2>
        <p>Reach compounders who can formulate to your exact specification on PolymerTrade.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/compounds" className="btn-primary">Compounds</Link>
          <Link href="/guides" className="btn-secondary">More guides</Link>
        </div>
      </div>
    </>
  )
}
