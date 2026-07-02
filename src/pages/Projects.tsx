import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FolderGit, Play, ArrowRight } from 'lucide-react';
import { PageTransition } from '../layouts/PageTransition';
import { GlowCard } from '../components/ui/GlowCard';
import { PROJECTS } from '../constants/portfolioData';

export const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filterCategories = [
    'All',
    'Android',
    'Flutter',
    'Kotlin',
    'Java',
    'Healthcare',
    'Enterprise',
    'AI',
    'Sports',
    'Marketplace',
    'Realtime'
  ];

  // Filter projects dynamically
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesFilter =
        activeFilter === 'All' ||
        project.category.some(cat => cat.toLowerCase() === activeFilter.toLowerCase()) ||
        project.techStack.some(tech => tech.toLowerCase() === activeFilter.toLowerCase());

      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 15 } }
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-16">
        
        {/* Page Header */}
        <div className="text-left mb-12 flex flex-col items-start gap-4">
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00F5D4] uppercase tracking-widest flex items-center gap-1.5">
            <FolderGit size={12} />
            Case Studies
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white dark:text-white light:text-[#0f172a]">
            Production Mobile Apps
          </h1>
          <p className="text-sm md:text-base text-white/50 dark:text-white/50 light:text-black/50 max-w-xl">
            Explore 15 mobile applications architected for enterprise businesses, offline utility blockers, biometric attendance kiosks, and streaming platforms.
          </p>
        </div>

        {/* Filters & Search Deck */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 pb-6 border-b border-white/5 dark:border-white/5 light:border-black/5">
          {/* Search box */}
          <div className="relative w-full md:max-w-sm flex items-center bg-white/[0.03] border border-white/5 dark:border-white/5 light:border-black/5 rounded-xl px-3 py-2.5 text-white">
            <Search size={16} className="text-white/40 mr-2" />
            <input
              type="text"
              placeholder="Search projects by name or technology..."
              className="w-full bg-transparent border-0 outline-none text-xs md:text-sm placeholder-white/30"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filters List */}
          <div className="w-full overflow-x-auto flex items-center gap-2 py-2 no-scrollbar scroll-smooth">
            {filterCategories.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-[#00F5D4] text-slate-900 shadow-lg shadow-[#00F5D4]/10'
                    : 'bg-white/5 text-white/60 dark:text-white/60 light:text-[#0f172a]/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 text-center text-sm text-white/40"
            >
              No mobile apps matched "{searchQuery}" under filter "{activeFilter}"
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  layout
                  className="flex flex-col h-full"
                >
                  <GlowCard className="flex flex-col h-full hover:border-[#00F5D4]/20 transition-colors">
                    <div className="p-6 flex flex-col justify-between h-full gap-6">
                      
                      {/* Top elements */}
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          {/* Category Tag Badge */}
                          <span className="text-[10px] font-mono uppercase text-[#00F5D4] tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/5">
                            {project.category[0]}
                          </span>
                          
                          {/* Technology indicators */}
                          <span className="text-[10px] text-white/40 dark:text-white/40 light:text-black/40 font-mono">
                            {project.detail.timeline}
                          </span>
                        </div>

                        <h3 className="text-xl font-heading font-bold text-white dark:text-white light:text-[#0f172a]">
                          {project.title}
                        </h3>
                        
                        <p className="text-xs text-white/40 dark:text-white/40 light:text-black/40 font-medium tracking-tight">
                          {project.tagline}
                        </p>

                        <p className="mt-2 text-xs md:text-sm text-white/60 dark:text-white/60 light:text-[#0f172a]/70 line-clamp-3 leading-relaxed">
                          {project.overview}
                        </p>
                      </div>

                      {/* Middle technology pill stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white/40 dark:text-white/40 light:text-black/40"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/40 dark:text-white/40 light:text-black/40">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Bottom actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/5 dark:border-white/5 light:border-black/5 w-full mt-auto">
                        <button
                          onClick={() => navigate(`/projects/${project.id}`)}
                          className="text-xs font-semibold text-white dark:text-white light:text-[#0f172a] hover:text-[#00F5D4] flex items-center gap-1.5 transition-colors cursor-pointer group"
                        >
                          View Details
                          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>

                        {project.playStore && (
                          <a
                            href={project.playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-white/60 hover:text-[#00F5D4] transition-all cursor-pointer"
                            title="View on Play Store"
                          >
                            <Play size={12} fill="currentColor" />
                          </a>
                        )}
                      </div>

                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};
