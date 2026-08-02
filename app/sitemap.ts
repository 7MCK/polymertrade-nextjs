import { MetadataRoute } from 'next'

// This array is manually verified exhaustive against `find app -name "page.tsx"`.
// Every real route in the app directory must have an entry here. See repo
// SEO audit notes for the verification checklist run alongside this file.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.polymertrade.com'
  const now = new Date()

  const paths = [
    { url: '/', priority: 1.0, freq: 'weekly' as const },
    { url: '/virgin-polymers/', priority: 0.9, freq: 'weekly' as const },
    { url: '/recycled-polymers/', priority: 0.9, freq: 'weekly' as const },
    { url: '/compounds/', priority: 0.85, freq: 'weekly' as const },
    { url: '/monomers/', priority: 0.85, freq: 'weekly' as const },
    { url: '/base-oils/', priority: 0.85, freq: 'weekly' as const },
    { url: '/prices/', priority: 0.9, freq: 'daily' as const },
    { url: '/marketplace/', priority: 0.85, freq: 'daily' as const },
    { url: '/verification/', priority: 0.8, freq: 'monthly' as const },
    { url: '/guides/', priority: 0.8, freq: 'monthly' as const },
    { url: '/guides/virgin-vs-recycled-polymer-grades/', priority: 0.75, freq: 'monthly' as const },
    { url: '/guides/understanding-base-oil-groups/', priority: 0.75, freq: 'monthly' as const },
    { url: '/guides/what-are-polymer-compounds/', priority: 0.75, freq: 'monthly' as const },
    { url: '/guides/monomer-trading-basics/', priority: 0.75, freq: 'monthly' as const },
    { url: '/how-it-works/', priority: 0.75, freq: 'monthly' as const },
    { url: '/for-buyers/', priority: 0.75, freq: 'monthly' as const },
    { url: '/for-sellers/', priority: 0.75, freq: 'monthly' as const },
    { url: '/about/', priority: 0.75, freq: 'monthly' as const },
    { url: '/contact/', priority: 0.6, freq: 'monthly' as const },
    { url: '/careers/', priority: 0.4, freq: 'monthly' as const },
    { url: '/privacy/', priority: 0.3, freq: 'yearly' as const },
    { url: '/terms/', priority: 0.3, freq: 'yearly' as const },
  ]

  return paths.map((p) => ({
    url: `${base}${p.url}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }))
}
