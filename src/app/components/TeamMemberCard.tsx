"use client";

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Use different character limits based on team member
  const isJasonFogle = member.name === "Jason Fogle";
  const previewLength = isJasonFogle ? 200 : 110; // Show 200 for Jason Fogle, 110 for others
  const previewText = member.bio.substring(0, previewLength);
  const remainingText = member.bio.substring(previewLength).trim();
  
  // Check if there's actually more text to show
  const hasMoreText = remainingText.length > 0;

  return (
    <div className="bg-[#4B5563] rounded-lg p-6 shadow-sm border border-[#4B5563] overflow-hidden hover:shadow-md transition-shadow relative">
      <div className="flex flex-col">
        {/* Profile Picture and Basic Info - Top Row */}
        <div className="flex items-center mb-4">
          <div className="w-20 h-20 bg-button-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0 border-4 border-[#374153]">
            <span className="text-white font-bold text-xl">
              {member.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl text-white mb-1 font-bold tracking-tight leading-tight uppercase">
              {member.name}
            </h3>
            <p className="body-medium text-gray-400 font-semibold">
              {member.title}
            </p>
          </div>
        </div>

        {/* Bio Section - Bottom Section */}
        <div className="w-full mb-4">
          <p className="body-medium text-gray-300 leading-relaxed">
            {previewText}
            {hasMoreText && !isExpanded && (
              <>
                ...
              </>
            )}
            {hasMoreText && isExpanded && (
              <>
                {remainingText}
              </>
            )}
          </p>
        </div>

        {/* Read More/Show Less Button - Bottom Right */}
        {hasMoreText && (
          <div className="absolute bottom-4 right-6">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[#374153] hover:text-[#1F2937] font-bold cursor-pointer flex items-center space-x-1 transition-colors body-medium"
            >
              <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
              <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
