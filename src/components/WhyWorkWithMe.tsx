import React from 'react';
import { ShieldCheck, Zap, Sparkles, Layout, Target, Sliders } from 'lucide-react';
import { motion } from 'motion/react';
import { VALUE_PROPOSITIONS } from '../data/portfolioData.ts';

export const WhyWorkWithMe: React.FC = () => {
  const iconList = [
    <Sparkles className="w-4 h-4" />,
    <Layout className="w-4 h-4" />,
    <Target className="w-4 h-4" />,
    <Zap className="w-4 h-4" />,
    <Sliders className="w-4 h-4" />,
    <ShieldCheck className="w-4 h-4" />
  ];

  return (
    <section className="py-24 md:py-32 relative border-t border-[#C8B4F8]/15 bg-[#1B1026]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-[#C8B4F8] font-medium mb-3">
              <span>07</span>
              <span aria-hidden="true">·</span>
              <span>Engineering Philosophy</span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-sans font-medium text-[#F5F1FA] leading-[1.2] text-balance tracking-tight">
              Built With Purpose.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8B4F8] to-[#E3D5FA]">
                Designed To Perform
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
            Every technical decision is driven by clarity, scalability, and tangible business results rather than ephemeral trends.
          </motion.p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUE_PROPOSITIONS.map((prop, idx) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 sm:p-7 bg-[#26153B] border border-[#C8B4F8]/20 hover:border-[#C8B4F8]/45 hover:shadow-[0_12px_35px_rgba(118,80,168,0.22)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#C8B4F8]/10">
                  <div className="text-[#C8B4F8]">
                    {iconList[idx]}
                  </div>
                  <span className="text-xs text-[#B9A8D4] font-mono">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-[17px] sm:text-[18px] font-sans font-medium text-[#F5F1FA] mb-2 tracking-tight">
                  {prop.title}
                </h3>

                <p className="text-[14px] text-[#B9A8D4] font-normal leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
