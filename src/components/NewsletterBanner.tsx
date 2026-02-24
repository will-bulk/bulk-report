'use client'

export default function NewsletterBanner() {
  return (
    <section className="bg-navy py-12 my-12">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          The Bulk Report Daily Brief
        </h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Join 18,000+ bulk freight professionals who start their day with our free morning newsletter. Market data, breaking news, and analysis in under 5 minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-sm bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
          />
          <button className="bg-accent hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors whitespace-nowrap">
            Subscribe Free
          </button>
        </div>
      </div>
    </section>
  )
}
