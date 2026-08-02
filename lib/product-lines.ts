export type ProductLine = {
  slug: string
  name: string
  short: string
  tagline: string
  color: string
  description: string
  grades: string[]
  certifications: string[]
  icon: string
}

export const productLines: ProductLine[] = [
  {
    slug: 'virgin-polymers',
    name: 'Virgin Polymers',
    short: 'Virgin',
    tagline: 'Prime material, producer-direct.',
    color: 'var(--virgin)',
    description:
      'Commodity and engineering resin from verified producers and distributors. Every listing carries full technical data sheets and certificates of analysis, so buyers can specify with confidence.',
    grades: ['PE', 'PP', 'PVC', 'PET', 'PS', 'ABS', 'PA', 'PC', 'POM', 'PBT'],
    certifications: ['TDS on every listing', 'CoA on every listing', 'ISO 9001 producer verification'],
    icon: '⬡',
  },
  {
    slug: 'recycled-polymers',
    name: 'Recycled Polymers',
    short: 'Recycled',
    tagline: 'Circular resin with certified content.',
    color: 'var(--recycled)',
    description:
      'PCR and PIR grades with recycled-content certification — the pellet side of the WasteTrade loop. Food-contact grades are flagged with the relevant regulatory approval.',
    grades: ['rPET', 'rHDPE', 'rLDPE', 'rPP', 'rPS'],
    certifications: ['ISCC PLUS', 'GRS (Global Recycled Standard)', 'EuCertPlast', 'EFSA / FDA food-contact flagging'],
    icon: '⬡',
  },
  {
    slug: 'compounds',
    name: 'Compounds',
    short: 'Compounds',
    tagline: 'Engineered to specification.',
    color: 'var(--compounds)',
    description:
      'Filled, reinforced and flame-retardant compounds, masterbatch and custom formulations. Post a spec-matched sourcing request and reach compounders who can meet it.',
    grades: ['Glass-filled', 'Mineral-filled', 'FR grades', 'Masterbatch', 'Additives'],
    certifications: ['Spec-matched sourcing requests', 'Formulation datasheets', 'UL94 flame-rating documentation'],
    icon: '⬡',
  },
  {
    slug: 'monomers',
    name: 'Monomers',
    short: 'Monomers',
    tagline: 'The start of the chain.',
    color: 'var(--monomers)',
    description:
      'Upstream feedstocks for polymer producers, traded with the same verification as finished resin. Bulk, contract and spot volumes across the core monomer set.',
    grades: ['Ethylene', 'Propylene', 'Styrene', 'VCM', 'MEG', 'PTA', 'Butadiene'],
    certifications: ['Bulk / contract / spot terms', 'Producer KYC verification', 'Cargo documentation on-platform'],
    icon: '⬡',
  },
  {
    slug: 'base-oils',
    name: 'Base Oils',
    short: 'Base Oils',
    tagline: 'The fluid side of the barrel.',
    color: 'var(--baseoils)',
    description:
      'Group I–III base oils, naphthenics, process and white oils for lubricant blenders and industrial users. Bulk, flexi and drummed volumes.',
    grades: ['Group I', 'Group II', 'Group III', 'Naphthenics', 'Process oils', 'White oils'],
    certifications: ['Bulk / flexi / drummed logistics', 'Certificate of analysis per batch', 'Verified blender & trader network'],
    icon: '⬡',
  },
]

export function getProductLine(slug: string) {
  return productLines.find((p) => p.slug === slug)
}
