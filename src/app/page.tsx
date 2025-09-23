"use client";

import Link from 'next/link';
import { ArrowRight, Bot, Mail, Calendar, MessageSquare, Clock, Zap, DollarSign, Users, Shield, CheckCircle, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const baseText = "Make your business more ";
  
  const services = [
    { name: "Automated Quote Generator", icon: DollarSign },
    { name: "Customer Engagement & Follow-Up", icon: MessageSquare },
    { name: "Smart Email Assistant", icon: Mail },
    { name: "After-Hours Receptionist", icon: Clock },
    { name: "Website Chatbot", icon: Bot },
    { name: "AI Receptionist", icon: Users },
    { name: "Appointment & Scheduling Assistant", icon: Calendar },
    { name: "Custom Websites & Agents", icon: Zap }
  ];

  useEffect(() => {
    const words = ['efficient', 'automated', 'effective', 'money'];
    const current = words[currentWord];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 100 : 150); // Faster typing, slower deleting

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWord]);

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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-bg)' }}>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="heading-1 text-white">
                  {baseText}
                  <span className="text-cn-blue-400">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Optimize your workflows with AI-powered automation that handles customer engagement, scheduling, and business operations 24/7.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:cognodes@gmail.com"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Book a Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <Link
                  href="/pricing"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            
            {/* Right Content - Clean Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cn-navy-900 to-cn-charcoal-900 rounded-2xl p-12 border border-gray-700 shadow-2xl">
                <div className="text-center space-y-8">
                  <div className="w-24 h-24 bg-cn-blue-400 rounded-full flex items-center justify-center mx-auto">
                    <Zap className="w-12 h-12 text-cn-navy-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">AI-Powered</h3>
                    <p className="text-gray-300">Transform your business with intelligent automation</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-cn-blue-400">24/7</div>
                      <div className="text-sm text-gray-400">Always On</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-cn-pink-400">75%</div>
                      <div className="text-sm text-gray-400">Time Saved</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cn-blue-400 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cn-pink-400 rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Now Featuring Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-charcoal-900)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-cn-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400 uppercase tracking-wide">Now Featuring</span>
            </div>
            <h2 className="heading-2 text-white mb-4">Our AI Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover how our intelligent automation can transform your business operations
            </p>
          </div>

          <div className="relative bg-cn-navy-900 rounded-2xl p-8 border border-gray-700 overflow-hidden">
            <div className="relative h-32 overflow-hidden">
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 transition-transform duration-1000 ease-in-out"
                   style={{ transform: `translateY(-${currentWord * 80}px)` }}>
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  const isActive = index === currentWord;
                  const isAbove = index === (currentWord - 1 + services.length) % services.length;
                  const isBelow = index === (currentWord + 1) % services.length;
                  
                  let opacity = 0.3;
                  let scale = 0.8;
                  let brightness = 0.4;
                  
                  if (isActive) {
                    opacity = 1;
                    scale = 1;
                    brightness = 1;
                  } else if (isAbove || isBelow) {
                    opacity = 0.6;
                    scale = 0.9;
                    brightness = 0.7;
                  }
                  
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-4 transition-all duration-500 ease-in-out"
                      style={{
                        opacity,
                        transform: `scale(${scale})`,
                        filter: `brightness(${brightness})`
                      }}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                        isActive ? 'bg-cn-blue-400' : 'bg-cn-slate-600'
                      }`}>
                        <IconComponent className={`w-6 h-6 transition-colors duration-500 ${
                          isActive ? 'text-cn-navy-900' : 'text-cn-gray-300'
                        }`} />
                      </div>
                      <span className={`text-lg font-semibold transition-colors duration-500 ${
                        isActive ? 'text-white' : 'text-gray-400'
                      }`}>
                        {service.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentWord ? 'bg-cn-blue-400' : 'bg-cn-slate-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Dashboard Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-4">Real-Time AI Dashboard</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Monitor your business performance with our intelligent analytics and automation insights
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Live Performance Metrics</h3>
                <p className="text-gray-300">
                  Track real-time data and see how AI automation is transforming your business operations.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-cn-charcoal-900 rounded-xl p-6 border border-gray-700">
                  <div className="text-3xl font-bold text-cn-blue-400 mb-2">247</div>
                  <div className="text-sm text-gray-400">Leads Generated</div>
                </div>
                <div className="bg-cn-charcoal-900 rounded-xl p-6 border border-gray-700">
                  <div className="text-3xl font-bold text-cn-pink-400 mb-2">98%</div>
                  <div className="text-sm text-gray-400">Response Rate</div>
                </div>
                <div className="bg-cn-charcoal-900 rounded-xl p-6 border border-gray-700">
                  <div className="text-3xl font-bold text-cn-lavender-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Active</div>
                </div>
                <div className="bg-cn-charcoal-900 rounded-xl p-6 border border-gray-700">
                  <div className="text-3xl font-bold text-cn-blue-400 mb-2">$12K</div>
                  <div className="text-sm text-gray-400">Revenue</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cn-charcoal-900 to-cn-navy-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-cn-pink-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-cn-lavender-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="w-3 h-3 bg-cn-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                    <div className="text-xs text-gray-400 font-mono">AI DASHBOARD</div>
                  </div>
                  
                  {/* Activity Feed */}
                  <div className="space-y-4">
                    <div className="text-sm text-gray-400 font-semibold">Recent Activity</div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-cn-blue-400 rounded-full"></div>
                        <span className="text-gray-300">New lead captured from website</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-cn-pink-400 rounded-full"></div>
                        <span className="text-gray-300">Automated quote generated</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-cn-lavender-400 rounded-full"></div>
                        <span className="text-gray-300">Appointment scheduled for tomorrow</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <div className="w-2 h-2 bg-cn-blue-400 rounded-full"></div>
                        <span className="text-gray-300">Follow-up email sent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cn-blue-400 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-cn-pink-400 rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI-powered solutions that transform how service-based businesses operate, 
              saving time and increasing revenue through intelligent automation.
            </p>
            </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="card-standard group">
                  <div className="w-12 h-12 bg-cn-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cn-pink-400 transition-colors">
                    <IconComponent className="w-6 h-6 text-cn-navy-900" />
              </div>
                  <h3 className="heading-4 text-white mb-3">
                    {service.name}
              </h3>
                  <p className="text-gray-300">
                    Default text describing how this service helps businesses optimize their operations and increase efficiency.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-charcoal-900)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-white mb-6">
                Why It Matters to Your Business
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-cn-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="heading-4 text-white mb-2">Save Time & Money</h3>
                    <p className="text-gray-300">Default text about how AI automation reduces operational costs and frees up staff for higher-value tasks.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-cn-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="heading-4 text-white mb-2">24/7 Customer Service</h3>
                    <p className="text-gray-300">Default text about how AI never sleeps, providing consistent customer engagement around the clock.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-cn-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="heading-4 text-white mb-2">Scalable Growth</h3>
                    <p className="text-gray-300">Default text about how AI solutions grow with your business without proportional cost increases.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="card-elevated">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cn-blue-400 mb-2">75%</div>
                  <div className="text-gray-300">Time Saved on Administrative Tasks</div>
                </div>
              </div>
              <div className="card-elevated">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cn-pink-400 mb-2">40%</div>
                  <div className="text-gray-300">Increase in Lead Conversion</div>
                </div>
              </div>
              <div className="card-elevated">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cn-lavender-400 mb-2">24/7</div>
                  <div className="text-gray-300">Customer Support Availability</div>
                </div>
              </div>
            </div>
          </div>
              </div>
      </section>

      {/* AI vs Traditional Hiring Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-6">
              AI vs Traditional Hiring
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI automation compares to traditional staffing solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-standard">
              <h3 className="heading-3 text-white mb-6">Traditional Hiring</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">$50,000+ annual salary per employee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Benefits, training, and management overhead</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Limited to business hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">Sick days, vacation, turnover</span>
                </div>
              </div>
            </div>

            <div className="card-standard border-cn-blue-400">
              <h3 className="heading-3 text-white mb-6">AI Automation</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cn-blue-400 rounded-full"></div>
                  <span className="text-gray-300">$500-2000 monthly per solution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cn-blue-400 rounded-full"></div>
                  <span className="text-gray-300">No benefits, training, or management needed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cn-blue-400 rounded-full"></div>
                  <span className="text-gray-300">24/7 availability</span>
              </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cn-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Consistent performance, no downtime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-charcoal-900)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-standard">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-cn-blue-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  &ldquo;Default text testimonial about how CogNodes AI solutions transformed our business operations and increased our efficiency.&rdquo;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cn-dark-700 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-white">Default Client Name</div>
                    <div className="text-sm text-gray-400">Default Company</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-charcoal-900)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of service-based businesses already using AI to optimize their operations and increase revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:cognodes@gmail.com"
              className="btn-primary inline-flex items-center justify-center"
            >
              Book a Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Link
              href="/pricing"
              className="btn-secondary inline-flex items-center justify-center"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}