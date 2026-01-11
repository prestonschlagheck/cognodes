"use client";

import { useEffect, useRef, useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = footer.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    footer.addEventListener('mousemove', handleMouseMove);
    footer.addEventListener('mouseenter', handleMouseEnter);
    footer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      footer.removeEventListener('mousemove', handleMouseMove);
      footer.removeEventListener('mouseenter', handleMouseEnter);
      footer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      ref={footerRef}
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-base)',
        borderTop: '1px solid var(--border-subtle)',
        overflow: 'hidden',
      }}
    >
      {/* Blueprint grid - small - matches hero */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(99, 178, 250, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 178, 250, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Blueprint grid - large - matches hero */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(99, 178, 250, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 178, 250, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '144px 144px',
        }}
      />

      {/* Cursor tracking grid glow - more noticeable */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(99, 178, 250, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 178, 250, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '144px 144px',
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.4s ease',
          maskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 60%)`,
          WebkitMaskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 60%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Main footer content */}
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Main section - Links and info */}
        <div 
          className="footer-grid"
          style={{
            paddingTop: 'var(--space-16)',
            paddingBottom: 'var(--space-12)',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-12)',
          }}
        >
          {/* Brand column */}
          <div className="footer-brand">
            <span 
              style={{
                fontSize: 'var(--font-h2)',
                fontWeight: 'var(--weight-bold)',
                color: 'var(--text-primary)',
                display: 'block',
                marginBottom: 'var(--space-4)',
              }}
            >
              CogNodes
            </span>
            <p 
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'var(--font-body)',
                lineHeight: 'var(--leading-relaxed)',
                maxWidth: '300px',
              }}
            >
              AI-powered software for startups and businesses. Premium quality without the enterprise price tag.
            </p>
          </div>

          {/* Navigation column */}
          <div className="footer-nav">
            <h4 
              style={{
                fontSize: 'var(--font-small)',
                fontWeight: 'var(--weight-semibold)',
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: 'var(--space-5)',
              }}
            >
              Navigate
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {[
                { label: 'Services', id: 'services' },
                { label: 'Labs', id: 'ventures' },
                { label: 'Why Us', id: 'why-us' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-secondary)',
                      fontSize: 'var(--font-body)',
                      fontWeight: 'var(--weight-medium)',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Labs column */}
          <div className="footer-products">
            <h4 
              style={{
                fontSize: 'var(--font-small)',
                fontWeight: 'var(--weight-semibold)',
                letterSpacing: 'var(--tracking-wide)',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: 'var(--space-5)',
              }}
            >
              Our Products
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <li>
                <button
                  onClick={() => scrollToSection('diffuse')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    fontSize: 'var(--font-body)',
                    fontWeight: 'var(--weight-medium)',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-blue)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  Diffuse AI
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('runbook')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    fontSize: 'var(--font-body)',
                    fontWeight: 'var(--weight-medium)',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-purple)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  Runbook
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div 
          style={{
            paddingTop: 'var(--space-6)',
            paddingBottom: 'var(--space-6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p 
            style={{
              color: 'var(--text-muted)',
              fontSize: 'var(--font-small)',
            }}
          >
            © {currentYear} CogNodes. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: var(--space-8) !important;
          }
          .footer-brand {
            grid-column: 1 / -1 !important;
            text-align: left !important;
          }
          .footer-brand p {
            max-width: 100% !important;
          }
        }
      `}</style>
    </footer>
  );
}
