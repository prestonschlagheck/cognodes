"use client";

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative text-white" style={{ backgroundColor: 'var(--cn-navy-900)' }}>
      {/* Oblique Logo Background */}
      <div className="absolute inset-0 opacity-10">
        <Image 
          src="/Logos/CN Oblique.png" 
          alt="CogNodes Oblique Background" 
          fill
          className="object-cover"
        />
      </div>
      
              {/* Fade-out gradient at the top */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cn-navy-900 to-transparent z-20"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Main CogNodes Logo */}
          <div>
            <Image 
              src="/Logos/CN-W_B-Full.png" 
              alt="CogNodes Logo" 
              width={200}
              height={100}
              className="mb-4"
            />
          </div>
          
          {/* Client Plan Button */}
          <div>
            <a
              href="/login"
              className="btn-primary inline-flex items-center text-lg px-8 py-4"
            >
              Client Plan
              <ArrowRight className="ml-2 w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
