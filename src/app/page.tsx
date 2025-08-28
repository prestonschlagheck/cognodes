import Link from 'next/link';
import { ArrowRight, Users, Shield, Building2, Truck, Zap, DollarSign, Zap as SpeedIcon } from 'lucide-react';
import HeroSection from './components/HeroSection';
import CompanyCard from './components/CompanyCard';
import TestimonialsSection from './components/TestimonialsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <HeroSection />

      {/* Who We Are Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
              WHO WE ARE
            </h2>
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              DJH is redefining what truck parking can be - transforming underutilized land into critical infrastructure that serves drivers, fleets, and communities nationwide.
            </p>
          </div>

          {/* Brand Logos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-gray-700 rounded-xl p-4 shadow-lg border border-gray-600 text-center">
              <div className="w-10 h-10 flex items-center justify-center mx-auto mb-3">
                <img 
                  src="/logos/jp-white.png" 
                  alt="Journeyline Properties Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">Journeyline Properties</h3>
              <p className="text-xs text-gray-300 mt-1">Real Estate & Development</p>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-4 shadow-lg border border-gray-600 text-center">
              <div className="w-10 h-10 flex items-center justify-center mx-auto mb-3">
                <img 
                  src="/logos/riggys-white.png" 
                  alt="Riggy's Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">Riggy&apos;s</h3>
              <p className="text-xs text-gray-300 mt-1">Truck Parking Operations</p>
            </div>
            
            <div className="bg-gray-700 rounded-xl p-4 shadow-lg border border-gray-600 text-center">
              <div className="w-10 h-10 flex items-center justify-center mx-auto mb-3">
                <img 
                  src="/logos/truckbays-white.png" 
                  alt="Truckbays Logo" 
                  className="h-8 w-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">Truckbays</h3>
              <p className="text-xs text-gray-300 mt-1">Technology Platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              WHY WORK WITH US?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Private Investors */}
            <div className="bg-gray-700 rounded-xl p-4 shadow-lg border border-gray-600 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                PRIVATE INVESTORS WITH A HISTORY OF SUCCESS
              </h3>
              <p className="text-sm text-gray-300 flex-1">
                The company is backed by private investors who have a proven track record of building successful teams in both the public and private sectors.
              </p>
            </div>

            {/* Experienced Management */}
            <div className="bg-gray-700 rounded-xl p-4 shadow-lg border border-gray-600 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                EXPERIENCED MANAGEMENT TEAM
              </h3>
              <p className="text-sm text-gray-300 flex-1">
                The management team has deep industry knowledge and a strong family heritage.
              </p>
            </div>

            {/* Focus on Transforming Land */}
            <div className="bg-gray-700 rounded-xl p-4 shadow-lg border border-gray-600 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                FOCUS ON TRANSFORMING UNDERUTILIZED LAND
              </h3>
              <p className="text-sm text-gray-300 flex-1">
                The company is dedicated to converting underutilized land into critical truck parking infrastructure.
              </p>
            </div>

            {/* Safety and Security */}
            <div className="bg-gray-700 rounded-xl p-4 shadow-lg border border-gray-600 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                UNDERSTANDING OF SAFETY AND SECURITY ISSUES
              </h3>
              <p className="text-sm text-gray-300 flex-1">
                The company is aware of the safety and security concerns within Texas and is committed to addressing them for the benefit of the community and the roads.
              </p>
            </div>

            {/* Commitment to Safety */}
            <div className="bg-gray-700 rounded-xl p-4 shadow-lg border border-gray-600 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mb-3 shadow-lg">
                <SpeedIcon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                COMMITMENT TO SAFETY, EFFICIENCY, AND EASE OF DOING BUSINESS
              </h3>
              <p className="text-sm text-gray-300 flex-1">
                The company prioritizes safety, efficiency, and making business operations as smooth as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Companies Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
              OUR COMPANIES
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <CompanyCard
              type="PROPERTY COMPANY"
              name="Journeyline Properties"
              description="Specializes in acquiring and leasing large plots in prime locations, designing efficient layouts, and developing high-quality properties."
              color="jp-blue"
              href="/journeyline-properties"
            />
            
            <CompanyCard
              type="OPERATING COMPANY"
              name="Riggy's"
              description="Manages truck parking facilities with a focus on competitive pricing, operational excellence, consistent standards, and exceptional customer service."
              color="accent"
              href="/riggys"
            />
            
            <CompanyCard
              type="TECHNOLOGY COMPANY"
              name="Truckbays"
              description="Develops and maintains cost-effective, user-friendly technology for managing truck parking lots."
              color="jp-blue"
              href="/truckbays"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
            Ready to Transform Your Truck Parking Experience?
          </h2>
          <p className="text-sm sm:text-base text-gray-100 mb-4">
            Join us in revolutionizing truck parking infrastructure across the nation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/truck-parking"
              className="bg-gray-800 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-700 transition-colors inline-flex items-center justify-center shadow-lg"
            >
              Learn More
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <a
              href="mailto:contact@directjh.com"
              className="border-2 border-white text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-white hover:text-gray-500 transition-colors inline-flex items-center justify-center shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
