"use client";

export default function Contact() {
  return (
    <section 
      id="contact"
      className="section"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      <div className="container">
        <div 
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {/* Header */}
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title" style={{ marginBottom: 'var(--space-4)' }}>
            Let&apos;s build something
          </h2>
          <p 
            className="contact-subtitle section-subtitle"
            style={{ 
              margin: '0 auto var(--space-10)',
              maxWidth: '500px',
            }}
          >
            <span className="subtitle-line-1">Have a project in mind?</span>
            <span className="subtitle-line-2"> We&apos;d love to hear about it.</span>
            <br className="subtitle-break-desktop" />
            <span className="subtitle-line-3">Tell us what you&apos;re building.</span>
          </p>

          {/* CTA Buttons */}
          <div 
            className="contact-buttons"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-4)',
              justifyContent: 'center',
            }}
          >
            <a
              href="mailto:prestonschlagheck@gmail.com"
              className="btn btn-primary contact-btn"
            >
              Start a Conversation
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            
            <a
              href="https://calendly.com/cognodes/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary contact-btn"
            >
              Book a Call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-btn {
          height: 40px;
          padding: 0 var(--space-6);
          min-width: 180px;
        }
        .subtitle-break-mobile {
          display: none;
        }
        .subtitle-break-desktop {
          display: inline;
        }
        @media (max-width: 640px) {
          .contact-buttons {
            flex-direction: column !important;
            align-items: center !important;
            width: 100%;
          }
          .contact-btn {
            width: 100%;
            max-width: 340px;
            height: 44px;
          }
          .subtitle-line-1::after {
            content: '';
            display: block;
          }
          .subtitle-line-2::after {
            content: '';
            display: block;
          }
          .subtitle-break-desktop {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
