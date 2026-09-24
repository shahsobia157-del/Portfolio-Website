import React, { useState } from 'react';
import { SSMonogram } from './SSMonogram.tsx';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface BrandLogoProps {
  isScrolled?: boolean;
  showSubtitle?: boolean;
  size?: 'compact' | 'standard' | 'large';
  onClick?: () => void;
  className?: string;
  variant?: 'lockup' | 'emblem' | 'full';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  isScrolled = false,
  showSubtitle = true,
  size = 'standard',
  onClick,
  className = '',
  variant = 'lockup',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Responsive scaling calculations based on size & scroll state
  const emblemSize = isScrolled
    ? 34
    : size === 'large'
    ? 50
    : size === 'compact'
    ? 28
    : 40;

  if (variant === 'full') {
    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        className={`flex flex-col items-center text-center select-none cursor-pointer group ${className}`}
      >
        <div className="relative mb-3">
          <SSMonogram size={size === 'large' ? 88 : 72} isHovered={isHovered} variant="image" />
        </div>
        <h2 className="text-[17px] sm:text-[19px] font-sans font-medium uppercase tracking-[0.24em] text-[#F5F1FA] group-hover:text-[#C8B4F8] transition-colors">
          {PERSONAL_INFO.name}
        </h2>
        <div className="flex items-center gap-3 mt-1.5 w-full justify-center">
          <div className="w-8 h-[1px] bg-[#7650A8]/40 group-hover:bg-[#C8B4F8] transition-colors" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#C8B4F8] font-normal">
            WordPress Web Developer
          </span>
          <div className="w-8 h-[1px] bg-[#7650A8]/40 group-hover:bg-[#C8B4F8] transition-colors" />
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`group inline-flex items-center gap-3 sm:gap-3.5 select-none cursor-pointer transition-all duration-300 ${className}`}
    >
      {/* Official Logo Emblem with Soft Lavender Hover Sheen */}
      <div className="relative shrink-0 flex items-center justify-center">
        <SSMonogram
          size={emblemSize}
          isHovered={isHovered}
          variant="image"
          className="transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Ambient Subtle Lavender Halo on Hover */}
        <div
          className={`absolute inset-0 rounded-full pointer-events-none transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'radial-gradient(circle, rgba(200,180,248,0.35) 0%, transparent 70%)',
            transform: 'scale(1.35)',
          }}
        />
      </div>

      {/* Brand Typographic Identity */}
      <div className="flex flex-col justify-center overflow-hidden">
        <div
          className="flex items-center transition-transform duration-300 ease-out"
          style={{
            transform: isScrolled ? 'translateY(0)' : 'translateY(0)',
          }}
        >
          <span className="text-[15px] sm:text-[16px] font-sans font-medium tracking-[0.2em] uppercase text-[#F5F1FA] group-hover:text-[#C8B4F8] transition-colors duration-300 whitespace-nowrap">
            {PERSONAL_INFO.name}
          </span>
        </div>

        {/* Tagline / Subtitle */}
        {showSubtitle && (
          <div
            className={`transition-all duration-300 overflow-hidden ${
              isScrolled ? 'h-0 opacity-0' : 'h-4 opacity-100 mt-0.5'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="w-3 h-[1px] bg-[#7650A8] transition-all duration-300 group-hover:w-4 group-hover:bg-[#C8B4F8]" />
              <span className="text-[10px] sm:text-[10.5px] uppercase tracking-[0.16em] text-[#C8B4F8] font-normal whitespace-nowrap">
                WordPress Developer
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
