import React, { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData.ts';
import { ProjectItem } from '../types/portfolio.ts';
import { ProjectModal } from './ProjectModal.tsx';

interface ProjectsProps {
  onInquireProject: (projectTitle: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onInquireProject }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Corporate', 'E-Commerce', 'Real Estate', 'Hospitality', 'Creative'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => {
        if (selectedFilter === 'Corporate') return p.category.includes('Corporate') || p.category.includes('Business') || p.category.includes('Venture');
        if (selectedFilter === 'E-Commerce') return p.category.includes('E-commerce');
        if (selectedFilter === 'Real Estate') return p.category.includes('Real Estate');
        if (selectedFilter === 'Hospitality') return p.category.includes('Restaurant');
        if (selectedFilter === 'Creative') return p.category.includes('Creative');
        return true;
      });

  return (
    <section id="projects" className="py-24 md:py-32 relative border-t border-[#C8B4F8]/15 bg-[#1B1026]">
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
              <span>05</span>
              <span aria-hidden="true">·</span>
              <span>Selected Work</span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-sans font-medium text-[#F5F1FA] leading-[1.2] text-balance tracking-tight">
              Projects That Speak{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8B4F8] to-[#E3D5FA]">
                Through Design
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
            A curated collection of bespoke WordPress websites, custom WooCommerce storefronts, and high-performance digital architectures.
          </motion.p>
        </div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-1.5 p-1 bg-[#201033] border border-[#C8B4F8]/20 mb-12 overflow-x-auto"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 text-[14px] font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                selectedFilter === cat
                  ? 'bg-[#311A4D] text-[#C8B4F8] border border-[#C8B4F8]/45 shadow-[0_0_15px_rgba(200,180,248,0.2)]'
                  : 'text-[#B9A8D4] hover:text-[#F5F1FA]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* 6 Projects Grid with Staggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-[#26153B] border border-[#C8B4F8]/20 hover:border-[#C8B4F8]/45 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_15px_40px_rgba(118,80,168,0.22)]"
            >
              <div>
                {/* Browser Mockup Top Bar */}
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#201033] border-b border-[#C8B4F8]/15 text-[11px] text-[#B9A8D4]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#ef4444]/70" />
                    <span className="w-2 h-2 rounded-full bg-[#eab308]/70" />
                    <span className="w-2 h-2 rounded-full bg-[#22c55e]/70" />
                  </div>
                  <span className="truncate max-w-[150px] text-[#B9A8D4] font-mono text-[10px]">{project.typeTag.toLowerCase()}.preview</span>
                  <span className="text-[#C8B4F8] font-medium text-[10px]">WP</span>
                </div>

                {/* Visual Preview / Browser Mockup Window with Hover Zoom & Overlay */}
                <div
                  onClick={() => setActiveProject(project)}
                  className="relative aspect-[16/10] overflow-hidden bg-[#1B1026] cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transform transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle plum darkening gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#26153B] via-transparent to-transparent opacity-85" />

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#26153B]/95 text-[13px] text-[#C8B4F8] border border-[#C8B4F8]/40 shadow-[0_0_20px_rgba(200,180,248,0.3)]">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Project</span>
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-5 sm:p-6">
                  {/* Clean metadata */}
                  <div className="flex items-center gap-2 text-xs text-[#B9A8D4] mb-2">
                    <span className="text-[#C8B4F8] font-medium">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Project Title with upward hover movement */}
                  <h3
                    onClick={() => setActiveProject(project)}
                    className="text-[17px] sm:text-[18px] font-sans font-medium text-[#F5F1FA] group-hover:text-[#C8B4F8] transition-all duration-300 cursor-pointer mb-2 transform group-hover:-translate-y-0.5"
                  >
                    {project.title}
                  </h3>

                  <p className="text-[13px] text-[#B9A8D4] line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-[#C8B4F8]/10 text-[11px] text-[#B9A8D4]">
                    {project.techStack.slice(0, 3).map((tool) => (
                      <span key={tool} className="text-[#F5F1FA]">
                        {tool}
                        <span className="text-[#C8B4F8]/40 ml-1.5">/</span>
                      </span>
                    ))}
                    <span className="text-[#C8B4F8] font-medium">95+ Speed</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 pb-5 pt-0 flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-[13px] text-[#B9A8D4] group-hover:text-[#C8B4F8] inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onInquire={(title) => {
            setActiveProject(null);
            onInquireProject(title);
          }}
        />
      )}
    </section>
  );
};
