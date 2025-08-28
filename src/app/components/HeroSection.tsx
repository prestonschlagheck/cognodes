import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden bg-gray-900">

      {/* Content */}
      <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* DJH Logo */}
        <div className="mb-6">
          <img 
            src="/logos/djh-white.png" 
            alt="DJH Logo" 
            className="h-20 w-auto mx-auto"
          />
        </div>
        
        <p className="text-base sm:text-lg text-gray-200 mb-4 max-w-2xl mx-auto">
          DJH is redefining what truck parking can be - transforming underutilized land into critical infrastructure that serves drivers, fleets, and communities nationwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            href="/truck-parking"
            className="bg-gray-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors inline-flex items-center justify-center text-base shadow-lg h-10"
          >
            Learn About Truck Parking
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          
          <Link
            href="/our-team"
            className="border-2 border-white text-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center text-base shadow-lg h-10"
          >
            Meet Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
