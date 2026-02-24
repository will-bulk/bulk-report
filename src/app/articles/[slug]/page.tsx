import Link from 'next/link'
import { notFound } from 'next/navigation'
import { articles, getArticleBySlug, getArticlesByCategory } from '@/data/articles'
import { authors } from '@/data/authors'
import { categoryMap } from '@/data/categories'
import Sidebar from '@/components/Sidebar'
import ArticleCard from '@/components/ArticleCard'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const author = authors[article.authorId]
  const category = categoryMap[article.category]
  const related = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 4)

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-alt border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span>/</span>
            {category && (
              <>
                <Link href={`/category/${article.category}`} className="hover:text-accent">{category.name}</Link>
                <span>/</span>
              </>
            )}
            <span className="text-gray-400 truncate max-w-xs">{article.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2">
            {/* Category Tag */}
            {category && (
              <span
                className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded text-white mb-4"
                style={{ backgroundColor: category.color }}
              >
                {category.name}
              </span>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-5">
              {article.title}
            </h1>

            {/* Author & Meta */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white font-bold text-lg">
                {author?.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{author?.name}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span>·</span>
                  <span>{article.readTime} min read</span>
                </div>
              </div>
              <div className="ml-auto flex gap-2">
                {['Twitter', 'LinkedIn', 'Email'].map((s) => (
                  <button key={s} className="text-xs font-semibold px-3 py-1.5 rounded border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className={`aspect-[16/9] rounded-xl overflow-hidden bg-gradient-to-br ${article.imageGradient} mb-8`} />

            {/* Article Body */}
            <div className="article-body max-w-none" dangerouslySetInnerHTML={{ __html: article.body }} />

            {/* Author Bio */}
            {author && (
              <div className="mt-10 p-6 bg-gray-alt rounded-xl border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {author.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-lg">{author.name}</p>
                    <p className="text-sm text-accent font-medium mb-2">{author.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{author.bio}</p>
                  </div>
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-sm font-black uppercase tracking-wider text-navy mb-5 pb-3 border-b-2 border-accent inline-block">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} size="medium" />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
