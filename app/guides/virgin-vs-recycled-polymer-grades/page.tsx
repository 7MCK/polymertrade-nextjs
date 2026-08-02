import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Virgin vs Recycled Polymer Grades: A Buyer's Guide",
  author: { '@type': 'Organization', name: 'PolymerTrade', url: 'https://www.polymertrade.com' },
  publisher: {
    '@type': 'Organization',
    name: 'PolymerTrade',
    logo: { '@type': 'ImageObject', url: 'https://www.polymertrade.com/logo.svg' },
  },
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.polymertrade.com/guides/virgin-vs-recycled-polymer-grades/' },
  about: { '@type': 'Thing', name: 'Polymer resin grade classification' },
  keywords: ['virgin polymer', 'recycled polymer', 'PCR resin', 'PIR resin', 'rPET vs virgin PET', 'ISCC PLUS'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between virgin and recycled polymer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Virgin polymer is produced entirely from newly polymerized resin with no prior use cycle, giving the most consistent and predictable properties. Recycled polymer (PCR or PIR) is reprocessed from previously used material, and while it can match virgin performance closely on many grades, it typically carries a wider property tolerance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between PCR and PIR polymer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PCR (post-consumer recyclate) is made from material that completed its full life cycle as a consumer product before recycling, such as used bottles or packaging. PIR (post-industrial recyclate) is made from manufacturing waste, such as trim, off-spec resin or production scrap, that never reached the end consumer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is recycled polymer suitable for food-contact applications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some recycled polymer grades are approved for food contact, most commonly rPET produced through processes with specific regulatory clearance (such as EFSA or FDA letters of no objection), but this approval is process-and-facility-specific, not automatic for all recycled resin. Food-contact-suitable grades should be explicitly flagged with the relevant approval.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does ISCC PLUS certify for recycled polymer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ISCC PLUS certifies sustainable and circular feedstock through a mass-balance chain-of-custody system, commonly used for chemically recycled polymer where recycled content is tracked proportionally through the supply chain rather than segregated as physically distinct material.',
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
    { '@type': 'ListItem', position: 3, name: 'Virgin vs Recycled Polymer Grades', item: 'https://www.polymertrade.com/guides/virgin-vs-recycled-polymer-grades/' },
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/guides/virgin-vs-recycled-polymer-grades/' },
  title: "Virgin vs Recycled Polymer Grades: A Buyer's Guide",
  description:
    'Virgin vs recycled polymer resin explained: PCR vs PIR, performance trade-offs, ISCC PLUS and GRS certification, food-contact approval, and how to choose the right grade.',
}

export default function VirginVsRecycledGuide() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="badge-line">PolymerTrade Guide</p>
          <h1>Virgin vs Recycled Polymer Grades</h1>
          <p className="tagline">A buyer&apos;s guide</p>
          <p className="desc">Virgin and recycled resin serve different needs, and the right choice depends on more than price. Here is how to evaluate the trade-offs and what certification actually verifies.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="content-inner">
          <h2>Virgin polymer: the consistency baseline</h2>
          <p>
            Virgin polymer is resin polymerized directly from monomer feedstock, with no prior use or reprocessing cycle. Because the polymer chain has not been through a previous melt or degradation cycle, virgin resin offers the most predictable molecular weight distribution, melt flow index and mechanical properties, and the widest range of specifiable grades, from commodity PE and PP through engineering resins like PC, POM and PBT.
          </p>
          <p>
            Virgin resin is the default choice for applications with tight, non-negotiable performance requirements, such as engineering and technical parts, medical-grade components, and any application where lot-to-lot consistency is more important than cost or sustainability credentials.
          </p>

          <h2 style={{ marginTop: '40px' }}>Recycled polymer: PCR vs PIR</h2>
          <p>
            Recycled polymer comes in two distinct categories that are often confused. Post-consumer recyclate (PCR) is reprocessed from material that completed its full life cycle as a consumer product, such as collected bottles, packaging or end-of-life durable goods, before being cleaned, reprocessed and repelletized. Post-industrial recyclate (PIR) is reprocessed from manufacturing waste, such as edge trim, off-spec resin, purge and production scrap, that never left the industrial supply chain and never reached a consumer.
          </p>
          <p>
            PIR generally carries less contamination risk and less property variation than PCR, since the input material is better characterized and was never exposed to consumer-use conditions or mixed waste streams. PCR requires more rigorous sorting, washing and decontamination, and typically carries a wider mechanical-property tolerance as a result, though well-processed PCR (particularly bottle-grade rPET) can approach virgin-equivalent performance for many applications.
          </p>

          <h2 style={{ marginTop: '40px' }}>Certification: what to actually check</h2>
          <p>
            Two certification systems dominate recycled polymer claims. GRS (Global Recycled Standard) verifies recycled content through physical chain-of-custody tracking and audits social and environmental practices at each certified facility. ISCC PLUS verifies sustainable and circular feedstock through a mass-balance system, where recycled content is tracked proportionally through the supply chain rather than physically segregated, which is common for chemically recycled polymer where feedstock is co-processed with virgin material in existing plants.
          </p>
          <p>
            EuCertPlast is a European scheme specifically for plastics recyclers, verifying traceability of recycled input at the recycling facility itself. Buyers sourcing recycled resin for regulated or brand-owner sustainability programs should confirm which certification applies and request the relevant transaction-level documentation, rather than accepting a general "certified recycled" claim without a named standard.
          </p>

          <h2 style={{ marginTop: '40px' }}>Food-contact approval is a separate question</h2>
          <p>
            Recycled-content certification and food-contact approval are not the same thing and should not be assumed to travel together. Food-contact-grade rPET, for example, is typically produced through a specific decontamination process that has received regulatory clearance, such as an EFSA (European Food Safety Authority) opinion or an FDA letter of no objection, tied to that specific process and facility. A recycled resin can be GRS or ISCC PLUS certified for recycled content and still not be approved for food-contact use unless it carries the separate, process-specific regulatory clearance.
          </p>

          <h2 style={{ marginTop: '40px' }}>Choosing between virgin and recycled</h2>
          <div className="price-table-wrap">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Virgin</th>
                  <th>Recycled (PCR / PIR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Property consistency</td>
                  <td>Highest, tightest tolerance</td>
                  <td>Good, wider tolerance typical</td>
                </tr>
                <tr>
                  <td>Best fit</td>
                  <td>Engineering, medical, tight-tolerance parts</td>
                  <td>Packaging, general molding, sustainability-driven programs</td>
                </tr>
                <tr>
                  <td>Typical certification</td>
                  <td>Not usually required</td>
                  <td>GRS, ISCC PLUS, or EuCertPlast</td>
                </tr>
                <tr>
                  <td>Food-contact status</td>
                  <td>Standard grades generally approved</td>
                  <td>Requires specific process-level regulatory clearance</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '16px' }}>
            On PolymerTrade, every recycled listing states its certification standard and food-contact status explicitly, so the choice between virgin and recycled is never a guessing game buried in a data sheet.
          </p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Source virgin or certified recycled resin</h2>
        <p>Browse Virgin Polymers and Recycled Polymers listings on PolymerTrade.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/recycled-polymers" className="btn-primary">Recycled Polymers</Link>
          <Link href="/guides" className="btn-secondary">More guides</Link>
        </div>
      </div>
    </>
  )
}
