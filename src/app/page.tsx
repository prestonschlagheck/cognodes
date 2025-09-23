"use client";

import Link from 'next/link';
import { ArrowRight, Bot, Mail, Calendar, MessageSquare, Clock, Zap, DollarSign, Users, Shield, CheckCircle, Star, Phone, Headphones, BarChart3, Settings, ChevronDown, CalendarDays, Workflow, Code } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const words = ['efficient', 'automated', 'money'];
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing effect
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        } else {
          // Wait before starting to delete - ensure word is fully typed
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting effect
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // Move to next word - ensure word is fully deleted
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 100 : 150); // Consistent timing
    
    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting]);
  
  const features = [
    {
      icon: Phone,
      title: "Automated Quote Generator",
      description: "Generate accurate quotes instantly based on customer needs and your pricing structure."
    },
    {
      icon: Bot,
      title: "Customer Engagement & Follow-Up",
      description: "Automated reviews, reservation follow-ups, and customer satisfaction tracking."
    },
    {
      icon: Mail,
      title: "Smart Email Assistant",
      description: "Intelligent email management with automated responses and personalized communication."
    },
    {
      icon: Phone,
      title: "After-Hours Receptionist",
      description: "24/7 AI receptionist that handles calls when you're unavailable."
    },
    {
      icon: Bot,
      title: "Website Chatbot",
      description: "Advanced chatbot with database access for comprehensive customer support."
    },
    {
      icon: Phone,
      title: "AI Receptionist",
      description: "Live and after-hours receptionist service for seamless customer experience."
    },
    {
      icon: Calendar,
      title: "Appointment & Scheduling Assistant",
      description: "Automated scheduling with calendar integration and reminder systems."
    },
    {
      icon: Settings,
      title: "Custom Websites & Agents",
      description: "Tailored website solutions and AI agents designed for your specific business needs."
    }
  ];

  const workflowSteps = [
    { icon: Phone, title: "Incoming Call", description: "Customer calls your business" },
    { icon: Bot, title: "AI Answers", description: "Our AI receptionist answers instantly" },
    { icon: Settings, title: "Smart Routing", description: "Calls are intelligently routed" },
    { icon: Calendar, title: "Appointment Set", description: "Meetings are scheduled automatically" },
    { icon: Mail, title: "Follow-up", description: "Automated follow-up sequences" }
  ];

  const faqs = [
    {
      question: "How can AI automation specifically address the unique challenges of my business?",
      answer: "Our AI solutions are tailored to your specific industry and business model. We analyze your current processes and implement automation that directly addresses your pain points, whether it's lead generation, customer service, or appointment scheduling."
    },
    {
      question: "What measurable improvements can we expect in customer engagement and satisfaction?",
      answer: "Our clients typically see a 75% increase in response time, 98% customer satisfaction rate, and 24/7 availability that ensures no customer inquiry goes unanswered. We provide detailed analytics to track these improvements."
    },
    {
      question: "How does the implementation of AI voice agents and chatbots integrate with our current systems?",
      answer: "Our AI solutions seamlessly integrate with your existing CRM, calendar systems, and business tools. We handle all technical integration and provide training to ensure smooth operation with your current workflow."
    },
    {
      question: "How scalable is the AI solution to accommodate future growth or changes in business needs?",
      answer: "Our AI solutions are designed to scale with your business. As you grow, we can easily add more agents, expand capabilities, and adjust the system to meet your evolving needs without disrupting your operations."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CogNodes",
    "url": "https://cognodes.com",
    "logo": "https://cognodes.com/logos/CN-W_B-Full.png",
    "description": "AI-powered business automation solutions that help service-based businesses optimize workflows and increase revenue through intelligent automation.",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "cognodes@gmail.com",
      "contactType": "customer service"
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0d133b' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section with Typing Effect */}
      <section className="relative pt-52 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text and buttons */}
            <div className="text-left relative z-10">
              <h1 className="heading-1 text-white mb-6">
                Make your business more{' '}
                <span className="text-cn-blue-400">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mb-8">
                Focus on growing your business, while our<br />AI Receptionist & Sales Agent handle<br />inbound and outbound calls.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:cognodes@gmail.com"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="mailto:cognodes@gmail.com"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Book a Call
                  <Phone className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative lg:col-span-1 flex items-center justify-center">
              <div className="relative w-full max-w-lg h-full flex items-center justify-center">
                <div className="relative">
                  <img
                    src="/CogNodes Graphics.png"
                    alt="CogNodes Dashboard Graphics"
                    className="w-full h-auto max-h-[800px] object-contain"
                    style={{ 
                      transform: 'scale(2.024) translateX(-5%) translateX(-10px)',
                    }}
                  />
                  {/* Bottom gradient fade overlay - positioned directly on the image */}
                  <div 
                    className="absolute left-0 right-0 h-32 bg-gradient-to-t from-cn-navy-900 to-transparent pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, var(--cn-navy-900), transparent)',
                      bottom: '-100px',
                      transform: 'scale(2.024) translateX(-5%) translateX(-10px)',
                      transformOrigin: 'bottom center'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-7xl mx-auto relative">
          {/* Left gradient fade - positioned at outer edge of content boundaries */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ 
            background: 'linear-gradient(to right, var(--cn-navy-900), transparent)',
            left: '-32px'
          }}></div>
          
          {/* Right gradient fade - positioned at outer edge of content boundaries */}
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ 
            background: 'linear-gradient(to left, var(--cn-navy-900), transparent)',
            right: '-32px'
          }}></div>
          
          <div className="relative overflow-hidden">
            <div className="animate-marquee">
              {/* First set of features */}
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                const brandColors = ['bg-cn-blue-400', 'bg-cn-pink-400', 'bg-cn-lavender-400', 'bg-cn-slate-600'];
                const hoverColors = ['group-hover:bg-cn-pink-400', 'group-hover:bg-cn-lavender-400', 'group-hover:bg-cn-blue-400', 'group-hover:bg-cn-pink-400'];
                const colorClass = brandColors[index % brandColors.length];
                const hoverClass = hoverColors[index % hoverColors.length];
                
                return (
                  <div key={`first-${index}`} className="group hover:scale-105 transition-transform duration-300 border border-gray-600/30 flex-shrink-0 w-64 mx-2 p-6 rounded-xl shadow-2xl backdrop-blur-sm" style={{ backgroundColor: '#0e143e' }}>
                    <div className={`w-12 h-12 ${colorClass} rounded-xl flex items-center justify-center mb-4 ${hoverClass} transition-colors`}>
                      <IconComponent className="w-6 h-6 text-cn-navy-900" />
                    </div>
                    <h3 className="heading-4 text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-base">{feature.description}</p>
                  </div>
                );
              })}
              {/* Second set of features for seamless loop */}
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                const brandColors = ['bg-cn-blue-400', 'bg-cn-pink-400', 'bg-cn-lavender-400', 'bg-cn-slate-600'];
                const hoverColors = ['group-hover:bg-cn-pink-400', 'group-hover:bg-cn-lavender-400', 'group-hover:bg-cn-blue-400', 'group-hover:bg-cn-pink-400'];
                const colorClass = brandColors[index % brandColors.length];
                const hoverClass = hoverColors[index % hoverColors.length];
                
                return (
                  <div key={`second-${index}`} className="group hover:scale-105 transition-transform duration-300 border border-gray-600/30 flex-shrink-0 w-64 mx-2 p-6 rounded-xl shadow-2xl backdrop-blur-sm" style={{ backgroundColor: '#0e143e' }}>
                    <div className={`w-12 h-12 ${colorClass} rounded-xl flex items-center justify-center mb-4 ${hoverClass} transition-colors`}>
                      <IconComponent className="w-6 h-6 text-cn-navy-900" />
                    </div>
                    <h3 className="heading-4 text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 text-base">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Desktop & Phoner Image with Text */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-7xl mx-auto">
          {/* Centered Title */}
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <h2 className="heading-1 text-white">
              Visualize your success.
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Image - Left 2/3 */}
            <div className="relative lg:col-span-2">
              <img
                src="/Logos/CogNodes Graphics (3).png"
                alt="CogNodes Graphics"
                className="w-full h-auto object-cover rounded-2xl"
                style={{ 
                  objectPosition: 'center',
                  transform: 'translateX(5%) translateX(-70px) scale(2.1) translateY(40px)'
                }}
              />
            </div>
            
            {/* Text - Right 1/3 */}
            <div className="text-left relative z-10 lg:col-span-1" style={{ marginLeft: '20px', marginTop: '60px' }}>
              <p className="text-lg text-gray-300 mb-6">
                Unlike competitors who offer generic solutions, we provide a truly personalized dashboard that adapts to your specific business needs. Your dashboard tracks every agent&apos;s performance, showing real-time impact on your business growth and customer satisfaction metrics.
              </p>
              <a
                href="https://cognodes-dashboard.vercel.app/websites"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                Explore the dashboard
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="pt-48 pb-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-white mb-6">Perfect Workflow for Your Business</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See exactly how our AI automation works with this visual workflow
            </p>
          </div>
        
        {/* Enhanced Workflow Diagram */}
        <div className="rounded-2xl p-8 border border-gray-600/30 mb-12 backdrop-blur-sm" style={{ 
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          backgroundColor: '#0e143e'
        }}>
          <div className="text-center mb-8">
            <h3 className="heading-3 text-white mb-2">Complete AI Workflow Process</h3>
            <p className="text-gray-400">From initial contact to service completion - see exactly how our AI handles every step</p>
          </div>
          
          {/* Main Workflow Flow */}
          <div className="relative mb-12">
            
            {/* Main Workflow Steps */}
            <div className="grid grid-cols-4 gap-6 items-center">
              {/* 1. Customer Initiates Contact */}
              <div className="text-center">
                <div className="w-24 h-24 bg-cn-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <Phone className="w-12 h-12 text-cn-navy-900" />
                </div>
                <h4 className="heading-4 text-white mb-2">1. Customer Initiates</h4>
                <p className="text-gray-300 text-base mb-2">Call, email, or website visit</p>
              </div>
              
              {/* 2. AI Instantly Responds */}
              <div className="text-center">
                <div className="w-24 h-24 bg-cn-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <Bot className="w-12 h-12 text-cn-navy-900" />
                </div>
                <h4 className="heading-4 text-white mb-2">2. AI Instantly Responds</h4>
                <p className="text-gray-300 text-base mb-2">Qualifies lead & gathers info</p>
              </div>
              
              {/* 3. Smart Processing & Integration */}
              <div className="text-center">
                <div className="w-24 h-24 bg-cn-lavender-400 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <Settings className="w-12 h-12 text-cn-navy-900" />
                </div>
                <h4 className="heading-4 text-white mb-2">3. Smart Processing</h4>
                <p className="text-gray-300 text-base mb-2">Route, price, & schedule</p>
              </div>
              
              {/* 4. Service Delivered */}
              <div className="text-center">
                <div className="w-24 h-24 bg-cn-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  <CheckCircle className="w-12 h-12 text-cn-navy-900" />
                </div>
                <h4 className="heading-4 text-white mb-2">4. Service Delivered</h4>
                <p className="text-gray-300 text-base mb-2">Complete & automated follow-up</p>
              </div>
            </div>
            
            {/* Integration Examples */}
            <div className="mt-8">
              <h4 className="heading-3 text-white text-center mb-8">Services we integrate/automate with</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center rounded-xl p-4 border border-gray-600/30 backdrop-blur-sm" style={{ 
                  backgroundColor: '#0e143e'
                }}>
                  <div className="w-12 h-12 bg-cn-blue-400 rounded-xl flex items-center justify-center mx-auto mb-3 relative z-10">
                    <CalendarDays className="w-6 h-6 text-cn-navy-900" />
                  </div>
                  <h5 className="heading-5 text-white mb-1">Calendly</h5>
                </div>
                
                <div className="text-center rounded-xl p-4 border border-gray-600/30 backdrop-blur-sm" style={{ 
                  backgroundColor: '#0e143e'
                }}>
                  <div className="w-12 h-12 bg-cn-pink-400 rounded-xl flex items-center justify-center mx-auto mb-3 relative z-10">
                    <Calendar className="w-6 h-6 text-cn-navy-900" />
                  </div>
                  <h5 className="heading-5 text-white mb-1">Google Calendar</h5>
                </div>
                
                <div className="text-center rounded-xl p-4 border border-gray-600/30 backdrop-blur-sm" style={{ 
                  backgroundColor: '#0e143e'
                }}>
                  <div className="w-12 h-12 bg-cn-lavender-400 rounded-xl flex items-center justify-center mx-auto mb-3 relative z-10">
                    <Mail className="w-6 h-6 text-cn-navy-900" />
                  </div>
                  <h5 className="heading-5 text-white mb-1">Gmail</h5>
                </div>
                
                <div className="text-center rounded-xl p-4 border border-gray-600/30 backdrop-blur-sm" style={{ 
                  backgroundColor: '#0e143e'
                }}>
                  <div className="w-12 h-12 bg-cn-slate-600 rounded-xl flex items-center justify-center mx-auto mb-3 relative z-10">
                    <Workflow className="w-6 h-6 text-cn-gray-300" />
                  </div>
                  <h5 className="heading-5 text-white mb-1">n8n</h5>
                </div>
                
                <div className="text-center rounded-xl p-4 border border-gray-600/30 backdrop-blur-sm" style={{ 
                  backgroundColor: '#0e143e'
                }}>
                  <div className="w-12 h-12 bg-cn-blue-400 rounded-xl flex items-center justify-center mx-auto mb-3 relative z-10">
                    <Code className="w-6 h-6 text-cn-navy-900" />
                  </div>
                  <h5 className="heading-5 text-white mb-1">Cursor</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* AI vs Traditional Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-white mb-6">
              CogNodes AI vs. Traditional Hiring
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See why AI automation is the smarter choice for modern businesses
            </p>
          </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8 border border-gray-600/30 backdrop-blur-sm" style={{ 
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            backgroundColor: '#0e143e'
          }}>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-cn-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-cn-navy-900" />
              </div>
              <h3 className="heading-3 text-white">CogNodes AI</h3>
              <p className="text-gray-400 mt-2">The future of customer service</p>
            </div>
            <div className="space-y-4">
              {[
                "24/7, never off duty",
                "Instant replies, no hold time", 
                "Low cost, no salaries or training",
                "Handles unlimited calls",
                "100% accurate, no mood swings"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-cn-blue-400" />
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-2xl p-8 border border-gray-600/30 backdrop-blur-sm" style={{ 
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            backgroundColor: '#0e143e'
          }}>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-cn-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-cn-gray-300" />
              </div>
              <h3 className="heading-3 text-white">Traditional</h3>
              <p className="text-gray-400 mt-2">Outdated hiring methods</p>
            </div>
            <div className="space-y-4">
              {[
                "Limited to business hours",
                "Customers wait on hold",
                "High cost, salaries + overhead",
                "Limited by team size",
                "Varies by employee"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full border-2 border-red-400 flex items-center justify-center">
                    <span className="text-red-400 text-sm">×</span>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-white mb-6">What Our Clients Say</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from businesses that have transformed their operations with CogNodes AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="rounded-2xl p-8 border border-gray-600/30 backdrop-blur-sm" style={{ 
              backgroundColor: '#0e143e'
            }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cn-blue-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-cn-navy-900 font-bold text-lg">JS</span>
                </div>
                <div>
                  <h4 className="heading-5 text-white">John Smith</h4>
                  <p className="text-gray-400 text-sm">CEO, TechSolutions Inc.</p>
                </div>
              </div>
            <p className="text-gray-300 text-base mb-4">
              &ldquo;CogNodes AI has revolutionized our customer service. We&apos;ve seen a 300% increase in response time and our customers love the instant, accurate responses. Revenue is up 40% since implementation.&rdquo;
            </p>
              <div className="flex text-cn-blue-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-2xl p-8 border border-gray-600/30 backdrop-blur-sm" style={{ 
              backgroundColor: '#0e143e'
            }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cn-pink-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-cn-navy-900 font-bold text-lg">MJ</span>
                </div>
                <div>
                  <h4 className="heading-5 text-white">Maria Johnson</h4>
                  <p className="text-gray-400 text-sm">Owner, Elite Services</p>
                </div>
              </div>
            <p className="text-gray-300 text-base mb-4">
              &ldquo;The appointment scheduling feature alone has saved us 15 hours per week. Our no-show rate dropped from 25% to 8% thanks to automated reminders. This is a game-changer.&rdquo;
            </p>
              <div className="flex text-cn-pink-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-2xl p-8 border border-gray-600/30 backdrop-blur-sm" style={{ 
              backgroundColor: '#0e143e'
            }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cn-lavender-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-cn-navy-900 font-bold text-lg">RD</span>
                </div>
                <div>
                  <h4 className="heading-5 text-white">Robert Davis</h4>
                  <p className="text-gray-400 text-sm">Founder, Davis Consulting</p>
                </div>
              </div>
            <p className="text-gray-300 text-base mb-4">
              &ldquo;The AI receptionist handles our after-hours calls perfectly. We never miss a lead anymore, and the quote generation feature has streamlined our entire sales process.&rdquo;
            </p>
              <div className="flex text-cn-lavender-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Case Study Highlight */}
          <div className="mt-16 rounded-2xl p-8 border border-gray-600/30 backdrop-blur-sm" style={{ 
            backgroundColor: '#0e143e'
          }}>
            <div className="text-center mb-8">
              <h3 className="heading-3 text-white mb-4">Case Study: Local HVAC Company</h3>
              <p className="text-lg text-gray-300">How we helped ABC Heating & Cooling increase revenue by 60%</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cn-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-cn-navy-900 font-bold text-2xl">60%</span>
                </div>
                <h4 className="heading-5 text-white mb-2">Revenue Increase</h4>
                <p className="text-gray-400 text-sm">Within 6 months of implementation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cn-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-cn-navy-900 font-bold text-2xl">24/7</span>
                </div>
                <h4 className="heading-5 text-white mb-2">Availability</h4>
                <p className="text-gray-400 text-sm">Never miss another lead</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cn-lavender-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-cn-navy-900 font-bold text-2xl">85%</span>
                </div>
                <h4 className="heading-5 text-white mb-2">Time Saved</h4>
                <p className="text-gray-400 text-sm">On administrative tasks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-white mb-6">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business. No hidden fees, no surprises.
            </p>
          </div>
          
        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="rounded-2xl p-8 border border-gray-600/30 backdrop-blur-sm flex flex-col" style={{ 
            backgroundColor: '#0e143e'
          }}>
            <div className="text-center mb-8">
              <h3 className="heading-3 text-white mb-2">Starter</h3>
              <p className="text-gray-400 mb-6">Perfect for small businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$XXX</span>
                <span className="text-gray-400">/month</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-cn-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">AI Receptionist (100 calls/month)</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-cn-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Basic Website Chatbot</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-cn-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Email Automation (500 emails/month)</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-cn-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Basic Appointment Scheduling</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-cn-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Email Support</span>
              </li>
            </ul>
            
            <a href="mailto:cognodes@gmail.com" className="btn-secondary w-full text-center block mt-auto">
              Get Started
            </a>
          </div>

          {/* Professional Plan */}
          <div className="rounded-2xl p-8 border-2 border-cn-blue-400 backdrop-blur-sm relative flex flex-col" style={{ 
            backgroundColor: '#0e143e'
          }}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-cn-blue-400 text-cn-navy-900 px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="heading-3 text-white mb-2">Professional</h3>
              <p className="text-gray-400 mb-6">Ideal for growing businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$XXX</span>
                <span className="text-gray-400">/month</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-cn-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">AI Receptionist (500 calls/month)</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-cn-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Advanced Website Chatbot</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-cn-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Email Automation (2000 emails/month)</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-cn-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Advanced Appointment Scheduling</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-cn-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Automated Quote Generation</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-cn-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Priority Support</span>
              </li>
            </ul>
            
            <a href="mailto:cognodes@gmail.com" className="btn-primary w-full text-center block mt-auto">
              Get Started
            </a>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-2xl p-8 border border-gray-600/30 backdrop-blur-sm flex flex-col" style={{ 
            backgroundColor: '#0e143e'
          }}>
            <div className="text-center mb-8">
              <h3 className="heading-3 text-white mb-2">Enterprise</h3>
              <p className="text-gray-400 mb-6">For large businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$XXX</span>
                <span className="text-gray-400">/month</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-cn-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Unlimited AI Receptionist Calls</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-cn-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Custom Website & Agents</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-cn-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Unlimited Email Automation</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-cn-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Advanced Analytics Dashboard</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-cn-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">Dedicated Account Manager</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-cn-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-300">24/7 Phone Support</span>
              </li>
            </ul>
            
            <a href="mailto:cognodes@gmail.com" className="btn-secondary w-full text-center block mt-auto">
              Contact Sales
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-white mb-6">Questions You May Have</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Get answers to the most common questions about our AI automation solutions
            </p>
          </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl border border-gray-600/30 backdrop-blur-sm" style={{ 
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              backgroundColor: '#0e143e'
            }}>
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-cn-navy-900 transition-colors rounded-2xl"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <span className="heading-4 text-white pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-cn-blue-400 transition-transform flex-shrink-0 ${
                    expandedFaq === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {expandedFaq === index && (
                <div className="px-8 pb-8 pt-2">
                  <p className="text-gray-300 text-lg leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="heading-1 text-white mb-6">
            Let&apos;s Talk.<br />
            Book a Free Consultation
          </h2>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to transform your business with AI automation? Get started with a free consultation today.
          </p>
          
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-cn-blue-400 rounded-full"></div>
              <div className="w-3 h-3 bg-cn-pink-400 rounded-full"></div>
              <div className="w-3 h-3 bg-cn-lavender-400 rounded-full"></div>
              <div className="w-3 h-3 bg-cn-blue-400 rounded-full"></div>
            </div>
          </div>
          
          <a
            href="mailto:cognodes@gmail.com"
            className="btn-primary inline-flex items-center justify-center text-lg px-8 py-4"
          >
            Book a Call
            <ArrowRight className="ml-2 w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}