'use client';
import Link from 'next/link';
import { categories } from '@/lib/articles';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-brand-darker text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl font-extrabold tracking-tight">
              <span className="text-brand-orange">Bulk</span>
              <span className="text-white">Report</span>
            </span>
            <span className="hidden sm:inline text-xs text-gray-400 border-l border-gray-600 pl-3">
              by BulkLoads.com
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="hover:text-brand-orange transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 text-sm font-medium">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="hover:text-brand-orange transition-colors"
                onClick={() => setOpen(false)}
              >
                {c.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
      <div className="h-1 bg-gradient-to-r from-brand-orange to-brand-green" />
    </header>
  );
}
