"use client";

import { useEffect, useRef, useState } from 'react';

// Words of similar length for centered look
const morphWords = ['Scale', 'Ship', 'Build'];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldTransition, setShouldTransition] = useState(true);
  const nextWordIndex = (currentWordIndex + 1) % morphWords.length;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseenter', handleMouseEnter);
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseenter', handleMouseEnter);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Word morphing animation - continuous wheel style
  useEffect(() => {
    const interval = setInterval(() => {
      // Start animation (current slides down, next slides in)
      setIsAnimating(true);
      
      // After animation completes, swap indices without transition
      setTimeout(() => {
        // Disable transitions for the swap
        setShouldTransition(false);
        setCurrentWordIndex(prev => (prev + 1) % morphWords.length);
        setIsAnimating(false);
        
        // Re-enable transitions after the DOM updates
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setShouldTransition(true);
          });
        });
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef}
      style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-base)',
      }}
    >
      {/* Blueprint grid - small */}
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

      {/* Blueprint grid - large */}
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

      {/* Cursor tracking grid glow - more noticeable on desktop */}
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

      {/* Faded edges */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(to bottom, var(--bg-base) 0%, transparent 15%, transparent 85%, var(--bg-base) 100%),
            linear-gradient(to right, var(--bg-base) 0%, transparent 10%, transparent 90%, var(--bg-base) 100%)
          `,
          pointerEvents: 'none',
        }}
      />

      <div 
        className="container hero-container"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 var(--space-6)',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Main headline - two-line structure */}
          <div 
            className="hero-headline"
            style={{
              marginBottom: 'var(--space-6)',
            }}
          >
            {/* First line - smaller with morphing word */}
            <div 
              className="hero-line-1"
              style={{
                fontWeight: 'var(--weight-semibold)',
                lineHeight: 1.2,
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.3em',
                whiteSpace: 'nowrap',
              }}
            >
              {/* Word container with fixed width for consistency - sized for average word "Build" */}
              <span 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  width: '2.7em',
                  textAlign: 'right',
                  position: 'relative',
                  height: '1.4em',
                  overflow: 'visible',
                  maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
                }}
              >
                {/* Current word - slides down and out */}
                <span 
                  className="morph-word-current"
                  style={{
                    display: 'block',
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: isAnimating ? 'translateY(calc(-50% + 100%))' : 'translateY(-50%)',
                    opacity: isAnimating ? 0 : 1,
                    transition: shouldTransition ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease' : 'none',
                  }}
                >
                  {morphWords[currentWordIndex]}
                </span>
                {/* Next word - slides in from top */}
                <span 
                  className="morph-word-next"
                  style={{
                    display: 'block',
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: isAnimating ? 'translateY(-50%)' : 'translateY(calc(-50% - 100%))',
                    opacity: isAnimating ? 1 : 0,
                    transition: shouldTransition ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease' : 'none',
                  }}
                >
                  {morphWords[nextWordIndex]}
                </span>
              </span>
              <span>Smarter With</span>
            </div>
            {/* Second line - CogNodes bigger and emphasized */}
            <div 
              className="hero-line-2"
              style={{
                fontWeight: 'var(--weight-bold)',
                lineHeight: 1.1,
                color: 'var(--accent-blue)',
              }}
            >
              CogNodes
            </div>
          </div>

          {/* Subline - two lines only */}
          <p 
            className="hero-subtitle"
            style={{
              fontSize: 'var(--font-h3)',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto var(--space-10)',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            We design and build AI-powered software for startups and businesses.
            <br />
            Premium quality without the enterprise price tag.
          </p>

          {/* CTA Buttons */}
          <div 
            className="hero-buttons"
          >
            <button 
              onClick={scrollToServices}
              className="btn btn-primary hero-btn"
            >
              What We Build
            </button>
            <button 
              onClick={scrollToContact}
              className="btn btn-secondary hero-btn"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-line-1 {
          font-size: clamp(1.5rem, 5vw, 2.5rem);
        }
        .hero-line-2 {
          font-size: clamp(4rem, 12vw, 8rem);
        }
        .hero-buttons {
          display: flex;
          flex-direction: row;
          gap: var(--space-4);
          justify-content: center;
        }
        .hero-btn {
          height: 40px;
          padding: 0 var(--space-6);
        }
        @media (max-width: 640px) {
          .hero-container {
            text-align: center !important;
          }
          .hero-line-1 {
            font-size: clamp(1.2rem, 5vw, 1.8rem);
            justify-content: center !important;
          }
          .hero-line-2 {
            font-size: clamp(3rem, 15vw, 5rem);
            text-align: center !important;
          }
          .hero-subtitle {
            text-align: center !important;
          }
          .hero-buttons {
            flex-direction: column !important;
            align-items: center !important;
            width: 100%;
          }
          .hero-btn {
            width: 100%;
            max-width: 280px;
            height: 44px;
          }
        }
      `}</style>
    </section>
  );
}
