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
  const shadowOpacity = centerProgress * 0.5;
  const opacity = 0.7 + (centerProgress * 0.3);

  return (
    <div 
      ref={cardRef}
      id={id}
      className="venture-card"
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
  const stepColors = ['var(--accent-blue)', 'var(--accent-purple)', 'var(--accent-pink)', 'var(--accent-blue)'];

  return (
    <div style={{
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
          app.diffuse.ai/dashboard
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
            background: `linear-gradient(90deg, ${stepColors[step]}, var(--accent-purple))`,
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
            color: step === 3 ? 'white' : 'var(--text-muted)',
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

// Full browser-style Runbook mockup - with slower, more organic equity curves
function RunbookMockup() {
  const [status, setStatus] = useState('analyzing');
  const [returns, setReturns] = useState(12.4);
  const [deployed, setDeployed] = useState(24.8);
  const [holdings, setHoldings] = useState([
    { name: 'Election 2026', allocation: 35, pnl: 8.2 },
    { name: 'Rate Decision', allocation: 25, pnl: -2.1 },
    { name: 'GDP Report', allocation: 20, pnl: 5.4 },
  ]);
  const [chartData1, setChartData1] = useState<number[]>([]);
  const [chartData2, setChartData2] = useState<number[]>([]);
  const [time, setTime] = useState(0);

  // Initialize smooth chart data with more organic patterns
  useEffect(() => {
    const points = 40;
    const initial1: number[] = [];
    const initial2: number[] = [];
    for (let i = 0; i < points; i++) {
      // Use multiple sine waves at different frequencies for organic feel
      const base1 = 50 + Math.sin(i * 0.15) * 12 + Math.sin(i * 0.07) * 6 + Math.sin(i * 0.23) * 4;
      const base2 = 48 + Math.sin(i * 0.12 + 1.2) * 10 + Math.sin(i * 0.05 + 0.8) * 5 + Math.sin(i * 0.19 + 0.5) * 3;
      initial1.push(base1);
      initial2.push(base2);
    }
    setChartData1(initial1);
    setChartData2(initial2);
  }, []);

  useEffect(() => {
    const states = ['analyzing', 'executing', 'complete', 'monitoring'];
    let stateIndex = 0;

    const stateInterval = setInterval(() => {
      stateIndex = (stateIndex + 1) % states.length;
      setStatus(states[stateIndex]);
    }, 3500);

    // Update returns smoothly - slower
    const returnsInterval = setInterval(() => {
      setReturns(prev => {
        const change = (Math.random() - 0.45) * 0.15;
        return Math.max(-5, Math.min(25, prev + change));
      });
    }, 400);

    // Update deployed value - slower
    const deployedInterval = setInterval(() => {
      setDeployed(prev => {
        const change = (Math.random() - 0.5) * 0.08;
        return Math.max(20, Math.min(30, prev + change));
      });
    }, 500);

    // Update holdings - slower
    const holdingsInterval = setInterval(() => {
      setHoldings(prev => prev.map(h => ({
        ...h,
        pnl: Math.max(-10, Math.min(15, h.pnl + (Math.random() - 0.5) * 0.15)),
        allocation: Math.max(15, Math.min(45, h.allocation + (Math.random() - 0.5) * 0.4)),
      })));
    }, 600);

    // Much slower chart animation for smooth movement
    const chartInterval = setInterval(() => {
      setTime(t => t + 1);
    }, 120);

    return () => {
      clearInterval(stateInterval);
      clearInterval(returnsInterval);
      clearInterval(deployedInterval);
      clearInterval(holdingsInterval);
      clearInterval(chartInterval);
    };
  }, []);

  // Update chart data with organic, non-predictable patterns
  useEffect(() => {
    if (chartData1.length === 0) return;
    
    setChartData1(prev => {
      const newData = [...prev];
      for (let i = 0; i < newData.length - 1; i++) {
        newData[i] = newData[i + 1];
      }
      // Multiple overlapping sine waves with noise for organic movement
      const t = time * 0.03;
      const baseValue = 50 
        + Math.sin(t * 2.1) * 10 
        + Math.sin(t * 0.7 + 1.3) * 6 
        + Math.sin(t * 3.7 + 2.1) * 3
        + Math.sin(t * 0.3) * 8;
      newData[newData.length - 1] = baseValue + (Math.random() - 0.5) * 1;
      return newData;
    });

    setChartData2(prev => {
      const newData = [...prev];
      for (let i = 0; i < newData.length - 1; i++) {
        newData[i] = newData[i + 1];
      }
      // Different wave pattern for second line
      const t = time * 0.03;
      const baseValue = 47 
        + Math.sin(t * 1.8 + 0.5) * 8 
        + Math.sin(t * 0.5 + 2.1) * 5 
        + Math.sin(t * 2.9 + 1.1) * 3
        + Math.sin(t * 0.4 + 0.7) * 6;
      newData[newData.length - 1] = baseValue + (Math.random() - 0.5) * 1;
      return newData;
    });
  }, [time]);

  const statusColors: Record<string, string> = {
    analyzing: 'var(--accent-purple)',
    executing: 'var(--accent-blue)',
    complete: 'var(--accent-pink)',
    monitoring: 'var(--text-muted)',
  };

  const allData = [...chartData1, ...chartData2];
  const minChart = Math.min(...allData) - 5;
  const maxChart = Math.max(...allData) + 5;
  const chartRange = maxChart - minChart || 1;

  // Generate smooth SVG path with bezier curves
  const generatePath = (data: number[]) => {
    if (data.length < 2) return '';
    
    const points = data.map((v, i) => ({
      x: (i / (data.length - 1)) * 200,
      y: 60 - ((v - minChart) / chartRange) * 55
    }));

    let path = `M ${points[0].x} ${points[0].y}`;
    
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const tension = 0.35;
      
      const cp1x = prev.x + (curr.x - prev.x) * tension;
      const cp1y = prev.y;
      const cp2x = curr.x - (curr.x - prev.x) * tension;
      const cp2y = curr.y;
      
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }
    
    return path;
  };

  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'var(--bg-void)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Browser header */}
      <div style={{ 
        padding: '10px 14px', 
        background: 'var(--bg-elevated)', 
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
          app.runbook.com/portfolio
        </div>
      </div>

      {/* Dashboard content */}
      <div style={{ flex: 1, padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* Top stats row */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ 
            flex: 1, 
            padding: '8px 10px', 
            background: 'var(--bg-elevated)', 
            borderRadius: '4px',
            border: '1px solid var(--border-subtle)',
          }}>
            <div style={{ fontSize: '8px', color: 'var(--text-muted)', marginBottom: '2px', fontFamily: 'monospace' }}>STATUS</div>
            <div style={{ 
              fontSize: '10px', 
              color: statusColors[status], 
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}>
              <div style={{ 
                width: '5px', 
                height: '5px', 
                borderRadius: '50%', 
                background: statusColors[status],
                animation: status !== 'complete' && status !== 'monitoring' ? 'pulse 1s infinite' : 'none',
              }} />
              {status.toUpperCase()}
            </div>
          </div>
          <div style={{ 
            flex: 1, 
            padding: '8px 10px', 
            background: 'var(--bg-elevated)', 
            borderRadius: '4px',
            border: '1px solid var(--border-subtle)',
          }}>
            <div style={{ fontSize: '8px', color: 'var(--text-muted)', marginBottom: '2px', fontFamily: 'monospace' }}>RETURNS</div>
            <div style={{ 
              fontSize: '10px', 
              color: returns >= 0 ? 'var(--accent-blue)' : 'var(--accent-pink)', 
              fontWeight: 600,
              fontFamily: 'monospace',
            }}>
              {returns >= 0 ? '+' : ''}{returns.toFixed(1)}%
            </div>
          </div>
          <div style={{ 
            flex: 1, 
            padding: '8px 10px', 
            background: 'var(--bg-elevated)', 
            borderRadius: '4px',
            border: '1px solid var(--border-subtle)',
          }}>
            <div style={{ fontSize: '8px', color: 'var(--text-muted)', marginBottom: '2px', fontFamily: 'monospace' }}>DEPLOYED</div>
            <div style={{ 
              fontSize: '10px', 
              color: 'var(--accent-purple)', 
              fontWeight: 600,
              fontFamily: 'monospace',
            }}>
              ${deployed.toFixed(1)}K
            </div>
          </div>
        </div>

        {/* Dual equity curve chart */}
        <div style={{ 
          flex: 1,
          background: 'var(--bg-elevated)',
          borderRadius: '4px',
          border: '1px solid var(--border-subtle)',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '80px',
        }}>
          <div style={{ 
            fontSize: '8px', 
            color: 'var(--text-muted)', 
            marginBottom: '6px', 
            fontFamily: 'monospace',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
            <span>EQUITY CURVES</span>
            <span style={{ display: 'flex', gap: '8px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <span style={{ width: '8px', height: '2px', background: 'var(--accent-blue)', borderRadius: '1px' }} />
                Portfolio
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <span style={{ width: '8px', height: '2px', background: 'var(--accent-purple)', borderRadius: '1px' }} />
                Benchmark
              </span>
            </span>
          </div>
          <div style={{ 
            flex: 1, 
            position: 'relative',
            minHeight: '60px',
          }}>
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 200 60" 
              preserveAspectRatio="none"
              style={{ position: 'absolute', top: 0, left: 0 }}
            >
              <defs>
                <linearGradient id="chartGradient1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="chartGradient2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent-purple)" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="var(--accent-purple)" stopOpacity="0"/>
                </linearGradient>
              </defs>
              
              {/* Second line area (behind) */}
              {chartData2.length > 1 && (
                <>
                  <path
                    d={`${generatePath(chartData2)} L 200 60 L 0 60 Z`}
                    fill="url(#chartGradient2)"
                  />
                  <path
                    d={generatePath(chartData2)}
                    fill="none"
                    stroke="var(--accent-purple)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.7"
                  />
                </>
              )}
              
              {/* First line area (front) */}
              {chartData1.length > 1 && (
                <>
                  <path
                    d={`${generatePath(chartData1)} L 200 60 L 0 60 Z`}
                    fill="url(#chartGradient1)"
                  />
                  <path
                    d={generatePath(chartData1)}
                    fill="none"
                    stroke="var(--accent-blue)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Current point indicator */}
                  <circle
                    cx="200"
                    cy={60 - ((chartData1[chartData1.length - 1] - minChart) / chartRange) * 55}
                    r="3"
                    fill="var(--accent-blue)"
                  />
                </>
              )}
            </svg>
          </div>
        </div>

        {/* Holdings list */}
        <div style={{ 
          background: 'var(--bg-elevated)',
          borderRadius: '4px',
          border: '1px solid var(--border-subtle)',
          padding: '8px 10px',
          fontFamily: 'monospace',
          fontSize: '9px',
        }}>
          <div style={{ color: 'var(--text-muted)', marginBottom: '6px', fontSize: '8px' }}>ACTIVE POSITIONS</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {holdings.map((h, i) => (
              <div key={i} style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: '8px',
              }}>
                <span style={{ 
                  color: 'var(--text-secondary)',
                  flex: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                  {h.name}
                </span>
                <span style={{ 
                  color: 'var(--accent-purple)',
                  width: '35px',
                  textAlign: 'right',
                }}>
                  {h.allocation.toFixed(0)}%
                </span>
                <span style={{ 
                  color: h.pnl >= 0 ? 'var(--accent-blue)' : 'var(--accent-pink)',
                  width: '45px',
                  textAlign: 'right',
                }}>
                  {h.pnl >= 0 ? '+' : ''}{h.pnl.toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
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

      {/* Cursor tracking grid glow */}
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
            <span className="labs-line">We create products we believe in.</span>
          </p>
        </div>

        {/* Projects */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)', maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Diffuse.AI Card */}
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
                  AUTOMATED JOURNALISM PLATFORM
                </p>

                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-small)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-6)' }}>
                  Transform any meeting recording into publication-ready news articles in minutes. Cut content costs and save hours every week.
                </p>

                <div className="venture-features" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-2)', marginBottom: 'var(--space-5)' }}>
                  {['AI Article Generation', 'Smart Transcription', 'CMS Integration', 'Team Collaboration'].map((feature, i) => (
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
                  color: 'var(--accent-blue)' 
                }}>
                  → Launching Spring 2026
                </span>
              </div>

              {/* Mockup */}
              <div className="venture-mockup" style={{ overflow: 'hidden' }}>
                <DiffuseMockup />
              </div>
            </div>
          </VentureCard>

          {/* Runbook Card */}
          <VentureCard id="runbook">
            <div className="venture-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '380px' }}>
              {/* Content */}
              <div className="venture-content" style={{ padding: 'var(--space-8)', paddingBottom: 'var(--space-10)', borderRight: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                    PROJECT_002
                  </span>
                </div>

                <h3 className="venture-title" style={{ fontSize: 'var(--font-h2)', fontWeight: 'var(--weight-bold)', color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}>
                  Runbook
                </h3>
                
                <p style={{ 
                  fontSize: '11px', 
                  fontWeight: 'var(--weight-semibold)',
                  letterSpacing: '0.1em',
                  color: 'var(--accent-purple)', 
                  textTransform: 'uppercase',
                  marginBottom: 'var(--space-4)' 
                }}>
                  PREDICTION MARKETS AUTOMATION
                </p>

                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-small)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-6)' }}>
                  Automated trading for prediction markets with discipline built in. Set your strategy once and let the system execute with guardrails.
                </p>

                <div className="venture-features" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-2)', marginBottom: 'var(--space-5)' }}>
                  {['Rules-based Automation', 'Strict Risk Controls', 'Real-time Analytics', 'Transparent Trade Logs'].map((feature, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--text-secondary)', fontSize: '12px' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2">
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
                  color: 'var(--accent-purple)' 
                }}>
                  → Launching Summer 2026
                </span>
              </div>

              {/* Mockup */}
              <div className="venture-mockup" style={{ overflow: 'hidden' }}>
                <RunbookMockup />
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
          .venture-title,
          .mobile-heading-large {
            font-size: calc(var(--font-h2) * 2) !important;
            line-height: var(--leading-tight) !important;
            color: #ffffff !important;
          }
        }
      `}</style>
    </section>
  );
}
