"use client";

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isOverLabs, setIsOverLabs] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Consider past hero when scrolled more than 80% of viewport height
      setIsPastHero(window.scrollY > window.innerHeight * 0.8);
      
      // Check if we're over the Labs section
      const labsSection = document.getElementById('ventures');
      if (labsSection) {
        const rect = labsSection.getBoundingClientRect();
        const isInView = rect.top < 100 && rect.bottom > 100;
        setIsOverLabs(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine if nav should be in collapsed state
  const isCollapsed = isPastHero && !isHovering;

  return (
    <nav 
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: isCollapsed ? 'var(--space-3) 0' : 'var(--space-5) 0',
        transition: 'all 0.75s cubic-bezier(0.4, 0, 0.2, 1)',
        background: isScrolled ? 'rgba(10, 10, 10, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          {/* Logo - text only, slides to center */}
          <button 
            onClick={scrollToTop}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              position: 'absolute',
              left: isCollapsed ? '50%' : '0',
              transform: isCollapsed ? 'translateX(-50%)' : 'translateX(0)',
              zIndex: 10,
              display: 'flex',
              alignItems: 'flex-end',
              gap: isCollapsed && isOverLabs ? '10px' : '0px',
              transition: 'left 0.75s cubic-bezier(0.4, 0, 0.2, 1), transform 0.75s cubic-bezier(0.4, 0, 0.2, 1), gap 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <span 
              style={{
                fontSize: isCollapsed ? '20px' : 'var(--font-h3)',
                fontWeight: 'var(--weight-bold)',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1,
                transition: 'font-size 0.75s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              CogNodes
            </span>
            {/* LABS badge - appears when over Labs section, expands from center */}
            <span
              style={{
                fontSize: '11px',
                fontWeight: 'var(--weight-bold)',
                color: 'var(--accent-blue)',
                letterSpacing: '0.05em',
                border: isCollapsed && isOverLabs ? '1.5px solid var(--accent-blue)' : '0px solid var(--accent-blue)',
                borderRadius: '4px',
                padding: isCollapsed && isOverLabs ? '3px 6px' : '0px',
                opacity: isCollapsed && isOverLabs ? 1 : 0,
                transform: isCollapsed && isOverLabs ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'center',
                whiteSpace: 'nowrap',
                maxWidth: isCollapsed && isOverLabs ? '100px' : '0px',
                overflow: 'hidden',
                lineHeight: 1,
                display: 'inline-flex',
                alignItems: 'center',
                marginBottom: '1px',
                transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), max-width 0.4s cubic-bezier(0.4, 0, 0.2, 1), padding 0.4s cubic-bezier(0.4, 0, 0.2, 1), border 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                pointerEvents: 'none',
              }}
            >
              LABS
            </span>
          </button>

          {/* Right side container - stays fixed in place, fades out */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'var(--space-8)',
              marginLeft: 'auto',
              opacity: isCollapsed ? 0 : 1,
              transition: 'opacity 0.5s ease-out',
              pointerEvents: isCollapsed ? 'none' : 'auto',
            }}
          >
            {/* Nav links */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-6)',
              }}
              className="nav-links"
            >
              {[
                { label: 'Services', id: 'services' },
                { label: 'Labs', id: 'ventures' },
                { label: 'About', id: 'why-us' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    fontSize: 'var(--font-body)',
                    fontWeight: 'var(--weight-medium)',
                    cursor: 'pointer',
                    padding: 'var(--space-2)',
                    transition: 'color 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-cta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-2)',
                background: 'var(--text-primary)',
                color: 'var(--bg-base)',
                fontWeight: 'var(--weight-semibold)',
                fontSize: 'var(--font-small)',
                height: '40px',
                padding: '0 20px',
                borderRadius: 'var(--radius-sm)',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent-blue)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--text-primary)';
              }}
            >
              Let&apos;s Talk
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}
