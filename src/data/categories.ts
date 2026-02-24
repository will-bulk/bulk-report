export interface Category {
  slug: string
  name: string
  color: string
  description: string
}

export const categories: Category[] = [
  { slug: 'trucking', name: 'Trucking', color: '#dc2626', description: 'Fleet operations, driver workforce, and bulk hauler news from across the industry.' },
  { slug: 'markets', name: 'Markets', color: '#059669', description: 'Freight rates, commodity prices, and economic analysis for bulk transportation.' },
  { slug: 'technology', name: 'Technology', color: '#7c3aed', description: 'TMS platforms, ELD compliance tech, AI, and digital innovation in logistics.' },
  { slug: 'regulations', name: 'Regulations', color: '#d97706', description: 'FMCSA rules, DOT compliance, weight limits, and policy developments.' },
  { slug: 'insurance', name: 'Insurance', color: '#0891b2', description: 'Trucking insurance trends, claims management, and coverage developments.' },
  { slug: 'opinion', name: 'Opinion', color: '#be185d', description: 'Expert analysis, editorials, and commentary on the bulk freight industry.' },
]

export const categoryMap = Object.fromEntries(categories.map(c => [c.slug, c]))
