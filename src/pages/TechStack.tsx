import React from 'react';
import { motion } from 'framer-motion';
import { FileCode, Sparkles, Check, Database, Cpu, Globe, Award } from 'lucide-react';
import { PageTransition } from '../layouts/PageTransition';
import { GlowCard } from '../components/ui/GlowCard';
import { Orbit } from '../components/ui/Orbit';
import { SKILL_GROUPS } from '../constants/portfolioData';

export const TechStack: React.FC = () => {
  
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'languages':
        return <FileCode size={16} className="text-[#00F5D4]" />;
      case 'frameworks':
        return <Cpu size={16} className="text-[#8B5CF6]" />;
      case 'architecture':
        return <Sparkles size={16} className="text-[#3B82F6]" />;
      case 'networking & realtime':
        return <Globe size={16} className="text-[#10B981]" />;
      case 'database & cloud':
      case 'firebase suite':
        return <Database size={16} className="text-[#00F5D4]" />;
      case 'ai dev tools':
        return <Cpu size={16} className="text-[#8B5CF6]" />;
      case 'tools & devops':
        return <Cpu size={16} className="text-[#3B82F6]" />;
      default:
        return <Award size={16} className="text-[#10B981]" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-16">
        
        {/* Page Header */}
        <div className="text-left mb-12 flex flex-col items-start gap-4">
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#8B5CF6] uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles size={12} />
            Skill Matrix
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white dark:text-white light:text-[#0f172a]">
            Technologies & Tools
          </h1>
          <p className="text-sm md:text-base text-white/50 dark:text-white/50 light:text-black/50 max-w-xl">
            A comprehensive list of engineering languages, mobile frameworks, architectural styles, database tools, and AI workflows.
          </p>
        </div>

        {/* Orbit & Skills Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Grid: Skill cards */}
          <div className="lg:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {SKILL_GROUPS.map((group) => (
                <motion.div key={group.category} variants={itemVariants}>
                  <GlowCard className="hover:border-white/10 transition-colors h-full">
                    <div className="p-5 text-left h-full flex flex-col gap-4">
                      
                      {/* Header */}
                      <div className="flex items-center gap-2 pb-3 border-b border-white/5 dark:border-white/5 light:border-black/5">
                        {getCategoryIcon(group.category)}
                        <h3 className="font-heading font-bold text-sm text-white dark:text-white light:text-[#0f172a]">
                          {group.category}
                        </h3>
                      </div>

                      {/* Skills List */}
                      <div className="flex flex-col gap-2 mt-1">
                        {group.skills.map((skill) => (
                          <div 
                            key={skill.name}
                            className="flex items-center justify-between text-xs md:text-sm text-white/70 dark:text-white/70 light:text-[#0f172a]/80"
                          >
                            <div className="flex items-center gap-2">
                              <Check size={12} className="text-[#00F5D4] shrink-0" />
                              <span className="font-medium">{skill.name}</span>
                            </div>
                            <span className="text-[10px] font-mono text-white/40 dark:text-white/40 light:text-black/40">
                              {skill.level}
                            </span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Grid: Tech Orbit Graphic */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 flex items-center justify-center pt-8 lg:pt-0">
            <div className="w-full flex flex-col items-center gap-6">
              <Orbit />
              <div className="text-center max-w-xs">
                <h4 className="text-sm font-heading font-bold text-white dark:text-white light:text-[#0f172a]">Interactive Tech Orbit</h4>
                <p className="mt-2 text-xs text-white/40 dark:text-white/40 light:text-black/40 leading-relaxed">
                  Concentric orbits rotating around the Android kernel core, showing main professional stacks.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </PageTransition>
  );
};
