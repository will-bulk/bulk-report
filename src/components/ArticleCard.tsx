import Link from 'next/link';
import { Article } from '@/lib/articles';

export default function ArticleCard({ article, large }: { article: Article; large?: boolean }) {
  return (
    <article className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden ${large ? 'md:col-span-2' : ''}`}>
      <div className={`bg-gradient-to-br from-brand-dark to-brand-darker ${large ? 'h-48 md:h-64' : 'h-32 md:h-40'} flex items-end p-6`}>
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange bg-brand-darker/80 px-3 py-1 rounded-full">
          {article.category}
        </span>
      </div>
      <div className="p-5">
        <Link href={`/articles/${article.slug}`}>
          <h2 className={`font-bold leading-tight hover:text-brand-orange transition-colors ${large ? 'text-xl md:text-2xl' : 'text-base md:text-lg'}`}>
            {article.title}
          </h2>
        </Link>
        <p className="text-gray-500 text-sm mt-2 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center gap-3 mt-4 text-xs text-gray-400">
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
      </div>
    </article>
  );
}
