import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CompanyCardProps {
  type: string;
  name: string;
  description: string;
  color: 'primary' | 'accent' | 'jp-blue';
  href: string;
}

export default function CompanyCard({ type, name, description, color, href }: CompanyCardProps) {
  const colorClasses = {
    primary: 'bg-gray-500 text-white',
    accent: 'bg-riggys-green text-black',
    'jp-blue': 'bg-jp-blue text-white'
  };

  const textColorClasses = {
    primary: 'text-gray-500',
    accent: 'text-riggys-green',
    'jp-blue': 'text-jp-blue'
  };

  return (
    <div className="card-elevated overflow-hidden h-full flex flex-col">
      {/* Header - extends to edges with rounded top corners */}
      <div className={`${colorClasses[color]} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <h3 className="text-base font-semibold text-current relative z-10 leading-tight px-7 py-4.5">{type}</h3>
      </div>

      {/* Content */}
      <div className="p-7 flex-1 flex flex-col">
        {/* Company Logo */}
        <div className="flex items-center mb-7">
          <img 
            src={name === "Riggy's" ? "/logos/riggys-white.png" : name === "Journeyline Properties" ? "/logos/jp-white.png" : name === "Truckbays" ? "/logos/truckbays-white.png" : "/logos/djh-white.png"} 
            alt={`${name} Logo`} 
            className="h-14 w-auto mr-5"
          />
          <h4 className={`heading-4 ${textColorClasses[color]} leading-tight`}>
            {name}
          </h4>
        </div>
        <p className="body-medium text-gray-300 mb-7 flex-1">
          {description}
        </p>

        {/* CTA Button - spans full width */}
        <Link
          href={href}
          className={`w-full inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
            color === 'primary' 
              ? 'bg-gray-800 text-white hover:bg-gray-700 hover:scale-105' 
              : color === 'accent'
              ? 'bg-riggys-green text-black hover:bg-riggys-green/90 hover:scale-105'
              : 'bg-jp-blue text-white hover:bg-jp-blue/90 hover:scale-105'
          }`}
        >
          Learn More
          <ArrowRight className="ml-2 w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}
