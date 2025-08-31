"use client";

import Link from 'next/link';
import { ArrowRight, Users, Shield, Building2, Truck, Zap, DollarSign, Zap as SpeedIcon, ChevronDown, ChevronUp } from 'lucide-react';
import HeroSection from './components/HeroSection';
import CompanyCard from './components/CompanyCard';
import TestimonialsSection from './components/TestimonialsSection';
import { useState } from 'react';

export default function Home() {
  const [expandedBoxes, setExpandedBoxes] = useState<number[]>([]);

  const toggleBox = (index: number) => {
    setExpandedBoxes(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-page">
      {/* Hero Section */}
      <HeroSection />

      {/* Who We Are Section */}
      <section className="section-spacious bg-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="heading-2 text-white mb-4">
              WHO WE ARE
            </h2>
            <div className="flex justify-center">
              <p className="body-large text-gray-300 min-w-[360px] sm:min-w-0 w-full sm:w-auto leading-tight">
                DJH is redefining what truck parking can be - transforming underutilized land into critical infrastructure that serves drivers, fleets, and communities nationwide.
              </p>
            </div>
          </div>

          {/* Brand Logos */}
          <div className="flex flex-col sm:grid sm:grid-cols-3 gap-6 max-w-none items-center sm:items-stretch">
            <div className="bg-[#4B5563] rounded-lg p-6 text-center shadow-lg border border-[#4B5563] hover:shadow-xl transition-all duration-300 min-w-[360px] sm:min-w-0 w-full sm:w-auto">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <img 
                  src="/logos/3.png" 
                  alt="Journeyline Properties Logo" 
                  className="h-14 w-auto object-contain"
                />
              </div>
              <h3 className="heading-4 text-white mb-2">Property Company</h3>
              <p className="body-medium text-gray-300">Real Estate & Development</p>
            </div>
            
            <div className="bg-[#4B5563] rounded-lg p-6 text-center shadow-lg border border-[#4B5563] hover:shadow-xl transition-all duration-300 min-w-[360px] sm:min-w-0 w-full sm:w-auto">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <img 
                  src="/logos/2.png" 
                  alt="Riggy's Logo" 
                  className="h-14 w-auto object-contain"
                />
              </div>
              <h3 className="heading-4 text-white mb-2">Operating Company</h3>
              <p className="body-medium text-gray-300">Truck Parking Operations</p>
            </div>
            
            <div className="bg-[#4B5563] rounded-lg p-6 text-center shadow-lg border border-[#4B5563] hover:shadow-xl transition-all duration-300 min-w-[360px] sm:min-w-0 w-full sm:w-auto">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <img 
                  src="/logos/1.png" 
                  alt="Truckbays Logo" 
                  className="h-14 w-auto object-contain"
                />
              </div>
              <h3 className="heading-4 text-white mb-2">Technology Company</h3>
              <p className="body-medium text-gray-300">Technology Platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="section-spacious bg-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="heading-2 text-white mb-4">
              WHY WORK WITH US?
            </h2>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-6 gap-6 max-w-none items-center lg:items-stretch">
            {/* Private Investors - Full Height */}
            <div className="lg:col-span-2 bg-[#4B5563] rounded-lg p-6 shadow-lg border border-[#4B5563] hover:shadow-xl transition-all duration-300 flex flex-col min-w-[360px] lg:min-w-0 w-full lg:w-auto">
              <div className="w-16 h-16 bg-button-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-4 text-white mb-4 leading-tight">
                PRIVATE INVESTORS WITH A HISTORY OF SUCCESS
              </h3>
              
              {expandedBoxes.includes(0) && (
                <div className="mb-4">
                  <p className="body-medium text-gray-300">
                    The company is backed by private investors who have a proven track record of building successful teams in both the public and private sectors, with decades of combined experience.
                  </p>
                </div>
              )}
              
              <button
                onClick={() => toggleBox(0)}
                className="w-full flex items-center justify-center space-x-2 bg-[#1F2937] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#5A6370] transition-colors mt-auto"
              >
                <span>{expandedBoxes.includes(0) ? 'Show Less' : 'Read More'}</span>
                {expandedBoxes.includes(0) ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Experienced Management - Full Height */}
            <div className="lg:col-span-2 bg-[#4B5563] rounded-lg p-6 shadow-lg border border-[#4B5563] hover:shadow-xl transition-all duration-300 flex flex-col min-w-[360px] lg:min-w-0 w-full lg:w-auto">
              <div className="w-16 h-16 bg-button-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-4 text-white mb-4 leading-tight">
                EXPERIENCED LEADERSHIP AND MANAGEMENT TEAM
              </h3>
              
              {expandedBoxes.includes(1) && (
                <div className="mb-4">
                  <p className="body-medium text-gray-300">
                    Our management team brings deep industry knowledge and strong family heritage, with proven leadership across multiple sectors and decades of operational excellence.
                  </p>
                </div>
              )}
              
              <button
                onClick={() => toggleBox(1)}
                className="w-full flex items-center justify-center space-x-2 bg-[#1F2937] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#5A6370] transition-colors mt-auto"
              >
                <span>{expandedBoxes.includes(1) ? 'Show Less' : 'Read More'}</span>
                {expandedBoxes.includes(1) ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Focus on Transforming Land - Full Height */}
            <div className="lg:col-span-2 bg-[#4B5563] rounded-lg p-6 shadow-lg border border-[#4B5563] hover:shadow-xl transition-all duration-300 flex flex-col min-w-[360px] lg:min-w-0 w-full lg:w-auto">
              <div className="w-16 h-16 bg-button-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-4 text-white mb-4 leading-tight">
                FOCUS ON TRANSFORMING UNDERUTILIZED LAND
              </h3>
              
              {expandedBoxes.includes(2) && (
                <div className="mb-4">
                  <p className="body-medium text-gray-300">
                    We are dedicated to converting underutilized land into critical truck parking infrastructure, creating value where others see only potential.
                  </p>
                </div>
              )}
              
              <button
                onClick={() => toggleBox(2)}
                className="w-full flex items-center justify-center space-x-2 bg-[#1F2937] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#5A6370] transition-colors mt-auto"
              >
                <span>{expandedBoxes.includes(2) ? 'Show Less' : 'Read More'}</span>
                {expandedBoxes.includes(2) ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Safety and Security - Now side by side with Commitment to Safety */}
            <div className="lg:col-span-3 bg-[#4B5563] rounded-lg p-6 shadow-lg border border-[#4B5563] hover:shadow-xl transition-all duration-300 flex flex-col min-w-[360px] lg:min-w-0 w-full lg:w-auto">
              <div className="w-16 h-16 bg-button-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-4 text-white mb-4 leading-tight">
                UNDERSTANDING OF SAFETY AND SECURITY ISSUES
              </h3>
              
              {expandedBoxes.includes(3) && (
                <div className="mb-4">
                  <p className="body-medium text-gray-300">
                    We are acutely aware of the safety and security concerns within Texas and are committed to addressing them comprehensively for the benefit of both the community and road safety.
                  </p>
                </div>
              )}
              
              <button
                onClick={() => toggleBox(3)}
                className="w-full flex items-center justify-center space-x-2 bg-[#1F2937] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#5A6370] transition-colors mt-auto"
              >
                <span>{expandedBoxes.includes(3) ? 'Show Less' : 'Read More'}</span>
                {expandedBoxes.includes(3) ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Commitment to Safety - Now side by side with Safety and Security */}
            <div className="lg:col-span-3 bg-[#4B5563] rounded-lg p-6 shadow-lg border border-[#4B5563] hover:shadow-xl transition-all duration-300 flex flex-col min-w-[360px] lg:min-w-0 w-full lg:w-auto">
              <div className="w-16 h-16 bg-button-primary rounded-full flex items-center justify-center mb-4 shadow-lg">
                <SpeedIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="heading-4 text-white mb-4 leading-tight">
                COMMITMENT TO SAFETY, EFFICIENCY, AND EASE OF DOING BUSINESS
              </h3>
              
              {expandedBoxes.includes(4) && (
                <div className="mb-4">
                  <p className="body-medium text-gray-300">
                    We prioritize safety, efficiency, and streamlined business operations, ensuring that every interaction and process is designed for maximum effectiveness and minimal friction.
                  </p>
                </div>
              )}
              
              <button
                onClick={() => toggleBox(4)}
                className="w-full flex items-center justify-center space-x-2 bg-[#1F2937] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#5A6370] transition-colors mt-auto"
              >
                <span>{expandedBoxes.includes(4) ? 'Show Less' : 'Read More'}</span>
                {expandedBoxes.includes(4) ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Companies Section */}
      <section className="section-spacious bg-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-white mb-4">
              OUR COMPANIES
            </h2>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 max-w-none items-center lg:items-stretch">
            <CompanyCard
              type="PROPERTY COMPANY"
              name="Journeyline Properties"
              description="Specializes in acquiring and leasing large plots in prime locations, designing efficient layouts, and developing high-quality properties."
              color="jp-truckbays-accent"
              href="/journeyline-properties"
            />
            
            <CompanyCard
              type="OPERATING COMPANY"
              name="Riggy's"
              description="Manages truck parking facilities with a focus on competitive pricing, operational excellence, consistent standards, and exceptional customer service."
              color="riggys-accent"
              href="/riggys"
            />
            
            <CompanyCard
              type="TECHNOLOGY COMPANY"
              name="Truckbays"
              description="Develops and maintains cost-effective, user-friendly technology for managing truck parking lots."
              color="jp-truckbays-accent"
              href="/truckbays"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bottom-section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 text-white mb-4">
            Ready to Transform Your Truck Parking Experience?
          </h2>
          <p className="body-large text-gray-100 mb-6">
            Join us in revolutionizing truck parking infrastructure across the nation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/truck-parking"
              className="bg-[#1F2937] text-white px-9 py-3.5 rounded-lg font-semibold hover:bg-[#5A6370] transition-colors inline-flex items-center justify-center shadow-lg min-w-[360px] sm:min-w-0 w-full sm:w-auto"
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="mailto:contact@directjh.com"
              className="btn-secondary min-w-[360px] sm:min-w-0 w-full sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
