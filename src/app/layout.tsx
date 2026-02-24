import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bulk Report — Bulk Freight Industry News & Analysis',
  description: 'The leading source for bulk freight industry news, market data, and analysis. Covering trucking, markets, technology, regulations, and more. A BulkLoads.com publication.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
