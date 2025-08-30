import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CompanyCardProps {
  type: string;
  name: string;
  description: string;
  color: 'riggys-accent' | 'jp-truckbays-accent';
  href: string;
}

export default function CompanyCard({ type, name, description, color, href }: CompanyCardProps) {
  const colorClasses = {
    'riggys-accent': 'bg-riggys-accent text-black',
    'jp-truckbays-accent': 'bg-jp-truckbays-accent text-white'
  };

  const textColorClasses = {
    'riggys-accent': 'text-riggys-accent',
    'jp-truckbays-accent': 'text-jp-truckbays-accent'
  };

  return (
    <div className="bg-[#4B5563] rounded-lg shadow-lg border border-[#4B5563] hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden">
      {/* Colored Top Section */}
      <div className={`px-6 py-3 flex items-center justify-center ${
        name === "Riggy's" ? "bg-riggys-accent" : "bg-jp-truckbays-accent"
      }`}>
        <span className="text-sm font-semibold text-white uppercase tracking-wide">
          {type}
        </span>
      </div>
      
      {/* Main Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Company Logo and Title Row */}
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
            <img 
              src={name === "Riggy's" ? "/logos/riggys-white.png" : name === "Journeyline Properties" ? "/logos/jp-white.png" : name === "Truckbays" ? "/logos/truckbays-white.png" : "/logos/djh-white.png"} 
              alt={`${name} Logo`} 
              className={`w-auto ${name === "Riggy's" ? "h-14" : "h-16"} ${name === "Journeyline Properties" ? "object-contain object-left -ml-2" : ""} ${name === "Truckbays" ? "object-contain object-left" : ""}`}
            />
          </div>
          
          <h3 className="text-lg font-semibold text-white leading-tight ml-4 uppercase">
            {name}
          </h3>
        </div>
        
        {/* Description */}
        <p className="body-medium text-gray-300 mb-6 flex-1">
          {description}
        </p>

        {/* CTA Button */}
        <Link
          href={href}
          className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
            name === "Riggy's" 
              ? "bg-riggys-accent text-white hover:bg-riggys-accent/90" 
              : "bg-jp-truckbays-accent text-white hover:bg-jp-truckbays-accent/90"
          }`}
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
