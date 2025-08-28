"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl px-4 sm:px-6 lg:px-8">
              <div className="bg-gray-800/95 backdrop-blur-sm shadow-lg border border-gray-600 rounded-xl">
        <div className="flex items-center justify-between h-12 px-4">
          {/* DJH Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <div className="w-8 h-8 flex items-center justify-center">
              <img 
                src="/logos/djh-white.png" 
                alt="DJH Logo" 
                className="h-6 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
            <Link 
              href="/" 
              className="text-white hover:text-gray-400 transition-colors font-medium text-sm"
            >
              Home
            </Link>
            <Link 
              href="/our-team" 
              className="text-white hover:text-gray-400 transition-colors font-medium text-sm"
            >
              Our Team
            </Link>
            <Link 
              href="/truck-parking" 
              className="text-white hover:text-gray-400 transition-colors font-medium text-sm"
            >
              Truck Parking
            </Link>
            <Link 
              href="/journeyline-properties" 
              className="text-white hover:text-jp-blue transition-colors font-medium text-sm"
            >
              Journeyline Properties
            </Link>
            <Link 
              href="/riggys" 
              className="text-white hover:text-riggys-green transition-colors font-medium text-sm"
            >
              Riggy&apos;s
            </Link>
            <Link 
              href="/truckbays" 
              className="text-white hover:text-jp-blue transition-colors font-medium text-sm"
            >
              Truckbays
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-white hover:text-gray-400 hover:bg-gray-700 transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-600 bg-gray-800 rounded-b-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 text-white hover:text-gray-400 hover:bg-gray-700 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/our-team" 
                className="block px-3 py-2 text-white hover:text-gray-400 hover:bg-gray-700 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Team
              </Link>
              <Link 
                href="/truck-parking" 
                className="block px-3 py-2 text-white hover:text-gray-400 hover:bg-gray-700 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Truck Parking
              </Link>
              <Link 
                href="/journeyline-properties" 
                className="block px-3 py-2 text-white hover:text-jp-blue hover:bg-gray-700 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Journeyline Properties
              </Link>
              <Link 
                href="/riggys" 
                className="block px-3 py-2 text-white hover:text-riggys-green hover:bg-gray-700 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Riggy&apos;s
              </Link>
              <Link 
                href="/truckbays" 
                className="block px-3 py-2 text-white hover:text-jp-blue hover:bg-gray-700 rounded-md transition-colors"
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
