import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface SSMonogramProps {
  className?: string;
  size?: number | string;
  isHovered?: boolean;
  animateOnMount?: boolean;
  variant?: 'image' | 'vector' | 'auto';
}

export const SSMonogram: React.FC<SSMonogramProps> = ({
  className = '',
  size = 38,
  isHovered = false,
  variant = 'auto',
}) => {
  // In auto mode, for sizes >= 28 we use the official logo image with crisp lavender border and luxury plum glow
  if (variant === 'image' || variant === 'auto') {
    return (
      <div
        className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}
        style={{ width: size, height: size }}
      >
        <div
          className={`w-full h-full rounded-full overflow-hidden border transition-all duration-300 relative flex items-center justify-center bg-[#26153B] ${
            isHovered
              ? 'border-[#C8B4F8] shadow-[0_0_20px_rgba(200,180,248,0.45)] scale-105'
              : 'border-[#C8B4F8]/35 shadow-[0_0_12px_rgba(200,180,248,0.2)]'
          }`}
        >
          <img
            src={PERSONAL_INFO.logoVisual}
            alt="Sobia Shah Official Logo"
            className="w-full h-full object-cover object-center transform scale-110 transition-transform duration-500 ease-out"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        aria-label="Sobia Shah Monogram Logo"
      >
        <defs>
          <linearGradient id="ssPlumGrad" x1="15%" y1="10%" x2="85%" y2="90%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#F5F1FA" />
            <stop offset="65%" stopColor="#C8B4F8" />
            <stop offset="100%" stopColor="#7650A8" />
          </linearGradient>

          <linearGradient id="ssLavenderOrbit" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5F1FA" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#C8B4F8" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#7650A8" stopOpacity="0.4" />
          </linearGradient>

          <filter id="ssGlow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Angled Orbital Ring */}
        <ellipse
          cx="60"
          cy="56"
          rx="47"
          ry="17"
          transform="rotate(-18 60 56)"
          stroke="url(#ssLavenderOrbit)"
          strokeWidth="1.2"
          fill="none"
          className="transition-all duration-300"
        />

        {/* Orbit Node Dot on the right */}
        <circle
          cx="103"
          cy="42"
          r="2.2"
          fill="#FFFFFF"
          filter={isHovered ? 'url(#ssGlow)' : undefined}
          className="transition-all duration-300"
        />

        {/* Coding Bracket </> on the left */}
        <g
          transform="translate(23, 49)"
          stroke="#C8B4F8"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={isHovered ? 1 : 0.85}
        >
          <path d="M 4 1 L 0 5 L 4 9" />
          <line x1="8" y1="1" x2="6" y2="9" strokeWidth="1.3" />
          <path d="M 10 1 L 14 5 L 10 9" />
        </g>

        {/* Top-Left 'S' Ribbon */}
        <path
          d="M 58 24 C 44 24 38 31 38 40 C 38 50 49 53 62 57 C 76 61 84 68 84 79 C 84 89 74 97 58 97 C 46 97 38 91 35 83"
          stroke="url(#ssPlumGrad)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Bottom-Right 'S' Intertwined Ribbon */}
        <path
          d="M 64 24 C 76 24 82 30 82 38 C 82 46 72 50 58 54 C 44 58 37 65 37 75 C 37 84 45 92 60 92 C 73 92 81 85 85 77"
          stroke="url(#ssPlumGrad)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Integrated Mouse Pointer Cursor Arrow at the tip of bottom S */}
        <g transform="translate(82, 73)">
          <path
            d="M 0 0 L 8 4 L 4.5 5.5 L 6.5 9 L 4.5 10 L 2.5 6.5 L 0 8 Z"
            fill="url(#ssPlumGrad)"
            stroke="#1B1026"
            strokeWidth="0.5"
            filter={isHovered ? 'url(#ssGlow)' : undefined}
          />
        </g>
      </svg>
    </div>
  );
};
