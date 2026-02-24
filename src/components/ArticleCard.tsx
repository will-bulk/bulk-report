import Link from 'next/link'
import { Article } from '@/data/articles'
import { authors } from '@/data/authors'
import { categoryMap } from '@/data/categories'

interface ArticleCardProps {
  article: Article
  size?: 'small' | 'medium' | 'large'
  showExcerpt?: boolean
}

export default function ArticleCard({ article, size = 'medium', showExcerpt = true }: ArticleCardProps) {
  const category = categoryMap[article.category]
  const author = authors[article.authorId]

  if (size === 'large') {
    return (
      <Link href={`/articles/${article.slug}`} className="group block">
        <div className={`relative aspect-[16/9] rounded-lg overflow-hidden bg-gradient-to-br ${article.imageGradient}`}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            {category && (
              <span
                className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded mb-3 text-white"
                style={{ backgroundColor: category.color }}
              >
                {category.name}
              </span>
            )}
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:underline decoration-2 underline-offset-2">
              {article.title}
            </h2>
            <div className="flex items-center gap-3 mt-3 text-sm text-gray-300">
              <span className="font-medium">{author?.name}</span>
              <span>·</span>
              <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              <span>·</span>
              <span>{article.readTime} min read</span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <div className={`relative aspect-[16/10] rounded-lg overflow-hidden bg-gradient-to-br ${article.imageGradient} mb-3`}>
        {size === 'medium' && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        )}
      </div>
      {category && (
        <span
          className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-2 text-white"
          style={{ backgroundColor: category.color }}
        >
          {category.name}
        </span>
      )}
      <h3 className={`font-bold leading-tight group-hover:text-accent transition-colors ${size === 'small' ? 'text-sm' : 'text-base md:text-lg'}`}>
        {article.title}
      </h3>
      {showExcerpt && size === 'medium' && (
        <p className="text-sm text-gray-500 mt-1.5 line-clamp-2">{article.excerpt}</p>
      )}
      <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
        <span className="font-medium text-gray-600">{author?.name}</span>
        <span>·</span>
        <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
      </div>
    </Link>
  )
}
