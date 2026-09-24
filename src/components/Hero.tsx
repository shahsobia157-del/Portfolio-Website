import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Code2, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { SSMonogram } from './SSMonogram.tsx';

interface HeroProps {
  onViewWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWork, onContactClick }) => {
  const [logoHovered, setLogoHovered] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-40 sm:pt-48 md:pt-56 lg:pt-60 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#1B1026] via-[#241238] to-[#1B1026]"
    >
      {/* Subtle, elegant plum & midnight purple ambient background lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main top-center deep purple radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(118,80,168,0.22),transparent_70%)] pointer-events-none" />

        {/* Secondary gentle floating purple orb */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.22, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 right-[10%] w-[500px] h-[500px] bg-gradient-to-br from-[#7650A8]/25 via-[#4A2472]/15 to-transparent rounded-full blur-[140px] pointer-events-none"
        />

        {/* Third subtle counter-glow on lower left */}
        <div className="absolute bottom-10 left-[5%] w-[450px] h-[400px] bg-[#4A2472]/18 rounded-full blur-[130px] pointer-events-none" />

        {/* Refined subtle geometric hairline grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#C8B4F8_1px,transparent_1px),linear-gradient(to_bottom,#C8B4F8_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_65%,transparent_100%)] opacity-[0.035]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full my-auto">
        {/* Top Developer Status Pill with Official Logo & Subtle Lavender Glow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8"
        >
          <div
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
            className="flex items-center gap-2.5 px-3.5 py-1.5 bg-[#26153B]/90 border border-[#C8B4F8]/25 hover:border-[#C8B4F8]/60 transition-all duration-300 cursor-pointer group shadow-[0_0_20px_rgba(200,180,248,0.12)]"
          >
            <SSMonogram size={28} isHovered={logoHovered} variant="image" />
            <div className="flex items-center gap-2 text-[12px]">
              <span className="text-[#F5F1FA] font-medium tracking-wide">{PERSONAL_INFO.name}</span>
              <span className="text-[#B9A8D4]">·</span>
              <span className="text-[#C8B4F8] tracking-normal font-normal">{PERSONAL_INFO.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[12px] text-[#B9A8D4]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8B4F8] shadow-[0_0_8px_#C8B4F8] animate-pulse" />
            <span>{PERSONAL_INFO.experience} Experience · Available for Selected Projects</span>
          </div>
        </motion.div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Clean Modern Headline & Controlled Action Controls */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Main Headline - Simple, clean, modern, easy to read */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[34px] sm:text-[42px] lg:text-[48px] font-sans font-medium tracking-tight text-[#F5F1FA] leading-[1.18] mb-6 text-balance"
            >
              Building clean, responsive and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8B4F8] via-[#E3D5FA] to-[#B9A8D4]">
                high-performing
              </span>{' '}
              digital experiences.
            </motion.h1>

            {/* Supporting Bio Text */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15px] sm:text-[16px] text-[#B9A8D4] font-normal leading-relaxed max-w-xl mb-9"
            >
              Hi, I'm <span className="font-medium text-[#F5F1FA]">{PERSONAL_INFO.name}</span>. I engineer bespoke WordPress architectures, tailor-made Elementor Pro layouts, and WooCommerce storefronts with clean code, accessibility, and sub-2-second speed.
            </motion.p>

            {/* Action Buttons with Smooth Lavender / Plum Glow States */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-11"
            >
              <button
                onClick={onViewWork}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-[14px] sm:text-[15px] font-medium bg-[#F5F1FA] text-[#1B1026] hover:bg-[#C8B4F8] transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(200,180,248,0.2)] hover:shadow-[0_0_25px_rgba(200,180,248,0.4)] active:scale-[0.98]"
              >
                <span>View Selected Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[14px] sm:text-[15px] font-medium text-[#F5F1FA] border border-[#C8B4F8]/30 hover:border-[#C8B4F8]/70 hover:text-[#C8B4F8] bg-[#26153B]/60 hover:bg-[#351B54]/60 backdrop-blur-sm transition-all duration-300 cursor-pointer active:scale-[0.98]"
              >
                <span>Let's Discuss a Project</span>
              </button>
            </motion.div>

            {/* Credibility Key Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="grid grid-cols-3 gap-6 pt-7 border-t border-[#C8B4F8]/15 max-w-lg"
            >
              <div>
                <p className="text-[20px] sm:text-[22px] font-sans font-medium text-[#F5F1FA] tabular-nums">
                  3<span className="text-[#C8B4F8]">+</span>
                </p>
                <p className="text-[11px] sm:text-[12px] uppercase tracking-wider text-[#B9A8D4] mt-0.5">
                  Years Exp
                </p>
              </div>

              <div>
                <p className="text-[20px] sm:text-[22px] font-sans font-medium text-[#F5F1FA] tabular-nums">
                  100<span className="text-[#C8B4F8]">%</span>
                </p>
                <p className="text-[11px] sm:text-[12px] uppercase tracking-wider text-[#B9A8D4] mt-0.5">
                  Responsive
                </p>
              </div>

              <div>
                <p className="text-[20px] sm:text-[22px] font-sans font-medium text-[#F5F1FA] tabular-nums">
                  &lt;2<span className="text-[#C8B4F8]">s</span>
                </p>
                <p className="text-[11px] sm:text-[12px] uppercase tracking-wider text-[#B9A8D4] mt-0.5">
                  Target Speed
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-End Developer Showcase Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Luminous plum back-glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4A2472]/30 to-[#7650A8]/25 rounded-none blur-xl opacity-70 pointer-events-none" />

            <div className="relative bg-[#26153B] border border-[#C8B4F8]/20 hover:border-[#C8B4F8]/45 transition-all duration-500 shadow-[0_20px_50px_rgba(15,7,25,0.7)]">
              {/* Window Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#201033] border-b border-[#C8B4F8]/15 text-xs text-[#B9A8D4]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]/70" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#B9A8D4]">
                  <Terminal className="w-3 h-3 text-[#C8B4F8]" />
                  <span>sobiashah.dev / wordpress-architect</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Developer Workspace Visual Container */}
              <div className="p-4 sm:p-5 bg-[#1B1026]/70">
                <div className="relative aspect-[16/11] overflow-hidden border border-[#C8B4F8]/20 bg-[#241238]">
                  <img
                    src={PERSONAL_INFO.heroVisual}
                    alt="Sobia Shah - Modern WordPress Development Studio Interface"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1026]/95 via-transparent to-black/30" />

                  {/* Overlay Developer Focus Badge with Official Logo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#26153B]/95 backdrop-blur-md border border-[#C8B4F8]/25 flex items-center justify-between text-xs shadow-lg">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full overflow-hidden border border-[#C8B4F8]/50 shrink-0 shadow-[0_0_10px_rgba(200,180,248,0.3)]">
                        <img
                          src={PERSONAL_INFO.logoVisual}
                          alt="Sobia Shah Official Logo"
                          className="w-full h-full object-cover scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.14em] text-[#C8B4F8] font-medium">Sobia Shah</p>
                        <p className="text-[#F5F1FA] text-[13px] font-sans font-medium">WordPress Web Developer</p>
                      </div>
                    </div>
                    <span className="text-[11px] text-[#C8B4F8] border border-[#C8B4F8]/30 px-2 py-0.5 bg-[#4A2472]/40">
                      Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Minimal floating accent badge */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-[#2D1847] border border-[#C8B4F8]/25 px-3.5 py-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.7)] items-center gap-2.5 backdrop-blur-md">
                <Code2 className="w-4 h-4 text-[#C8B4F8]" />
                <span className="text-xs text-[#F5F1FA]">HTML5 · CSS3 · Modern JS · PHP Hooks</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="mt-12 flex justify-center relative z-10">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-1.5 text-[#B9A8D4] hover:text-[#C8B4F8] transition-colors cursor-pointer group"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C8B4F8]" />
        </a>
      </div>
    </section>
  );
};
