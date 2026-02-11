import { articles, getFeaturedArticle } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

export default function Home() {
  const featured = getFeaturedArticle();
  const rest = articles.filter((a) => a.slug !== featured.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero */}
      <section className="mb-12">
        <div className="bg-gradient-to-br from-brand-dark to-brand-darker rounded-2xl overflow-hidden">
          <div className="p-8 md:p-12 lg:p-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
              Featured
            </span>
            <Link href={`/articles/${featured.slug}`}>
              <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold mt-4 leading-tight hover:text-brand-orange transition-colors">
                {featured.title}
              </h1>
            </Link>
            <p className="text-gray-300 mt-4 text-base md:text-lg max-w-3xl">
              {featured.excerpt}
            </p>
            <div className="flex items-center gap-3 mt-6 text-sm text-gray-400">
              <span>{featured.date}</span>
              <span>·</span>
              <span>{featured.readTime}</span>
            </div>
            <Link
              href={`/articles/${featured.slug}`}
              className="inline-block mt-6 px-6 py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Read Full Story →
            </Link>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-brand-orange pb-2">Latest Articles</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {rest.map((article, i) => (
              <ArticleCard key={article.slug} article={article} large={i === 0} />
            ))}
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
