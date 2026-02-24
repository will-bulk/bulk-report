import Link from 'next/link'
import { getTrendingArticles } from '@/data/articles'
import { categoryMap } from '@/data/categories'

export default function Sidebar() {
  const trending = getTrendingArticles().slice(0, 5)

  return (
    <aside className="space-y-8">
      {/* Trending */}
      <div className="bg-white rounded-lg border border-gray-200 p-5">
        <h3 className="text-sm font-black uppercase tracking-wider text-navy mb-4 pb-3 border-b border-gray-100">
          Trending Now
        </h3>
        <ol className="space-y-4">
          {trending.map((article, i) => {
            const cat = categoryMap[article.category]
            return (
              <li key={article.slug} className="flex gap-3">
                <span className="text-3xl font-black text-gray-200 leading-none">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  {cat && (
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: cat.color }}>
                      {cat.name}
                    </span>
                  )}
                  <Link href={`/articles/${article.slug}`} className="block text-sm font-semibold leading-tight hover:text-accent transition-colors line-clamp-2">
                    {article.title}
                  </Link>
                </div>
              </li>
            )
          })}
        </ol>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-navy rounded-lg p-5 text-white">
        <h3 className="font-bold text-lg mb-2">Stay Informed</h3>
        <p className="text-sm text-gray-400 mb-4">Get the top bulk freight stories delivered to your inbox every morning.</p>
        <input
          type="email"
          placeholder="Your email address"
          className="w-full px-3 py-2.5 rounded text-sm bg-white/10 border border-white/20 text-white placeholder-gray-400 mb-3 focus:outline-none focus:border-accent"
        />
        <button className="w-full bg-accent hover:bg-blue-700 text-white text-sm font-semibold py-2.5 rounded transition-colors">
          Subscribe Free
        </button>
      </div>

      {/* Ad Placeholder */}
      <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Advertisement</p>
        <p className="text-sm text-gray-400 mt-1">300×250</p>
      </div>
    </aside>
  )
}
