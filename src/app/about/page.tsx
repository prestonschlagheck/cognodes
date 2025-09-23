"use client";

import { Users, Target, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that directly impact your bottom line and business growth."
    },
    {
      icon: Zap,
      title: "Innovation-First",
      description: "We stay at the forefront of AI technology to provide you with the most advanced automation solutions."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We tailor every solution to meet your specific business needs and goals."
    }
  ];

  const stats = [
    { number: "500+", label: "Businesses Automated" },
    { number: "75%", label: "Average Time Saved" },
    { number: "24/7", label: "AI Support Available" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-1 text-white mb-6">
            About CogNodes
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We&apos;re on a mission to help service-based businesses thrive through intelligent AI automation solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-charcoal-900)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                At CogNodes, we believe that every service-based business deserves access to enterprise-level AI automation. 
                Our mission is to democratize AI technology and make it accessible, affordable, and effective for businesses of all sizes.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                We&apos;re not just another tech company. We&apos;re your partners in transformation, helping you optimize 
                workflows, increase revenue, and focus on what matters most - growing your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-cn-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Proven AI solutions that deliver real results</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-cn-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Dedicated support team that understands your business</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-cn-blue-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Continuous optimization and improvement</span>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              {stats.map((stat, index) => (
                <div key={index} className="card-elevated text-center">
                  <div className="text-4xl font-bold text-cn-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="card-elevated text-center">
                  <div className="w-16 h-16 bg-cn-blue-400 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-cn-navy-900" />
                  </div>
                  <h3 className="heading-4 text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-charcoal-900)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-6">
              Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We&apos;re a team of AI experts, developers, and business strategists passionate about helping 
              businesses succeed through intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-elevated text-center">
                <div className="w-24 h-24 bg-cn-dark-700 rounded-full mx-auto mb-6"></div>
                <h3 className="heading-4 text-white mb-2">Default Team Member</h3>
                <p className="text-cn-blue-400 mb-4">AI Solutions Specialist</p>
                <p className="text-gray-300 text-sm">
                  Default text about team member&apos;s expertise and experience in AI automation and business solutions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let&apos;s discuss how CogNodes can help transform your business with AI automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:cognodes@gmail.com"
              className="btn-primary inline-flex items-center justify-center"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Link
              href="/services"
              className="btn-secondary inline-flex items-center justify-center"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
