import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { EXPERIENCES, PERSONAL_INFO } from '../data/portfolioData.ts';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative border-t border-[#C8B4F8]/15 bg-[#1B1026]">
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
              <span>04</span>
              <span aria-hidden="true">·</span>
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-sans font-medium text-[#F5F1FA] leading-[1.2] text-balance tracking-tight">
              Professional{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8B4F8] to-[#E3D5FA]">
                Experience
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
            Three continuous years of client delivery, complex WordPress builds, and performance optimization for remote digital teams.
          </motion.p>
        </div>

        {/* Vertical Experience Timeline */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l border-[#C8B4F8]/20 space-y-10 sm:space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#1B1026] border-2 border-[#C8B4F8] shadow-[0_0_10px_#C8B4F8] group-hover:scale-125 transition-transform duration-300" />

              {/* Experience Card */}
              <div className="bg-[#26153B] border border-[#C8B4F8]/20 p-6 sm:p-8 md:p-9 hover:border-[#C8B4F8]/45 hover:shadow-[0_12px_35px_rgba(118,80,168,0.22)] transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-4 mb-4 border-b border-[#C8B4F8]/15 gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#B9A8D4] mb-1">
                      <span className="text-[#C8B4F8] font-medium">{exp.period}</span>
                      <span aria-hidden="true">·</span>
                      <span>{exp.type}</span>
                    </div>
                    <h3 className="text-[18px] sm:text-[20px] font-sans font-medium text-[#F5F1FA] tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="text-left lg:text-right">
                    <span className="text-[15px] font-medium text-[#F5F1FA] block">
                      {exp.company}
                    </span>
                    <span className="text-xs text-[#B9A8D4]">
                      Software & Digital Agency
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2.5 mb-5">
                  {exp.description.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-[15px] text-[#B9A8D4] font-normal leading-relaxed">
                      <span className="text-[#C8B4F8] mt-1 shrink-0 font-bold">·</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Technology focus */}
                <div className="pt-3.5 border-t border-[#C8B4F8]/10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#B9A8D4]">
                  <span className="text-[11px] uppercase tracking-wider text-[#C8B4F8] font-medium">Tech Focus:</span>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="text-[#F5F1FA]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-10 border-t border-[#C8B4F8]/15"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#C8B4F8] font-medium mb-4">
            <span>Academic Background</span>
          </div>

          <div className="bg-[#26153B] border border-[#C8B4F8]/20 p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#C8B4F8]/40 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#4A2472]/40 border border-[#C8B4F8]/30 flex items-center justify-center text-[#C8B4F8] shrink-0 mt-0.5">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-[18px] sm:text-[20px] font-sans font-medium text-[#F5F1FA] tracking-tight">
                  {PERSONAL_INFO.education.degree}
                </h3>
                <p className="text-[14px] text-[#B9A8D4] mt-0.5">
                  {PERSONAL_INFO.education.institution}
                </p>
                <p className="text-xs text-[#B9A8D4] mt-1">
                  {PERSONAL_INFO.education.focus}
                </p>
              </div>
            </div>

            <div className="text-left md:text-right shrink-0">
              <span className="text-xs text-[#C8B4F8] tracking-wider uppercase border border-[#C8B4F8]/30 px-3 py-1 bg-[#4A2472]/40 font-medium">
                Graduated {PERSONAL_INFO.education.graduated}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
