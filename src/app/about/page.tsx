import { authorList } from '@/data/authors'

export default function AboutPage() {
  return (
    <div>
      <div className="bg-gray-alt border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-navy mb-4">About Bulk Report</h1>
          <p className="text-xl text-gray-600 max-w-2xl">The bulk freight industry&apos;s most trusted source for news, market data, and analysis.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              Bulk Report is the premier news publication serving the bulk freight transportation industry. Founded as part of the BulkLoads.com ecosystem, we provide daily coverage of the markets, regulations, technology, and business trends shaping how bulk commodities move across North America.
            </p>
            <p>
              Our team of experienced journalists and industry analysts delivers the reporting that bulk haulers, shippers, brokers, and logistics professionals need to make informed decisions. From grain freight rates and equipment markets to FMCSA regulations and emerging technology, we cover the full spectrum of issues that matter to the bulk freight community.
            </p>
            <p>
              We believe that the bulk hauling sector — often overlooked by mainstream transportation media — deserves dedicated, professional coverage that matches its economic importance. Bulk commodities are the foundation of the American economy, and the carriers who move them deserve a news source that understands their unique challenges.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Part of the BulkLoads.com Network</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Bulk Report is published by BulkLoads.com, the leading digital platform connecting bulk freight shippers and carriers. Our sister products include BulkTMS, a transportation management system designed specifically for bulk operations, and Bulk Insurance, providing specialized coverage solutions for the bulk hauling community.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {authorList.map((author) => (
              <div key={author.id} className="p-6 bg-gray-alt rounded-xl border border-gray-200">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white font-bold text-lg">
                    {author.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-lg">{author.name}</p>
                    <p className="text-sm text-accent font-medium">{author.title}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{author.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <div className="text-lg text-gray-700 space-y-2">
            <p>Editorial inquiries: <a href="mailto:editorial@bulkreport.com" className="text-accent hover:underline">editorial@bulkreport.com</a></p>
            <p>Advertising: <a href="mailto:ads@bulkreport.com" className="text-accent hover:underline">ads@bulkreport.com</a></p>
            <p>General: <a href="mailto:info@bulkreport.com" className="text-accent hover:underline">info@bulkreport.com</a></p>
          </div>
        </section>
      </div>
    </div>
  )
}
