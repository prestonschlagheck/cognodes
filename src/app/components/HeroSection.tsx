import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden" style={{ backgroundColor: 'var(--container-bg)' }}>

      {/* Content */}
      <div className="text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Company Name */}
        <div className="mb-8" style={{ paddingTop: '10px' }}>
          <h1 className="heading-1" style={{ color: 'var(--djh-white)', fontFamily: 'Poppins, Arial, sans-serif', fontSize: 'clamp(46px, 6.9vw, 80px)', lineHeight: '0.9' }}>
            <span className="block sm:hidden">
              DIRECT JOURNEYLINE<br />HOLDINGS
            </span>
            <span className="hidden sm:block" style={{ whiteSpace: 'nowrap' }}>
              DIRECT JOURNEYLINE HOLDINGS
            </span>
          </h1>
        </div>
        
        <p className="body-large text-gray-200 mb-8 max-w-4xl mx-auto">
          DJH is redefining what truck parking can be - transforming underutilized land into critical infrastructure that serves drivers, fleets, and communities nationwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/truck-parking"
            className="btn-primary min-w-[360px]"
          >
            Learn About Truck Parking
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
          
          <Link
            href="/our-team"
            className="btn-secondary min-w-[360px] sm:min-w-0"
          >
            Meet Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
