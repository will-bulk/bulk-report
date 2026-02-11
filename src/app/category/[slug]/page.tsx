import { categories, getArticlesByCategory } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import Sidebar from '@/components/Sidebar';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const cat = categories.find((c) => c.slug === params.slug);
  if (!cat) return {};
  return {
    title: `${cat.name} — Bulk Freight Industry News`,
    description: `Latest ${cat.name.toLowerCase()} articles for the bulk freight trucking industry.`,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const cat = categories.find((c) => c.slug === params.slug);
  if (!cat) notFound();
  const catArticles = getArticlesByCategory(params.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-8 border-b-2 border-brand-orange pb-3">
        {cat.name}
      </h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {catArticles.length === 0 ? (
            <p className="text-gray-500">No articles in this category yet. Check back soon!</p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6">
              {catArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}
        </div>
        <Sidebar />
      </div>
    </div>
  );
}
