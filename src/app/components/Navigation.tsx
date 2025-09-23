"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after a brief delay
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-4 bg-cn-navy-900/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto relative">
        <div className="relative z-10 flex items-center justify-between h-16">
          {/* CogNodes Logo - Made bigger */}
                  <Link href="/" className="flex items-center flex-shrink-0">
                    <div className="w-40 h-20 flex items-center justify-center">
                      <Image 
                        src="/Logos/CN-W_B-Full.png" 
                        alt="CogNodes Logo" 
                        width={240}
                        height={120}
                className={`transition-all duration-1000 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                priority
              />
            </div>
          </Link>

          {/* Get Started Button - Made smaller */}
          <div>
            <a
              href="mailto:cognodes@gmail.com"
              className={`btn-primary text-sm px-4 py-2 transition-all duration-1000 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
              style={{ transitionDelay: '200ms' }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
