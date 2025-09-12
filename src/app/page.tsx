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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-bg)' }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Who We Are Section */}
      <section className="section-spacious" style={{ backgroundColor: 'var(--page-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="heading-2 mb-4" style={{ color: 'var(--djh-white)' }}>
              WHO WE ARE
            </h2>
          </div>

          {/* Company Cards */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 max-w-none items-center lg:items-stretch">
            <CompanyCard
              type="PROPERTY COMPANY"
              name="Journeyline Properties"
              subtitle="Real Estate & Development"
              description="Specializes in acquiring and leasing large plots in prime locations, designing efficient layouts, and developing high-quality properties."
              color="jp-truckbays-accent"
              href="/journeyline-properties"
            />
            
            <CompanyCard
              type="OPERATING COMPANY"
              name="Riggy's"
              subtitle="Truck Parking Operations"
              description="Manages truck parking facilities with a focus on competitive pricing, operational excellence, consistent standards, and exceptional customer service."
              color="riggys-accent"
              href="/riggys"
            />
            
            <CompanyCard
              type="TECHNOLOGY COMPANY"
              name="Truckbays"
              subtitle="Technology Platform"
              description="Develops and maintains cost-effective, user-friendly technology for managing truck parking lots."
              color="jp-truckbays-accent"
              href="/truckbays"
            />
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="section-spacious" style={{ backgroundColor: 'var(--page-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="heading-2" style={{ color: 'var(--djh-white)' }}>
              WHY WORK WITH US?
            </h2>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-6 gap-6 max-w-none items-center lg:items-stretch">
            {/* Private Investors - Full Height */}
            <div className="lg:col-span-2 card-standard flex flex-col min-w-[360px] lg:min-w-0 w-full lg:w-auto">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg" style={{ backgroundColor: 'var(--djh-green)' }}>
                <DollarSign className="w-8 h-8" style={{ color: 'var(--djh-white)' }} />
              </div>
              <h3 className="heading-4 mb-4 leading-tight" style={{ color: 'var(--djh-white)' }}>
                PRIVATE INVESTORS WITH A HISTORY OF SUCCESS
              </h3>
              
              {expandedBoxes.includes(0) && (
                <div className="mb-4">
                  <p className="body-medium" style={{ color: 'var(--djh-very-light-gray)' }}>
                    The company is backed by private investors who have a proven track record of building successful teams in both the public and private sectors, with decades of combined experience.
                  </p>
                </div>
              )}
              
              <button
                onClick={() => toggleBox(0)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors mt-auto"
                style={{ 
                  backgroundColor: 'var(--djh-dark-gray)', 
                  color: 'var(--djh-white)',
                  fontFamily: 'Poppins, Arial, sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--djh-medium-gray)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--djh-dark-gray)';
                }}
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
            <div className="lg:col-span-2 card-standard flex flex-col min-w-[360px] lg:min-w-0 w-full lg:w-auto">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg" style={{ backgroundColor: 'var(--djh-green)' }}>
                <Users className="w-8 h-8" style={{ color: 'var(--djh-white)' }} />
              </div>
              <h3 className="heading-4 mb-4 leading-tight" style={{ color: 'var(--djh-white)' }}>
                EXPERIENCED LEADERSHIP AND MANAGEMENT TEAM
              </h3>
              
              {expandedBoxes.includes(1) && (
                <div className="mb-4">
                  <p className="body-medium" style={{ color: 'var(--djh-very-light-gray)' }}>
                    Our management team brings deep industry knowledge and strong family heritage, with proven leadership across multiple sectors and decades of operational excellence.
                  </p>
                </div>
              )}
              
              <button
                onClick={() => toggleBox(1)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors mt-auto"
                style={{ 
                  backgroundColor: 'var(--djh-dark-gray)', 
                  color: 'var(--djh-white)',
                  fontFamily: 'Poppins, Arial, sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--djh-medium-gray)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--djh-dark-gray)';
                }}
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
            <div className="lg:col-span-2 card-standard flex flex-col min-w-[360px] lg:min-w-0 w-full lg:w-auto">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg" style={{ backgroundColor: 'var(--djh-green)' }}>
                <Building2 className="w-8 h-8" style={{ color: 'var(--djh-white)' }} />
              </div>
              <h3 className="heading-4 mb-4 leading-tight" style={{ color: 'var(--djh-white)' }}>
                FOCUS ON TRANSFORMING UNDERUTILIZED LAND
              </h3>
              
              {expandedBoxes.includes(2) && (
                <div className="mb-4">
                  <p className="body-medium" style={{ color: 'var(--djh-very-light-gray)' }}>
                    We are dedicated to converting underutilized land into critical truck parking infrastructure, creating value where others see only potential.
                  </p>
                </div>
              )}
              
              <button
                onClick={() => toggleBox(2)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors mt-auto"
                style={{ 
                  backgroundColor: 'var(--djh-dark-gray)', 
                  color: 'var(--djh-white)',
                  fontFamily: 'Poppins, Arial, sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--djh-medium-gray)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--djh-dark-gray)';
                }}
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
            <div className="lg:col-span-3 card-standard flex flex-col min-w-[360px] lg:min-w-0 w-full lg:w-auto">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg" style={{ backgroundColor: 'var(--djh-green)' }}>
                <Shield className="w-8 h-8" style={{ color: 'var(--djh-white)' }} />
              </div>
              <h3 className="heading-4 mb-4 leading-tight" style={{ color: 'var(--djh-white)' }}>
                UNDERSTANDING OF SAFETY AND SECURITY ISSUES
              </h3>
              
              {expandedBoxes.includes(3) && (
                <div className="mb-4">
                  <p className="body-medium" style={{ color: 'var(--djh-very-light-gray)' }}>
                    We are acutely aware of the safety and security concerns within the entire US when it comes to truck parking and are committed to addressing them comprehensively for the benefit of both the community and road safety.
                  </p>
                </div>
              )}
              
              <button
                onClick={() => toggleBox(3)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors mt-auto"
                style={{ 
                  backgroundColor: 'var(--djh-dark-gray)', 
                  color: 'var(--djh-white)',
                  fontFamily: 'Poppins, Arial, sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--djh-medium-gray)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--djh-dark-gray)';
                }}
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
            <div className="lg:col-span-3 card-standard flex flex-col min-w-[360px] lg:min-w-0 w-full lg:w-auto">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg" style={{ backgroundColor: 'var(--djh-green)' }}>
                <SpeedIcon className="w-8 h-8" style={{ color: 'var(--djh-white)' }} />
              </div>
              <h3 className="heading-4 mb-4 leading-tight" style={{ color: 'var(--djh-white)' }}>
                COMMITMENT TO SAFETY, EFFICIENCY, AND EASE OF DOING BUSINESS
              </h3>
              
              {expandedBoxes.includes(4) && (
                <div className="mb-4">
                  <p className="body-medium" style={{ color: 'var(--djh-very-light-gray)' }}>
                    We prioritize safety, efficiency, and streamlined business operations, ensuring that every interaction and process is designed for maximum effectiveness and minimal friction.
                  </p>
                </div>
              )}
              
              <button
                onClick={() => toggleBox(4)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors mt-auto"
                style={{ 
                  backgroundColor: 'var(--djh-dark-gray)', 
                  color: 'var(--djh-white)',
                  fontFamily: 'Poppins, Arial, sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--djh-medium-gray)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--djh-dark-gray)';
                }}
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


      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'var(--bottom-section-bg)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-4" style={{ color: 'var(--djh-white)' }}>
            READY TO TRANSFORM YOUR TRUCK PARKING EXPERIENCE?
          </h2>
          <p className="body-large mb-6" style={{ color: 'var(--djh-very-light-gray)' }}>
            Join us in revolutionizing truck parking infrastructure across the nation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/truck-parking"
              className="btn-primary min-w-[360px] sm:min-w-0 w-full sm:w-auto"
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
