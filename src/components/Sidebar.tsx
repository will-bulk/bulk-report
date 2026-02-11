import Link from 'next/link';
import { categories, articles } from '@/lib/articles';
import NewsletterCTA from './NewsletterCTA';

export default function Sidebar({ excludeSlug }: { excludeSlug?: string }) {
  const recent = articles.filter((a) => a.slug !== excludeSlug).slice(0, 5);
  return (
    <aside className="space-y-8">
      <NewsletterCTA />
      <div>
        <h3 className="font-bold text-lg mb-4 border-b-2 border-brand-orange pb-2">Categories</h3>
        <ul className="space-y-2">
          {categories.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/category/${c.slug}`}
                className="text-sm text-gray-600 hover:text-brand-orange transition-colors flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-brand-orange inline-block" />
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-4 border-b-2 border-brand-green pb-2">Recent Articles</h3>
        <ul className="space-y-4">
          {recent.map((a) => (
            <li key={a.slug}>
              <Link href={`/articles/${a.slug}`} className="group">
                <h4 className="text-sm font-medium group-hover:text-brand-orange transition-colors leading-snug">
                  {a.title}
                </h4>
                <span className="text-xs text-gray-400">{a.date}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-brand-green/10 border border-brand-green/30 rounded-xl p-5 text-center">
        <p className="font-bold text-brand-green mb-2">Find Bulk Loads</p>
        <p className="text-sm text-gray-600 mb-3">Connect with shippers and carriers on BulkLoads.com</p>
        <a
          href="https://bulkloads.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 bg-brand-green text-white rounded-lg font-semibold text-sm hover:bg-green-600 transition-colors"
        >
          Get Started Free
        </a>
      </div>
    </aside>
  );
}
