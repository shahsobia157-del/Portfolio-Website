import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface LogoIntroProps {
  onComplete: () => void;
}

export const LogoIntro: React.FC<LogoIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'reveal' | 'focus' | 'settle' | 'exit'>('reveal');

  useEffect(() => {
    const tFocus = setTimeout(() => setPhase('focus'), 500);
    const tSettle = setTimeout(() => setPhase('settle'), 1050);
    const tExit = setTimeout(() => setPhase('exit'), 1300);
    const tDone = setTimeout(() => onComplete(), 1550);

    return () => {
      clearTimeout(tFocus);
      clearTimeout(tSettle);
      clearTimeout(tExit);
      clearTimeout(tDone);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 'exit' ? 0 : 1 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      onClick={onComplete}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1B1026] text-[#F5F1FA] cursor-pointer select-none overflow-hidden"
      title="Click to enter"
    >
      {/* Subtle deep plum & rich purple ambient glow centered */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[#4A2472]/30 via-[#7650A8]/25 to-[#241238]/30 blur-[140px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Official Brand Logo Emblem */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6 flex items-center justify-center"
        >
          {/* Outer luminous lavender orbital halo */}
          <div className="absolute inset-0 rounded-full border border-[#C8B4F8]/30 shadow-[0_0_35px_rgba(200,180,248,0.25)] animate-pulse" />

          {/* Logo container */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-[#C8B4F8]/60 bg-[#26153B] shadow-2xl relative">
            <img
              src={PERSONAL_INFO.logoVisual}
              alt="Sobia Shah Official Logo"
              className="w-full h-full object-cover object-center scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Orbit Node Dot Accent */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[-8px] pointer-events-none"
          >
            <span className="absolute top-0 right-3 w-2 h-2 rounded-full bg-[#C8B4F8] shadow-[0_0_12px_#C8B4F8]" />
          </motion.div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10, letterSpacing: '0.15em' }}
          animate={{ opacity: 1, y: 0, letterSpacing: '0.24em' }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="font-sans text-[22px] sm:text-[26px] font-normal text-[#F5F1FA] uppercase tracking-[0.24em] mb-2.5"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        {/* Brand Subtitle Framed by Lavender Lines */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
          className="flex items-center gap-3 text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-[#C8B4F8]"
        >
          <div className="w-8 h-[1px] bg-[#7650A8]/50" />
          <span>WordPress Web Developer</span>
          <div className="w-8 h-[1px] bg-[#7650A8]/50" />
        </motion.div>

        {/* Click to skip indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="text-[10px] uppercase tracking-[0.2em] text-[#B9A8D4] mt-8"
        >
          Click anywhere to skip
        </motion.p>
      </div>
    </motion.div>
  );
};
