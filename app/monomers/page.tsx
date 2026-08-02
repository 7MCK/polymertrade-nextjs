import type { Metadata } from 'next'
import ProductLinePage from '../../components/ProductLinePage'
import { getProductLine } from '../../lib/product-lines'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.polymertrade.com/monomers/' },
  title: 'Monomers: The Start of the Chain',
  description:
    'Upstream feedstocks for polymer producers on PolymerTrade, traded with the same verification as finished resin. Ethylene, Propylene, Styrene, VCM, MEG, PTA and Butadiene, in bulk, contract and spot.',
}

export default function Page() {
  const line = getProductLine('monomers')!
  return <ProductLinePage line={line} />
}
