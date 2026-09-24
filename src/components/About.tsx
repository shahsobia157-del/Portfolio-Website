import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const coreSkillHighlights = [
    { name: 'WordPress Architecture', focus: 'Deep core architecture, custom post types, hooks & bespoke child themes' },
    { name: 'Responsive Interface Design', focus: 'Fluid multi-device layouts tailored for flawless UX on every screen' },
    { name: 'Core Web Vitals & Speed', focus: 'Sub-2s load speeds, asset minification, caching & 95+ PageSpeed scores' },
    { name: 'Search Engine Architecture', focus: 'Clean semantic markup, JSON-LD schema & crawlable structure' },
    { name: 'E-commerce & WooCommerce', focus: 'Custom checkout pipelines, payment gateways & catalog optimization' }
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative border-t border-[#C8B4F8]/15 bg-[#1B1026]">
      {/* Subtle plum & lavender ambiance */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#7650A8]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section kicker */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-[#C8B4F8] font-medium mb-3"
        >
          <span>01</span>
          <span aria-hidden="true">·</span>
          <span>About Me</span>
        </motion.div>

        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-sans font-medium text-[#F5F1FA] leading-[1.2] text-balance tracking-tight">
              Turning Ideas Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8B4F8] to-[#E3D5FA]">
                Digital Experiences
              </span>
              .
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-end"
          >
            <p className="text-[15px] sm:text-[16px] text-[#B9A8D4] font-normal leading-relaxed">
              With 3 years of hands-on professional experience, I engineer customized, responsive, and user-friendly websites. I specialize in turning complex client requirements into clean, functional, and dependable web solutions that elevate brand presence and drive real commercial value.
            </p>
          </motion.div>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Feature Card: Developer Workspace Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#26153B] border border-[#C8B4F8]/20 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#C8B4F8]/45 hover:shadow-[0_12px_35px_rgba(118,80,168,0.22)] transition-all duration-300"
          >
            <div>
              {/* Unique Workspace Image */}
              <div className="relative aspect-[4/3] overflow-hidden border border-[#C8B4F8]/20 mb-6 bg-[#1B1026]">
                <img
                  src={PERSONAL_INFO.aboutVisual}
                  alt="Sobia Shah - WordPress Development Workspace with Code Editor and Multi-Display Setup"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1026]/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-[#F5F1FA] px-3 py-1.5 bg-[#26153B]/95 backdrop-blur-sm border border-[#C8B4F8]/25">
                  <div className="flex items-center gap-2">
                    <img
                      src={PERSONAL_INFO.logoVisual}
                      alt="Sobia Shah Official Logo"
                      className="w-4 h-4 rounded-full border border-[#C8B4F8]/50 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[#C8B4F8] font-medium">Sobia Shah Studio</span>
                  </div>
                  <span className="text-[#B9A8D4]">Sargodha, Pakistan</span>
                </div>
              </div>

              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[36px] sm:text-[42px] font-sans text-[#F5F1FA] font-medium tracking-tight tabular-nums">
                  3<span className="text-[#C8B4F8] font-normal">+</span>
                </span>
                <span className="text-[13px] uppercase tracking-wider text-[#B9A8D4] font-medium">
                  Years Production Experience
                </span>
              </div>

              <p className="text-[15px] text-[#B9A8D4] leading-relaxed">
                Specialized in production WordPress development across remote distributed teams, handling end-to-end client specifications, custom theme engineering, performance tuning, and technical problem-solving.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#C8B4F8]/15 flex items-center justify-between text-xs text-[#B9A8D4]">
              <span className="text-[12px]">BSc Computer Science · Univ of Sargodha</span>
              <span className="text-[#C8B4F8] text-[12px] font-medium">Remote Worldwide</span>
            </div>
          </motion.div>

          {/* Right Feature Card: Skill Highlights Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 bg-[#26153B] border border-[#C8B4F8]/20 p-6 sm:p-8 flex flex-col justify-between hover:border-[#C8B4F8]/35 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#C8B4F8]/15">
                <h3 className="text-[18px] sm:text-[20px] font-sans text-[#F5F1FA] font-medium tracking-tight">
                  Core Architectural Capabilities
                </h3>
                <span className="text-xs uppercase tracking-[0.16em] text-[#C8B4F8]">
                  Expertise
                </span>
              </div>

              {/* Skill list */}
              <div className="space-y-3.5 mb-8">
                {coreSkillHighlights.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="p-3.5 sm:p-4 bg-[#201033] border border-[#C8B4F8]/15 hover:border-[#C8B4F8]/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <h4 className="text-[14px] sm:text-[15px] font-sans font-medium text-[#F5F1FA] tracking-tight">
                        {skill.name}
                      </h4>
                      <p className="text-[13px] text-[#B9A8D4] mt-0.5">
                        {skill.focus}
                      </p>
                    </div>
                    <span className="text-[12px] text-[#C8B4F8] font-mono shrink-0">
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action Footer */}
            <div className="pt-6 border-t border-[#C8B4F8]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-[13px] text-[#B9A8D4]">
                Available for contract roles, agency overflow, and custom builds.
              </p>
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-[14px] font-medium text-[#1B1026] bg-[#F5F1FA] hover:bg-[#C8B4F8] transition-all cursor-pointer shadow-[0_4px_15px_rgba(200,180,248,0.2)] hover:shadow-[0_0_20px_rgba(200,180,248,0.4)] whitespace-nowrap active:scale-[0.98]"
              >
                <span>Work With Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
