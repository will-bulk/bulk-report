import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import Sidebar from '@/components/Sidebar'
import NewsletterBanner from '@/components/NewsletterBanner'
import { articles, getFeaturedArticles, getArticlesByCategory, getBulkInsiderArticles } from '@/data/articles'
import { categories } from '@/data/categories'

export default function HomePage() {
  const featured = getFeaturedArticles()
  const heroArticle = featured[0]
  const heroSide = featured.slice(1, 4)
  const topStories = articles.filter(a => !a.featured).slice(0, 5)
  const insiderArticles = getBulkInsiderArticles()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-alt py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2">
              <ArticleCard article={heroArticle} size="large" />
            </div>
            <div className="flex flex-col gap-5">
              {heroSide.map((article) => (
                <ArticleCard key={article.slug} article={article} size="small" showExcerpt={false} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Stories */}
      <section className="py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-sm font-black uppercase tracking-wider text-navy mb-5 pb-3 border-b-2 border-accent inline-block">
            Top Stories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {topStories.map((article) => (
              <ArticleCard key={article.slug} article={article} size="small" showExcerpt={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            {/* Category Sections */}
            {categories.slice(0, 3).map((cat) => {
              const catArticles = getArticlesByCategory(cat.slug).slice(0, 4)
              if (catArticles.length === 0) return null
              return (
                <section key={cat.slug}>
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-200">
                    <h2 className="text-sm font-black uppercase tracking-wider text-navy">
                      {cat.name}
                    </h2>
                    <Link href={`/category/${cat.slug}`} className="text-sm font-semibold text-accent hover:underline">
                      View All →
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {catArticles.map((article) => (
                      <ArticleCard key={article.slug} article={article} size="medium" />
                    ))}
                  </div>
                </section>
              )
            })}

            {/* Bulk Insider Series */}
            {insiderArticles.length > 0 && (
              <section className="bg-navy-dark rounded-xl p-6 -mx-2">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-accent w-1 h-8 rounded-full" />
                  <div>
                    <h2 className="text-lg font-black text-white uppercase tracking-wider">The Bulk Insider</h2>
                    <p className="text-xs text-gray-400">In-depth investigations & analysis</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {insiderArticles.slice(0, 3).map((article) => (
                    <Link key={article.slug} href={`/articles/${article.slug}`} className="group block">
                      <div className={`aspect-[16/10] rounded-lg overflow-hidden bg-gradient-to-br ${article.imageGradient} mb-3`} />
                      <h3 className="text-white font-bold text-sm leading-tight group-hover:text-accent transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-400 text-xs mt-1.5 line-clamp-2">{article.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Newsletter Banner */}
      <NewsletterBanner />

      {/* More Categories */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-12">
          {categories.slice(3).map((cat) => {
            const catArticles = getArticlesByCategory(cat.slug).slice(0, 4)
            if (catArticles.length === 0) return null
            return (
              <section key={cat.slug}>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-200">
                  <h2 className="text-sm font-black uppercase tracking-wider text-navy">
                    {cat.name}
                  </h2>
                  <Link href={`/category/${cat.slug}`} className="text-sm font-semibold text-accent hover:underline">
                    View All →
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {catArticles.map((article) => (
                    <ArticleCard key={article.slug} article={article} size="medium" />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
