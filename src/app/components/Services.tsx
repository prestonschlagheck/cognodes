"use client";

import { useEffect, useRef, useState } from 'react';

const services = [
  {
    id: "ai",
    title: "AI Integrations",
    description: "We add real intelligence to your product with LLM pipelines, conversational agents, and autonomous workflows.",
    features: ["SMART ASSISTANTS", "RAG SYSTEMS", "VOICE AI", "AGENT ORCHESTRATION"],
    accent: "var(--accent-blue)",
    mockupType: "terminal",
  },
  {
    id: "automation",
    title: "Workflow Automations",
    description: "Eliminate repetitive tasks and free your team to focus on what matters. Custom automation pipelines that save time, reduce errors, and scale.",
    features: ["N8N", "API INTEGRATIONS", "CUSTOM PIPELINES", "REAL-TIME TRIGGERS"],
    accent: "var(--accent-purple)",
    mockupType: "dashboard",
  },
  {
    id: "custom",
    title: "Full-Stack Products",
    description: "From concept to launch, we build production-ready products the same way we build our own.",
    features: ["AUTH & PAYMENTS", "ADMIN DASHBOARDS", "SCALABLE APIS"],
    accent: "var(--accent-pink)",
    mockupType: "app",
  },
  {
    id: "websites",
    title: "Websites & Web Apps",
    description: "High-converting marketing sites, landing pages, and web apps built for performance. Responsive experiences that turn visitors into customers.",
    features: ["NEXT.JS & REACT", "RESPONSIVE & INTERACTIVE", "SEO & AI OPTIMIZED"],
    accent: "var(--accent-green)",
    mockupType: "browser",
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    description: "Native-quality iOS and Android apps from a single codebase, polished and ready for the App Store and Play Store.",
    features: ["IOS & ANDROID", "REACT NATIVE", "APP STORE READY"],
    accent: "var(--accent-blue)",
    mockupType: "screens",
  },
];

const MOCKUP_HEIGHT = 220;

// CogNodes accent mix used across every mockup so the graphs read as varied and on-brand
const MIX = ['#d7ff3d', '#c4c4c4', '#8f8f8f']; // lime, light gray, mid gray

// Animated Browser Mockup - scrolling through a web page
const BrowserMockup = () => {
  const [urlText, setUrlText] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const fullUrl = 'cognodes.com';

  useEffect(() => {
    let charIndex = 0;
    let typing = true;
    const typeInterval = setInterval(() => {
      if (typing) {
        if (charIndex <= fullUrl.length) {
          setUrlText(fullUrl.slice(0, charIndex));
          charIndex++;
        } else {
          typing = false;
          setTimeout(() => {
            charIndex = 0;
            typing = true;
          }, 4000);
        }
      }
    }, 150);

    // Smooth continuous scroll
    const scrollInterval = setInterval(() => {
      setScrollY(prev => (prev + 0.5) % 200);
    }, 30);

    return () => {
      clearInterval(typeInterval);
      clearInterval(scrollInterval);
    };
  }, []);
  
  return (
    <div className="mockup-dark" style={{
      background: 'var(--bg-elevated)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      overflow: 'hidden',
      height: `${MOCKUP_HEIGHT}px`,
    }}>
      {/* Browser chrome */}
      <div style={{
        padding: '8px 12px',
        background: 'var(--bg-card)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
      }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-pink)' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-purple)' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-blue)' }} />
        <div style={{
          marginLeft: '12px',
          flex: 1,
          background: 'var(--bg-base)',
          borderRadius: '4px',
          padding: '4px 8px',
          fontSize: '10px',
          color: 'var(--text-primary)',
          fontFamily: 'monospace',
        }}>
          {urlText}<span style={{ opacity: 0.5, animation: 'blink 1s infinite' }}>|</span>
        </div>
      </div>
      
      {/* Scrolling web page content */}
      <div style={{ 
        height: 'calc(100% - 36px)', 
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{ 
          transform: `translateY(${-scrollY}px)`,
          padding: '16px',
        }}>
          {/* Hero section */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{
              height: '10px',
              background: MIX[0],
              borderRadius: '4px',
              width: '60%',
              marginBottom: '8px',
              opacity: 0.8,
            }} />
            <div style={{ height: '6px', background: 'var(--border-default)', borderRadius: '3px', width: '90%', marginBottom: '4px' }} />
            <div style={{ height: '6px', background: 'var(--border-default)', borderRadius: '3px', width: '75%', marginBottom: '12px' }} />
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ height: '20px', background: MIX[1], borderRadius: '4px', width: '60px', opacity: 0.9 }} />
              <div style={{ height: '20px', background: 'var(--border-subtle)', borderRadius: '4px', width: '50px' }} />
            </div>
          </div>

          {/* Image placeholder */}
          <div style={{ 
            height: '50px', 
            background: `linear-gradient(135deg, ${MIX[2]}33, var(--border-subtle))`,
            borderRadius: '4px', 
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={MIX[2]} strokeWidth="1.5" opacity="0.6">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21,15 16,10 5,21"/>
            </svg>
          </div>

          {/* Feature cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
            {[0, 1, 2, 3].map(i => (
              <div key={i} style={{ 
                background: 'var(--bg-card)', 
                borderRadius: '4px', 
                padding: '10px',
                border: '1px solid var(--border-subtle)',
              }}>
                <div style={{
                  width: '16px',
                  height: '16px',
                  background: MIX[i % 3],
                  borderRadius: '4px',
                  marginBottom: '6px',
                  opacity: 0.7,
                }} />
                <div style={{ height: '5px', background: 'var(--border-default)', borderRadius: '2px', width: '80%', marginBottom: '3px' }} />
                <div style={{ height: '4px', background: 'var(--border-subtle)', borderRadius: '2px', width: '60%' }} />
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '10px 12px', 
            background: 'var(--bg-card)', 
            borderRadius: '4px',
            marginBottom: '16px',
          }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ height: '10px', width: '30px', background: MIX[i % 3], borderRadius: '3px', marginBottom: '4px', opacity: 0.8 }} />
                <div style={{ height: '4px', width: '40px', background: 'var(--border-subtle)', borderRadius: '2px' }} />
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div style={{
            background: `${MIX[1]}15`,
            borderRadius: '4px',
            padding: '12px',
            borderLeft: `3px solid ${MIX[1]}`,
            marginBottom: '16px',
          }}>
            <div style={{ height: '5px', background: 'var(--border-default)', borderRadius: '2px', width: '95%', marginBottom: '4px' }} />
            <div style={{ height: '5px', background: 'var(--border-default)', borderRadius: '2px', width: '80%', marginBottom: '8px' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: MIX[1], opacity: 0.6 }} />
              <div style={{ height: '4px', background: 'var(--border-subtle)', borderRadius: '2px', width: '50px' }} />
            </div>
          </div>

          {/* CTA section */}
          <div style={{ textAlign: 'center', padding: '16px' }}>
            <div style={{ height: '8px', background: 'var(--border-default)', borderRadius: '4px', width: '70%', margin: '0 auto 8px' }} />
            <div style={{ height: '24px', background: MIX[0], borderRadius: '4px', width: '100px', margin: '0 auto', opacity: 0.9 }} />
          </div>

          {/* Footer */}
          <div style={{ 
            borderTop: '1px solid var(--border-subtle)', 
            paddingTop: '12px',
            marginTop: '16px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <div style={{ height: '5px', background: 'var(--border-subtle)', borderRadius: '2px', width: '40px' }} />
              <div style={{ height: '5px', background: 'var(--border-subtle)', borderRadius: '2px', width: '40px' }} />
              <div style={{ height: '5px', background: 'var(--border-subtle)', borderRadius: '2px', width: '40px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Animated Dashboard Mockup - moving boxes
const DashboardMockup = () => {
  const [activeNav, setActiveNav] = useState(0);
  const [cardHeights, setCardHeights] = useState([60, 80, 45]);
  const [barHeights, setBarHeights] = useState([60, 80, 45, 90, 70, 55]);

  useEffect(() => {
    const navInterval = setInterval(() => {
      setActiveNav(prev => (prev + 1) % 4);
    }, 2000);

    const cardInterval = setInterval(() => {
      setCardHeights([
        Math.random() * 40 + 40,
        Math.random() * 40 + 40,
        Math.random() * 40 + 40,
      ]);
    }, 1500);

    const barInterval = setInterval(() => {
      setBarHeights(prev => prev.map(() => Math.random() * 50 + 30));
    }, 800);

    return () => {
      clearInterval(navInterval);
      clearInterval(cardInterval);
      clearInterval(barInterval);
    };
  }, []);
  
  return (
    <div className="mockup-dark" style={{
      background: 'var(--bg-elevated)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      overflow: 'hidden',
      height: `${MOCKUP_HEIGHT}px`,
      display: 'flex',
    }}>
      <div style={{
        width: '40px',
        background: 'var(--bg-card)',
        borderRight: '1px solid var(--border-subtle)',
        padding: '10px 6px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}>
        {[0,1,2,3].map(i => (
          <div key={i} style={{
            width: '100%',
            aspectRatio: '1',
            background: i === activeNav ? MIX[i % 3] : 'var(--border-subtle)',
            borderRadius: '4px',
            opacity: i === activeNav ? 0.85 : 0.4,
            transform: i === activeNav ? 'scale(1.1)' : 'scale(1)',
            transition: 'all 0.3s ease-out',
          }} />
        ))}
      </div>
      <div style={{ flex: 1, padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          {[0,1,2].map((i) => (
            <div key={i} style={{
              flex: 1,
              background: 'var(--bg-card)',
              borderRadius: '4px',
              padding: '10px',
              border: '1px solid var(--border-subtle)',
              transform: `translateY(${i === activeNav % 3 ? -2 : 0}px)`,
              transition: 'transform 0.3s ease-out',
            }}>
              <div style={{
                height: '14px',
                width: `${cardHeights[i]}%`,
                background: MIX[i % 3],
                borderRadius: '4px',
                opacity: 0.6,
                marginBottom: '4px',
                transition: 'width 0.5s ease-out',
              }} />
              <div style={{ height: '6px', width: '80%', background: 'var(--border-default)', borderRadius: '4px' }} />
            </div>
          ))}
        </div>
        <div style={{
          flex: 1,
          background: 'var(--bg-card)',
          borderRadius: '4px',
          border: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-around',
          padding: '12px',
        }}>
          {barHeights.map((h, i) => (
            <div key={i} style={{
              width: '12%',
              height: `${h}%`,
              background: MIX[i % 3],
              borderRadius: '4px 4px 0 0',
              opacity: 0.75,
              transition: 'height 0.5s ease-out',
            }} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Animated Terminal Mockup - typing commands
const TerminalMockup = ({ accent }: { accent: string }) => {
  const [lines, setLines] = useState<{ text: string; color: string }[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  
  const commands = [
    { text: '$ init --model large', color: 'var(--text-muted)', delay: 100 },
    { text: '→ Loading model weights...', color: accent, delay: 50 },
    { text: '✓ Model initialized', color: 'var(--accent-blue)', delay: 0 },
    { text: '$ process --input data.json', color: 'var(--text-muted)', delay: 100 },
    { text: '→ Analyzing 1,247 records...', color: accent, delay: 50 },
    { text: '→ Generating embeddings...', color: accent, delay: 50 },
    { text: '✓ Processing complete (2.3s)', color: 'var(--accent-blue)', delay: 0 },
    { text: '$ query "summarize results"', color: 'var(--text-muted)', delay: 80 },
    { text: '→ Running inference...', color: accent, delay: 50 },
    { text: '✓ Response generated', color: 'var(--accent-blue)', delay: 0 },
    { text: '$ deploy --env production', color: 'var(--text-muted)', delay: 100 },
    { text: '→ Building container...', color: accent, delay: 50 },
    { text: '→ Pushing to registry...', color: accent, delay: 50 },
    { text: '✓ Deployed successfully', color: 'var(--accent-blue)', delay: 0 },
  ];

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let currentLines: { text: string; color: string }[] = [];

    const typeInterval = setInterval(() => {
      const cmd = commands[lineIndex % commands.length];
      
      if (charIndex <= cmd.text.length) {
        setCurrentLine(cmd.text.slice(0, charIndex));
        charIndex++;
      } else {
        currentLines = [...currentLines, { text: cmd.text, color: cmd.color }];
        if (currentLines.length > 6) currentLines = currentLines.slice(1);
        setLines([...currentLines]);
        setCurrentLine('');
        lineIndex++;
        charIndex = 0;
        
        if (lineIndex % commands.length === 0) {
          setTimeout(() => {
            currentLines = [];
            setLines([]);
          }, 2000);
        }
      }
    }, commands[lineIndex % commands.length]?.delay || 100);

    return () => clearInterval(typeInterval);
  }, []);
  
  return (
    <div className="mockup-dark" style={{
      background: 'var(--bg-void)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      overflow: 'hidden',
      height: `${MOCKUP_HEIGHT}px`,
      fontFamily: 'monospace',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{
        padding: '8px 12px',
        background: 'var(--bg-elevated)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
      }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-pink)' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-purple)' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-blue)' }} />
        <span style={{ marginLeft: '12px', fontSize: '10px', color: 'var(--text-muted)' }}>terminal</span>
      </div>
      <div style={{ padding: '12px', fontSize: '10px', lineHeight: 1.6, flex: 1, overflow: 'hidden' }}>
        {lines.map((line, i) => (
          <div key={i} style={{ color: line.color }}>{line.text}</div>
        ))}
        {currentLine && (
          <div style={{ color: commands[lines.length % commands.length]?.color || 'var(--text-muted)' }}>
            {currentLine}<span style={{ opacity: 0.5, animation: 'blink 0.5s infinite' }}>█</span>
          </div>
        )}
        {!currentLine && lines.length === 0 && (
          <div style={{ color: 'var(--text-muted)' }}>$ <span style={{ animation: 'blink 1s infinite' }}>_</span></div>
        )}
      </div>
    </div>
  );
};

// Animated App Mockup - testing/navigation
const AppMockup = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [itemSizes, setItemSizes] = useState([28, 28, 28]);
  const [expandedItem, setExpandedItem] = useState(-1);

  useEffect(() => {
    const clickInterval = setInterval(() => {
      setActiveItem(prev => (prev + 1) % 3);
      setExpandedItem(prev => (prev + 1) % 4 - 1);
    }, 1200);

    const sizeInterval = setInterval(() => {
      setItemSizes([
        Math.random() * 12 + 22,
        Math.random() * 12 + 22,
        Math.random() * 12 + 22,
      ]);
    }, 800);

    return () => {
      clearInterval(clickInterval);
      clearInterval(sizeInterval);
    };
  }, []);
  
  return (
    <div className="mockup-dark" style={{
      background: 'var(--bg-elevated)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      overflow: 'hidden',
      height: `${MOCKUP_HEIGHT}px`,
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{
        padding: '10px 14px',
        background: 'var(--bg-card)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '20px',
            height: '20px',
            background: MIX[0],
            borderRadius: '4px',
            opacity: 0.85,
            animation: 'pulse 2s infinite',
          }} />
          <div style={{ height: '8px', width: '50px', background: 'var(--border-default)', borderRadius: '4px' }} />
        </div>
        <div style={{ 
          width: '20px',
          height: '20px',
          background: activeItem === 2 ? MIX[2] : 'var(--border-subtle)',
          borderRadius: '50%',
          transition: 'background 0.3s ease-out',
        }} />
      </div>
      <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        {[0,1,2].map(i => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: expandedItem === i ? '10px' : '8px',
            background: activeItem === i ? 'var(--bg-base)' : 'var(--bg-card)',
            borderRadius: '4px',
            border: `1px solid ${activeItem === i ? MIX[i % 3] : 'var(--border-subtle)'}`,
            transition: 'all 0.3s ease-out',
            transform: activeItem === i ? 'translateX(3px)' : 'translateX(0)',
          }}>
            <div style={{
              width: `${itemSizes[i]}px`,
              height: `${itemSizes[i]}px`,
              background: MIX[i % 3],
              borderRadius: '4px', 
              opacity: 0.4 + (activeItem === i ? 0.4 : 0),
              transition: 'all 0.3s ease-out',
              flexShrink: 0,
            }} />
            <div style={{ flex: 1 }}>
              <div style={{ 
                height: '6px', 
                width: activeItem === i ? '80%' : '70%', 
                background: 'var(--border-default)', 
                borderRadius: '4px', 
                marginBottom: '4px',
                transition: 'width 0.3s ease-out',
              }} />
              <div style={{ 
                height: '5px', 
                width: expandedItem === i ? '60%' : '50%', 
                background: 'var(--border-subtle)', 
                borderRadius: '4px',
                transition: 'width 0.3s ease-out',
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// A small skeleton line
const SkelLine = ({ w, c = 'var(--border-default)', h = 5 }: { w: string; c?: string; h?: number }) => (
  <div style={{ height: `${h}px`, width: w, background: c, borderRadius: '2px' }} />
);

// A single mobile-shaped screen (no device frame) showing one app page
const AppScreen = ({ children, activeTab, color }: { children: React.ReactNode; activeTab: number; color: string }) => (
  <div style={{
    flex: '0 1 100px',
    maxWidth: '106px',
    height: '196px',
    background: 'var(--bg-base)',
    borderRadius: '16px',
    border: '1px solid var(--border-subtle)',
    boxShadow: 'var(--shadow-sm)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    padding: '11px 8px 8px',
    gap: '6px',
  }}>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {children}
    </div>
    {/* Tab bar - active tab differs per screen to signal different pages */}
    <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '7px', borderTop: '1px solid var(--border-subtle)' }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          width: '9px',
          height: '9px',
          borderRadius: '3px',
          background: i === activeTab ? color : 'var(--border-default)',
          opacity: i === activeTab ? 1 : 0.5,
          transition: 'background 0.3s ease-out',
        }} />
      ))}
    </div>
  </div>
);

// Animated Screens Mockup - four mobile screens, each a different app page with subtle motion
const ScreensMockup = () => {
  const [bars, setBars] = useState([55, 80, 45, 70]);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const barInterval = setInterval(() => setBars(bs => bs.map(() => 35 + Math.random() * 55)), 1100);
    const tickInterval = setInterval(() => setTick(t => t + 1), 1400);
    return () => { clearInterval(barInterval); clearInterval(tickInterval); };
  }, []);

  const [blue, purple, pink] = MIX;
  const activeRow = tick % 3;
  const progressW = ['48%', '72%', '58%', '84%'][tick % 4];
  const typingDot = tick % 3;

  return (
    <div className="mockup-dark" style={{
      height: `${MOCKUP_HEIGHT}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      padding: '0 8px',
      background: 'var(--bg-elevated)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-subtle)',
      overflow: 'hidden',
    }}>
      {/* Screen 1 - Feed / Home (blue) */}
      <AppScreen activeTab={0} color={blue}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <SkelLine w="32px" c="var(--text-primary)" h={7} />
          <div style={{ width: '13px', height: '13px', borderRadius: '50%', background: blue, opacity: 0.9 }} />
        </div>
        <div style={{ height: '38px', borderRadius: 'var(--radius-md)', background: `linear-gradient(135deg, ${blue}, ${purple})` }} />
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '3px',
            margin: '-3px',
            borderRadius: 'var(--radius-sm)',
            background: i === activeRow ? `${blue}14` : 'transparent',
            transition: 'background 0.4s ease-out',
          }}>
            <div style={{ width: '15px', height: '15px', borderRadius: 'var(--radius-sm)', background: i === activeRow ? blue : 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)', opacity: i === activeRow ? 0.85 : 1, transition: 'all 0.4s ease-out' }} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div style={{ height: '5px', width: i === activeRow ? '90%' : '80%', background: 'var(--border-default)', borderRadius: '2px', transition: 'width 0.4s ease-out' }} />
              <SkelLine w="55%" c="var(--border-subtle)" h={4} />
            </div>
          </div>
        ))}
      </AppScreen>

      {/* Screen 2 - Dashboard / Stats (purple) */}
      <AppScreen activeTab={1} color={purple}>
        <SkelLine w="44px" c="var(--text-primary)" h={7} />
        <div style={{ display: 'flex', gap: '6px' }}>
          {[blue, pink].map((c, i) => (
            <div key={i} style={{ flex: 1, padding: '7px', background: 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <SkelLine w="60%" c={c} h={7} />
              <SkelLine w="80%" c="var(--border-subtle)" h={4} />
            </div>
          ))}
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '5px', padding: '6px', background: 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
          {bars.map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, background: MIX[i % 3], opacity: 0.8, borderRadius: '2px 2px 0 0', transition: 'height 0.6s ease-out' }} />
          ))}
        </div>
      </AppScreen>

      {/* Screen 3 - Profile / Progress (pink) */}
      <AppScreen activeTab={2} color={pink}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', paddingTop: '2px' }}>
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: `linear-gradient(135deg, ${pink}, ${purple})` }} />
          <SkelLine w="50px" c="var(--text-primary)" h={6} />
          <SkelLine w="32px" c="var(--border-subtle)" h={4} />
        </div>
        <div style={{ padding: '8px', background: 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <SkelLine w="85%" />
          {/* Animated progress bar */}
          <div style={{ height: '5px', width: '100%', background: 'var(--border-subtle)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: progressW, background: pink, borderRadius: '3px', transition: 'width 0.6s ease-out' }} />
          </div>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ height: '20px', borderRadius: 'var(--radius-md)', background: pink, opacity: 0.9 }} />
      </AppScreen>

      {/* Screen 4 - Chat / Messages (purple) */}
      <AppScreen activeTab={1} color={purple}>
        <SkelLine w="40px" c="var(--text-primary)" h={7} />
        {/* Incoming bubble */}
        <div style={{ alignSelf: 'flex-start', maxWidth: '78%', padding: '6px 8px', background: 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)', borderRadius: '8px 8px 8px 2px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <SkelLine w="46px" c="var(--border-default)" h={4} />
          <SkelLine w="30px" c="var(--border-subtle)" h={4} />
        </div>
        {/* Outgoing bubble */}
        <div style={{ alignSelf: 'flex-end', maxWidth: '78%', padding: '6px 8px', background: `linear-gradient(135deg, ${blue}, ${purple})`, borderRadius: '8px 8px 2px 8px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <div style={{ height: '4px', width: '40px', background: 'rgba(255,255,255,0.85)', borderRadius: '2px' }} />
          <div style={{ height: '4px', width: '26px', background: 'rgba(255,255,255,0.6)', borderRadius: '2px' }} />
        </div>
        <div style={{ flex: 1 }} />
        {/* Typing indicator */}
        <div style={{ alignSelf: 'flex-start', display: 'flex', gap: '4px', padding: '6px 8px', background: 'var(--bg-card-hover)', border: '1px solid var(--border-subtle)', borderRadius: '8px' }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              background: i === typingDot ? purple : 'var(--border-default)',
              opacity: i === typingDot ? 1 : 0.5,
              transition: 'all 0.3s ease-out',
            }} />
          ))}
        </div>
      </AppScreen>
    </div>
  );
};

const getMockup = (type: string, accent: string) => {
  switch (type) {
    case 'browser': return <BrowserMockup />;
    case 'dashboard': return <DashboardMockup />;
    case 'terminal': return <TerminalMockup accent={accent} />;
    case 'app': return <AppMockup />;
    case 'screens': return <ScreensMockup />;
    default: return <BrowserMockup />;
  }
};

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [centerProgress, setCenterProgress] = useState(0);
  const isLeftAligned = index % 2 === 0;

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

  const scale = 1 + (centerProgress * 0.06);
  const opacity = 0.7 + (centerProgress * 0.3);

  return (
    <div 
      ref={cardRef}
      className="service-card-wrapper"
      style={{
        opacity: opacity,
        transition: 'opacity 0.2s ease-out',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-2)',
      }}
    >
      <div
        className="service-zoom-container"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          transition: 'transform 0.2s ease-out',
          borderRadius: 'var(--radius-lg)',
        }}
      >
        {/* Horizontal accent line */}
        <div 
          className={`service-accent-line ${index % 2 === 0 ? 'service-accent-left' : 'service-accent-right'}`}
          style={{
            width: '50px',
            height: '3px',
            background: service.accent,
            borderRadius: '2px',
            marginBottom: 'var(--space-4)',
            marginLeft: isLeftAligned ? 'var(--space-4)' : 'auto',
            marginRight: isLeftAligned ? 'auto' : 'var(--space-4)',
          }}
        />
        
        <div
          className="service-grid"
          style={{
            alignItems: 'center',
          }}
        >
          {/* Content */}
          <div 
            className={`service-content ${index % 2 === 0 ? 'service-content-left' : 'service-content-right'}`}
            style={{
              order: isLeftAligned ? 1 : 3,
              textAlign: isLeftAligned ? 'left' : 'right',
              padding: 'var(--space-4)',
            }}
          >
            <h3
              className="mobile-heading-sub"
              style={{
                fontSize: 'var(--font-h2)',
                fontWeight: 'var(--weight-bold)',
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-3)',
              }}
            >
              {service.title}
            </h3>
            <p 
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'var(--font-body)',
                lineHeight: 'var(--leading-relaxed)',
                marginBottom: 'var(--space-5)',
              }}
            >
              {service.description}
            </p>
            <div 
              className={`service-tags ${index % 2 === 0 ? 'service-tags-left' : 'service-tags-right'}`}
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 'var(--space-2)',
                justifyContent: isLeftAligned ? 'flex-start' : 'flex-end',
              }}
            >
              {service.features.map((feature, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '10px',
                    fontWeight: 'var(--weight-semibold)',
                    letterSpacing: '0.05em',
                    color: 'var(--text-muted)',
                    background: 'var(--bg-elevated)',
                    padding: '6px 10px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Gap column */}
          <div className="service-gap" style={{ order: 2 }} />

          {/* Mockup */}
          <div className="service-mockup" style={{ order: isLeftAligned ? 3 : 1 }}>
            {getMockup(service.mockupType, service.accent)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section 
      id="services" 
      className="section"
      style={{ backgroundColor: 'var(--bg-base)' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <p className="section-label">For Clients</p>
          <h2 className="section-title mobile-heading-large">What We Build</h2>
          <p className="section-subtitle">
            Premium software and AI-powered solutions that scale.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)', maxWidth: '1100px', margin: '0 auto' }}>
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .service-grid {
          display: grid;
          grid-template-columns: 1fr var(--space-10) 1fr;
        }
        @media (max-width: 768px) {
          .service-card-wrapper {
            padding: 0 !important;
          }
          .service-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: var(--space-6) !important;
          }
          .service-gap {
            display: none !important;
          }
          .service-content {
            order: 1 !important;
            padding: 0 !important;
          }
          .service-content-left {
            text-align: left !important;
          }
          .service-content-right {
            text-align: right !important;
          }
          .service-mockup {
            order: 2 !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 auto !important;
          }
          .service-tags-left {
            justify-content: flex-start !important;
          }
          .service-tags-right {
            justify-content: flex-end !important;
          }
          .service-accent-left {
            margin-left: 0 !important;
            margin-right: auto !important;
          }
          .service-accent-right {
            margin-left: auto !important;
            margin-right: 0 !important;
          }
          .service-zoom-container {
            transform: none !important;
          }
          .mobile-heading-large {
            font-size: calc(var(--font-h2) * 2) !important;
            line-height: var(--leading-tight) !important;
            color: #fafafa !important;
          }
          .mobile-heading-sub {
            font-size: calc(var(--font-h2) * 1.35) !important;
            line-height: var(--leading-tight) !important;
            color: #fafafa !important;
          }
        }
      `}</style>
    </section>
  );
}
