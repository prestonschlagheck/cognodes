"use client";

import { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    number: "01",
    title: "Startup Pricing",
    description: "Premium quality without enterprise bloat. We price like a startup because we are one. No lengthy contracts, no minimums, no hidden fees.",
    accent: "var(--accent-blue)",
  },
  {
    number: "02",
    title: "Proven Track Record",
    description: "We don't just talk about building products. Diffuse.AI and Runbook are live platforms we've built from scratch. Real users, real traction.",
    accent: "var(--accent-purple)",
  },
  {
    number: "03",
    title: "Speed Without Sacrifice",
    description: "Ship in weeks, not months. We move fast because we're small and focused, but we never cut corners on quality or security.",
    accent: "var(--accent-pink)",
  },
];

function ReasonCard({ reason }: { reason: typeof reasons[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [centerProgress, setCenterProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const cardCenter = rect.top + rect.height / 2;
      const screenCenter = windowHeight / 2;
      
      const distanceFromCenter = Math.abs(cardCenter - screenCenter);
      const maxDistance = windowHeight * 0.35;
      const progress = Math.max(0, 1 - (distanceFromCenter / maxDistance));
      
      setCenterProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scale = 1 + (centerProgress * 0.1);
  const shadowOpacity = centerProgress * 0.5;
  const opacity = 0.7 + (centerProgress * 0.3);

  return (
    <div 
      ref={cardRef}
      className="reason-card"
      style={{
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        transform: `scale(${scale})`,
        opacity: opacity,
        transition: 'transform 0.2s ease-out, opacity 0.2s ease-out, box-shadow 0.2s ease-out',
        boxShadow: `0 ${30 * centerProgress}px ${60 * centerProgress}px -15px rgba(0, 0, 0, ${shadowOpacity})`,
      }}
    >
      <div className="reason-grid" style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: 0 }}>
        {/* Number side */}
        <div 
          className="reason-number"
          style={{
            background: 'var(--bg-elevated)',
            borderRight: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--space-6)',
          }}
        >
          <span 
            style={{
              fontSize: '42px',
              fontWeight: 'var(--weight-bold)',
              color: reason.accent,
              opacity: 0.8,
              fontFamily: 'monospace',
              lineHeight: 1,
            }}
          >
            {reason.number}
          </span>
        </div>

        {/* Content */}
        <div className="reason-content" style={{ padding: 'var(--space-6) var(--space-8)' }}>
          <h3 
            className="reason-title"
            style={{
              fontSize: 'var(--font-h2)',
              fontWeight: 'var(--weight-bold)',
              color: 'var(--text-primary)',
              marginBottom: 'var(--space-3)',
            }}
          >
            {reason.title}
          </h3>
          
          <p 
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'var(--font-body)',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            {reason.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section 
      id="why-us"
      className="section"
      style={{ 
        backgroundColor: 'var(--bg-base)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <p className="section-label">Why Work With Us</p>
          <h2 className="section-title mobile-heading-large">What makes us different</h2>
          <p className="section-subtitle">
            We combine the quality of an agency with the speed and pricing of a startup.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', maxWidth: '900px', margin: '0 auto' }}>
          {reasons.map((reason, index) => (
            <ReasonCard key={index} reason={reason} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .reason-grid {
            grid-template-columns: 1fr !important;
          }
          .reason-number {
            border-right: none !important;
            border-bottom: 1px solid var(--border-subtle) !important;
            padding: var(--space-4) !important;
          }
          .reason-content {
            text-align: center !important;
          }
          .reason-card {
            transform: none !important;
          }
          .mobile-heading-large {
            font-size: calc(var(--font-h2) * 2) !important;
            line-height: var(--leading-tight) !important;
            color: #ffffff !important;
          }
          .reason-title {
            color: #ffffff !important;
          }
        }
      `}</style>
    </section>
  );
}
