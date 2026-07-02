import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Calendar, BookOpen } from 'lucide-react';
import { PageTransition } from '../layouts/PageTransition';
import { GlowCard } from '../components/ui/GlowCard';
import { ACHIEVEMENTS, EDUCATION, CERTIFICATIONS, TIMELINE_EVENTS } from '../constants/portfolioData';

export const Achievements: React.FC = () => {

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-16">
        
        {/* Page Header */}
        <div className="text-left mb-12 flex flex-col items-start gap-4">
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#3B82F6] uppercase tracking-widest flex items-center gap-1.5">
            <Trophy size={12} />
            Milestones
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white dark:text-white light:text-[#0f172a]">
            Achievements & Impact
          </h1>
          <p className="text-sm md:text-base text-white/50 dark:text-white/50 light:text-black/50 max-w-xl">
            A chronological timeline of my career steps, academic records, professional certifications, and key value indicators.
          </p>
        </div>

        {/* Metrics Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACHIEVEMENTS.map((metric) => (
              <GlowCard key={metric.id} className="p-6 hover:border-[#3B82F6]/30 transition-colors text-left flex flex-col gap-3 justify-between h-full bg-gradient-to-tr from-white/[0.01] to-[#3B82F6]/5">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono text-white/40 uppercase">{metric.timeline}</span>
                  <h3 className="text-3xl font-heading font-extrabold text-[#00F5D4] group-hover:scale-105 transition-transform duration-300">
                    {metric.metric}
                  </h3>
                  <h4 className="font-heading font-bold text-sm text-white dark:text-white light:text-[#0f172a]">
                    {metric.title}
                  </h4>
                </div>
                <p className="text-xs text-white/50 dark:text-white/50 light:text-black/50 leading-relaxed mt-2 border-t border-white/5 pt-3">
                  {metric.description}
                </p>
              </GlowCard>
            ))}
          </div>
        </section>

        {/* Timeline & Credentials Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Timeline Events */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-white dark:text-white light:text-[#0f172a] mb-2 flex items-center gap-2">
              <Calendar size={18} className="text-[#3B82F6]" />
              Career Timeline
            </h2>

            <div className="relative border-l border-white/10 dark:border-white/10 light:border-black/10 pl-6 ml-2 space-y-8 text-left w-full">
              {TIMELINE_EVENTS.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative"
                >
                  {/* Circle node connector */}
                  <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#3B82F6] border border-slate-950 flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-white animate-ping" />
                  </span>
                  
                  <span className="text-[10px] font-mono font-bold text-[#00F5D4] tracking-wider px-2 py-0.5 rounded bg-white/5">
                    {event.year}
                  </span>
                  
                  <h3 className="font-heading font-bold text-sm md:text-base text-white dark:text-white light:text-[#0f172a] mt-2">
                    {event.title}
                  </h3>
                  
                  <p className="mt-2 text-xs md:text-sm text-white/50 dark:text-white/50 light:text-black/50 leading-relaxed max-w-xl">
                    {event.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Credentials (Education & Certifications) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Academic Education */}
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-white dark:text-white light:text-[#0f172a] mb-2 flex items-center gap-2">
                <BookOpen size={18} className="text-[#8B5CF6]" />
                Education
              </h2>

              <div className="flex flex-col gap-4 w-full">
                {EDUCATION.map((edu) => (
                  <GlowCard key={edu.degree} className="p-5 hover:border-[#8B5CF6]/30 transition-colors text-left">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-heading font-bold text-xs md:text-sm text-white dark:text-white light:text-[#0f172a] leading-tight">
                        {edu.degree}
                      </h3>
                      <span className="text-[9px] font-mono text-[#8B5CF6] whitespace-nowrap bg-white/5 px-2 py-0.5 rounded">
                        {edu.timeline}
                      </span>
                    </div>
                    <p className="text-xs text-white/50 dark:text-white/50 light:text-black/50 mt-1 font-medium">{edu.school}</p>
                    <span className="inline-block mt-3 text-[10px] font-mono text-[#00F5D4] bg-white/5 px-2 py-0.5 rounded">
                      {edu.grade}
                    </span>
                  </GlowCard>
                ))}
              </div>
            </div>

            {/* Certifications list */}
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-white dark:text-white light:text-[#0f172a] mb-2 flex items-center gap-2">
                <Award size={18} className="text-[#00F5D4]" />
                Certifications
              </h2>

              <div className="flex flex-col gap-4 w-full">
                {CERTIFICATIONS.map((cert) => (
                  <GlowCard key={cert.title} className="p-4 hover:border-[#00F5D4]/30 transition-colors text-left">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-heading font-bold text-xs md:text-sm text-white dark:text-white light:text-[#0f172a] leading-tight">
                        {cert.title}
                      </h3>
                      <Award size={14} className="text-[#00F5D4] shrink-0" />
                    </div>
                    <span className="inline-block text-[9px] font-mono text-white/40 dark:text-white/40 light:text-black/40 mt-2">
                      Issued by {cert.issuer}
                    </span>
                  </GlowCard>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </PageTransition>
  );
};
