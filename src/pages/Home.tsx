import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Cpu, ShieldCheck, HeartHandshake, Lightbulb } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { PageTransition } from '../layouts/PageTransition';
import { Orbit } from '../components/ui/Orbit';
import { StatCard } from '../components/ui/StatCard';
import { PERSONAL_INFO } from '../constants/portfolioData';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const statistics = [
    { value: '4.5+', label: 'Years Experience' },
    { value: '30+', label: 'Published Apps' },
    { value: '20+', label: 'Production Apps' },
    { value: '1.6M+', label: 'Downloads' },
    { value: '12+', label: 'SDK Integrations' },
    { value: '4', label: 'Developers Mentored' }
  ];

  const highlights = [
    {
      icon: <Cpu className="text-[#00F5D4]" size={24} />,
      title: 'Scalable Architecture',
      description: 'Expert in MVVM, Clean Architecture, and designing modular structures that sustain continuous growth.'
    },
    {
      icon: <ShieldCheck className="text-[#8B5CF6]" size={24} />,
      title: 'Offline-First Mindset',
      description: 'Deep experience engineering local-sync databases (Room, SQLite, Hive) with background task execution.'
    },
    {
      icon: <Lightbulb className="text-[#3B82F6]" size={24} />,
      title: 'Product Thinking',
      description: 'Translating product specifications into features that drive high retention, monetization, and stellar user ratings.'
    },
    {
      icon: <HeartHandshake className="text-[#10B981]" size={24} />,
      title: 'Team Mentorship',
      description: 'Guiding junior developers, reviewing code bases, designing sprint targets, and setting up collaborative systems.'
    }
  ];

  const handleDownloadResume = () => {
    window.open(`${import.meta.env.BASE_URL}Zeel_Modh_Resume_July_ATS.pdf`, '_blank');
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-16">
        
        {/* HERO SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
          {/* Typographic Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F5D4] uppercase tracking-widest flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#00F5D4] animate-pulse" />
              Available for senior lead roles
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight leading-[1.1] text-white dark:text-white light:text-[#0f172a]"
            >
              Crafting Next-Gen <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-[#3B82F6] to-[#8B5CF6]">
                Mobile Ecosystems
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-white/60 dark:text-white/60 light:text-[#0f172a]/70 max-w-xl leading-relaxed"
            >
              I am <span className="text-white dark:text-white light:text-[#0f172a] font-semibold">{PERSONAL_INFO.name}</span>, a {PERSONAL_INFO.title} & {PERSONAL_INFO.subtitle}. I architect high-performance, offline-first applications with local biometrics, IoT linkages, and clean reactive states.
            </motion.p>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full mt-4"
            >
              <button
                onClick={() => navigate('/projects')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00F5D4] to-[#3B82F6] hover:from-[#3B82F6] hover:to-[#8B5CF6] text-slate-900 font-semibold text-sm transition-all duration-300 shadow-lg cursor-pointer flex items-center gap-2 hover:-translate-y-0.5 group"
              >
                View Case Studies
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleDownloadResume}
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 dark:border-white/10 light:border-black/10 hover:border-[#00F5D4]/40 hover:bg-white/10 text-white dark:text-white light:text-[#0f172a] font-semibold text-sm transition-all duration-300 cursor-pointer flex items-center gap-2 hover:-translate-y-0.5"
              >
                <FileText size={16} />
                Download CV
              </button>

              <div className="flex items-center gap-2 ml-0 sm:ml-4 mt-2 sm:mt-0">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                  title="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                  title="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Interactive Orbit Graphic */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full"
            >
              <Orbit />
            </motion.div>
          </div>
        </section>

        {/* LIVE STATISTICS */}
        <section className="mt-20 md:mt-32">
          <div className="text-center mb-12">
            <h2 className="text-xs uppercase font-mono tracking-widest text-[#00F5D4]">Track Record</h2>
            <p className="text-2xl md:text-3xl font-heading font-bold mt-2 text-white dark:text-white light:text-[#0f172a]">Impact by the Numbers</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {statistics.map((stat, idx) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                index={idx}
              />
            ))}
          </div>
        </section>

        {/* ABOUT & PHILOSOPHY */}
        <section className="mt-24 md:mt-36 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Engineering Story */}
          <div className="lg:col-span-6 flex flex-col items-start text-left gap-6">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#8B5CF6] uppercase tracking-widest">
              My Philosophy
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-white dark:text-white light:text-[#0f172a]">
              Engineering for Scale, <br />
              Designing for Speed.
            </h2>
            <div className="text-white/60 dark:text-white/60 light:text-[#0f172a]/70 text-sm md:text-base space-y-4 leading-relaxed">
              <p>
                Over the past 4.5+ years, I have lived at the intersection of Android development and cross-platform Flutter programming, shipping over 20+ applications to the Google Play Store with a focus on enterprise stability and customer engagement.
              </p>
              <p>
                My approach to building software centers on <span className="text-white dark:text-white light:text-[#0f172a] font-semibold">Clean Architecture</span>. I decouple views from backend logic, write thread-safe caching layers, and bridge cross-platform frameworks to native code whenever performance demands it.
              </p>
              <p>
                As a Team Lead, I align sprints, mentor junior engineers on memory management, and integrate AI development suites (Claude, Cursor, DeepSeek) to reduce development lifecycles by 40% without compromising documentation or testing.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-start text-left gap-4 hover:border-white/10 hover:bg-white/5 transition-all shadow-md"
              >
                <div className="p-3 rounded-xl bg-white/5 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm text-white dark:text-white light:text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-white/50 dark:text-white/50 light:text-black/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* WORK HIGHLIGHTS CTA */}
        <section className="mt-24 md:mt-36 p-8 md:p-12 rounded-3xl relative overflow-hidden text-center glass-panel border border-white/10 bg-gradient-to-tr from-white/[0.01] to-[#8B5CF6]/5">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#00F5D4]/10 blur-[80px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#8B5CF6]/10 blur-[80px] pointer-events-none rounded-full" />
          
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 relative z-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white dark:text-white light:text-[#0f172a]">
              Ready to Explore 15 Production Applications?
            </h2>
            <p className="text-xs md:text-sm text-white/50 dark:text-white/50 light:text-black/50 max-w-md">
              From real-time astrology super-apps and fitness ecosystems to system-level utility blockers and facial recognition kiosks.
            </p>
            <button
              onClick={() => navigate('/projects')}
              className="px-6 py-3 rounded-xl bg-[#00F5D4] text-slate-900 font-semibold text-sm transition-transform hover:scale-105 cursor-pointer shadow-lg hover:shadow-[#00F5D4]/20 flex items-center gap-2"
            >
              Browse Case Studies
              <ArrowRight size={14} />
            </button>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};
