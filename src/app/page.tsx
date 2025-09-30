"use client";

import Link from 'next/link';
import Image from 'next/image';
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
      question: "What exactly does CogNodes do for my business?",
      answer: "We automate your business operations using AI-powered voice agents and chatbots. Our solutions handle customer inquiries, book appointments, manage workflows, and provide 24/7 support—helping you save time and resources while improving customer experience."
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
      answer: "We provide comprehensive support throughout your journey—from initial setup to ongoing optimization. You'll receive detailed performance reports, regular system adjustments, and continuous support to ensure everything runs smoothly for your business."
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
      <section className="relative pt-32 sm:pt-40 lg:pt-52 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Text and buttons */}
            <div className="text-left relative z-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
                Make your business more{' '}
                <span className="text-cn-blue-400">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mb-6 sm:mb-8">
                Focus on growing your business, while our<br className="hidden sm:block" />AI Receptionist & Sales Agent handle<br className="hidden sm:block" />inbound and outbound calls.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="https://calendly.com/d/cwks-6jg-sss/discovery-call"
                  className="btn-primary inline-flex items-center justify-center text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://calendly.com/d/cwks-6jg-sss/discovery-call"
                  className="btn-secondary inline-flex items-center justify-center text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4"
                >
                  Book a Call
                  <Phone className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative lg:col-span-1 flex items-center justify-center">
              <div className="relative w-full max-w-lg h-full flex items-center justify-center">
                <div className="relative">
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
      <section className="pt-20 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-7xl mx-auto">
          {/* Centered Title */}
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="heading-1 text-white mb-6">
              Visualize your success.
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {/* Image - Left 2/3 */}
            <div className="relative lg:col-span-2">
              <Image
                src="/Logos/CogNodes Graphics (3).png"
                alt="CogNodes Graphics"
                width={1200}
                height={900}
                className="w-full h-auto object-cover rounded-2xl"
                style={{ 
                  objectPosition: 'center',
                  transform: 'translateX(5%) translateX(-70px) scale(2.1) translateY(40px)',
                  filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
                }}
                quality={100}
                unoptimized={true}
              />
            </div>
            
            {/* Text - Right 1/3 */}
            <div className="text-left relative z-10 lg:col-span-1 flex items-center" style={{ marginTop: '100px' }}>
              <div className="rounded-2xl p-6 sm:p-8 border border-gray-600/30 backdrop-blur-sm" style={{ 
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                backgroundColor: '#0e143e'
              }}>
                <p className="text-base sm:text-lg text-gray-300">
                  <span className="font-bold text-white">Unlike competitors</span> who offer generic solutions, we provide a truly personalized dashboard that adapts to your specific business needs. Your dashboard tracks every agent&apos;s performance, showing real-time impact on your business growth and customer satisfaction metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="pt-20 sm:pt-32 lg:pt-48 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-1 text-white mb-6">Complete AI Workflow Process</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See exactly how our AI automation works with this visual workflow
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
                "24/7, never off duty",
                "Instant replies, no hold time", 
                "Low cost, no salaries or training",
                "Handles unlimited calls",
                "100% accurate, no mood swings"
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
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
              &ldquo;The AI receptionist handles our after-hours calls perfectly. We never miss a lead anymore, and the quote generation feature has streamlined our entire sales process. Customer satisfaction is up 50% and we&apos;re closing deals faster than ever.&rdquo;
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
              &ldquo;Managing multiple hotels meant endless scheduling, guest communications, and internal reporting headaches. Preston&apos;s team built us a system that centralized everything—automated confirmations, staff scheduling, and even analytics dashboards. The result has been fewer errors, faster response times, and happier guests. It&apos;s transformed how smoothly our properties operate.&rdquo;
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
              &ldquo;Running a busy restaurant is nonstop, but Preston&apos;s solutions gave us breathing room. Online reservations sync automatically with staff schedules, inventory updates happen in real-time, and customer feedback is tracked without extra effort. What used to feel chaotic now runs like clockwork, and our team can focus on creating a better dining experience.&rdquo;
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0d133b' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="heading-1 text-white mb-6">
            Let&apos;s talk, book a free consultation.
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
            See how your business transforms with AI automation.
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
            href="https://calendly.com/d/cwks-6jg-sss/discovery-call"
            className="btn-primary inline-flex items-center justify-center text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
          >
            Book a Call
            <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}