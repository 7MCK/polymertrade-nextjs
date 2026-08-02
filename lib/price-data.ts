export type PriceRow = {
  grade: string
  category: string
  unit: string
  price: string
  change: string
  up: boolean
  currency: string
}

// SAMPLE / ILLUSTRATIVE DATA ONLY — placeholder pricing structured so a live
// market-data feed can be wired in later. Not to be used for trading decisions.
export const samplePrices: PriceRow[] = [
  { grade: 'PE (HDPE)', category: 'Virgin Polymers', unit: '/ tonne', price: '1,180', change: '+0.6%', up: true, currency: '€' },
  { grade: 'PP Homopolymer', category: 'Virgin Polymers', unit: '/ tonne', price: '1,240', change: '-0.3%', up: false, currency: '€' },
  { grade: 'PVC', category: 'Virgin Polymers', unit: '/ tonne', price: '960', change: '+0.2%', up: true, currency: '€' },
  { grade: 'PET (bottle grade)', category: 'Virgin Polymers', unit: '/ tonne', price: '1,050', change: '+0.4%', up: true, currency: '€' },
  { grade: 'ABS', category: 'Virgin Polymers', unit: '/ tonne', price: '1,620', change: '-0.1%', up: false, currency: '€' },
  { grade: 'rPET (food-contact)', category: 'Recycled Polymers', unit: '/ tonne', price: '1,090', change: '+1.2%', up: true, currency: '€' },
  { grade: 'rHDPE', category: 'Recycled Polymers', unit: '/ tonne', price: '890', change: '+0.8%', up: true, currency: '€' },
  { grade: 'rPP', category: 'Recycled Polymers', unit: '/ tonne', price: '860', change: '-0.4%', up: false, currency: '€' },
  { grade: 'FR Compound (PC/ABS)', category: 'Compounds', unit: '/ tonne', price: '2,340', change: '+0.3%', up: true, currency: '€' },
  { grade: 'Glass-filled PA66 (30%)', category: 'Compounds', unit: '/ tonne', price: '2,780', change: '+0.1%', up: true, currency: '€' },
  { grade: 'Ethylene', category: 'Monomers', unit: '/ tonne', price: '870', change: '-0.5%', up: false, currency: '€' },
  { grade: 'Propylene', category: 'Monomers', unit: '/ tonne', price: '910', change: '+0.3%', up: true, currency: '€' },
  { grade: 'Styrene', category: 'Monomers', unit: '/ tonne', price: '1,020', change: '+0.7%', up: true, currency: '€' },
  { grade: 'Group I Base Oil', category: 'Base Oils', unit: '/ tonne', price: '640', change: '+0.2%', up: true, currency: '€' },
  { grade: 'Group III Base Oil', category: 'Base Oils', unit: '/ tonne', price: '1,180', change: '-0.2%', up: false, currency: '€' },
]

export const indexCards = [
  { name: 'Virgin Polymers Index', value: '1,214.30', change: '+0.4%', up: true, accent: 'var(--virgin)' },
  { name: 'Recycled Polymers Index', value: '946.80', change: '+0.9%', up: true, accent: 'var(--recycled)' },
  { name: 'Compounds Index', value: '2,410.10', change: '+0.2%', up: true, accent: 'var(--compounds)' },
  { name: 'Monomers Index', value: '933.60', change: '-0.1%', up: false, accent: 'var(--monomers)' },
  { name: 'Base Oils Index', value: '842.50', change: '+0.3%', up: true, accent: 'var(--baseoils)' },
]
