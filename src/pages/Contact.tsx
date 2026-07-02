import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, FileText, Send, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { PageTransition } from '../layouts/PageTransition';
import { GlowCard } from '../components/ui/GlowCard';
import { PERSONAL_INFO } from '../constants/portfolioData';
import { copyToClipboard } from '../utils';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    copyToClipboard(text).then((success) => {
      if (success) {
        setCopiedField(label);
        setTimeout(() => setCopiedField(null), 2000);
      }
    });
  };

  const handleDownloadResume = () => {
    window.open(`${import.meta.env.BASE_URL}Zeel_Modh_Resume_July_ATS.pdf`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-16">
        
        {/* Page Header */}
        <div className="text-left mb-12 flex flex-col items-start gap-4">
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F5D4] uppercase tracking-widest flex items-center gap-1.5">
            <Mail size={12} />
            Connect Portal
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white dark:text-white light:text-[#0f172a]">
            Get In Touch
          </h1>
          <p className="text-sm md:text-base text-white/50 dark:text-white/50 light:text-black/50 max-w-xl">
            Have a project in mind, need a mobile consultant, or looking to hire a Senior/Lead Mobile Developer? Send a message below.
          </p>
        </div>

        {/* Contact Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Connect Deck */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Card 1: Email */}
            <GlowCard className="p-5 hover:border-[#00F5D4]/30 transition-colors text-left">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 text-[#00F5D4] shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono uppercase text-white/30 dark:text-white/30 light:text-black/30">Email Address</h3>
                    <p className="text-sm md:text-base text-white dark:text-white light:text-[#0f172a] font-bold mt-0.5">{PERSONAL_INFO.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 text-white/60 hover:text-[#00F5D4] transition-all cursor-pointer relative"
                  title="Copy email"
                >
                  <Copy size={14} />
                  {copiedField === 'email' && (
                    <span className="absolute bottom-full mb-1 right-0 text-[9px] bg-slate-900 text-white font-mono px-2 py-0.5 rounded border border-white/10 whitespace-nowrap animate-fade-in">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </GlowCard>

            {/* Card 2: Phone */}
            <GlowCard className="p-5 hover:border-[#8B5CF6]/30 transition-colors text-left">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 text-[#8B5CF6] shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono uppercase text-white/30 dark:text-white/30 light:text-black/30">Mobile Contact</h3>
                    <p className="text-sm md:text-base text-white dark:text-white light:text-[#0f172a] font-bold mt-0.5">{PERSONAL_INFO.phone}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 text-white/60 hover:text-[#8B5CF6] transition-all cursor-pointer relative"
                  title="Copy phone"
                >
                  <Copy size={14} />
                  {copiedField === 'phone' && (
                    <span className="absolute bottom-full mb-1 right-0 text-[9px] bg-slate-900 text-white font-mono px-2 py-0.5 rounded border border-white/10 whitespace-nowrap animate-fade-in">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
            </GlowCard>

            {/* Card 3: Location */}
            <GlowCard className="p-5 hover:border-[#3B82F6]/30 transition-colors text-left">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 text-[#3B82F6] shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase text-white/30 dark:text-white/30 light:text-black/30">Location</h3>
                  <p className="text-sm md:text-base text-white dark:text-white light:text-[#0f172a] font-bold mt-0.5">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </GlowCard>

            {/* Card 4: Resume & Profiles */}
            <GlowCard className="p-5 hover:border-[#10B981]/30 transition-colors text-left">
              <div className="flex flex-col gap-4">
                <h3 className="text-xs font-mono uppercase text-white/30 dark:text-white/30 light:text-black/30">Additional Assets</h3>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={handleDownloadResume}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <FileText size={14} />
                    Open PDF CV
                  </button>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all flex items-center justify-center"
                    title="GitHub Profile"
                  >
                    <FaGithub size={14} />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all flex items-center justify-center"
                    title="LinkedIn Profile"
                  >
                    <FaLinkedin size={14} />
                  </a>
                </div>
              </div>
            </GlowCard>

          </div>

          {/* Right Column: Interactive Email Delivery Form */}
          <div className="lg:col-span-7">
            <GlowCard className="p-6 md:p-8 hover:border-[#00F5D4]/20 transition-colors">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                <h3 className="text-lg font-heading font-bold text-white dark:text-white light:text-[#0f172a]">
                  Send a Direct Message
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] font-mono uppercase text-white/40 dark:text-white/40 light:text-black/40">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="bg-white/3 hover:bg-white/5 focus:bg-white/5 border border-white/5 rounded-xl px-4 py-2.5 text-xs md:text-sm text-white outline-none focus:border-[#00F5D4]/40 transition-colors"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] font-mono uppercase text-white/40 dark:text-white/40 light:text-black/40">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="bg-white/3 hover:bg-white/5 focus:bg-white/5 border border-white/5 rounded-xl px-4 py-2.5 text-xs md:text-sm text-white outline-none focus:border-[#00F5D4]/40 transition-colors"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-[10px] font-mono uppercase text-white/40 dark:text-white/40 light:text-black/40">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="bg-white/3 hover:bg-white/5 focus:bg-white/5 border border-white/5 rounded-xl px-4 py-2.5 text-xs md:text-sm text-white outline-none focus:border-[#00F5D4]/40 transition-colors"
                    placeholder="e.g. Consulting Project Opportunity"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-mono uppercase text-white/40 dark:text-white/40 light:text-black/40">Message Description</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="bg-white/3 hover:bg-white/5 focus:bg-white/5 border border-white/5 rounded-xl px-4 py-2.5 text-xs md:text-sm text-white outline-none focus:border-[#00F5D4]/40 transition-colors resize-none"
                    placeholder="Describe your design, scope, or job roles..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00F5D4] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#8B5CF6] text-slate-900 font-bold text-xs md:text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 hover:-translate-y-0.5 self-start disabled:opacity-50"
                >
                  {isSubmitting ? 'Delivering...' : 'Send Message'}
                  <Send size={14} />
                </button>

                {submitSuccess && (
                  <div className="mt-3 p-3.5 rounded-xl border border-[#10B981]/20 bg-[#10B981]/10 text-xs md:text-sm text-emerald-400 font-semibold flex items-center gap-2 animate-fade-in">
                    <CheckCircle size={16} />
                    Message delivered successfully! Zeel will contact you shortly.
                  </div>
                )}
              </form>
            </GlowCard>
          </div>

        </div>

      </div>
    </PageTransition>
  );
};
