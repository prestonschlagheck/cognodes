"use client";

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="text-white border-t" style={{ backgroundColor: 'var(--header-footer-bg)', borderColor: 'var(--container-bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="text-xl font-semibold uppercase tracking-wide" style={{ fontFamily: 'Poppins, Arial, sans-serif', color: 'var(--djh-white)' }}>DIRECT JOURNEY LINE HOLDINGS</span>
            </div>
            <p className="text-base leading-relaxed -mt-2 md:-mt-2" style={{ lineHeight: '1.9', color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
              Redefining truck parking by transforming underutilized land into critical infrastructure that serves drivers, fleets, and communities nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide mt-0.5" style={{ fontFamily: 'Poppins, Arial, sans-serif', color: 'var(--djh-white)' }}>Our Companies</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/journeyline-properties" className="transition-colors text-base font-medium block" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--jp-truckbays-accent)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--djh-very-light-gray)'; }}>
                  Journeyline Properties
                </Link>
              </li>
              <li>
                <Link href="/riggys" className="transition-colors text-base font-medium block" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--riggys-accent)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--djh-very-light-gray)'; }}>
                  Riggy&apos;s
                </Link>
              </li>
              <li>
                <Link href="/truckbays" className="transition-colors text-base font-medium block" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--jp-truckbays-accent)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--djh-very-light-gray)'; }}>
                  Truckbays
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide mt-0.5" style={{ fontFamily: 'Poppins, Arial, sans-serif', color: 'var(--djh-white)' }}>Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3" style={{ color: 'var(--djh-very-light-gray)' }}>
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:contact@directjh.com" className="transition-colors text-base font-medium" style={{ fontFamily: 'Poppins, Arial, sans-serif' }} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--djh-white)'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--djh-very-light-gray)'; }}>
                  contact@directjh.com
                </a>
              </div>
              <div className="flex items-center space-x-3" style={{ color: 'var(--djh-very-light-gray)' }}>
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-base font-medium" style={{ fontFamily: 'Poppins, Arial, sans-serif' }}>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3" style={{ color: 'var(--djh-very-light-gray)' }}>
                <MapPin size={18} className="flex-shrink-0" />
                <span className="text-base font-medium" style={{ fontFamily: 'Poppins, Arial, sans-serif' }}>Nashville, TN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8 text-center" style={{ borderColor: 'var(--container-bg)' }}>
          <p className="text-sm font-medium" style={{ color: 'var(--djh-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
            © 2025 Direct Journey Line Holdings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
