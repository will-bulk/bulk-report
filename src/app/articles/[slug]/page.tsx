import { articles, getArticleBySlug } from '@/lib/articles';
import Sidebar from '@/components/Sidebar';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { '@type': 'Organization', name: article.author },
    publisher: {
      '@type': 'Organization',
      name: 'BulkReport',
      url: 'https://bulkreport.com',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
                {article.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-gray-400 mb-8">
              <span>{article.author}</span>
              <span>·</span>
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((para, i) => {
                if (para.startsWith('**') && para.endsWith('**')) {
                  return <h2 key={i} className="text-xl font-bold mt-8 mb-3">{para.replace(/\*\*/g, '')}</h2>;
                }
                if (para.includes('**')) {
                  const parts = para.split(/(\*\*[^*]+\*\*)/);
                  return (
                    <p key={i} className="text-gray-700 leading-relaxed mb-4">
                      {parts.map((part, j) =>
                        part.startsWith('**') && part.endsWith('**') ? (
                          <strong key={j}>{part.replace(/\*\*/g, '')}</strong>
                        ) : (
                          <span key={j}>{part}</span>
                        )
                      )}
                    </p>
                  );
                }
                return <p key={i} className="text-gray-700 leading-relaxed mb-4">{para}</p>;
              })}
            </div>
          </article>
          <Sidebar excludeSlug={article.slug} />
        </div>
      </div>
    </>
  );
}
