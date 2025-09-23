"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after a brief delay
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
        <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-5xl mx-auto backdrop-blur-xl shadow-lg border rounded-xl" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
        <div className="flex items-center justify-between h-20 px-6">
          {/* CogNodes Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 -ml-2 md:ml-0">
            <div className="w-24 h-24 flex items-center justify-center">
              <Image 
                src="/logos/CN W_B Full.png" 
                alt="CogNodes Logo" 
                width={180}
                height={90}
                className={`transition-all duration-1000 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <Link 
              href="/" 
              className={`transition-all duration-1000 font-medium text-base whitespace-nowrap ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
              style={{ transitionDelay: '150ms', color: 'var(--cn-gray-050)', fontFamily: 'DM Sans, sans-serif' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--cn-blue-400)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--cn-gray-050)'; }}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`transition-all duration-1000 font-medium text-base whitespace-nowrap ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
              style={{ transitionDelay: '200ms', color: 'var(--cn-gray-050)', fontFamily: 'DM Sans, sans-serif' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--cn-blue-400)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--cn-gray-050)'; }}
            >
              Services
            </Link>
            <Link 
              href="/pricing" 
              className={`transition-all duration-1000 font-medium text-base whitespace-nowrap ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
              style={{ transitionDelay: '250ms', color: 'var(--cn-gray-050)', fontFamily: 'DM Sans, sans-serif' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--cn-blue-400)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--cn-gray-050)'; }}
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className={`transition-all duration-1000 font-medium text-base whitespace-nowrap ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
              style={{ transitionDelay: '300ms', color: 'var(--cn-gray-050)', fontFamily: 'DM Sans, sans-serif' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--cn-blue-400)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--cn-gray-050)'; }}
            >
              About
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="mailto:cognodes@gmail.com"
              className={`btn-primary transition-all duration-1000 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
              style={{ transitionDelay: '400ms' }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-3 rounded-md text-white hover:text-gray-400 hover:bg-white/10 transition-all duration-1000 md:mr-0 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
            style={{ transitionDelay: '100ms', marginRight: '-13px' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t backdrop-blur-xl rounded-b-2xl" style={{ borderColor: 'rgba(245, 245, 245, 0.08)', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <div className="px-4 pt-3 pb-4 space-y-2">
              <Link 
                href="/" 
                className="block px-4 py-3 rounded-md transition-colors text-base"
                style={{ color: 'var(--cn-gray-050)', fontFamily: 'DM Sans, sans-serif' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--cn-blue-400)'; e.currentTarget.style.backgroundColor = 'rgba(99, 178, 250, 0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--cn-gray-050)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="block px-4 py-3 rounded-md transition-colors text-base"
                style={{ color: 'var(--cn-gray-050)', fontFamily: 'DM Sans, sans-serif' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--cn-blue-400)'; e.currentTarget.style.backgroundColor = 'rgba(99, 178, 250, 0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--cn-gray-050)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/pricing" 
                className="block px-4 py-3 rounded-md transition-colors text-base"
                style={{ color: 'var(--cn-gray-050)', fontFamily: 'DM Sans, sans-serif' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--cn-blue-400)'; e.currentTarget.style.backgroundColor = 'rgba(99, 178, 250, 0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--cn-gray-050)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/about" 
                className="block px-4 py-3 rounded-md transition-colors text-base"
                style={{ color: 'var(--cn-gray-050)', fontFamily: 'DM Sans, sans-serif' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--cn-blue-400)'; e.currentTarget.style.backgroundColor = 'rgba(99, 178, 250, 0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--cn-gray-050)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="pt-2">
                <a
                  href="mailto:cognodes@gmail.com"
                  className="btn-primary w-full text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
