"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Trigger animation after a brief delay
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);

    // Check if user is logged in
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn');
      setIsLoggedIn(loggedIn === 'true');
    };

    checkLoginStatus();

    // Listen for storage changes and custom auth events
    const handleAuthChange = () => {
      checkLoginStatus();
    };

    window.addEventListener('storage', handleAuthChange);
    window.addEventListener('authChange', handleAuthChange);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('storage', handleAuthChange);
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event('authChange'));
    router.push('/');
  };

  return (
    <>
      {/* Persistent blur and gradient overlay at top of page */}
      <div 
        className="fixed top-0 left-0 right-0 w-full pointer-events-none"
        style={{ 
          height: '200px',
          zIndex: 1000,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          background: 'linear-gradient(to bottom, rgba(13, 19, 59, 0.95) 0%, rgba(13, 19, 59, 0.85) 15%, rgba(13, 19, 59, 0.7) 30%, rgba(13, 19, 59, 0.5) 50%, rgba(13, 19, 59, 0.3) 70%, rgba(13, 19, 59, 0.1) 85%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 10%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.1) 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 10%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.1) 90%, transparent 100%)'
        }}
      />
      
      {/* Navigation content - positioned above the blur */}
      <nav className="fixed top-0 left-0 right-0 z-[1001] w-full px-4 sm:px-6 lg:px-8 py-4 pointer-events-auto">
        <div className="max-w-7xl mx-auto relative">
          {/* Logo - On top of everything */}
          <div style={{ 
            position: 'absolute', 
            top: '2px', 
            left: '0', 
            zIndex: 99999,
            filter: 'none',
            opacity: 1,
            pointerEvents: 'auto'
          }}>
            <Link href="/" className="flex items-center flex-shrink-0">
              <div className="w-40 h-20 flex items-center justify-center">
                <Image 
                  src="/Logos/CN-W_B-Full.png" 
                  alt="CogNodes Logo" 
                  width={240}
                  height={120}
                  className={`transition-all duration-1000 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                  priority
                  style={{ filter: 'none', opacity: 1 }}
                />
              </div>
            </Link>
          </div>

          {/* Buttons - On top of everything */}
          <div className="right-4 sm:right-0" style={{ 
            position: 'absolute', 
            top: '12px', 
            zIndex: 99999,
            filter: 'none',
            opacity: 1,
            pointerEvents: 'auto',
            display: 'flex',
            gap: '12px'
          }}>
            <a
              href="https://calendly.com/cognodes/discovery-call"
              className={`btn-primary text-sm px-4 py-2 transition-all duration-1000 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
              style={{ 
                transitionDelay: '200ms',
                filter: 'none',
                opacity: 1,
                position: 'relative',
                zIndex: 99999
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
