import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-medium text-white border-t border-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 flex items-center justify-center">
                <img 
                  src="/logos/djh-white.png" 
                  alt="DJH Logo" 
                  className="h-5 w-auto"
                />
              </div>
              <span className="font-display text-base">Direct Journey Line Holdings</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Redefining truck parking by transforming underutilized land into critical infrastructure that serves drivers, fleets, and communities nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Companies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/journeyline-properties" className="text-gray-300 hover:text-white transition-colors">
                  Journeyline Properties
                </Link>
              </li>
              <li>
                <Link href="/riggys" className="text-gray-300 hover:text-white transition-colors">
                  Riggy&apos;s
                </Link>
              </li>
              <li>
                <Link href="/truckbays" className="text-gray-300 hover:text-white transition-colors">
                  Truckbays
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <a href="mailto:contact@directjh.com" className="hover:text-white transition-colors">
                  contact@directjh.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin size={16} />
                <span>Nashville, TN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-light mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Direct Journey Line Holdings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
