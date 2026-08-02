import type { Metadata } from 'next'
import ProductLinePage from '../../components/ProductLinePage'
import { getProductLine } from '../../lib/product-lines'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/virgin-polymers/' },
  title: 'Virgin Polymers — Prime Material, Producer-Direct',
  description:
    'Commodity and engineering resin from verified producers and distributors on PolymerTrade. PE, PP, PVC, PET, PS, ABS, PA, PC, POM, PBT — full TDS/CoA on every listing.',
}

export default function Page() {
  const line = getProductLine('virgin-polymers')!
  return <ProductLinePage line={line} />
}
