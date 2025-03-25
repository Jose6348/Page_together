'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Newsletter Section */}
          <div className="col-span-1">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Subscribe to newsletter</h2>
            <div className="relative">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full py-3 pr-12 border-b border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:border-gray-900"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2">
                <ArrowRight className="w-6 h-6 text-gray-400 hover:text-gray-900 transition-colors" />
              </button>
            </div>
          </div>

          {/* Links Section */}
          <div className="col-span-1">
            <nav className="grid grid-cols-1 gap-4">
              <Link href="/products" className="text-gray-500 hover:text-gray-900">Products</Link>
              <Link href="/solutions" className="text-gray-500 hover:text-gray-900">Solutions</Link>
              <Link href="/research" className="text-gray-500 hover:text-gray-900">Research</Link>
              <Link href="/blog" className="text-gray-500 hover:text-gray-900">Blog</Link>
              <Link href="/about" className="text-gray-500 hover:text-gray-900">About</Link>
              <Link href="/pricing" className="text-gray-500 hover:text-gray-900">Pricing</Link>
              <Link href="/contact" className="text-gray-500 hover:text-gray-900">Contact</Link>
              <Link href="/status" className="text-gray-500 hover:text-gray-900">Status</Link>
            </nav>
          </div>

          {/* Social and Location */}
          <div className="col-span-1">
            <div className="flex flex-col justify-between h-full">
              <div className="flex gap-4 mb-8">
                <a href="https://discord.gg/together" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/together" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/company/together" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

              <div>
                <Link href="/" className="text-xl text-gray-900 mb-8 block">
                  together<span className="text-blue-600">.ai</span>
                </Link>

                <div className="mt-4 space-y-2">
                  <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900 block">
                    Privacy policy
                  </Link>
                  <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900 block">
                    Terms of service
                  </Link>
                  <p className="text-sm text-gray-500 mt-4">
                    © 2025<br />
                    San Francisco,<br />
                    CA 94114
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 