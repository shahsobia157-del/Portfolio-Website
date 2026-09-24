import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Play } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { BrandLogo } from './BrandLogo.tsx';

interface NavbarProps {
  onOpenContact: () => void;
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onReplayIntro }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
        isScrolled
          ? 'py-3.5 bg-[#1B1026]/85 backdrop-blur-xl border-b border-[#C8B4F8]/15 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]'
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('#hero');
          }}
          className="group inline-flex items-center"
        >
          <BrandLogo isScrolled={isScrolled} />
        </a>

        {/* Center: Clean, Spaced Navigation Links with Smooth Lavender Hover */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[14px] font-normal text-[#B9A8D4]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="hover:text-[#F5F1FA] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gradient-to-r after:from-[#7650A8] after:to-[#C8B4F8] hover:after:w-full after:transition-all after:duration-300 after:shadow-[0_0_8px_#C8B4F8]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Replay Brand Intro Icon Button */}
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              title="Replay brand intro animation"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase text-[#B9A8D4] hover:text-[#C8B4F8] border border-[#C8B4F8]/20 hover:border-[#C8B4F8]/50 bg-[#26153B]/50 backdrop-blur-sm transition-all duration-300 cursor-pointer"
            >
              <Play className="w-2.5 h-2.5 fill-current text-[#C8B4F8]" />
              <span>Intro</span>
            </button>
          )}

          {/* Contact Button */}
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-[14px] font-medium text-[#F5F1FA] bg-gradient-to-r from-[#26153B] to-[#2E1848] hover:from-[#351B54] hover:to-[#402166] border border-[#C8B4F8]/30 hover:border-[#C8B4F8]/70 hover:shadow-[0_0_20px_rgba(200,180,248,0.25)] transition-all duration-300 rounded-none whitespace-nowrap cursor-pointer active:scale-[0.98]"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C8B4F8]" />
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[#F5F1FA] hover:text-[#C8B4F8] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#1B1026]/98 backdrop-blur-2xl border-b border-[#C8B4F8]/20 px-6 py-8 shadow-[0_20px_40px_rgba(0,0,0,0.85)] transition-all duration-300">
          <nav className="flex flex-col gap-4 text-sm font-medium text-[#B9A8D4]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="hover:text-[#F5F1FA] py-2 border-b border-[#C8B4F8]/10 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#C8B4F8] text-xs">→</span>
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-[14px] font-medium text-[#F5F1FA] bg-gradient-to-r from-[#4A2472] to-[#7650A8] hover:from-[#5A2C8B] hover:to-[#8B62C5] transition-all shadow-[0_0_20px_rgba(200,180,248,0.25)]"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
