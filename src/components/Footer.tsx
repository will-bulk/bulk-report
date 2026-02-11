import Link from 'next/link';
import { categories } from '@/lib/articles';

export default function Footer() {
  return (
    <footer className="bg-brand-darker text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-3">
            <span className="text-brand-orange">Bulk</span>Report
          </h3>
          <p className="text-sm leading-relaxed">
            Industry news, market insights, and regulatory updates for the bulk freight trucking industry. Powered by BulkLoads.com.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Categories</h4>
          <ul className="space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/category/${c.slug}`} className="hover:text-brand-orange transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">BulkLoads.com</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://bulkloads.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Find Loads</a></li>
            <li><a href="https://bulkloads.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Find Carriers</a></li>
            <li><a href="https://bulkloads.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Post Equipment</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center text-xs py-4 text-gray-500">
        © {new Date().getFullYear()} BulkReport — Powered by{' '}
        <a href="https://bulkloads.com" className="text-brand-orange hover:underline" target="_blank" rel="noopener noreferrer">
          BulkLoads.com
        </a>
      </div>
    </footer>
  );
}
