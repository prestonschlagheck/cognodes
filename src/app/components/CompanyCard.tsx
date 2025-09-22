import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CompanyCardProps {
  type: string;
  name: string;
  subtitle: string;
  description: string;
  color: 'riggys-accent' | 'jp-truckbays-accent';
  href: string;
}

export default function CompanyCard({ type, name, subtitle, description, color, href }: CompanyCardProps) {
  const colorClasses = {
    'riggys-accent': 'bg-riggys-accent text-black',
    'jp-truckbays-accent': 'bg-jp-truckbays-accent text-white'
  };

  const textColorClasses = {
    'riggys-accent': 'text-riggys-accent',
    'jp-truckbays-accent': 'text-jp-truckbays-accent'
  };

  return (
    <div className="rounded-lg shadow-lg border hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden min-w-[360px] lg:min-w-0 w-full lg:w-auto" style={{ backgroundColor: 'var(--container-bg)', borderColor: 'var(--djh-dark-gray)' }}>
      {/* Colored Top Section */}
      <div className={`px-6 py-3 flex items-center justify-center ${
        name === "Riggy's" ? "bg-riggys-accent" : "bg-jp-truckbays-accent"
      }`}>
        <span className="text-sm font-semibold text-white uppercase tracking-wide">
          {subtitle}
        </span>
      </div>
      
      {/* Main Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Company Logo */}
        <div className="text-center" style={{ marginBottom: '16px' }}>
          <div className={`flex items-center justify-center mx-auto ${name === "Journeyline Properties" ? "w-80 h-22" : "w-72 h-20"}`}>
            <img 
              src={name === "Riggy's" ? "/logos/2.png" : name === "Journeyline Properties" ? "/logos/3.png" : name === "Truckbays" ? "/logos/1.png" : "/logos/djh-white.png"} 
              alt={`${name} Logo`} 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
        
        {/* Description */}
        <p className="body-medium mb-6 flex-1" style={{ color: 'var(--djh-very-light-gray)', fontFamily: 'Poppins, Arial, sans-serif' }}>
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          {/* LinkedIn Button - Only for Riggy's and Truckbays */}
          {name !== "Journeyline Properties" && (
            <a
              href={
                name === "Riggy's" 
                  ? "https://www.linkedin.com/company/riggys"
                  : "https://www.linkedin.com/company/truckbays"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 hover:border-white/40 transition-colors overflow-hidden flex items-center justify-center"
              style={{ 
                width: '46px', 
                height: '46px',
                backgroundColor: name === "Riggy's" ? '#8fd305' : '#2465ee',
                borderColor: 'var(--djh-dark-gray)',
                borderRadius: '11px'
              }}
            >
              <img 
                src="/logos/linkedin-app-white-icon (1).webp" 
                alt="LinkedIn" 
                className="w-6 h-6 object-contain"
              />
            </a>
          )}
          
          {/* Learn More Button */}
          <Link
            href={href}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-colors ${
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
    </div>
  );
}
