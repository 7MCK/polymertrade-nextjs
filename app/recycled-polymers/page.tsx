import type { Metadata } from 'next'
import ProductLinePage from '../../components/ProductLinePage'
import { getProductLine } from '../../lib/product-lines'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/recycled-polymers/' },
  title: 'Recycled Polymers: Circular Resin with Certified Content',
  description:
    'PCR and PIR grades with recycled-content certification on PolymerTrade. rPET, rHDPE, rLDPE, rPP and rPS, ISCC PLUS, GRS and EuCertPlast certified, with food-contact grades flagged.',
}

export default function Page() {
  const line = getProductLine('recycled-polymers')!
  return <ProductLinePage line={line} />
}
