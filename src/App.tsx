import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Services } from './components/Services.tsx';
import { Skills } from './components/Skills.tsx';
import { Experience } from './components/Experience.tsx';
import { Projects } from './components/Projects.tsx';
import { Process } from './components/Process.tsx';
import { WhyWorkWithMe } from './components/WhyWorkWithMe.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { LogoIntro } from './components/LogoIntro.tsx';

export default function App() {
  const [inquiryService, setInquiryService] = useState<string | null>(null);
  const [showIntro, setShowIntro] = useState(true);

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setInquiryService(serviceName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplayIntro = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowIntro(true);
  };

  return (
    <div className="min-h-screen bg-[#1B1026] text-[#F5F1FA] selection:bg-[#7650A8]/40 selection:text-[#FFFFFF] font-body relative">
      {/* Cinematic Logo Entrance Loading Screen */}
      <AnimatePresence>
        {showIntro && (
          <LogoIntro
            key="brand-logo-intro"
            onComplete={() => setShowIntro(false)}
          />
        )}
      </AnimatePresence>

      {/* Fixed Luxury Navigation */}
      <Navbar
        onOpenContact={() => scrollToContact()}
        onReplayIntro={handleReplayIntro}
      />

      {/* Main Content Architecture */}
      <main>
        {/* Hero Section */}
        <Hero
          onViewWork={scrollToProjects}
          onContactClick={() => scrollToContact()}
        />

        {/* About Section */}
        <About onContactClick={() => scrollToContact()} />

        {/* Services Section */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* Skills Section */}
        <Skills />

        {/* Experience & Education Section */}
        <Experience />

        {/* Selected Work / Projects Section */}
        <Projects onInquireProject={(projectTitle) => scrollToContact(`Inquiry for ${projectTitle}`)} />

        {/* Methodology / Process Section */}
        <Process />

        {/* Value Proposition / Why Work With Me */}
        <WhyWorkWithMe />

        {/* Contact & Inquiries */}
        <Contact preselectedService={inquiryService} />
      </main>

      {/* Minimal Luxury Footer with Replay Intro Support */}
      <Footer onReplayIntro={handleReplayIntro} />
    </div>
  );
}
