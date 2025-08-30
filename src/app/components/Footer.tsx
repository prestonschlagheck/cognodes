import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-header-footer text-white border-t border-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center">
                <img 
                  src="/logos/djh-white.png" 
                  alt="DJH Logo" 
                  className="h-6 w-auto"
                />
              </div>
              <span className="font-display text-xl font-semibold uppercase tracking-wide">DIRECT JOURNEY LINE HOLDINGS</span>
            </div>
            <p className="text-gray-300 text-base leading-relaxed pl-11 -mt-2">
              Redefining truck parking by transforming underutilized land into critical infrastructure that serves drivers, fleets, and communities nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 uppercase tracking-wide mt-0.5">Our Companies</h3>
            <ul className="space-y-2">
                            <li>
                <Link href="/journeyline-properties" className="text-gray-300 hover:text-jp-truckbays-accent transition-colors text-base font-medium block">
                  Journeyline Properties
                </Link>
              </li>
              <li>
                <Link href="/riggys" className="text-gray-300 hover:text-riggys-accent transition-colors text-base font-medium block">
                  Riggy&apos;s
                </Link>
              </li>
              <li>
                <Link href="/truckbays" className="text-gray-300 hover:text-jp-truckbays-accent transition-colors text-base font-medium block">
                  Truckbays
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4 uppercase tracking-wide mt-0.5">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:contact@directjh.com" className="hover:text-white transition-colors text-base font-medium">
                  contact@directjh.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-base font-medium">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={18} className="flex-shrink-0" />
                <span className="text-base font-medium">Nashville, TN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-container mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm font-medium">
            © 2025 Direct Journey Line Holdings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
