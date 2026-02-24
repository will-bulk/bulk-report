'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Search, Menu, X } from 'lucide-react'

const categories = [
  { name: 'News', href: '/' },
  { name: 'Markets', href: '/category/markets' },
  { name: 'Trucking', href: '/category/trucking' },
  { name: 'Technology', href: '/category/technology' },
  { name: 'Regulations', href: '/category/regulations' },
  { name: 'Insurance', href: '/category/insurance' },
  { name: 'Opinion', href: '/category/opinion' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Utility Bar */}
      <div className="bg-navy-dark text-gray-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="text-gray-500">A BulkLoads.com Publication</span>
          </div>
          <div className="hidden sm:flex gap-4">
            <a href="https://bulkloads.com" className="hover:text-white transition-colors">BulkLoads.com</a>
            <a href="#" className="hover:text-white transition-colors">BulkTMS</a>
            <a href="#" className="hover:text-white transition-colors">Bulk Insurance</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-navy text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-accent w-8 h-8 rounded flex items-center justify-center font-black text-sm">BR</div>
              <span className="font-black text-xl tracking-tight">BULK REPORT</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-300 hover:text-white transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link
                href="/subscribe"
                className="hidden sm:block bg-accent hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
              >
                Subscribe
              </Link>
              <button
                className="lg:hidden p-2 text-gray-300 hover:text-white"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 pb-4">
            <nav className="flex flex-col px-4 pt-2">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="py-2.5 text-sm font-medium text-gray-300 hover:text-white border-b border-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
              <Link
                href="/subscribe"
                className="mt-3 bg-accent hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded text-center transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Subscribe Free
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
