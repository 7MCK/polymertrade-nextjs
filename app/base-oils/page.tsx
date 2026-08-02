import type { Metadata } from 'next'
import ProductLinePage from '../../components/ProductLinePage'
import { getProductLine } from '../../lib/product-lines'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/base-oils/' },
  title: 'Base Oils — The Fluid Side of the Barrel',
  description:
    'Group I–III base oils, naphthenics, process and white oils for lubricant blenders and industrial users on PolymerTrade. Bulk, flexi and drummed.',
}

export default function Page() {
  const line = getProductLine('base-oils')!
  return <ProductLinePage line={line} />
}
