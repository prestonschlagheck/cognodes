"use client";

import Link from 'next/link';
import { ArrowRight, Bot, Mail, Calendar, MessageSquare, Clock, Zap, DollarSign, Users, Shield, CheckCircle, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentService, setCurrentService] = useState(0);
  
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
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="heading-1 text-white">
                  Make your business more money
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Optimize your workflows with AI-powered automation that handles customer engagement, scheduling, and business operations 24/7.
                </p>
              </div>
              
              {/* Rotating Services Marquee */}
              <div className="bg-cn-charcoal-900 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-2 h-2 bg-cn-blue-400 rounded-full"></div>
                  <span className="text-sm text-gray-400 uppercase tracking-wide">Now Featuring</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-cn-blue-400 rounded-lg flex items-center justify-center">
                    {(() => {
                      const IconComponent = services[currentService].icon;
                      return <IconComponent className="w-5 h-5 text-cn-navy-900" />;
                    })()}
                  </div>
                  <span className="text-lg font-semibold text-white">
                    {services[currentService].name}
                  </span>
                </div>
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
            
            {/* Right Content - Illustration Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cn-navy-900 to-cn-charcoal-900 rounded-2xl p-8 border border-gray-700">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cn-pink-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-cn-lavender-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-cn-blue-400 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-cn-dark-700 rounded w-3/4"></div>
                    <div className="h-4 bg-cn-dark-700 rounded w-1/2"></div>
                    <div className="h-4 bg-cn-dark-700 rounded w-2/3"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-16 bg-cn-dark-700 rounded-lg"></div>
                    <div className="h-16 bg-cn-dark-700 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--page-bg)' }}>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--surface-bg)' }}>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--page-bg)' }}>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--surface-bg)' }}>
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
                  "Default text testimonial about how CogNodes AI solutions transformed our business operations and increased our efficiency."
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