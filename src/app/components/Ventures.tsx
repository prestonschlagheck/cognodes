"use client";

import { useEffect, useRef, useState } from 'react';

function VentureCard({ children, id }: { children: React.ReactNode; id?: string }) {
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
  const shadowOpacity = centerProgress * 0.12;
  const opacity = 0.7 + (centerProgress * 0.3);

  return (
    <div
      ref={cardRef}
      id={id}
      className="venture-card mockup-dark"
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
      {children}
    </div>
  );
}

// Full browser-style Diffuse mockup - synced loading bar with text
function DiffuseMockup() {
  const [step, setStep] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [micPulse, setMicPulse] = useState(0);

  const stageTexts = [
    '"...and the motion passes with a vote of 5-2. Moving on to the next agenda item, the proposed budget allocation for..."',
    'Speaker 1: The motion passes with a vote of 5-2.\nSpeaker 1: Moving on to the next agenda item...\nSpeaker 2: I have a question about the budget...',
    'City Council Approves New Budget Allocation\n\nIn a decisive 5-2 vote, the city council approved the proposed budget allocation for infrastructure improvements...',
    '✓ Article generated successfully\n✓ 847 words\n✓ Ready for publication\n\nHeadline: City Council Approves New Budget...',
  ];

  const currentText = stageTexts[step];
  const progress = Math.min((charIndex / currentText.length) * 100, 100);

  useEffect(() => {
    const stepDuration = 6000;
    const stepInterval = setInterval(() => {
      setStep(prev => (prev + 1) % 4);
      setCharIndex(0);
      setTypedText('');
    }, stepDuration);

    return () => clearInterval(stepInterval);
  }, []);

  // Typing effect synced with progress bar
  useEffect(() => {
    const text = stageTexts[step];
    const typingSpeed = step === 0 ? 30 : step === 1 ? 20 : 40;

    const typingInterval = setInterval(() => {
      setCharIndex(prev => {
        if (prev < text.length) {
          setTypedText(text.slice(0, prev + 1));
          return prev + 1;
        }
        return prev;
      });
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [step]);

  // Microphone pulse animation
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setMicPulse(prev => (prev + 1) % 3);
    }, 300);
    return () => clearInterval(pulseInterval);
  }, []);

  const steps = ['Recording', 'Transcribing', 'Generating', 'Complete'];
  const stepColors = ['var(--accent-blue)', 'var(--accent-blue)', 'var(--accent-blue)', 'var(--accent-blue)'];

  return (
    <div className="mockup-dark" style={{
      width: '100%',
      height: '100%',
      background: 'var(--bg-elevated)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Browser header */}
      <div style={{
        padding: '10px 14px',
        background: 'var(--bg-card)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-pink)' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-purple)' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-blue)' }} />
        <div style={{
          marginLeft: '8px',
          flex: 1,
          background: 'var(--bg-base)',
          borderRadius: '4px',
          padding: '4px 10px',
          fontSize: '10px',
          color: 'var(--text-muted)',
          fontFamily: 'monospace',
        }}>
          diffuse.press
        </div>
      </div>

      {/* App content */}
      <div style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Status bar with microphone */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '10px 12px',
          background: 'var(--bg-card)',
          borderRadius: '4px',
          border: '1px solid var(--border-subtle)',
        }}>
          {step === 0 ? (
            /* Microphone icon for recording */
            <div style={{ position: 'relative' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill={stepColors[step]} style={{ opacity: 0.8 }}>
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" fill="none" stroke={stepColors[step]} strokeWidth="2"/>
                <line x1="12" y1="19" x2="12" y2="23" stroke={stepColors[step]} strokeWidth="2"/>
                <line x1="8" y1="23" x2="16" y2="23" stroke={stepColors[step]} strokeWidth="2"/>
              </svg>
              {/* Pulse rings */}
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: `${20 + (micPulse === i ? 15 : 5)}px`,
                  height: `${20 + (micPulse === i ? 15 : 5)}px`,
                  borderRadius: '50%',
                  border: `2px solid ${stepColors[step]}`,
                  opacity: micPulse === i ? 0.6 : 0.2,
                  transition: 'all 0.3s ease-out',
                }} />
              ))}
            </div>
          ) : (
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: stepColors[step],
              animation: step < 3 ? 'pulse 1s infinite' : 'none',
            }} />
          )}
          <span style={{ fontSize: '11px', color: stepColors[step], fontWeight: 600, flex: 1 }}>
            {steps[step]}{step < 3 ? '...' : ''}
          </span>
          <span style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
            {Math.round(progress)}%
          </span>
        </div>

        {/* Progress bar - synced with typing */}
        <div style={{
          height: '6px',
          background: 'var(--border-subtle)',
          borderRadius: '3px',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: stepColors[step],
            transition: 'width 0.05s linear',
            borderRadius: '3px',
          }} />
        </div>

        {/* Content area with typing */}
        <div style={{
          flex: 1,
          minHeight: '156px',
          background: 'var(--bg-base)',
          borderRadius: '4px',
          border: '1px solid var(--border-subtle)',
          padding: '14px',
          fontFamily: 'monospace',
          fontSize: '10px',
          lineHeight: 1.6,
          color: 'var(--text-secondary)',
          overflow: 'hidden',
          whiteSpace: 'pre-wrap',
        }}>
          {step === 0 && (
            <div style={{ marginBottom: '8px', color: 'var(--text-muted)', fontSize: '9px' }}>
              LIVE AUDIO CAPTURE
            </div>
          )}
          {step === 1 && (
            <div style={{ marginBottom: '8px', color: 'var(--text-muted)', fontSize: '9px' }}>
              TRANSCRIPTION OUTPUT
            </div>
          )}
          {step === 2 && (
            <div style={{ marginBottom: '8px', color: 'var(--text-muted)', fontSize: '9px' }}>
              ARTICLE PREVIEW
            </div>
          )}
          {step === 3 && (
            <div style={{ marginBottom: '8px', color: 'var(--text-muted)', fontSize: '9px' }}>
              PUBLICATION READY
            </div>
          )}
          <span style={{ color: step >= 2 ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
            {typedText}
          </span>
          <span style={{ opacity: 0.5, animation: 'blink 0.5s infinite' }}>|</span>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{
            flex: 1,
            height: '32px',
            background: step === 3 ? 'var(--accent-blue)' : 'var(--bg-card)',
            borderRadius: '4px',
            border: `1px solid ${step === 3 ? 'var(--accent-blue)' : 'var(--border-subtle)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            color: step === 3 ? '#0a0a0a' : 'var(--text-muted)',
            fontWeight: 500,
          }}>
            {step === 3 ? 'Publish Article' : step === 0 ? 'Stop Recording' : 'Processing...'}
          </div>
          <div style={{
            width: '32px',
            height: '32px',
            background: 'var(--bg-card)',
            borderRadius: '4px',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ width: '10px', height: '10px', background: 'var(--border-default)', borderRadius: '2px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Animated full-ring gauge used in the Mano Wellness mockup
function ManoGauge({ pct, value, label, unit, color = 'var(--text-primary)' }: { pct: number; value: string; label: string; unit?: string; color?: string }) {
  const clamped = Math.max(0, Math.min(100, pct));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, minWidth: 0, gap: '6px' }}>
      <div style={{
        fontSize: '8px',
        letterSpacing: '0.12em',
        color: 'var(--text-muted)',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
      }}>
        {label}
      </div>
      <div style={{ position: 'relative', width: '100%', maxWidth: '66px', aspectRatio: '1' }}>
        <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', display: 'block' }}>
          <circle cx="50" cy="50" r="42" fill="none" stroke="var(--border-default)" strokeWidth="8" />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray={`${clamped} 100`}
            transform="rotate(-90 50 50)"
            style={{ transition: 'stroke-dasharray 0.6s ease' }}
          />
        </svg>
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{ fontSize: '13px', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)', lineHeight: 1, whiteSpace: 'nowrap' }}>
            {value}
          </span>
          {unit && <span style={{ fontSize: '7px', color: 'var(--text-muted)', marginTop: '2px' }}>{unit}</span>}
        </div>
      </div>
    </div>
  );
}

// Mano Wellness mockup - animated fitness & recovery dashboard
function ManoMockup() {
  const [recovery, setRecovery] = useState(70);
  const [strain, setStrain] = useState(8.4);
  const [sleep, setSleep] = useState(7.25);
  const [stages, setStages] = useState([31, 25, 39, 5]); // deep, rem, light, awake
  const [week, setWeek] = useState([9, 5, 13, 7, 11, 6, 12]);
  const [today, setToday] = useState(6);

  useEffect(() => {
    const a = setInterval(() => setRecovery(v => Math.max(58, Math.min(88, v + (Math.random() - 0.5) * 14))), 1900);
    const b = setInterval(() => setStrain(v => Math.max(4, Math.min(18, v + (Math.random() - 0.5) * 3.2))), 1900);
    const c = setInterval(() => setSleep(v => Math.max(6.2, Math.min(8.3, v + (Math.random() - 0.5) * 0.9))), 2100);
    const d = setInterval(() => {
      const deep = 28 + Math.random() * 8;
      const rem = 22 + Math.random() * 8;
      const awake = 3 + Math.random() * 4;
      const light = 100 - deep - rem - awake;
      setStages([deep, rem, light, awake]);
    }, 2000);
    const e = setInterval(() => {
      setWeek(prev => prev.map(() => 4 + Math.random() * 11));
      setToday(t => (t + 1) % 7);
    }, 1600);
    return () => { clearInterval(a); clearInterval(b); clearInterval(c); clearInterval(d); clearInterval(e); };
  }, []);

  const h = Math.floor(sleep);
  const m = Math.round((sleep - h) * 60);
  const stageColors = ['var(--accent-blue)', 'var(--accent-purple)', '#c2c2c8', 'var(--accent-pink)'];
  const stageNames = ['Deep', 'REM', 'Light', 'Awake'];

  return (
    <div className="mockup-dark" style={{ width: '100%', height: '100%', background: 'var(--bg-elevated)', display: 'flex', flexDirection: 'column' }}>
      {/* Browser header */}
      <div style={{
        padding: '10px 14px',
        background: 'var(--bg-card)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-pink)' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-purple)' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-blue)' }} />
        <div style={{
          marginLeft: '8px',
          flex: 1,
          background: 'var(--bg-base)',
          borderRadius: '4px',
          padding: '4px 10px',
          fontSize: '10px',
          color: 'var(--text-muted)',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        }}>
          Mano Wellness · Fitness Coach
        </div>
      </div>

      {/* Dashboard */}
      <div style={{ flex: 1, padding: '14px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Ring gauges */}
        <div style={{
          display: 'flex',
          gap: '8px',
          padding: '10px 6px 6px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '4px',
        }}>
          <ManoGauge label="RECOVERY" pct={recovery} value={`${Math.round(recovery)}%`} color="var(--accent-blue)" />
          <ManoGauge label="STRAIN" pct={(strain / 21) * 100} value={strain.toFixed(1)} color="var(--accent-purple)" />
          <ManoGauge label="SLEEP" pct={(sleep / 8) * 100} value={`${h}h ${m}m`} color="var(--accent-pink)" />
        </div>

        {/* Sleep stages */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '4px',
          padding: '10px 12px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '8px', letterSpacing: '0.12em', color: 'var(--text-muted)', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
              SLEEP STAGES
            </span>
            <span style={{ fontSize: '8px', color: 'var(--text-muted)', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
              {h}h {m}m
            </span>
          </div>
          <div style={{ display: 'flex', height: '10px', borderRadius: '2px', overflow: 'hidden', gap: '2px' }}>
            {stages.map((s, i) => (
              <div key={i} style={{ width: `${s}%`, background: stageColors[i], transition: 'width 0.6s ease' }} />
            ))}
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '8px', flexWrap: 'wrap' }}>
            {stageNames.map((n, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '9px', color: 'var(--text-secondary)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: stageColors[i] }} />
                {n} {Math.round(stages[i])}%
              </span>
            ))}
          </div>
        </div>

        {/* Weekly training load */}
        <div style={{
          flex: 1,
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '4px',
          padding: '10px 12px',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '78px',
        }}>
          <span style={{ fontSize: '8px', letterSpacing: '0.12em', color: 'var(--text-muted)', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace', marginBottom: '8px' }}>
            TRAINING LOAD · 7D
          </span>
          <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '6px', minHeight: '40px' }}>
            {week.map((hgt, i) => (
              <div key={i} style={{
                flex: 1,
                height: `${(hgt / 15) * 100}%`,
                background: ['var(--accent-blue)', 'var(--accent-purple)', 'var(--accent-pink)'][i % 3],
                borderRadius: '2px 2px 0 0',
                opacity: i === today ? 1 : 0.5,
                transition: 'height 0.6s ease, opacity 0.4s ease',
              }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Lookr mockup - masonry style feed with an AI stylist score and community fit rating
function LookrMockup() {
  const [score, setScore] = useState(88);
  const [fit, setFit] = useState(82);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const s = setInterval(() => setScore(v => Math.max(74, Math.min(97, Math.round(v + (Math.random() - 0.5) * 12)))), 1900);
    const f = setInterval(() => setFit(v => Math.max(62, Math.min(96, Math.round(v + (Math.random() - 0.5) * 14)))), 2100);
    const a = setInterval(() => setActive(x => (x + 1) % 6), 1500);
    return () => { clearInterval(s); clearInterval(f); clearInterval(a); };
  }, []);

  const grads = [
    'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
    'linear-gradient(135deg, var(--accent-purple), var(--accent-pink))',
    'linear-gradient(135deg, var(--accent-pink), var(--accent-blue))',
    'linear-gradient(135deg, var(--accent-blue), var(--accent-pink))',
    'linear-gradient(135deg, var(--accent-purple), var(--accent-blue))',
    'linear-gradient(135deg, var(--accent-pink), var(--accent-purple))',
  ];
  const heights = [58, 72, 66, 54, 70, 60];
  const badges = [92, 78, 85, 74, 88, 81];
  const mono = 'ui-monospace, SFMono-Regular, Menlo, monospace';

  return (
    <div className="mockup-dark" style={{ width: '100%', height: '100%', background: 'var(--bg-elevated)', display: 'flex', flexDirection: 'column' }}>
      {/* Browser header */}
      <div style={{ padding: '10px 14px', background: 'var(--bg-card)', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-pink)' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-purple)' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-blue)' }} />
        <div style={{ marginLeft: '8px', flex: 1, background: 'var(--bg-base)', borderRadius: '4px', padding: '4px 10px', fontSize: '10px', color: 'var(--text-muted)', fontFamily: mono }}>
          Lookr · Style Feed
        </div>
      </div>

      {/* Feed */}
      <div style={{ flex: 1, padding: '14px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Featured look: photo + AI score + community fit */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '4px' }}>
          <div style={{ width: '60px', height: '84px', borderRadius: '6px', background: grads[0], flexShrink: 0 }} />
          <div style={{ width: '64px', flexShrink: 0 }}>
            <ManoGauge label="AI SCORE" pct={score} value={String(score)} color="var(--accent-blue)" />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '5px' }}>
            <span style={{ fontSize: '8px', letterSpacing: '0.12em', color: 'var(--text-muted)', fontFamily: mono }}>COMMUNITY FIT</span>
            <div style={{ height: '7px', background: 'var(--border-subtle)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${fit}%`, background: 'var(--accent-blue)', borderRadius: '4px', transition: 'width 0.6s ease' }} />
            </div>
            <span style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>{fit}% love this fit</span>
          </div>
        </div>

        {/* Masonry feed */}
        <div style={{ flex: 1, display: 'flex', gap: '8px', overflow: 'hidden' }}>
          {[0, 1, 2].map(col => (
            <div key={col} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[0, 1].map(row => {
                const idx = col * 2 + row;
                return (
                  <div key={row} style={{
                    position: 'relative',
                    height: `${heights[idx]}px`,
                    borderRadius: '6px',
                    background: grads[idx],
                    boxShadow: idx === active ? '0 0 0 2px var(--accent-blue)' : 'none',
                    transition: 'box-shadow 0.4s ease',
                  }}>
                    <div style={{ position: 'absolute', bottom: '5px', left: '5px', fontSize: '8px', fontWeight: 700, color: '#fff', background: 'rgba(0,0,0,0.28)', borderRadius: '10px', padding: '1px 6px', fontFamily: mono }}>
                      {badges[idx]}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Ventures() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

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

  return (
    <section
      id="ventures"
      ref={sectionRef}
      style={{
        position: 'relative',
        paddingTop: 'var(--space-32)',
        paddingBottom: 'var(--space-32)',
        overflow: 'hidden',
      }}
    >
      {/* Base background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--bg-base)',
        }}
      />

      {/* Blueprint grid - small */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
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
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '144px 144px',
        }}
      />

      {/* Cursor tracking grid glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(215, 255, 61, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(215, 255, 61, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '144px 144px',
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.4s ease',
          maskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 60%)`,
          WebkitMaskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 60%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Top fade gradient */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(to bottom, var(--bg-base) 0%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      />

      {/* Bottom fade gradient */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(to top, var(--bg-base) 0%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ marginBottom: 'var(--space-12)', textAlign: 'center' }}>
          <p className="section-label" style={{ fontFamily: 'monospace' }}>LAB PROJECTS</p>
          <h2 className="section-title mobile-heading-large" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)' }}>
            CogNodes
            <span style={{
              fontSize: 'var(--font-h2)',
              fontWeight: 'var(--weight-bold)',
              color: 'var(--accent-blue)',
              letterSpacing: '0.05em',
              border: '2px solid var(--accent-blue)',
              borderRadius: 'var(--radius-sm)',
              padding: '2px 10px',
            }}>
              LABS
            </span>
          </h2>
          <p className="section-subtitle labs-subtitle">
            <span className="labs-line">We don&apos;t just build for clients.</span>
            <span className="labs-space"> </span>
            <span className="labs-line">We build products we believe in.</span>
          </p>
        </div>

        {/* Projects */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)', maxWidth: '900px', margin: '0 auto' }}>

          {/* Diffuse Card */}
          <VentureCard id="diffuse">
            <div className="venture-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '380px' }}>
              {/* Content */}
              <div className="venture-content" style={{ padding: 'var(--space-8)', paddingBottom: 'var(--space-10)', borderRight: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                    PROJECT_001
                  </span>
                </div>

                <h3 className="venture-title" style={{ fontSize: 'var(--font-h2)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                  Diffuse.AI
                </h3>

                <p style={{
                  fontSize: '11px',
                  fontWeight: 'var(--weight-semibold)',
                  letterSpacing: '0.1em',
                  color: 'var(--accent-blue)',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-4)'
                }}>
                  Local News, Drafted by AI
                </p>

                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-small)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-6)' }}>
                  Diffuse.AI pulls local reporting into one workspace: meeting audio, documents, and links. AI drafts, while editors decide what&apos;s newsworthy and verify what&apos;s true.
                </p>

                <div className="venture-features" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-2)', marginBottom: 'var(--space-5)' }}>
                  {['Human-Reviewed Drafts', 'Speaker Transcription', 'Mixed Source Inputs', 'Editorial Control'].map((feature, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--text-secondary)', fontSize: '12px' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href="https://www.diffuse.press/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="venture-link"
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 'var(--font-body)',
                    fontWeight: 'var(--weight-semibold)',
                    color: 'var(--accent-blue)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    width: 'fit-content',
                  }}
                >
                  Visit diffuse.press
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </a>
              </div>

              {/* Mockup */}
              <div className="venture-mockup" style={{ overflow: 'hidden' }}>
                <DiffuseMockup />
              </div>
            </div>
          </VentureCard>

          {/* Mano Wellness Card */}
          <VentureCard id="mano">
            <div className="venture-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '380px' }}>
              {/* Content */}
              <div className="venture-content" style={{ padding: 'var(--space-8)', paddingBottom: 'var(--space-10)', borderRight: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                    PROJECT_002
                  </span>
                </div>

                <h3 className="venture-title" style={{ fontSize: 'var(--font-h2)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                  Mano Wellness
                </h3>

                <p style={{
                  fontSize: '11px',
                  fontWeight: 'var(--weight-semibold)',
                  letterSpacing: '0.1em',
                  color: 'var(--accent-blue)',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-4)'
                }}>
                  Agentic Fitness Coach
                </p>

                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-small)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-6)' }}>
                  An agentic fitness coach that syncs with your wearables and logs your nutrition. It learns your patterns and builds training and recovery plans that adapt as you progress.
                </p>

                <div className="venture-features" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-2)', marginBottom: 'var(--space-5)' }}>
                  {['Wearable Sync', 'Nutrition Tracking', 'Adaptive Plans', 'AI Coaching'].map((feature, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--text-secondary)', fontSize: '12px' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <span style={{
                  fontFamily: 'monospace',
                  fontSize: 'var(--font-body)',
                  fontWeight: 'var(--weight-semibold)',
                  color: 'var(--accent-pink)'
                }}>
                  → Launching Summer 2026
                </span>
              </div>

              {/* Mockup */}
              <div className="venture-mockup" style={{ overflow: 'hidden' }}>
                <ManoMockup />
              </div>
            </div>
          </VentureCard>

          {/* Lookr Card */}
          <VentureCard id="lookr">
            <div className="venture-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '380px' }}>
              {/* Content */}
              <div className="venture-content" style={{ padding: 'var(--space-8)', paddingBottom: 'var(--space-10)', borderRight: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                    PROJECT_003
                  </span>
                </div>

                <h3 className="venture-title" style={{ fontSize: 'var(--font-h2)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                  Lookr
                </h3>

                <p style={{
                  fontSize: '11px',
                  fontWeight: 'var(--weight-semibold)',
                  letterSpacing: '0.1em',
                  color: 'var(--accent-blue)',
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-4)'
                }}>
                  Social AI Stylist
                </p>

                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-small)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-6)' }}>
                  Share your outfits and get real feedback: an AI stylist scores every look while the community rates your fit, all inside a feed personalized to your taste.
                </p>

                <div className="venture-features" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-2)', marginBottom: 'var(--space-5)' }}>
                  {['AI Stylist Grades', 'Community Fit Ratings', 'Personalized Feed', 'Shop the Look'].map((feature, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--text-secondary)', fontSize: '12px' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <span style={{
                  fontFamily: 'monospace',
                  fontSize: 'var(--font-body)',
                  fontWeight: 'var(--weight-semibold)',
                  color: 'var(--accent-pink)'
                }}>
                  → Launching Summer 2026
                </span>
              </div>

              {/* Mockup */}
              <div className="venture-mockup" style={{ overflow: 'hidden' }}>
                <LookrMockup />
              </div>
            </div>
          </VentureCard>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .venture-link:hover {
          text-decoration: underline !important;
        }

        @media (max-width: 768px) {
          .venture-card {
            transform: none !important;
          }
          .venture-grid {
            grid-template-columns: 1fr !important;
          }
          .venture-content {
            border-right: none !important;
            border-bottom: 1px solid var(--border-subtle) !important;
            text-align: center !important;
          }
          .venture-features {
            justify-content: center !important;
          }
          .venture-features > div {
            justify-content: center !important;
          }
          .venture-card {
            transform: none !important;
          }
          .labs-subtitle {
            white-space: normal !important;
          }
          .labs-line {
            display: block !important;
          }
          .labs-space {
            display: none !important;
          }
          .mobile-heading-large {
            font-size: calc(var(--font-h2) * 2) !important;
            line-height: var(--leading-tight) !important;
            color: #fafafa !important;
          }
          .venture-title {
            font-size: calc(var(--font-h2) * 1.35) !important;
            line-height: var(--leading-tight) !important;
            color: #fafafa !important;
          }
        }
      `}</style>
    </section>
  );
}
