import React from 'react';
import { ArrowUp, ArrowUpRight, Play } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface FooterProps {
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#C8B4F8]/15 bg-[#1B1026] py-16 md:py-20 text-[#B9A8D4]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C8B4F8]/15">
          {/* Brand & Official Logo Lockup */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-[#C8B4F8]/50 p-0.5 bg-[#26153B] shadow-[0_0_18px_rgba(200,180,248,0.25)] shrink-0">
                <img
                  src={PERSONAL_INFO.logoVisual}
                  alt="Sobia Shah Official Logo"
                  className="w-full h-full object-cover scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h2 className="text-[18px] sm:text-[20px] font-sans font-medium tracking-[0.2em] text-[#F5F1FA] uppercase">
                  {PERSONAL_INFO.name}
                </h2>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="w-4 h-[1px] bg-[#7650A8]/60" />
                  <p className="text-[11px] tracking-[0.18em] text-[#C8B4F8] uppercase font-normal">
                    {PERSONAL_INFO.title}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[14px] text-[#B9A8D4] font-normal max-w-sm leading-relaxed">
              "Building clean, responsive and high-performing digital experiences."
            </p>

            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.14em] text-[#B9A8D4] hover:text-[#C8B4F8] transition-colors cursor-pointer group"
              >
                <Play className="w-2.5 h-2.5 fill-current text-[#C8B4F8] transition-transform group-hover:scale-110" />
                <span>Replay Brand Intro</span>
              </button>
            )}
          </div>

          {/* Quick Contact Links */}
          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-[0.16em] text-[#F5F1FA] mb-3 font-medium">
              Direct Inquiries
            </h3>
            <div className="space-y-2 text-[13px]">
              <p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-[#C8B4F8] transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#C8B4F8] transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </p>
              <p className="text-[#B9A8D4] pt-1">
                {PERSONAL_INFO.location}
              </p>
            </div>
          </div>

          {/* Connect & Social */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h3 className="text-xs uppercase tracking-[0.16em] text-[#F5F1FA] mb-3 font-medium">
                Professional Network
              </h3>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] text-[#F5F1FA] hover:text-[#C8B4F8] transition-colors group"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Back to top */}
            <div className="pt-6 md:pt-0">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#B9A8D4] hover:text-[#C8B4F8] transition-colors cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#C8B4F8]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#B9A8D4] gap-3">
          <p>© 2026 {PERSONAL_INFO.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <span>WordPress Web Developer</span>
            <span aria-hidden="true">·</span>
            <span>Remote Availability</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
