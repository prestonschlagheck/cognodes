"use client";

import { Bot, Mail, Calendar, MessageSquare, Clock, Zap, DollarSign, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      name: "Automated Quote Generator",
      icon: DollarSign,
      description: "Generate accurate quotes instantly based on your pricing rules and customer requirements.",
      features: ["Custom pricing rules", "Instant quote generation", "PDF export", "Email integration"]
    },
    {
      name: "Customer Engagement & Follow-Up",
      icon: MessageSquare,
      description: "Automated follow-up sequences to nurture leads and maintain customer relationships.",
      features: ["Automated sequences", "Personalized messages", "Lead scoring", "CRM integration"]
    },
    {
      name: "Smart Email Assistant",
      icon: Mail,
      description: "AI-powered email management that drafts, schedules, and prioritizes your communications.",
      features: ["Smart drafting", "Auto-scheduling", "Priority sorting", "Template library"]
    },
    {
      name: "After-Hours Receptionist",
      icon: Clock,
      description: "24/7 virtual receptionist that handles calls, takes messages, and schedules appointments.",
      features: ["24/7 availability", "Call routing", "Message taking", "Appointment booking"]
    },
    {
      name: "Website Chatbot",
      icon: Bot,
      description: "Intelligent chatbot that answers questions and guides visitors through your website.",
      features: ["Natural conversations", "Knowledge base integration", "Lead capture", "Multi-language support"]
    },
    {
      name: "AI Receptionist",
      icon: Users,
      description: "Live and after-hours AI receptionist that handles all your business communications.",
      features: ["Live call handling", "After-hours support", "Appointment scheduling", "Customer service"]
    },
    {
      name: "Appointment & Scheduling Assistant",
      icon: Calendar,
      description: "Automated scheduling system that manages bookings and sends reminders.",
      features: ["Calendar integration", "Auto-reminders", "Rescheduling", "Availability management"]
    },
    {
      name: "Custom Websites & Agents",
      icon: Zap,
      description: "Tailored AI solutions and custom websites designed for your specific business needs.",
      features: ["Custom development", "Tailored solutions", "Integration support", "Ongoing maintenance"]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-1 text-white mb-6">
            Our AI Services
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Comprehensive AI automation solutions designed to transform your service-based business operations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="card-elevated group">
                  <div className="w-16 h-16 bg-cn-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cn-pink-400 transition-colors">
                    <IconComponent className="w-8 h-8 text-cn-navy-900" />
                  </div>
                  <h3 className="heading-3 text-white mb-4">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-cn-blue-400 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-charcoal-900)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our simple 3-step process gets your AI automation up and running quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cn-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-cn-navy-900">1</span>
              </div>
              <h3 className="heading-4 text-white mb-4">Consultation</h3>
              <p className="text-gray-300">
                We analyze your business needs and recommend the best AI solutions for your specific requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cn-pink-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-cn-navy-900">2</span>
              </div>
              <h3 className="heading-4 text-white mb-4">Setup & Integration</h3>
              <p className="text-gray-300">
                Our team handles all the technical setup and integrates the AI solutions with your existing systems.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cn-lavender-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-cn-navy-900">3</span>
              </div>
              <h3 className="heading-4 text-white mb-4">Launch & Optimize</h3>
              <p className="text-gray-300">
                We launch your AI solutions and continuously optimize them for maximum performance and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our AI automation solutions and see the difference they can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:cognodes@gmail.com"
              className="btn-primary inline-flex items-center justify-center"
            >
              Get Started Today
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
