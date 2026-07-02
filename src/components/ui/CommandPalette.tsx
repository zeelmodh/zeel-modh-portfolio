import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FolderGit, FileCode, Users, Trophy, Mail, Phone, ExternalLink, FileText, Cpu, X, Sparkles } from 'lucide-react';
import { useKeyPress } from '../../hooks/useKeyPress';
import { PROJECTS, PERSONAL_INFO } from '../../constants/portfolioData';
import { copyToClipboard } from '../../utils';

interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Pages' | 'Projects' | 'Actions';
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const listRef = useRef<HTMLDivElement>(null);

  // Hotkey listener Ctrl/Cmd + K to toggle
  useKeyPress('k', () => setIsOpen(prev => !prev), 'metaOrCtrl');
  
  // Listen for Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Reset indices and search
  useEffect(() => {
    if (!isOpen) {
      setSearch('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const closePalette = () => setIsOpen(false);

  const commandItems: CommandItem[] = [
    // Page Routes
    {
      id: 'nav-home',
      title: 'Navigate: Home',
      subtitle: 'Portfolio summary & interactive orbit',
      category: 'Pages',
      icon: <Cpu size={16} className="text-[#00F5D4]" />,
      action: () => { navigate('/'); closePalette(); }
    },
    {
      id: 'nav-projects',
      title: 'Navigate: Projects Grid',
      subtitle: 'View all 15 mobile applications',
      category: 'Pages',
      icon: <FolderGit size={16} className="text-[#8B5CF6]" />,
      action: () => { navigate('/projects'); closePalette(); }
    },
    {
      id: 'nav-tech',
      title: 'Navigate: Tech Stack Grid',
      subtitle: 'Skills, libraries & interactive visualizers',
      category: 'Pages',
      icon: <FileCode size={16} className="text-[#3B82F6]" />,
      action: () => { navigate('/tech-stack'); closePalette(); }
    },
    {
      id: 'nav-arch',
      title: 'Navigate: Mobile Architecture',
      subtitle: 'System engineering flow diagrams & MVVM patterns',
      category: 'Pages',
      icon: <Sparkles size={16} className="text-[#10B981]" />,
      action: () => { navigate('/architecture'); closePalette(); }
    },
    {
      id: 'nav-leadership',
      title: 'Navigate: Team Leadership & Scrum',
      subtitle: 'Mentoring, task sizing & release pipelines',
      category: 'Pages',
      icon: <Users size={16} className="text-[#00F5D4]" />,
      action: () => { navigate('/leadership'); closePalette(); }
    },
    {
      id: 'nav-ai',
      title: 'Navigate: AI-Assisted Workflow',
      subtitle: 'Pipeline of Claude, Cursor, and compiler steps',
      category: 'Pages',
      icon: <Cpu size={16} className="text-[#8B5CF6]" />,
      action: () => { navigate('/ai-workflow'); closePalette(); }
    },
    {
      id: 'nav-achievements',
      title: 'Navigate: Milestones & Awards',
      subtitle: 'Summary of 1.6M+ downloads and key metrics',
      category: 'Pages',
      icon: <Trophy size={16} className="text-[#3B82F6]" />,
      action: () => { navigate('/achievements'); closePalette(); }
    },
    {
      id: 'nav-contact',
      title: 'Navigate: Contact Deck',
      subtitle: 'Direct message portals and social accounts',
      category: 'Pages',
      icon: <Mail size={16} className="text-[#10B981]" />,
      action: () => { navigate('/contact'); closePalette(); }
    },
    // Direct Actions
    {
      id: 'action-email',
      title: 'Action: Copy Email Address',
      subtitle: PERSONAL_INFO.email,
      category: 'Actions',
      icon: <Mail size={16} className="text-[#00F5D4]" />,
      action: () => {
        copyToClipboard(PERSONAL_INFO.email);
        alert('Email address copied to clipboard!');
        closePalette();
      }
    },
    {
      id: 'action-phone',
      title: 'Action: Copy Phone Number',
      subtitle: PERSONAL_INFO.phone,
      category: 'Actions',
      icon: <Phone size={16} className="text-[#8B5CF6]" />,
      action: () => {
        copyToClipboard(PERSONAL_INFO.phone);
        alert('Phone number copied to clipboard!');
        closePalette();
      }
    },
    {
      id: 'action-resume',
      title: 'Action: Open Professional Resume',
      subtitle: 'View PDF details in a new tab',
      category: 'Actions',
      icon: <FileText size={16} className="text-[#3B82F6]" />,
      action: () => {
        window.open(`${import.meta.env.BASE_URL}Zeel_Modh_Resume_July_ATS.pdf`, '_blank');
        closePalette();
      }
    },
    {
      id: 'action-github',
      title: 'Action: View GitHub Profile',
      subtitle: 'Explore source code and side projects',
      category: 'Actions',
      icon: <ExternalLink size={16} className="text-[#10B981]" />,
      action: () => {
        window.open(PERSONAL_INFO.github, '_blank');
        closePalette();
      }
    },
    {
      id: 'action-linkedin',
      title: 'Action: View LinkedIn Profile',
      subtitle: 'Connect professionally with Zeel',
      category: 'Actions',
      icon: <ExternalLink size={16} className="text-[#00F5D4]" />,
      action: () => {
        window.open(PERSONAL_INFO.linkedin, '_blank');
        closePalette();
      }
    },
    // Dynamic Projects
    ...PROJECTS.map(proj => ({
      id: `project-${proj.id}`,
      title: `Project: ${proj.title}`,
      subtitle: proj.tagline,
      category: 'Projects' as const,
      icon: <FolderGit size={16} className="text-[#8B5CF6]" />,
      action: () => { navigate(`/projects/${proj.id}`); closePalette(); }
    }))
  ];

  // Filter based on search input
  const filteredItems = commandItems.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.subtitle.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  // Manage keyboard inputs when open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex]);

  // Autoscroll list items to keep selected item visible
  useEffect(() => {
    if (!listRef.current) return;
    const selectedElement = listRef.current.children[selectedIndex] as HTMLElement;
    if (selectedElement) {
      selectedElement.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 md:px-0 bg-black/60 backdrop-blur-md">
      <div 
        className="w-full max-w-2xl overflow-hidden glass-panel rounded-2xl border border-white/10 shadow-2xl flex flex-col max-h-[60vh] bg-[#050816]/95"
        role="dialog"
        aria-modal="true"
      >
        {/* Search header */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/5 gap-3">
          <Search size={18} className="text-white/40" />
          <input
            type="text"
            className="flex-1 bg-transparent border-0 outline-none text-white text-base placeholder-white/30"
            placeholder="Type a command or search projects..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
            autoFocus
          />
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-white/50">
            ESC
          </kbd>
          <button 
            onClick={closePalette}
            className="p-1 rounded hover:bg-white/5 text-white/40 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable list */}
        <div 
          ref={listRef}
          className="flex-1 overflow-y-auto p-2 divide-y divide-transparent"
        >
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-sm text-white/40">
              No results found for "{search}"
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3 py-3 rounded-xl cursor-pointer transition-all ${
                    isSelected 
                      ? 'bg-white/5 text-white border-l-2 border-[#00F5D4] pl-2' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-white/5' : 'bg-white/3'}`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{item.title}</div>
                      <div className="text-xs text-white/40 line-clamp-1">{item.subtitle}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-white/5 text-white/40">
                      {item.category}
                    </span>
                    {isSelected && (
                      <kbd className="hidden md:inline-block text-[10px] text-white/30 font-mono">
                        ⏎ ENTER
                      </kbd>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-4 py-2 bg-white/3 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
          <div className="flex items-center gap-4">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
          </div>
          <span className="hidden sm:inline">Press Ctrl/Cmd + K to close</span>
        </div>
      </div>
    </div>
  );
};
