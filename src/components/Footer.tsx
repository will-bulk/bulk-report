import Link from 'next/link'

const footerLinks = {
  Categories: [
    { name: 'Trucking', href: '/category/trucking' },
    { name: 'Markets', href: '/category/markets' },
    { name: 'Technology', href: '/category/technology' },
    { name: 'Regulations', href: '/category/regulations' },
    { name: 'Insurance', href: '/category/insurance' },
    { name: 'Opinion', href: '/category/opinion' },
  ],
  Company: [
    { name: 'About Bulk Report', href: '/about' },
    { name: 'Advertise', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact Us', href: '#' },
  ],
  Network: [
    { name: 'BulkLoads.com', href: 'https://bulkloads.com' },
    { name: 'BulkTMS', href: '#' },
    { name: 'Bulk Insurance', href: '#' },
    { name: 'Load Board', href: '#' },
  ],
  Legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Do Not Sell My Info', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-400">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-accent w-8 h-8 rounded flex items-center justify-center font-black text-sm text-white">BR</div>
              <span className="font-black text-xl text-white tracking-tight">BULK REPORT</span>
            </div>
            <p className="text-sm leading-relaxed">
              The leading source for bulk freight industry news, market data, and analysis. A BulkLoads.com publication.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">© 2026 Bulk Report. All rights reserved. A BulkLoads.com publication.</p>
          <div className="flex gap-4 text-xs">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">RSS</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
