'use client'; // Mark as a Client Component

import React from 'react';
import { FaFacebookF, FaPinterestP, FaInstagram, FaArrowRight } from 'react-icons/fa';
import { usePathname } from 'next/navigation'; // Import usePathname

const Footer = () => {
  const pathname = usePathname(); // Get the current pathname

  // Define your quick links with their corresponding hrefs
  // These should match the hrefs used in your Header component for consistency
  const quickLinks = [
    { name: 'Search', href: '/search' }, // Assuming a search page at /search
    { name: 'Privacy Policy', href: '/privacypolicy' },
    { name: 'Return and Refund Policy', href: '/retunpolicy' }, // Example path
    { name: 'Shipping Policy', href: '/shipping' }, // Example path
    { name: 'Terms and Conditions', href: '/terms' }, // Example path
    { name: 'Terms of service', href: '/terms-of-service' }, // Example path
    { name: 'Our Story', href: '/ourstory' },
    { name: 'Size Guide', href: '/size-guide' }, // Example path
    { name: 'Profile', href: '/profile' }, // Example path
    { name: 'Settings', href: '/settings' }, // Example path
    { name: 'Orders', href: '/orders' }, // Example path
  ];

  return (
    <div className="flex flex-col text-gray-600">
      <footer className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">

          {/* Quick links section */}
          <div className="quick-links">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick links</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`
                      hover:underline
                      ${pathname === link.href ? 'border-b-1 underline-offset-3' : ''}
                    `}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our mission section */}
          <div className="our-mission">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Our mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every product has a story, and ours is one of passion, dreams, and artistry. Our journey began with a vision to create something unique and meaningful—something that would bring beauty and joy into people's lives. <span role="img" aria-label="smiling face with smiling eyes">😊</span>
            </p>
          </div>

          {/* Subscribe section */}
          <div className="subscribe">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Subscribe to our emails</h3>
            <div className="relative flex items-center mb-6">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 pr-10 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 text-sm"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full px-3 flex items-center justify-center text-gray-500 hover:text-gray-700"
                aria-label="Subscribe"
              >
                <FaArrowRight className="text-lg" />
              </button>
            </div>
            <div className="social-icons flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200" aria-label="Facebook">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200" aria-label="Pinterest">
                <FaPinterestP className="text-xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200" aria-label="Instagram">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="footer-bottom mt-10 pt-6 border-t border-gray-200 text-center text-gray-500 text-xs space-y-4">
          <div className="payment-icons flex justify-center items-center flex-wrap gap-3">
            {/* Payment icons - replace placeholder images with actual logos if available */}
            <img src="https://placehold.co/40x25/f0f0f0/333333?text=RuPay" alt="RuPay" className="h-6 rounded" />
            <img src="https://placehold.co/40x25/f0f0f0/333333?text=BHIM" alt="BHIM UPI" className="h-6 rounded" />
            <img src="https://placehold.co/40x25/f0f0f0/333333?text=GPay" alt="Google Pay" className="h-6 rounded" />
            <img src="https://placehold.co/40x25/f0f0f0/333333?text=RuPay" alt="RuPay" className="h-6 rounded" />
            <img src="https://placehold.co/40x25/f0f0f0/333333?text=BHIM" alt="BHIM UPI" className="h-6 rounded" />
            <img src="https://placehold.co/40x25/f0f0f0/333333?text=GPay" alt="Google Pay" className="h-6 rounded" />
          </div>
          <p>&copy; 2025, Toaraya Silver Powered by Shopify</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;