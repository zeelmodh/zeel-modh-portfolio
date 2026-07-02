import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Play, Cpu, ShieldCheck, HeartHandshake, AlertCircle, FileCode, CheckCircle, ExternalLink } from 'lucide-react';
import { PageTransition } from '../layouts/PageTransition';
import { GlowCard } from '../components/ui/GlowCard';
import { PROJECTS } from '../constants/portfolioData';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Scroll to top on project swap
  useEffect(() => {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [id]);

  const project = useMemo(() => {
    return PROJECTS.find((p) => p.id === id);
  }, [id]);

  const relatedProjects = useMemo(() => {
    if (!project) return [];
    return PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);
  }, [project]);

  if (!project) {
    return (
      <PageTransition>
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Project Not Found</h1>
          <p className="text-white/50 mb-6">The requested project case study could not be located.</p>
          <button
            onClick={() => navigate('/projects')}
            className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm cursor-pointer"
          >
            Back to Projects
          </button>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-16">
        
        {/* Navigation Breadcrumb */}
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-xs font-semibold text-white/50 dark:text-white/50 light:text-black/50 hover:text-[#00F5D4] mb-8 cursor-pointer transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          Back to Projects Grid
        </button>

        {/* Hero Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-8 border-b border-white/5 dark:border-white/5 light:border-black/5">
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {project.category.map((cat) => (
                  <span
                    key={cat}
                    className="text-[10px] font-mono uppercase text-[#00F5D4] bg-white/5 border border-[#00F5D4]/20 px-2 py-0.5 rounded"
                  >
                    {cat}
                  </span>
                ))}
                <span className="text-xs text-white/40 dark:text-white/40 light:text-black/40 font-mono pl-2">
                  Timeline: {project.detail.timeline}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white dark:text-white light:text-[#0f172a]">
                {project.title}
              </h1>
              <p className="text-sm md:text-base text-white/60 dark:text-white/60 light:text-[#0f172a]/70 font-medium max-w-2xl">
                {project.tagline}
              </p>
            </div>

            {project.playStore && (
              <a
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#00F5D4] hover:bg-[#00F5D4]/80 text-slate-900 font-bold text-sm transition-all shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <Play size={14} fill="currentColor" />
                Play Store
              </a>
            )}
          </div>
        </section>

        {/* Case Study Core Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Case Study Columns */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Overview & Problem */}
            <GlowCard className="hover:border-white/10 transition-colors">
              <div className="p-6 md:p-8 flex flex-col gap-6 text-left">
                <div>
                  <h2 className="text-lg font-heading font-bold text-white dark:text-white light:text-[#0f172a] flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#00F5D4]" />
                    Product Overview
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-white/70 dark:text-white/70 light:text-[#0f172a]/80 leading-relaxed">
                    {project.detail.overview}
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 dark:border-white/5 light:border-black/5">
                  <h2 className="text-lg font-heading font-bold text-white dark:text-white light:text-[#0f172a] flex items-center gap-2">
                    <AlertCircle size={16} className="text-[#8B5CF6]" />
                    Business Problem
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-white/70 dark:text-white/70 light:text-[#0f172a]/80 leading-relaxed">
                    {project.detail.businessProblem}
                  </p>
                </div>
              </div>
            </GlowCard>

            {/* Architecture & Solutions */}
            <GlowCard className="hover:border-white/10 transition-colors">
              <div className="p-6 md:p-8 flex flex-col gap-6 text-left">
                <div>
                  <h2 className="text-lg font-heading font-bold text-white dark:text-white light:text-[#0f172a] flex items-center gap-2">
                    <Cpu size={16} className="text-[#3B82F6]" />
                    Mobile Architecture Strategy
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-white/70 dark:text-white/70 light:text-[#0f172a]/80 leading-relaxed">
                    {project.detail.architecture}
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 dark:border-white/5 light:border-black/5">
                  <h2 className="text-lg font-heading font-bold text-white dark:text-white light:text-[#0f172a] flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#10B981]" />
                    Engineering Challenges & Solutions
                  </h2>
                  <div className="mt-4 space-y-4">
                    <div>
                      <h4 className="text-xs font-mono uppercase text-white/40 dark:text-white/40 light:text-black/40">Critical Challenge:</h4>
                      <p className="mt-1 text-sm text-white/70 dark:text-white/70 light:text-[#0f172a]/80 leading-relaxed">{project.detail.challenges}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono uppercase text-[#00F5D4]">Applied Solution:</h4>
                      <p className="mt-1 text-sm text-white/70 dark:text-white/70 light:text-[#0f172a]/80 leading-relaxed">{project.detail.solutions}</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>

            {/* Performance, Lessons, and Impact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlowCard className="hover:border-white/10 transition-colors">
                <div className="p-6 text-left">
                  <h3 className="text-base font-heading font-bold text-white dark:text-white light:text-[#0f172a] flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[#00F5D4]" />
                    Performance Metrics
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-white/60 dark:text-white/60 light:text-[#0f172a]/70 leading-relaxed">
                    {project.detail.performance}
                  </p>
                </div>
              </GlowCard>
              
              <GlowCard className="hover:border-white/10 transition-colors">
                <div className="p-6 text-left">
                  <h3 className="text-base font-heading font-bold text-white dark:text-white light:text-[#0f172a] flex items-center gap-2">
                    <HeartHandshake size={16} className="text-[#8B5CF6]" />
                    Lessons Learned
                  </h3>
                  <p className="mt-3 text-xs md:text-sm text-white/60 dark:text-white/60 light:text-[#0f172a]/70 leading-relaxed">
                    {project.detail.lessonsLearned}
                  </p>
                </div>
              </GlowCard>
            </div>

          </div>

          {/* Right Sidebar Metadata */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Tech Stack Specs */}
            <GlowCard className="hover:border-white/10 transition-colors">
              <div className="p-6 text-left">
                <h3 className="text-base font-heading font-bold text-white dark:text-white light:text-[#0f172a] mb-4 flex items-center gap-2">
                  <FileCode size={16} className="text-[#00F5D4]" />
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.detail.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-xl bg-white/5 border border-white/5 text-xs font-semibold text-white/70 dark:text-white/70 light:text-[#0f172a]/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </GlowCard>

            {/* Responsibilities list */}
            <GlowCard className="hover:border-white/10 transition-colors">
              <div className="p-6 text-left">
                <h3 className="text-base font-heading font-bold text-white dark:text-white light:text-[#0f172a] mb-4 flex items-center gap-2">
                  <HeartHandshake size={16} className="text-[#8B5CF6]" />
                  My Core Actions
                </h3>
                <ul className="space-y-3">
                  {project.detail.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-xs md:text-sm text-white/60 dark:text-white/60 light:text-[#0f172a]/70 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-2 shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </GlowCard>

            {/* Impact metric badge */}
            <GlowCard className="hover:border-white/10 transition-colors bg-gradient-to-tr from-white/[0.01] to-[#00F5D4]/5">
              <div className="p-6 text-left flex flex-col gap-3">
                <span className="text-[10px] font-mono text-[#00F5D4] uppercase tracking-widest">Business Value Delivered</span>
                <p className="text-sm md:text-base text-white/80 dark:text-white/80 light:text-[#0f172a]/80 font-medium leading-relaxed">
                  {project.businessImpact}
                </p>
              </div>
            </GlowCard>

          </div>

        </div>

        {/* RELATED PROJECTS CAROUSEL */}
        <section className="mt-20 md:mt-28">
          <div className="text-left mb-8 pb-4 border-b border-white/5 dark:border-white/5 light:border-black/5">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-white dark:text-white light:text-[#0f172a]">
              Explore Other Case Studies
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((relProj) => (
              <Link 
                key={relProj.id}
                to={`/projects/${relProj.id}`}
                className="flex flex-col cursor-pointer group"
              >
                <GlowCard className="flex flex-col h-full hover:border-[#00F5D4]/30 transition-all duration-300">
                  <div className="p-6 flex flex-col justify-between h-full gap-4 text-left">
                    <div>
                      <span className="text-[9px] font-mono uppercase text-[#00F5D4] tracking-wider px-1.5 py-0.5 rounded bg-white/5">
                        {relProj.category[0]}
                      </span>
                      <h4 className="text-lg font-heading font-bold text-white dark:text-white light:text-[#0f172a] mt-3 group-hover:text-[#00F5D4] transition-colors">
                        {relProj.title}
                      </h4>
                      <p className="mt-2 text-xs text-white/50 dark:text-white/50 light:text-black/50 line-clamp-2">
                        {relProj.tagline}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-white/60 dark:text-white/60 light:text-black/60 group-hover:text-white flex items-center gap-1 mt-4">
                      Read Case Study <ExternalLink size={10} />
                    </span>
                  </div>
                </GlowCard>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
};
