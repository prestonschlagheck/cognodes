"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-5xl mx-auto bg-header-footer/20 backdrop-blur-xl shadow-lg border border-white/20 rounded-xl">
        <div className="flex items-center justify-between h-16 px-6">
          {/* DJH Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/logos/djh-white.png" 
                alt="DJH Logo" 
                className="h-8 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-12 flex-1 justify-center">
            <Link 
              href="/" 
              className="text-white hover:text-gray-400 transition-colors font-medium text-base whitespace-nowrap"
            >
              Home
            </Link>
            <Link 
              href="/our-team" 
              className="text-white hover:text-gray-400 transition-colors font-medium text-base whitespace-nowrap"
            >
              Our Team
            </Link>
            <Link 
              href="/truck-parking" 
              className="text-white hover:text-gray-400 transition-colors font-medium text-base whitespace-nowrap"
            >
              Truck Parking
            </Link>
            <Link 
              href="/journeyline-properties" 
              className="text-white hover:text-jp-truckbays-accent transition-colors font-medium text-base whitespace-nowrap"
            >
              Journeyline Properties
            </Link>
            <Link 
              href="/riggys" 
              className="text-white hover:text-riggys-accent transition-colors font-medium text-base whitespace-nowrap"
            >
              Riggy&apos;s
            </Link>
            <Link 
              href="/truckbays" 
              className="text-white hover:text-jp-truckbays-accent transition-colors font-medium text-base whitespace-nowrap"
            >
              Truckbays
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-md text-white hover:text-gray-400 hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-header-footer/20 backdrop-blur-xl rounded-b-2xl">
            <div className="px-4 pt-3 pb-4 space-y-2">
              <Link 
                href="/" 
                className="block px-4 py-3 text-white hover:text-gray-400 hover:bg-white/10 rounded-md transition-colors text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/our-team" 
                className="block px-4 py-3 text-white hover:text-gray-400 hover:bg-white/10 rounded-md transition-colors text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Team
              </Link>
              <Link 
                href="/truck-parking" 
                className="block px-4 py-3 text-white hover:text-gray-400 hover:bg-white/10 rounded-md transition-colors text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Truck Parking
              </Link>
              <Link 
                href="/journeyline-properties" 
                className="block px-4 py-3 text-white hover:text-jp-truckbays-accent hover:bg-white/10 rounded-md transition-colors text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Journeyline Properties
              </Link>
              <Link 
                href="/riggys" 
                className="block px-4 py-3 text-white hover:text-riggys-accent hover:bg-white/10 rounded-md transition-colors text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Riggy&apos;s
              </Link>
              <Link 
                href="/truckbays" 
                className="block px-4 py-3 text-white hover:text-jp-truckbays-accent hover:bg-white/10 rounded-md transition-colors text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Truckbays
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
