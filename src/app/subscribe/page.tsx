'use client'

export default function SubscribePage() {
  return (
    <div>
      <div className="bg-navy text-white">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Stay Ahead of the Market
          </h1>
          <p className="text-xl text-gray-400 max-w-xl mx-auto">
            Join 18,000+ bulk freight professionals who start every morning with the Bulk Report Daily Brief.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white border border-gray-200 rounded-xl p-8 -mt-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Subscribe to Bulk Report</h2>
          
          <div className="space-y-4 mb-8">
            {[
              { title: 'Daily Brief', desc: 'Top stories, rate data, and market moves — every weekday morning.' },
              { title: 'Weekly Deep Dive', desc: 'In-depth analysis piece every Friday on a key industry topic.' },
              { title: 'Breaking Alerts', desc: 'Instant notifications for major regulatory changes and market events.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 items-start">
                <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" placeholder="John Smith" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company (Optional)</label>
              <input type="text" placeholder="Your company" className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white">
                <option>Select your role</option>
                <option>Carrier / Fleet Owner</option>
                <option>Owner-Operator</option>
                <option>Shipper / Logistics Manager</option>
                <option>Broker</option>
                <option>Technology Provider</option>
                <option>Insurance / Finance</option>
                <option>Other</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-accent hover:bg-blue-700 text-white font-semibold py-3 rounded-lg text-sm transition-colors">
              Subscribe — It&apos;s Free
            </button>
            <p className="text-xs text-gray-400 text-center">No spam. Unsubscribe anytime. Read our privacy policy.</p>
          </form>
        </div>
      </div>
    </div>
  )
}
