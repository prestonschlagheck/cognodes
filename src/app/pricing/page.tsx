"use client";

import Link from 'next/link';
import { Check, ArrowRight, Star } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$497",
      period: "per month",
      description: "Perfect for small service-based businesses getting started with AI automation",
      features: [
        "Automated Quote Generator",
        "Basic Email Assistant",
        "Website Chatbot (5 pages)",
        "Email Support",
        "Basic Analytics",
        "Setup & Training"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Growth",
      price: "$1,497",
      period: "per month",
      description: "Ideal for growing businesses that need comprehensive AI solutions",
      features: [
        "Everything in Starter",
        "Customer Engagement & Follow-Up",
        "After-Hours Receptionist",
        "Advanced Email Assistant",
        "Website Chatbot (unlimited pages)",
        "Appointment & Scheduling Assistant",
        "Priority Support",
        "Advanced Analytics",
        "Custom Integrations"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations with complex needs",
      features: [
        "Everything in Growth",
        "AI Receptionist (live + after-hours)",
        "Custom Websites & Agents",
        "Dedicated Account Manager",
        "24/7 Phone Support",
        "Custom Development",
        "White-label Solutions",
        "Advanced Security",
        "SLA Guarantee"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-bg)' }}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-1 text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Choose the plan that fits your business needs. All plans include our core AI automation features.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`card-elevated relative ${
                  plan.popular 
                    ? 'border-2 border-cn-blue-400 transform scale-105' 
                    : 'border border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-cn-blue-400 text-cn-navy-900 px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="heading-3 text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-cn-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  {plan.name === "Enterprise" ? (
                    <a
                      href="mailto:cognodes@gmail.com"
                      className="btn-outline w-full text-center block"
                    >
                      {plan.cta}
                    </a>
                  ) : (
                    <a
                      href="mailto:cognodes@gmail.com"
                      className="btn-primary w-full text-center block"
                    >
                      {plan.cta}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-charcoal-900)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-white mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "What's included in the free trial?",
                answer: "Default text about the free trial including all features, setup assistance, and no credit card required."
              },
              {
                question: "Can I change plans anytime?",
                answer: "Default text about plan flexibility and how easy it is to upgrade or downgrade based on business needs."
              },
              {
                question: "Do you offer custom solutions?",
                answer: "Default text about custom development services and how we work with Enterprise clients to create tailored solutions."
              },
              {
                question: "What kind of support do you provide?",
                answer: "Default text about our support tiers, response times, and how we help clients get the most out of our AI solutions."
              },
              {
                question: "Is there a setup fee?",
                answer: "Default text about setup costs, what's included in setup, and how we ensure smooth implementation."
              }
            ].map((faq, index) => (
              <div key={index} className="card-standard">
                <h3 className="heading-4 text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--cn-charcoal-900)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of businesses already using CogNodes to automate their operations and increase revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:cognodes@gmail.com"
              className="btn-primary inline-flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Link
              href="/"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
