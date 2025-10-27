"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Bot, Mail, Calendar, MessageSquare, Clock, Zap, DollarSign, Users, Shield, CheckCircle, Star, Phone, Headphones, BarChart3, Settings, ChevronDown, CalendarDays, Workflow, Code } from 'lucide-react';
import { useState, useEffect } from 'react';
import SavingsAssessment from './components/SavingsAssessment';

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
      title: "24/7 AI Receptionist",
      description: "Never miss a revenue opportunity. Answer every call instantly, qualify leads, and book appointments 24/7."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling & Appointments",
      description: "Eliminate scheduling back-and-forth. Customers book instantly while you focus on serving them."
    },
    {
      icon: Bot,
      title: "Intelligent Lead Qualification",
      description: "Stop wasting time on unqualified leads. Our AI identifies high-value prospects automatically."
    },
    {
      icon: Mail,
      title: "Automated Email & Follow-Ups",
      description: "Recover lost revenue from forgotten follow-ups. Every lead gets timely, personalized responses."
    },
    {
      icon: Phone,
      title: "Instant Quote Generation",
      description: "Close deals faster. Provide accurate pricing immediately while competitors make customers wait."
    },
    {
      icon: Bot,
      title: "Website Chat Assistant",
      description: "Convert more visitors into customers. Engage prospects instantly with answers they need to buy."
    },
    {
      icon: Zap,
      title: "Customer Satisfaction Tracking",
      description: "Build loyalty automatically. Gather feedback and resolve issues before they become problems."
    },
    {
      icon: Settings,
      title: "Custom Automation Solutions",
      description: "Scale without hiring. We build AI agents tailored to your unique business workflows."
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
      question: "What exactly does CogNodes do for my business?",
      answer: "We automate your business operations using AI-powered voice agents and chatbots. Our solutions handle customer inquiries, book appointments, manage workflows, and provide 24/7 support. This helps you save time and resources while improving customer experience."
    },
    {
      question: "How do you ensure the AI provides accurate and reliable service?",
      answer: "We monitor performance continuously, use intelligent fallback systems, and provide real-time analytics to constantly improve responses. Our AI is trained on your specific business data and continuously optimized to ensure smooth, accurate interactions."
    },
    {
      question: "Do I need to change my existing phone system or CRM?",
      answer: "Not at all. We integrate seamlessly with most major phone systems, CRMs, and business tools you already use. Our goal is a smooth implementation that enhances your current workflows without disruption."
    },
    {
      question: "What are your pricing options?",
      answer: "Our pricing is flexible and based on call volume, features, and customization needs. Most clients find they pay significantly less than hiring a full-time employee while getting 24/7 coverage, increased efficiency, and comprehensive support."
    },
    {
      question: "What kind of return on investment can I expect and how quickly?",
      answer: "Clients typically see positive ROI within the first month through reduced missed calls, increased bookings, and improved operational efficiency. The exact ROI depends on your business needs and implementation timeline, but most see measurable improvements immediately."
    },
    {
      question: "What kind of support and training do you provide?",
      answer: "We provide comprehensive support throughout your journey, from initial setup to ongoing optimization. You'll receive detailed performance reports, regular system adjustments, and continuous support to ensure everything runs smoothly for your business."
    },
    {
      question: "Can I customize the AI to match my brand voice and style?",
      answer: "Absolutely! We tailor the AI's tone, script style, and conversation flow to reflect your unique brand identity. Whether it's voice preferences for phone interactions or messaging style for chatbots, customization ensures your AI represents your business authentically."
    },
    {
      question: "What if I want to scale back or return to human-only service?",
      answer: "You maintain complete control over your AI implementation. You can scale usage up or down as needed, route specific calls back to humans when required, or adjust the system to match your business preferences. We offer full flexibility to adapt to your changing needs."
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
      <section className="relative pt-32 sm:pt-40 lg:pt-52 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden overflow-y-visible" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Text (no buttons on mobile) */}
            <div className="text-left relative z-10 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-6">
                Make your business more{' '}
                <span className="text-cn-blue-400">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mb-2 sm:mb-8">
                Focus on growing your business while our<br className="hidden sm:block" />intelligent AI agents automate the repetitive<br className="hidden sm:block" />tasks that slow you down.
              </p>
              {/* Buttons shown on desktop only */}
              <div className="hidden lg:flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/solution-finder"
                  className="btn-primary inline-flex items-center justify-center text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <a
                  href="https://calendly.com/cognodes/discovery-call"
                  className="btn-secondary inline-flex items-center justify-center text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4"
                >
                  Book a Call
                  <Phone className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative lg:col-span-1 flex items-center justify-center lg:order-2 overflow-visible my-0 lg:my-0">
              <div className="relative w-full h-full flex items-center justify-center overflow-visible">
                <div className="relative overflow-visible">
                  <div className="lg:hidden w-full flex justify-center">
                    <Image
                      src="/CogNodes Graphics.png"
                      alt="CogNodes Dashboard Graphics"
                      width={1200}
                      height={1200}
                      className="h-auto object-contain"
                      style={{
                        maxHeight: 'none',
                        width: '130%',
                        maxWidth: '130%'
                      }}
                      priority
                      quality={100}
                      unoptimized={true}
                    />
                  </div>
                  <div className="hidden lg:block">
                    <Image
                      src="/CogNodes Graphics.png"
                      alt="CogNodes Dashboard Graphics"
                      width={1200}
                      height={1200}
                      className="w-full h-auto object-contain"
                      style={{ 
                        maxHeight: '800px',
                        transform: 'scale(2.024) translateX(-5%) translateX(-10px)'
                      }}
                      priority
                      quality={100}
                      unoptimized={true}
                    />
                  </div>
                  {/* Bottom gradient fade overlay - positioned directly on the image */}
                  <div 
                    className="absolute left-0 right-0 h-32 bg-gradient-to-t from-cn-navy-900 to-transparent pointer-events-none lg:block hidden"
                    style={{
                      background: 'linear-gradient(to top, var(--cn-navy-900), transparent)',
                      bottom: '-164px',
                      transform: 'scale(2.024) translateX(-5%) translateX(-10px)',
                      transformOrigin: 'bottom center'
                    }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Buttons shown on mobile only - below image */}
            <div className="lg:hidden flex flex-col gap-3 lg:order-3">
              <Link
                href="/solution-finder"
                className="btn-primary inline-flex items-center justify-center text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
              <a
                href="https://calendly.com/cognodes/discovery-call"
                className="btn-secondary inline-flex items-center justify-center text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4"
              >
                Book a Call
                <Phone className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
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
      <section className="pt-12 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden overflow-y-visible" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-7xl mx-auto">
          {/* Centered Title */}
          <div className="text-center mb-2 sm:mb-20">
            <h2 className="heading-1 text-white mb-2">
              Track Your Growth in Real-Time
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto">
              We provide a personalized dashboard for your business (most competitors don&apos;t offer this)
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {/* Image - Left 2/3 */}
            <div className="relative lg:col-span-2 flex justify-center lg:justify-start overflow-visible my-0 lg:my-0">
              <div className="relative overflow-visible w-full flex justify-center lg:justify-start">
                <div className="lg:hidden w-full flex justify-center">
                  <Image
                    src="/Logos/CogNodes Graphics (3).png"
                    alt="CogNodes Graphics"
                    width={1200}
                    height={900}
                    className="h-auto object-cover rounded-2xl"
                    style={{ 
                      objectPosition: 'center',
                      filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))',
                      maxHeight: 'none',
                      width: '225%',
                      maxWidth: '225%'
                    }}
                    quality={100}
                    unoptimized={true}
                  />
                </div>
                <div className="hidden lg:block">
                  <Image
                    src="/Logos/CogNodes Graphics (3).png"
                    alt="CogNodes Graphics"
                    width={1200}
                    height={900}
                    className="h-auto object-cover rounded-2xl"
                    style={{ 
                      objectPosition: 'center',
                      filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))',
                      transform: 'translateX(5%) translateX(-70px) scale(2.1) translateY(40px)'
                    }}
                    quality={100}
                    unoptimized={true}
                  />
                </div>
              </div>
            </div>
            
            {/* Text - Right 1/3 */}
            <div className="text-left relative z-10 lg:col-span-1 flex items-center mt-0">
              <style jsx>{`
                @media (min-width: 1024px) {
                  .text-left {
                    margin-top: 100px;
                  }
                }
                @media (max-width: 1023px) {
                  .text-left {
                    margin-top: 0;
                  }
                }
              `}</style>
              <div className="rounded-2xl p-6 sm:p-8 border border-gray-600/30 backdrop-blur-sm" style={{ 
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                backgroundColor: '#0e143e'
              }}>
                <p className="text-base sm:text-lg text-gray-300">
                  <span className="font-bold text-white">Most AI services don&apos;t provide dashboards. We do.</span> Track every call, email, and interaction in real-time. See exactly which AI agents are driving revenue, where leads come from, and how much time you&apos;re saving. Monitor performance metrics that matter to your unique operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Assessment Funnel */}
      <SavingsAssessment />

      {/* Workflow Section */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-1 text-white mb-6">How We Turn Leads Into Revenue</h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto">
              From first contact to closed deal, our AI captures and converts every opportunity
            </p>
          </div>
        
        {/* Enhanced Workflow Diagram */}
        <div className="rounded-2xl pt-8 px-8 pb-5 border border-gray-600/30 mb-12 backdrop-blur-sm" style={{ 
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          backgroundColor: '#0e143e'
        }}>
          {/* Main Workflow Flow */}
          <div className="relative mb-12">
            
            {/* Main Workflow Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch min-h-[200px] sm:min-h-[220px] lg:min-h-[240px]">
              {/* 1. Customer Initiates Contact */}
              <div className="text-center flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-cn-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 relative z-10 shadow-lg">
                  <Phone className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-cn-navy-900" />
                </div>
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2">1. Customer Initiates</h4>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300">Call, email, or website visit</p>
              </div>
              
              {/* 2. AI Instantly Responds */}
              <div className="text-center flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-cn-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 relative z-10 shadow-lg">
                  <Bot className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-cn-navy-900" />
                </div>
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2">2. AI Instantly Responds</h4>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300">Qualifies lead & gathers info</p>
              </div>
              
              {/* 3. Smart Processing & Integration */}
              <div className="text-center flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-cn-lavender-400 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 relative z-10 shadow-lg">
                  <Settings className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-cn-navy-900" />
                </div>
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2">3. Smart Processing</h4>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300">Route, price, & schedule</p>
              </div>
              
              {/* 4. Service Delivered */}
              <div className="text-center flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-cn-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 relative z-10 shadow-lg">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-cn-navy-900" />
                </div>
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2">4. Service Delivered</h4>
                <p className="text-xs sm:text-sm lg:text-base text-gray-300">Complete & automated follow-up</p>
              </div>
            </div>
            
          </div>
        </div>
        </div>
      </section>

      {/* AI vs Traditional Section */}
      <section className="py-6 sm:py-10 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-1 text-white mb-6">
              Why Businesses Choose AI Over Hiring
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Compare the economics: pay a fraction of the cost while getting better results
            </p>
          </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="rounded-2xl p-8 lg:p-10 border border-gray-600/30 backdrop-blur-sm" style={{ 
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            backgroundColor: '#0e143e'
          }}>
            <div className="text-center mb-8 lg:mb-10">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-cn-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                <Bot className="w-8 h-8 lg:w-10 lg:h-10 text-cn-navy-900" />
              </div>
              <h3 className="heading-3 text-white">CogNodes AI</h3>
              <p className="text-gray-400 mt-2">The future of customer service</p>
            </div>
            <div className="space-y-5 lg:space-y-6">
              {[
                "24/7 availability, never calls in sick",
                "Answer instantly, zero hold time", 
                "Fraction of the cost of hiring",
                "Handle unlimited calls simultaneously",
                "Consistent quality, every interaction"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 lg:w-7 lg:h-7 text-cn-blue-400 flex-shrink-0" />
                  <span className="text-white font-medium text-sm lg:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-2xl p-8 lg:p-10 border border-gray-600/30 backdrop-blur-sm" style={{ 
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            backgroundColor: '#0e143e'
          }}>
            <div className="text-center mb-8 lg:mb-10">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-cn-slate-600 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                <Users className="w-8 h-8 lg:w-10 lg:h-10 text-cn-gray-300" />
              </div>
              <h3 className="heading-3 text-white">Traditional</h3>
              <p className="text-gray-400 mt-2">Outdated hiring methods</p>
            </div>
            <div className="space-y-5 lg:space-y-6">
              {[
                "Limited to business hours",
                "Customers wait on hold", 
                "High cost, salaries + overhead",
                "Limited by team size",
                "Varies by employee"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full border-2 border-red-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 text-sm lg:text-base">×</span>
                  </div>
                  <span className="text-gray-300 text-sm lg:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-1 text-white mb-6">What Our Clients Say</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Real results from businesses that have transformed their operations with CogNodes AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Testimonial 1 - USH */}
            <div className="rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-600/30 backdrop-blur-sm" style={{ 
              backgroundColor: '#0e143e'
            }}>
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cn-blue-400 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-cn-navy-900 font-bold text-sm sm:text-lg">USH</span>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white">USH</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Business Solutions</p>
                </div>
              </div>
            <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
              &ldquo;We were missing about 30% of calls during busy season. The AI receptionist answers every call now, even when we&apos;re on job sites. It books appointments directly into our calendar and follows up automatically. We&apos;re capturing leads we would have lost before.&rdquo;
            </p>
              <div className="flex text-cn-blue-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 2 - Shake the Block Hospitality */}
            <div className="rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-600/30 backdrop-blur-sm" style={{ 
              backgroundColor: '#0e143e'
            }}>
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cn-pink-400 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-cn-navy-900 font-bold text-sm sm:text-lg">SBH</span>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white">Shake the Block Hospitality</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Hospitality Group</p>
                </div>
              </div>
            <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
              &ldquo;Managing guest communications across multiple properties was overwhelming. The automated system handles booking confirmations, check-in reminders, and follow-ups seamlessly. Our staff can focus on in-person service, and guests appreciate the quick, consistent responses.&rdquo;
            </p>
              <div className="flex text-cn-pink-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 3 - Charkol (Restaurant) */}
            <div className="rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-600/30 backdrop-blur-sm" style={{ 
              backgroundColor: '#0e143e'
            }}>
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cn-lavender-400 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-cn-navy-900 font-bold text-sm sm:text-lg">CH</span>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white">Charkol</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Restaurant</p>
                </div>
              </div>
            <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
              &ldquo;During dinner rush, we couldn&apos;t always answer the phone for reservations. Now the system handles booking requests automatically and sends confirmations. We&apos;re filling more tables without the chaos, and our staff can stay focused on the guests in front of them.&rdquo;
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

        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-1 text-white mb-6">Questions You May Have</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Get answers to the most common questions about our AI automation solutions
            </p>
          </div>
        
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-2xl border border-gray-600/30 backdrop-blur-sm" style={{ 
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              backgroundColor: '#0e143e'
            }}>
              <button
                className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-cn-navy-900 transition-colors rounded-2xl"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <span className="text-sm sm:text-base lg:text-lg font-semibold text-white pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-cn-blue-400 transition-transform flex-shrink-0 ${
                    expandedFaq === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {expandedFaq === index && (
                <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 pt-2">
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="heading-1 text-white mb-6">
            Ready to Capture More Leads and Save Time?
          </h2>
          
          <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Book a free consultation and we&apos;ll show you exactly how much you could save
          </p>
          
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-cn-blue-400 rounded-full"></div>
              <div className="w-3 h-3 bg-cn-pink-400 rounded-full"></div>
              <div className="w-3 h-3 bg-cn-lavender-400 rounded-full"></div>
              <div className="w-3 h-3 bg-cn-blue-400 rounded-full"></div>
            </div>
          </div>
          
          <a
            href="https://calendly.com/cognodes/discovery-call"
            className="btn-primary inline-flex items-center justify-center text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
          >
            Get Your Free Consultation
            <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}