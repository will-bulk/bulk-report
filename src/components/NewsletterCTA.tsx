'use client';

export default function NewsletterCTA() {
  return (
    <div className="bg-brand-dark rounded-xl p-6 text-white">
      <h3 className="font-bold text-lg mb-2">📬 Stay in the Loop</h3>
      <p className="text-sm text-gray-300 mb-4">
        Get the latest bulk freight industry news delivered to your inbox weekly.
      </p>
      <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="you@example.com"
          className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-brand-orange text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors text-sm whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
