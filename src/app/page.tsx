"use client";

import Link from 'next/link';
import { ArrowRight, Bot, Mail, Calendar, MessageSquare, Clock, Zap, DollarSign, Users, Shield, CheckCircle, Star, Phone, Headphones, BarChart3, Settings, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
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
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="heading-1 text-white mb-6">
              Innovative AI Solutions for Forward Thinking Businesses
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Focus on growing your business, while our AI Receptionist & Sales Agent handle inbound and outbound calls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-charcoal-900)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="card-elevated group hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-cn-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cn-pink-400 transition-colors">
                    <IconComponent className="w-8 h-8 text-cn-navy-900" />
                  </div>
                  <h3 className="heading-4 text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-6">Perfect Workflow for Your Business</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions create a seamless workflow that handles every aspect of customer interaction
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cn-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-cn-navy-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">24/7 Availability</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cn-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-cn-navy-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Seamless Booking</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cn-lavender-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-cn-navy-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Auto Pricing</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cn-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-cn-navy-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Higher Efficiency</h3>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-cn-charcoal-900 to-cn-navy-900 rounded-2xl p-8 border border-gray-700">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-cn-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-10 h-10 text-cn-navy-900" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Smart Routing</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {workflowSteps.map((step, index) => {
                      const IconComponent = step.icon;
                      return (
                        <div key={index} className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-cn-slate-600 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-cn-gray-300" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold">{step.title}</h4>
                            <p className="text-gray-400 text-sm">{step.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI vs Traditional Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-charcoal-900)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-6">
              CogNodes AI vs. Traditional Hiring
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See why AI automation is the smarter choice for modern businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cn-blue-400 to-cn-pink-400 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-cn-navy-900" />
                </div>
                <h3 className="text-2xl font-bold text-white">CogNodes AI</h3>
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
                    <CheckCircle className="w-6 h-6 text-white" />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-cn-navy-900 rounded-2xl p-8 border border-gray-700">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-cn-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-cn-gray-300" />
                </div>
                <h3 className="text-2xl font-bold text-white">Traditional</h3>
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

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-6">Questions You May Have</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-cn-charcoal-900 rounded-xl border border-gray-700">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-cn-navy-900 transition-colors rounded-xl"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-cn-blue-400 transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-charcoal-900)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cn-navy-900 to-cn-blue-400 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute top-4 left-4 w-8 h-8 bg-cn-pink-400 rounded-full opacity-20"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-cn-lavender-400 rounded-full opacity-30"></div>
            
            <h2 className="heading-2 text-white mb-6">
              Let&apos;s Talk.<br />
              Book a Free Consultation
            </h2>
            
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
        </div>
      </section>
    </div>
  );
}