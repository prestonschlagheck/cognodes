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
    <div className="bg-gray-700 rounded-xl shadow-lg border border-gray-600 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
      {/* Header */}
      <div className={`${colorClasses[color]} px-4 py-3 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <h3 className="text-xs font-semibold text-current relative z-10 leading-tight">{type}</h3>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Company Logo */}
        <div className="flex items-center mb-4">
          <img 
            src={name === "Riggy's" ? "/logos/riggys-white.png" : name === "Journeyline Properties" ? "/logos/jp-white.png" : name === "Truckbays" ? "/logos/truckbays-white.png" : "/logos/djh-white.png"} 
            alt={`${name} Logo`} 
            className="h-8 w-auto mr-3"
          />
          <h4 className={`text-base font-semibold ${textColorClasses[color]} leading-tight`}>
            {name}
          </h4>
        </div>
        <p className="text-sm text-gray-300 mb-4 flex-1">
          {description}
        </p>

        {/* CTA Button */}
        <Link
          href={href}
          className={`inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
            color === 'primary' 
              ? 'bg-gray-800 text-white hover:bg-gray-700 hover:scale-105' 
              : color === 'accent'
              ? 'bg-riggys-green text-black hover:bg-riggys-green/90 hover:scale-105'
              : 'bg-jp-blue text-white hover:bg-jp-blue/90 hover:scale-105'
          }`}
        >
          Learn More
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
