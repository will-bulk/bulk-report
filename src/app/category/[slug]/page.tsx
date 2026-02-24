import { notFound } from 'next/navigation'
import { categories, categoryMap } from '@/data/categories'
import { getArticlesByCategory } from '@/data/articles'
import ArticleCard from '@/components/ArticleCard'
import Sidebar from '@/components/Sidebar'

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }))
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categoryMap[params.slug]
  if (!category) notFound()

  const catArticles = getArticlesByCategory(params.slug)

  return (
    <div>
      <div className="bg-gray-alt border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <span
            className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded text-white mb-3"
            style={{ backgroundColor: category.color }}
          >
            Category
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-navy">{category.name}</h1>
          <p className="text-gray-500 mt-2 max-w-2xl">{category.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {catArticles.length === 0 ? (
              <p className="text-gray-500">No articles in this category yet.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {catArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} size="medium" />
                ))}
              </div>
            )}
          </div>
          <div className="hidden lg:block">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
