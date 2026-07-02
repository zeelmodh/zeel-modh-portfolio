import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ExternalLink, Cpu } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { PERSONAL_INFO } from '../../constants/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub size={16} />, url: PERSONAL_INFO.github },
    { name: 'LinkedIn', icon: <FaLinkedin size={16} />, url: PERSONAL_INFO.linkedin },
    { name: 'Email', icon: <Mail size={16} />, url: `mailto:${PERSONAL_INFO.email}` }
  ];

  return (
    <footer className="relative mt-20 border-t border-white/5 dark:border-white/5 light:border-black/5 bg-[#050816]/40 dark:bg-[#050816]/40 light:bg-slate-100/50 py-12 px-6 z-10 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#8B5CF6]/5 blur-[80px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand details */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="p-1.5 rounded-lg bg-gradient-to-tr from-[#00F5D4] to-[#8B5CF6] text-white">
              <Cpu size={14} />
            </div>
            <span className="font-heading font-bold text-xs tracking-tight text-white dark:text-white light:text-[#0f172a]">
              ZEEL MODH
            </span>
          </Link>
          <p className="text-xs text-white/40 dark:text-white/40 light:text-black/40 max-w-xs leading-relaxed">
            Enterprise Mobile Architect specializing in high-performance Android, Flutter, and local AI solutions.
          </p>
        </div>

        {/* Sitemap shortcuts */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-white/50 dark:text-white/50 light:text-black/50">
          <Link to="/projects" className="hover:text-[#00F5D4] transition-colors cursor-pointer">Projects</Link>
          <Link to="/tech-stack" className="hover:text-[#8B5CF6] transition-colors cursor-pointer">Tech Stack</Link>
          <Link to="/architecture" className="hover:text-[#3B82F6] transition-colors cursor-pointer">Architecture</Link>
          <Link to="/leadership" className="hover:text-[#10B981] transition-colors cursor-pointer">Leadership</Link>
          <Link to="/ai-workflow" className="hover:text-[#00F5D4] transition-colors cursor-pointer">AI Workflow</Link>
          <a 
            href={`${import.meta.env.BASE_URL}Zeel_Modh_Resume_July_ATS.pdf`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#8B5CF6] transition-colors flex items-center gap-0.5"
          >
            Resume <ExternalLink size={10} />
          </a>
        </div>

        {/* Social connections */}
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/5 dark:border-white/5 light:border-black/5 text-white/60 dark:text-white/60 light:text-black/60 hover:text-white dark:hover:text-white light:hover:text-black hover:border-[#00F5D4]/40 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 transition-all duration-300 shadow-md"
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Copyright statement */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 dark:border-white/5 light:border-black/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/30 dark:text-white/30 light:text-black/30 gap-4">
        <span>© {currentYear} Zeel Modh. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <span>Engineered with React 19 + Tailwind v4</span>
          <span>•</span>
          <span>Designed in Silicon Spirit</span>
        </div>
      </div>
    </footer>
  );
};
