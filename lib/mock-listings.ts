export type Listing = {
  title: string
  category: string
  color: string
  volume: string
  location: string
  price: string
  type: 'Listing' | 'RFQ'
}

// SAMPLE / ILLUSTRATIVE DATA ONLY — mock marketplace listings for demonstration.
export const mockListings: Listing[] = [
  { title: 'Prime PP Homopolymer, injection grade', category: 'Virgin Polymers', color: 'var(--virgin)', volume: '500 t', location: 'Rotterdam, NL', price: '€1,240 / t', type: 'Listing' },
  { title: 'rPET flake, food-contact grade, ISCC PLUS', category: 'Recycled Polymers', color: 'var(--recycled)', volume: '250 t', location: 'Antwerp, BE', price: '€1,090 / t', type: 'Listing' },
  { title: 'Glass-filled PA66 (30%), black', category: 'Compounds', color: 'var(--compounds)', volume: '80 t', location: 'Cologne, DE', price: '€2,780 / t', type: 'Listing' },
  { title: 'Ethylene, pipeline delivery', category: 'Monomers', color: 'var(--monomers)', volume: '2,000 t', location: 'Houston, US', price: '€870 / t', type: 'RFQ' },
  { title: 'Group III Base Oil, drummed', category: 'Base Oils', color: 'var(--baseoils)', volume: '40 t', location: 'Singapore, SG', price: '€1,180 / t', type: 'Listing' },
  { title: 'rHDPE pellet, GRS certified', category: 'Recycled Polymers', color: 'var(--recycled)', volume: '120 t', location: 'Gdansk, PL', price: '€890 / t', type: 'Listing' },
  { title: 'ABS, natural, extrusion grade', category: 'Virgin Polymers', color: 'var(--virgin)', volume: '60 t', location: 'Busan, KR', price: '€1,620 / t', type: 'RFQ' },
  { title: 'FR compound, PC/ABS blend, UL94 V-0', category: 'Compounds', color: 'var(--compounds)', volume: '30 t', location: 'Milan, IT', price: '€2,340 / t', type: 'Listing' },
  { title: 'Propylene, contract volume Q3', category: 'Monomers', color: 'var(--monomers)', volume: '5,000 t', location: 'Rotterdam, NL', price: '€910 / t', type: 'RFQ' },
]
