import type { Metadata } from 'next'
import ProductLinePage from '../../components/ProductLinePage'
import { getProductLine } from '../../lib/product-lines'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/compounds/' },
  title: 'Compounds: Engineered to Specification',
  description:
    'Filled, reinforced and flame-retardant compounds, masterbatch and custom formulations on PolymerTrade. Glass/mineral-filled, FR grades, masterbatch & additives, spec-matched sourcing requests.',
}

export default function Page() {
  const line = getProductLine('compounds')!
  return <ProductLinePage line={line} />
}
