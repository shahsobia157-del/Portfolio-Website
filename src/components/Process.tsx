import React from 'react';
import { Compass, Palette, Code, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/portfolioData.ts';

export const Process: React.FC = () => {
  const icons = [
    <Compass className="w-4 h-4" />,
    <Palette className="w-4 h-4" />,
    <Code className="w-4 h-4" />,
    <CheckCircle className="w-4 h-4" />
  ];

  return (
    <section id="process" className="py-24 md:py-32 relative border-t border-[#C8B4F8]/15 bg-[#1B1026] overflow-hidden">
      {/* Decorative plum & purple ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7650A8]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-[#C8B4F8] font-medium mb-3">
              <span>06</span>
              <span aria-hidden="true">·</span>
              <span>Methodology</span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-sans font-medium text-[#F5F1FA] leading-[1.2] text-balance tracking-tight">
              From Idea to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8B4F8] to-[#E3D5FA]">
                Launch
              </span>
              .
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[15px] sm:text-[16px] text-[#B9A8D4] max-w-md font-normal leading-relaxed"
          >
            A disciplined four-phase delivery methodology ensuring predictable timelines, transparent collaboration, and uncompromising code quality.
          </motion.p>
        </div>

        {/* 4-Step Process Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative p-6 sm:p-7 bg-[#26153B] border border-[#C8B4F8]/20 hover:border-[#C8B4F8]/45 hover:shadow-[0_12px_35px_rgba(118,80,168,0.22)] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Step Number & Icon */}
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#C8B4F8]/15">
                  <span className="text-[20px] sm:text-[22px] font-sans font-medium text-[#C8B4F8] tabular-nums font-mono">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 bg-[#4A2472]/30 border border-[#C8B4F8]/25 flex items-center justify-center text-[#B9A8D4] group-hover:text-[#C8B4F8] group-hover:border-[#C8B4F8]/50 transition-colors">
                    {icons[idx]}
                  </div>
                </div>

                <h3 className="text-[17px] sm:text-[18px] font-sans font-medium text-[#F5F1FA] mb-1.5 group-hover:text-[#C8B4F8] transition-colors tracking-tight">
                  {step.title}
                </h3>

                <p className="text-[11px] font-medium uppercase tracking-wider text-[#C8B4F8] mb-2.5">
                  {step.summary}
                </p>

                <p className="text-[14px] text-[#B9A8D4] font-normal leading-relaxed">
                  {step.details}
                </p>
              </div>

              {/* Bottom Stage Progress Indicator */}
              <div className="pt-5 mt-6 border-t border-[#C8B4F8]/10 flex items-center justify-between text-[11px] text-[#B9A8D4]">
                <span>Phase 0{idx + 1} of 04</span>
                <span className="text-[#C8B4F8] opacity-0 group-hover:opacity-100 transition-opacity">Execution</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
