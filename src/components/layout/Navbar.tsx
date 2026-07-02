import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Sun, Moon, Menu, X, Cpu } from 'lucide-react';
import { CommandPalette } from '../ui/CommandPalette';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Initialize theme from storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
      setIsLightMode(true);
    } else {
      document.documentElement.classList.remove('light');
      setIsLightMode(false);
    }
  }, []);

  // Handle scroll state for styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleTheme = () => {
    if (isLightMode) {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      setIsLightMode(false);
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      setIsLightMode(true);
    }
  };

  const navLinks = [
    { name: 'Projects', path: '/projects' },
    { name: 'Tech Stack', path: '/tech-stack' },
    { name: 'Architecture', path: '/architecture' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'AI Workflow', path: '/ai-workflow' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' }
  ];

  const triggerPalette = () => {
    // Dispatch a keydown event for 'k' with meta key to open CommandPalette
    const event = new KeyboardEvent('keydown', {
      key: 'k',
      metaKey: true,
      bubbles: true
    });
    window.dispatchEvent(event);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-[#050816]/70 dark:bg-[#050816]/70 light:bg-white/80 backdrop-blur-md border-b border-white/10 dark:border-white/10 light:border-black/5 shadow-lg' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Branding */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-[#00F5D4] via-[#3B82F6] to-[#8B5CF6] text-white">
              <Cpu size={18} className="group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-tight text-white dark:text-white light:text-[#0f172a]">
                ZEEL MODH
              </span>
              <span className="text-[10px] text-white/50 dark:text-white/50 light:text-black/40 font-mono tracking-wider -mt-0.5">
                MOBILE ARCHITECT
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  isActive(link.path)
                    ? 'text-[#00F5D4] bg-white/5 dark:bg-white/5 light:bg-black/5'
                    : 'text-white/60 dark:text-white/60 light:text-[#0f172a]/70 hover:text-[#00F5D4] dark:hover:text-[#00F5D4] light:hover:text-[#0ea5e9]'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#00F5D4] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Utility Buttons */}
          <div className="flex items-center gap-3">
            {/* Search / Command Palette Toggle */}
            <button
              onClick={triggerPalette}
              className="p-2.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 text-white/70 dark:text-white/70 light:text-[#0f172a]/70 hover:text-white dark:hover:text-white light:hover:text-[#0f172a] transition-all cursor-pointer flex items-center gap-2 border border-white/5 dark:border-white/5 light:border-black/5 group"
              title="Search Palette (Cmd+K)"
            >
              <Search size={16} />
              <kbd className="hidden sm:inline-block px-1 py-0.5 rounded text-[9px] font-mono bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/5 text-white/40 dark:text-white/40 light:text-black/40">
                ⌘K
              </kbd>
            </button>

            {/* Dark/Light Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 text-white/70 dark:text-white/70 light:text-[#0f172a]/70 hover:text-white dark:hover:text-white light:hover:text-[#0f172a] transition-all cursor-pointer border border-white/5 dark:border-white/5 light:border-black/5"
              title="Toggle theme"
            >
              {isLightMode ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 lg:hidden rounded-xl bg-white/5 dark:bg-white/5 light:bg-black/5 hover:bg-white/10 text-white/70 dark:text-white/70 light:text-[#0f172a]/70 hover:text-white transition-all cursor-pointer border border-white/5 dark:border-white/5 light:border-black/5"
            >
              {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-2xl glass-panel border border-white/10 bg-[#050816]/95 dark:bg-[#050816]/95 light:bg-white/95 shadow-2xl flex flex-col gap-1.5 z-50">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  isActive(link.path)
                    ? 'text-[#00F5D4] bg-white/5 dark:bg-white/5 light:bg-black/5 pl-6 border-l-2 border-[#00F5D4]'
                    : 'text-white/60 dark:text-white/60 light:text-[#0f172a]/70 hover:text-[#00F5D4] hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-black/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Global Command Palette */}
      <CommandPalette />
    </>
  );
};
