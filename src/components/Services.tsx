import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/portfolioData.ts';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 relative border-t border-[#C8B4F8]/15 bg-[#1B1026]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-[#7650A8]/8 rounded-full blur-[150px] pointer-events-none" />

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
              <span>02</span>
              <span aria-hidden="true">·</span>
              <span>Services & Offerings</span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-sans font-medium text-[#F5F1FA] leading-[1.2] text-balance tracking-tight">
              Tailored Solutions For{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8B4F8] to-[#E3D5FA]">
                Modern Brands
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
            Comprehensive WordPress engineering combining architectural stability with visual sophistication and search engine performance.
          </motion.p>
        </div>

        {/* 5 Luxury Service Cards */}
        <div className="space-y-4">
          {SERVICES.map((service, index) => {
            const isHovered = activeCard === index;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group p-6 sm:p-8 md:p-9 border transition-all duration-300 relative overflow-hidden transform hover:-translate-y-1 ${
                  isHovered
                    ? 'bg-[#311A4D] border-[#C8B4F8]/45 shadow-[0_12px_35px_rgba(118,80,168,0.22)]'
                    : 'bg-[#26153B] border-[#C8B4F8]/20 hover:border-[#C8B4F8]/35'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left: Index & Title */}
                  <div className="lg:col-span-4 flex items-start gap-5">
                    <span className="text-[14px] text-[#C8B4F8] font-medium pt-0.5 transition-transform duration-300 group-hover:translate-x-1 font-mono">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-[18px] sm:text-[20px] font-sans font-medium text-[#F5F1FA] group-hover:text-[#C8B4F8] transition-colors mb-1 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-[12px] uppercase tracking-[0.14em] text-[#B9A8D4] font-normal">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Middle: Natural Human Description */}
                  <div className="lg:col-span-5">
                    <p className="text-[15px] text-[#B9A8D4] font-normal leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Revealable Deliverables on Hover / Focus */}
                    <div
                      className={`grid grid-cols-1 sm:grid-cols-2 gap-2 transition-all duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-75'
                      }`}
                    >
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2 text-[13px] text-[#F5F1FA]">
                          <span className="text-[#C8B4F8] mt-0.5 font-bold">·</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Interactive Consultation CTA */}
                  <div className="lg:col-span-3 flex lg:justify-end items-center pt-2 lg:pt-0">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-[14px] font-medium text-[#F5F1FA] group-hover:text-[#1B1026] group-hover:bg-[#C8B4F8] border border-[#C8B4F8]/30 group-hover:border-[#C8B4F8] transition-all duration-300 cursor-pointer whitespace-nowrap active:scale-[0.98] group-hover:shadow-[0_0_20px_rgba(200,180,248,0.35)]"
                    >
                      <span>Inquire Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
