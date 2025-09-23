"use client";

import Link from 'next/link';
import { ArrowRight, Bot, Mail, Calendar, MessageSquare, Clock, Zap, DollarSign, Users, Shield, CheckCircle, Star, Phone, Headphones, BarChart3, Settings, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ['efficient', 'automated', 'money'];
  
  useEffect(() => {
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
  }, [currentText, currentWordIndex, isDeleting, words]);
  
  const features = [
    {
      icon: Phone,
      title: "24/7 AI Receptionist",
      description: "Never miss a call again with our intelligent AI that handles customer inquiries, schedules appointments, and provides instant responses."
    },
    {
      icon: Bot,
      title: "Smart Chatbot",
      description: "Engage visitors on your website with our AI chatbot that answers questions, captures leads, and guides customers through your services."
    },
    {
      icon: Mail,
      title: "Email Automation",
      description: "Automate your email marketing with personalized sequences, follow-ups, and customer engagement campaigns that drive results."
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Streamline booking with automated scheduling that syncs with your calendar and sends reminders to reduce no-shows."
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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section with Typing Effect */}
      <section className="relative pt-52 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
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
              <p className="text-xl text-gray-300 max-w-2xl mb-8">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="bg-cn-charcoal-900 rounded-3xl border border-gray-700/50">
            <div className="overflow-hidden rounded-3xl py-6">
              <div className="flex animate-marquee" style={{ width: '200%' }}>
                {/* First set of features */}
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={`first-${index}`} className="group hover:scale-105 transition-transform duration-300 bg-cn-navy-900/50 border border-gray-600/30 flex-shrink-0 w-64 mx-2 p-6 rounded-xl shadow-2xl">
                      <div className="w-12 h-12 bg-cn-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cn-pink-400 transition-colors">
                        <IconComponent className="w-6 h-6 text-cn-navy-900" />
                      </div>
                      <h3 className="heading-4 text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  );
                })}
                {/* Second set of features for seamless loop */}
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={`second-${index}`} className="group hover:scale-105 transition-transform duration-300 bg-cn-navy-900/50 border border-gray-600/30 flex-shrink-0 w-64 mx-2 p-6 rounded-xl shadow-2xl">
                      <div className="w-12 h-12 bg-cn-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cn-pink-400 transition-colors">
                        <IconComponent className="w-6 h-6 text-cn-navy-900" />
                      </div>
                      <h3 className="heading-4 text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop & Phoner Image with Text */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
        <div className="max-w-7xl mx-auto">
          {/* Centered Title */}
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h2 className="heading-1 text-white">
              Visualize your success.
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Image - Left 2/3 */}
            <div className="relative lg:col-span-2">
              <img
                src="/Logos/CogNodes Graphics (3).png"
                alt="CogNodes Graphics"
                className="w-full h-auto object-cover rounded-2xl"
                style={{ 
                  objectPosition: 'center',
                  transform: 'translateX(5%) translateX(-70px) scale(2.1)'
                }}
              />
            </div>
            
            {/* Text - Right 1/3 */}
            <div className="text-left relative z-10 lg:col-span-1" style={{ marginLeft: '20px' }}>
              <p className="text-xl text-gray-300 mb-6">
                Unlike competitors who offer generic solutions, we provide a truly personalized dashboard that adapts to your specific business needs. Your dashboard tracks every agent's performance, showing real-time impact on your business growth and customer satisfaction metrics.
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
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="bg-cn-charcoal-900 rounded-3xl p-12 border border-gray-700/50">
            <div className="text-center mb-16">
              <h2 className="heading-2 text-white mb-6">Perfect Workflow for Your Business</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See exactly how our AI automation works with this visual workflow
              </p>
            </div>
            
            {/* Enhanced Workflow Diagram */}
            <div className="bg-cn-navy-900/50 rounded-2xl p-8 border border-gray-600/30 mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Complete AI Workflow Process</h3>
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
                    <h4 className="text-white font-bold mb-2 text-lg">1. Customer Initiates</h4>
                    <p className="text-gray-300 text-sm mb-2">Call, email, or website visit</p>
                    <div className="text-xs text-cn-blue-400 font-medium">START HERE</div>
                  </div>
                  
                  {/* 2. AI Instantly Responds */}
                  <div className="text-center">
                    <div className="w-24 h-24 bg-cn-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                      <Bot className="w-12 h-12 text-cn-navy-900" />
                    </div>
                    <h4 className="text-white font-bold mb-2 text-lg">2. AI Instantly Responds</h4>
                    <p className="text-gray-300 text-sm mb-2">Qualifies lead & gathers info</p>
                    <div className="text-xs text-cn-pink-400 font-medium">0.5 seconds</div>
                  </div>
                  
                  {/* 3. Smart Processing & Integration */}
                  <div className="text-center">
                    <div className="w-24 h-24 bg-cn-lavender-400 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                      <Settings className="w-12 h-12 text-cn-navy-900" />
                    </div>
                    <h4 className="text-white font-bold mb-2 text-lg">3. Smart Processing</h4>
                    <p className="text-gray-300 text-sm mb-2">Route, price, & schedule</p>
                    <div className="text-xs text-cn-lavender-400 font-medium">Auto-integration</div>
                  </div>
                  
                  {/* 4. Service Delivered */}
                  <div className="text-center">
                    <div className="w-24 h-24 bg-cn-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                      <CheckCircle className="w-12 h-12 text-cn-navy-900" />
                    </div>
                    <h4 className="text-white font-bold mb-2 text-lg">4. Service Delivered</h4>
                    <p className="text-gray-300 text-sm mb-2">Complete & automated follow-up</p>
                    <div className="text-xs text-cn-blue-400 font-medium">COMPLETE</div>
                  </div>
                </div>
                
                {/* Integration Examples */}
                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="text-center bg-cn-charcoal-900/50 rounded-xl p-4 border border-gray-600/30">
                    <div className="w-16 h-16 bg-cn-pink-400 rounded-xl flex items-center justify-center mx-auto mb-3 relative z-10">
                      <Calendar className="w-8 h-8 text-cn-navy-900" />
                    </div>
                    <h5 className="text-white font-semibold mb-1">Calendar Integration</h5>
                    <p className="text-gray-400 text-xs">Syncs with Google Calendar, Outlook, Calendly</p>
                  </div>
                  
                  <div className="text-center bg-cn-charcoal-900/50 rounded-xl p-4 border border-gray-600/30">
                    <div className="w-16 h-16 bg-cn-lavender-400 rounded-xl flex items-center justify-center mx-auto mb-3 relative z-10">
                      <Mail className="w-8 h-8 text-cn-navy-900" />
                    </div>
                    <h5 className="text-white font-semibold mb-1">Email Automation</h5>
                    <p className="text-gray-400 text-xs">Sends confirmations, reminders, follow-ups</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Minor Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-cn-navy-900/30 rounded-xl border border-gray-600/20">
                <div className="w-12 h-12 bg-cn-blue-400 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-cn-navy-900" />
                </div>
                <h4 className="text-white font-medium text-sm mb-1">24/7 Availability</h4>
                <p className="text-gray-400 text-xs">Never miss a customer</p>
              </div>
              
              <div className="text-center p-4 bg-cn-navy-900/30 rounded-xl border border-gray-600/20">
                <div className="w-12 h-12 bg-cn-pink-400 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-cn-navy-900" />
                </div>
                <h4 className="text-white font-medium text-sm mb-1">Seamless Booking</h4>
                <p className="text-gray-400 text-xs">Easy appointment scheduling</p>
              </div>
              
              <div className="text-center p-4 bg-cn-navy-900/30 rounded-xl border border-gray-600/20">
                <div className="w-12 h-12 bg-cn-lavender-400 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-cn-navy-900" />
                </div>
                <h4 className="text-white font-medium text-sm mb-1">Auto Pricing</h4>
                <p className="text-gray-400 text-xs">Smart quote generation</p>
              </div>
              
              <div className="text-center p-4 bg-cn-navy-900/30 rounded-xl border border-gray-600/20">
                <div className="w-12 h-12 bg-cn-blue-400 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 text-cn-navy-900" />
                </div>
                <h4 className="text-white font-medium text-sm mb-1">Higher Efficiency</h4>
                <p className="text-gray-400 text-xs">Optimized workflows</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI vs Traditional Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="bg-cn-charcoal-900 rounded-3xl p-12 border border-gray-700/50">
            <div className="text-center mb-16">
              <h2 className="heading-2 text-white mb-6">
                CogNodes AI vs. Traditional Hiring
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See why AI automation is the smarter choice for modern businesses
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cn-navy-900/50 rounded-2xl p-8 border border-gray-600/30">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-cn-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-8 h-8 text-cn-navy-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">CogNodes AI</h3>
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
              
              <div className="bg-cn-navy-900/50 rounded-2xl p-8 border border-gray-600/30">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-cn-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-cn-gray-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Traditional</h3>
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-6">Questions You May Have</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to the most common questions about our AI automation solutions
            </p>
          </div>
          
          <div className="bg-cn-charcoal-900 rounded-3xl p-12 border border-gray-700/50">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-cn-navy-900/50 rounded-2xl border border-gray-600/30">
                  <button
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-cn-navy-900 transition-colors rounded-2xl"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <span className="text-white font-semibold text-lg pr-4">{faq.question}</span>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-6">
            Let&apos;s Talk.<br />
            Book a Free Consultation
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
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