import type { Metadata } from 'next'
import Link from 'next/link'
import SchemaMarkup from '../../../components/SchemaMarkup'

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Understanding Base Oil Groups: Group I Through Group V Explained',
  author: { '@type': 'Organization', name: 'PolymerTrade', url: 'https://www.polymertrade.com' },
  publisher: {
    '@type': 'Organization',
    name: 'PolymerTrade',
    logo: { '@type': 'ImageObject', url: 'https://www.polymertrade.com/logo.svg' },
  },
  datePublished: '2026-08-02',
  dateModified: '2026-08-02',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.polymertrade.com/guides/understanding-base-oil-groups/' },
  about: { '@type': 'Thing', name: 'Base oil classification' },
  keywords: ['base oil groups', 'Group I base oil', 'Group II base oil', 'Group III base oil', 'API base oil classification', 'lubricant base stock'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the API base oil groups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The American Petroleum Institute classifies base oils into five groups based on saturate content, sulphur content and viscosity index: Group I (solvent-refined), Group II (hydroprocessed), Group III (severely hydrocracked), Group IV (polyalphaolefins, PAOs), and Group V (all other base stocks, including esters and naphthenics, that do not fit Groups I to IV).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Group II and Group III base oil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Group II base oil is hydroprocessed to a viscosity index of 80 to 120, giving good oxidation stability at a moderate cost. Group III base oil is severely hydrocracked to a viscosity index above 120, giving performance close to synthetic PAOs at a lower cost, which is why Group III is widely marketed as "synthetic" in finished lubricants in most jurisdictions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Group III base oil really synthetic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Group III base oil is produced from petroleum feedstock through severe hydrocracking and hydroisomerization, not built up from a single chemical synthesis route the way Group IV PAOs are. Regulatory bodies in most major markets nonetheless permit Group III oils to be marketed as synthetic in finished lubricants due to their performance characteristics.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are naphthenic base oils used for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Naphthenic base oils, a Group V category, have low pour points and good solvency, making them well suited to process oils, transformer oils, rubber-process applications and certain metalworking fluids, rather than automotive engine oil applications where paraffinic groups dominate.',
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
    { '@type': 'ListItem', position: 3, name: 'Understanding Base Oil Groups', item: 'https://www.polymertrade.com/guides/understanding-base-oil-groups/' },
  ],
}

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/guides/understanding-base-oil-groups/' },
  title: 'Understanding Base Oil Groups: Group I Through Group V Explained',
  description:
    'API base oil groups explained: Group I to Group V classification, what separates each group, typical applications, and how to spec the right base oil for your formulation.',
}

export default function BaseOilGroupsGuide() {
  return (
    <>
      <SchemaMarkup schemas={[articleSchema, faqSchema, breadcrumbSchema]} />
      <div className="page-hero">
        <div className="page-hero-inner">
          <p className="badge-line">PolymerTrade Guide</p>
          <h1>Understanding Base Oil Groups</h1>
          <p className="tagline">Group I through Group V explained</p>
          <p className="desc">Base oil groups determine performance, cost and marketing claims for finished lubricants. Here is what actually separates one group from the next.</p>
        </div>
      </div>

      <section className="content-section">
        <div className="content-inner">
          <h2>The API classification system</h2>
          <p>
            The American Petroleum Institute (API) classifies base oils into five groups according to three measurable properties: saturate content, sulphur content and viscosity index (VI), a measure of how much an oil's viscosity changes with temperature. Higher viscosity index means the oil holds its viscosity more consistently across a temperature range, which generally means better lubricant performance across operating conditions.
          </p>

          <h2 style={{ marginTop: '40px' }}>The five groups</h2>
          <div className="price-table-wrap">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Group</th>
                  <th>Process</th>
                  <th>Viscosity index</th>
                  <th>Typical use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="mono">Group I</td>
                  <td>Solvent refined</td>
                  <td className="mono">80&ndash;120</td>
                  <td>General industrial oils, lower-spec lubricants</td>
                </tr>
                <tr>
                  <td className="mono">Group II</td>
                  <td>Hydroprocessed</td>
                  <td className="mono">80&ndash;120</td>
                  <td>Automotive engine oils, hydraulic fluids</td>
                </tr>
                <tr>
                  <td className="mono">Group III</td>
                  <td>Severely hydrocracked</td>
                  <td className="mono">120+</td>
                  <td>Premium engine oils, marketed as synthetic</td>
                </tr>
                <tr>
                  <td className="mono">Group IV</td>
                  <td>Chemical synthesis (PAO)</td>
                  <td className="mono">120+</td>
                  <td>High-performance synthetic lubricants, extreme temperature range</td>
                </tr>
                <tr>
                  <td className="mono">Group V</td>
                  <td>All other base stocks (esters, naphthenics, PAGs)</td>
                  <td className="mono">varies</td>
                  <td>Process oils, specialty and niche applications, often blended with other groups</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 style={{ marginTop: '40px' }}>Group I: the conventional baseline</h2>
          <p>
            Group I base oils are produced through conventional solvent refining rather than hydroprocessing, giving them the widest specification tolerance and lowest saturate content of the paraffinic groups. Group I supply has been shrinking globally as refiners shift toward Group II and III capacity, but Group I remains cost-effective for general industrial oils and lower-specification lubricant applications where the tighter performance of Group II or III is not required.
          </p>

          <h2 style={{ marginTop: '40px' }}>Group II and Group III: the hydroprocessed groups</h2>
          <p>
            Group II base oils are hydroprocessed (treated with hydrogen under pressure to remove impurities and improve stability), giving better oxidation resistance and a cleaner, lower-sulphur oil than Group I at a similar viscosity index range. Group II has become the dominant base oil group globally for automotive engine oils and hydraulic fluids.
          </p>
          <p>
            Group III base oils go through severe hydrocracking and hydroisomerization, pushing the viscosity index above 120, which approaches the performance of Group IV synthetic PAOs at a meaningfully lower production cost. This is why Group III oils, despite being derived from petroleum feedstock rather than built through discrete chemical synthesis, are permitted to be marketed as "synthetic" in finished lubricants in most major markets, including the United States.
          </p>

          <h2 style={{ marginTop: '40px' }}>Group IV and Group V: synthetics and specialties</h2>
          <p>
            Group IV covers polyalphaolefins (PAOs), true synthetic base stocks built through controlled oligomerization of alpha-olefins, giving the most consistent molecular structure and the widest useful temperature range of any group. Group V is a catch-all for every base stock that does not fit Groups I through IV, including esters, polyalkylene glycols (PAGs) and naphthenic oils.
          </p>
          <p>
            Naphthenic oils, the most commonly traded Group V category on PolymerTrade, have naturally low pour points and strong solvency, making them well suited to process oils, transformer oils, rubber-processing oils and certain metalworking fluids, applications where paraffinic groups (I through IV) are not the natural fit.
          </p>

          <h2 style={{ marginTop: '40px' }}>Specifying the right group</h2>
          <p>
            Choosing a base oil group starts with the finished-product performance requirement (viscosity index, oxidation stability, temperature range) and the marketing claim needed (conventional versus synthetic), then works back to the group and grade that meets both at the lowest acceptable cost. A certificate of analysis per batch, which every base oil listing on PolymerTrade carries, confirms the actual measured properties against the group specification rather than relying on the group label alone.
          </p>
        </div>
      </section>

      <div className="cta-section">
        <h2>Source base oils by group and grade</h2>
        <p>Browse Group I to Group III base oils, naphthenics, process and white oils on PolymerTrade.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/base-oils" className="btn-primary">Base Oils</Link>
          <Link href="/guides" className="btn-secondary">More guides</Link>
        </div>
      </div>
    </>
  )
}
