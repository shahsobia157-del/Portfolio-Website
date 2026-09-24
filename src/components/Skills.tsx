import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData.ts';

export const Skills: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const activeCategory = SKILL_CATEGORIES[selectedCategoryIndex];

  return (
    <section id="skills" className="py-24 md:py-32 relative border-t border-[#C8B4F8]/15 bg-[#1B1026]">
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
              <span>03</span>
              <span aria-hidden="true">·</span>
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-sans font-medium text-[#F5F1FA] leading-[1.2] text-balance tracking-tight">
              Engineered With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8B4F8] to-[#E3D5FA]">
                Technical Discipline
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
            Modern development practices focused on speed, maintainable code architectures, and frictionless client editorial workflows.
          </motion.p>
        </div>

        {/* Interactive Skill Category Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-2 p-1.5 bg-[#201033] border border-[#C8B4F8]/20 mb-8"
        >
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => {
                setSelectedCategoryIndex(idx);
                setActiveSkill(null);
              }}
              className={`px-4 py-2.5 text-[14px] font-medium transition-all duration-200 cursor-pointer text-left whitespace-nowrap ${
                selectedCategoryIndex === idx
                  ? 'bg-[#311A4D] text-[#C8B4F8] shadow-sm border border-[#C8B4F8]/45 shadow-[0_0_15px_rgba(200,180,248,0.2)]'
                  : 'text-[#B9A8D4] hover:text-[#F5F1FA]'
              }`}
            >
              <span className="text-[12px] text-[#B9A8D4] mr-2">0{idx + 1}</span>
              {cat.category}
            </button>
          ))}
        </motion.div>

        {/* Active Category Display & Detailed Competency Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#26153B] border border-[#C8B4F8]/20 p-6 md:p-10 relative overflow-hidden"
        >
          <div className="mb-8 pb-5 border-b border-[#C8B4F8]/15 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-[18px] sm:text-[20px] font-sans font-medium text-[#F5F1FA] tracking-tight">
                {activeCategory.category}
              </h3>
              <p className="text-[14px] text-[#B9A8D4] mt-1 font-normal">
                {activeCategory.description}
              </p>
            </div>
            <span className="text-[11px] text-[#C8B4F8] tracking-wider uppercase border border-[#C8B4F8]/30 px-3 py-1 bg-[#4A2472]/40 self-start md:self-auto font-medium">
              {activeCategory.skills.length} Competencies
            </span>
          </div>

          {/* Interactive Skill Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeCategory.skills.map((skill) => {
              const isSelected = activeSkill === skill.name;
              return (
                <div
                  key={skill.name}
                  onClick={() => setActiveSkill(isSelected ? null : skill.name)}
                  className={`p-4 sm:p-5 border transition-all duration-200 cursor-pointer hover:-translate-y-0.5 ${
                    isSelected
                      ? 'bg-[#381B57] border-[#C8B4F8] shadow-[0_0_20px_rgba(200,180,248,0.25)]'
                      : 'bg-[#201033] border-[#C8B4F8]/15 hover:border-[#C8B4F8]/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-[14px] sm:text-[15px] font-medium text-[#F5F1FA] tracking-wide">
                      {skill.name}
                    </h4>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8B4F8]" />
                  </div>
                  <p className="text-[13px] text-[#B9A8D4] leading-relaxed">
                    {skill.focus}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Clean Technical Index */}
          <div className="mt-10 pt-6 border-t border-[#C8B4F8]/15">
            <div className="flex items-center justify-between flex-wrap gap-4 text-xs text-[#B9A8D4]">
              <span>Verified WordPress Core, WooCommerce & Page Builders Stack</span>
              <span className="text-[#C8B4F8]">100% Standards Compliant</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
