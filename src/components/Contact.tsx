import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, Copy, Check, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface ContactProps {
  preselectedService?: string | null;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: preselectedService || 'WordPress Development',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate graceful professional submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const projectTypes = [
    'WordPress Development',
    'Elementor Development',
    'WooCommerce Store',
    'Theme & Plugin Customization',
    'Website Optimization & Troubleshooting'
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative border-t border-[#C8B4F8]/15 bg-[#1B1026] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[#7650A8]/10 rounded-full blur-[160px] pointer-events-none" />

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
              <span>08</span>
              <span aria-hidden="true">·</span>
              <span>Direct Inquiries</span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-sans font-medium text-[#F5F1FA] leading-[1.2] text-balance tracking-tight">
              Have a Project in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8B4F8] to-[#E3D5FA]">
                Mind
              </span>
              ?
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[15px] sm:text-[16px] text-[#B9A8D4] max-w-md font-normal leading-relaxed"
          >
            Let's turn your idea into a clean, modern and high-performing digital experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Details & Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Email Block */}
            <div className="p-6 bg-[#26153B] border border-[#C8B4F8]/20 hover:border-[#C8B4F8]/45 hover:shadow-[0_4px_20px_rgba(118,80,168,0.2)] transition-all group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#B9A8D4]">
                  Direct Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-[12px] text-[#B9A8D4] hover:text-[#C8B4F8] transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#C8B4F8]" />
                      <span className="text-[#C8B4F8]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-[17px] sm:text-[18px] font-sans text-[#F5F1FA] group-hover:text-[#C8B4F8] transition-colors block break-all tracking-tight"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            {/* Phone Block */}
            <div className="p-6 bg-[#26153B] border border-[#C8B4F8]/20 hover:border-[#C8B4F8]/45 hover:shadow-[0_4px_20px_rgba(118,80,168,0.2)] transition-all group">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#B9A8D4] block mb-2">
                Direct Phone / WhatsApp
              </span>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="text-[17px] sm:text-[18px] font-sans text-[#F5F1FA] group-hover:text-[#C8B4F8] transition-colors block tabular-nums tracking-tight"
              >
                {PERSONAL_INFO.phone}
              </a>
            </div>

            {/* Location Block */}
            <div className="p-6 bg-[#26153B] border border-[#C8B4F8]/20">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#B9A8D4] block mb-2">
                Base Location & Availability
              </span>
              <p className="text-[15px] text-[#F5F1FA]">
                {PERSONAL_INFO.location}
              </p>
              <p className="text-xs text-[#B9A8D4] mt-1">
                Working with remote teams and clients across all global time zones.
              </p>
            </div>

            {/* LinkedIn Block */}
            <div className="p-6 bg-[#26153B] border border-[#C8B4F8]/20 hover:border-[#C8B4F8]/45 hover:shadow-[0_4px_20px_rgba(118,80,168,0.2)] transition-all group">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[#B9A8D4] block mb-1">
                    Professional Network
                  </span>
                  <p className="text-[15px] font-medium text-[#F5F1FA]">
                    LinkedIn Profile
                  </p>
                </div>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium text-[#1B1026] bg-[#F5F1FA] hover:bg-[#C8B4F8] transition-colors cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(200,180,248,0.35)] active:scale-[0.98]"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 bg-[#26153B] border border-[#C8B4F8]/20 p-6 sm:p-8 md:p-10 relative shadow-[0_20px_50px_rgba(15,7,25,0.7)]"
          >
            <h3 className="text-[20px] sm:text-[22px] font-sans font-medium text-[#F5F1FA] mb-1.5 tracking-tight">
              Start a Conversation
            </h3>
            <p className="text-xs text-[#B9A8D4] mb-6 font-normal">
              Fill in your project requirements below to receive a response within 24 hours.
            </p>

            {isSubmitted ? (
              <div className="p-8 bg-[#201033] border border-[#C8B4F8]/40 text-center space-y-4 shadow-[0_0_30px_rgba(118,80,168,0.2)]">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#4A2472]/40 border border-[#C8B4F8]/50 flex items-center justify-center text-[#C8B4F8] shadow-[0_0_15px_rgba(200,180,248,0.3)]">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-[18px] font-sans font-medium text-[#F5F1FA]">
                  Message Successfully Prepared
                </h4>
                <p className="text-xs text-[#B9A8D4] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, {formData.name}. You can also email me directly at{' '}
                  <span className="text-[#C8B4F8] font-medium">{PERSONAL_INFO.email}</span> for immediate project scheduling.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-[13px] font-medium text-white bg-gradient-to-r from-[#4A2472] to-[#7650A8] hover:from-[#5A2C8B] hover:to-[#8B62C5] transition-all shadow-[0_0_20px_rgba(200,180,248,0.25)]"
                  >
                    <span>Send via Default Email Client</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', projectType: 'WordPress Development', message: '' });
                    }}
                    className="px-4 py-2.5 text-[13px] text-[#B9A8D4] hover:text-[#F5F1FA] transition-colors cursor-pointer"
                  >
                    Reset
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B9A8D4] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#201033] border border-[#C8B4F8]/20 text-sm text-[#F5F1FA] placeholder-[#8E7EAA] focus:outline-none focus:border-[#C8B4F8] focus:shadow-[0_0_15px_rgba(200,180,248,0.2)] transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B9A8D4] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alexander@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#201033] border border-[#C8B4F8]/20 text-sm text-[#F5F1FA] placeholder-[#8E7EAA] focus:outline-none focus:border-[#C8B4F8] focus:shadow-[0_0_15px_rgba(200,180,248,0.2)] transition-all"
                    />
                  </div>
                </div>

                {/* Project Type Select */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B9A8D4] mb-1.5">
                    Project Scope / Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#201033] border border-[#C8B4F8]/20 text-sm text-[#F5F1FA] focus:outline-none focus:border-[#C8B4F8] focus:shadow-[0_0_15px_rgba(200,180,248,0.2)] transition-all cursor-pointer"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#26153B] text-[#F5F1FA]">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B9A8D4] mb-1.5">
                    Project Details & Goals *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your website needs, timeline expectations, or current bottlenecks..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#201033] border border-[#C8B4F8]/20 text-sm text-[#F5F1FA] placeholder-[#8E7EAA] focus:outline-none focus:border-[#C8B4F8] focus:shadow-[0_0_15px_rgba(200,180,248,0.2)] transition-all resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-[11px] text-[#B9A8D4]">
                    Strict confidentiality guaranteed. No third-party spam.
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-[14px] font-medium text-white bg-gradient-to-r from-[#4A2472] to-[#7650A8] hover:from-[#5A2C8B] hover:to-[#8B62C5] transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(200,180,248,0.25)] hover:shadow-[0_0_30px_rgba(200,180,248,0.4)] disabled:opacity-50 active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
