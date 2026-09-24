import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types/portfolio.ts';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-lg">
      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#26153B] border border-[#C8B4F8]/30 overflow-y-auto shadow-[0_25px_60px_rgba(15,7,25,0.9)] flex flex-col">
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#201033]/95 border-b border-[#C8B4F8]/20 backdrop-blur-md">
          <div className="flex items-center gap-3 text-xs text-[#B9A8D4]">
            <span className="text-[#C8B4F8] font-medium">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>Case Study Showcase</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 text-[#B9A8D4] hover:text-[#C8B4F8] hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8">
          {/* Visual Showcase */}
          <div className="relative border border-[#C8B4F8]/20 bg-[#1B1026] overflow-hidden group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[460px] object-cover object-top"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 right-3 px-3 py-1 bg-[#1B1026]/90 backdrop-blur-sm border border-[#C8B4F8]/25 text-[11px] text-[#F5F1FA]">
              WordPress Production Mockup
            </div>
          </div>

          {/* Title & Metadata Strip */}
          <div>
            <h3 className="text-[22px] sm:text-[26px] font-sans font-medium text-[#F5F1FA] mb-2.5 tracking-tight">
              {project.title}
            </h3>
            <p className="text-[15px] sm:text-[16px] text-[#B9A8D4] font-normal leading-relaxed mb-6">
              {project.fullOverview}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#201033] border border-[#C8B4F8]/15 text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#B9A8D4] block">Client Sector</span>
                <span className="text-[#F5F1FA] font-medium mt-0.5 block">{project.clientType}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#B9A8D4] block">Timeline / Year</span>
                <span className="text-[#F5F1FA] font-medium mt-0.5 block">{project.year}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#B9A8D4] block">Role</span>
                <span className="text-[#C8B4F8] font-medium mt-0.5 block">Lead WP Developer</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#B9A8D4] block">Performance</span>
                <span className="text-[#F5F1FA] font-medium mt-0.5 block">95+ PageSpeed</span>
              </div>
            </div>
          </div>

          {/* Deliverables & Technical Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#C8B4F8]/15">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-[0.16em] text-[#C8B4F8] mb-4">
                Key Deliverables
              </h4>
              <div className="space-y-2.5">
                {project.deliverables.map((deliv) => (
                  <div key={deliv} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B9A8D4]">
                    <span className="text-[#C8B4F8] mt-0.5 shrink-0 font-bold">·</span>
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-[0.16em] text-[#C8B4F8] mb-4">
                Architecture & Tooling
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs bg-[#201033] border border-[#C8B4F8]/20 text-[#F5F1FA]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="text-xs font-medium uppercase tracking-[0.16em] text-[#C8B4F8] mb-3">
                Key Features
              </h4>
              <div className="space-y-2">
                {project.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-2 text-xs text-[#B9A8D4]">
                    <span className="text-[#C8B4F8]/70 mt-0.5">·</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTA Bar */}
          <div className="pt-6 border-t border-[#C8B4F8]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#B9A8D4]">
              Interested in an architecture tailored similarly to this project?
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onInquire(project.title)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-[14px] font-medium text-white bg-gradient-to-r from-[#4A2472] to-[#7650A8] hover:from-[#5A2C8B] hover:to-[#8B62C5] transition-all cursor-pointer shadow-[0_0_20px_rgba(200,180,248,0.25)] active:scale-[0.98]"
              >
                <span>Request Similar Build</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
