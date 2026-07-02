import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code2, CalendarRange, Ship, Milestone, CheckSquare } from 'lucide-react';
import { PageTransition } from '../layouts/PageTransition';
import { GlowCard } from '../components/ui/GlowCard';

interface LeadershipRole {
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  description: string;
  points: string[];
}

export const Leadership: React.FC = () => {

  const areas: LeadershipRole[] = [
    {
      title: 'Mentoring & Reviews',
      icon: <Code2 size={20} className="text-[#00F5D4]" />,
      subtitle: 'Building Code Quality Across the Team',
      description: 'Mentored a team of 4 mobile developers at Redspark Technologies. Established Git branching guidelines, automated static analyzers (Oxlint/Android Lints), and led daily PR review sessions to maintain zero build failures.',
      points: [
        'Organized weekly architecture reviews explaining clean mapping and Room indexes.',
        'Adopted automated unit lints checking for thread safety and coroutine leaks.',
        'Established styling guides for Kotlin classes, lowering codebase duplication.'
      ]
    },
    {
      title: 'Sprint Planning & Estimations',
      icon: <CalendarRange size={20} className="text-[#8B5CF6]" />,
      subtitle: 'Agile Timelines and Story Sizing',
      description: 'Facilitated bi-weekly sprint planning and backlog grooming sessions. Utilized story points and historical velocity measurements to size features accurately, securing a 95% on-time delivery record.',
      points: [
        'Delegated tasks based on developer skills and career growth paths.',
        'Set up Jira tickets mapping epics directly to architectural modules.',
        'Moderated daily standups tracking blocker items and coordinate handshakes.'
      ]
    },
    {
      title: 'Release & Deployment Operations',
      icon: <Ship size={20} className="text-[#3B82F6]" />,
      subtitle: 'Play Store Rollout Strategies',
      description: 'Controlled deployment paths for over 20+ applications on the Google Play Store. Established staged rollouts (1% to 100%), configured crash alarm trackers via Crashlytics, and managed app store assets.',
      points: [
        'Configured automated fastlane deployment scripts mapping release logs.',
        'Managed app-signing keys securely using Android keystore servers.',
        'Monitored real-time telemetry (Crashlytics, ANRs), rolling back unstable builds within minutes.'
      ]
    },
    {
      title: 'Technical Decision Making',
      icon: <Milestone size={20} className="text-[#10B981]" />,
      subtitle: 'Choosing Technologies for Business Value',
      description: 'Evaluated tools and frameworks to balance engineering velocity and performance. Spearheaded the integration of TensorFlow Lite, native React Native bridges, and Agora RTC platforms based on client budgets.',
      points: [
        'Wrote custom Kotlin plugins bridging Bluetooth BLE protocols, bypassing buggy packages.',
        'Pioneered internal adopt-AI guides (Claude, Cursor), speeding up codebases by 40%.',
        'Coordinated with product designers to inspect UI assets before development.'
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-16">
        
        {/* Page Header */}
        <div className="text-left mb-12 flex flex-col items-start gap-4">
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F5D4] uppercase tracking-widest flex items-center gap-1.5">
            <Users size={12} />
            Management Profile
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white dark:text-white light:text-[#0f172a]">
            Engineering Leadership
          </h1>
          <p className="text-sm md:text-base text-white/50 dark:text-white/50 light:text-black/50 max-w-xl">
            How I guide engineering teams, orchestrate agile sprints, evaluate technology risks, and deploy production software.
          </p>
        </div>

        {/* Leadership Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {areas.map((area, idx) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col h-full"
            >
              <GlowCard className="p-6 md:p-8 text-left flex flex-col justify-between h-full hover:border-[#00F5D4]/20 transition-colors">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      {area.icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-white dark:text-white light:text-[#0f172a]">
                        {area.title}
                      </h3>
                      <span className="text-[10px] font-mono text-[#00F5D4] uppercase tracking-wider">{area.subtitle}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs md:text-sm text-white/60 dark:text-white/60 light:text-[#0f172a]/70 leading-relaxed mt-2">
                    {area.description}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/5 dark:border-white/5 light:border-black/5">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/30 dark:text-white/30 light:text-black/30 mb-3 flex items-center gap-1"><CheckSquare size={12} /> Execution Details</h4>
                  <ul className="space-y-2">
                    {area.points.map((point, idxPoint) => (
                      <li key={idxPoint} className="flex gap-2 items-start text-xs text-white/70 dark:text-white/70 light:text-[#0f172a]/80 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] mt-1.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

      </div>
    </PageTransition>
  );
};
