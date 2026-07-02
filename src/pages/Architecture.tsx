import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Database, Globe, Share2, Layers } from 'lucide-react';
import { PageTransition } from '../layouts/PageTransition';
import { GlowCard } from '../components/ui/GlowCard';

interface ArchitecturePattern {
  id: string;
  title: string;
  icon: React.ReactNode;
  tagline: string;
  diagram: React.ReactNode;
  principles: string[];
  rationale: string;
}

export const Architecture: React.FC = () => {
  const [activeTab, setActiveTab] = useState('clean-arch');

  const patterns: ArchitecturePattern[] = [
    {
      id: 'clean-arch',
      title: 'Clean Architecture',
      icon: <Layers size={16} />,
      tagline: 'Decoupling Business Rules from Frameworks & UI',
      rationale: 'Clean Architecture guarantees that business models (Use Cases) remain independent of database types, network frameworks, and the UI layer. This isolation enables painless changes, simple mock testing, and cross-framework code reuse.',
      principles: [
        'Presentation Layer (UI/View/BLoC/ViewModel): Renders layout state & propagates click triggers.',
        'Domain Layer (Entities/Use Cases/Repository Interfaces): Houses core business rules. Zero external dependencies.',
        'Data Layer (API Clients/Local Database/Repository Implementations): Fetches resources and maps network payloads.'
      ],
      diagram: (
        <div className="flex flex-col items-center gap-4 py-8 font-mono text-[10px] sm:text-xs">
          <div className="px-6 py-2.5 rounded-lg border border-[#00F5D4] bg-[#00F5D4]/10 text-[#00F5D4] text-center font-bold shadow-md">
            PRESENTATION LAYER (Jetpack Compose / Flutter UI)
          </div>
          <div className="text-white/40">↓ Events | ↑ States</div>
          <div className="px-6 py-2.5 rounded-lg border border-[#8B5CF6] bg-[#8B5CF6]/10 text-[#8B5CF6] text-center font-bold shadow-md">
            DOMAIN LAYER (Use Cases / Entities / Repo Contracts)
          </div>
          <div className="text-white/40">↓ Calls | ↑ Data</div>
          <div className="px-6 py-2.5 rounded-lg border border-[#3B82F6] bg-[#3B82F6]/10 text-[#3B82F6] text-center font-bold shadow-md">
            DATA LAYER (Room DB / SQLite / Retrofit Services)
          </div>
        </div>
      )
    },
    {
      id: 'mvvm',
      title: 'MVVM & MVI',
      icon: <Cpu size={16} />,
      tagline: 'Lifecycle-Aware Unidirectional Data Flows',
      rationale: 'Using ViewModel (Android SDK) or BLoC (Flutter), data flow is unidirectional. The view emits intents/events, the viewmodel queries the repository and exposes state parameters, and the view binds directly to these parameters.',
      principles: [
        'View: Observes StateFlow/LiveData updates and handles click listeners.',
        'ViewModel: Exposes single UI State object and manages execution context in coroutine scopes.',
        'Model (Repository): Serves as single source of truth for the ViewModel.'
      ],
      diagram: (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8 font-mono text-[10px] sm:text-xs">
          <div className="px-4 py-2.5 rounded-lg border border-white/10 glass-panel text-white text-center font-bold">
            VIEW (UI)
          </div>
          <div className="text-white/40">→ Emits Actions →</div>
          <div className="px-4 py-2.5 rounded-lg border border-[#00F5D4] bg-[#00F5D4]/10 text-[#00F5D4] text-center font-bold">
            VIEWMODEL / BLoC
          </div>
          <div className="text-white/40">← Pushes States ←</div>
          <div className="px-4 py-2.5 rounded-lg border border-[#3B82F6] bg-[#3B82F6]/10 text-[#3B82F6] text-center font-bold">
            REPOSITORY
          </div>
        </div>
      )
    },
    {
      id: 'offline-first',
      title: 'Offline-First Sync',
      icon: <Database size={16} />,
      tagline: 'Local Caching with Network Fallbacks',
      rationale: 'Crucial for apps like Adama Farmer Reach or Kora MTM, this strategy ensures complete functionality in connectivity blackouts. Users interact with a local SQLite/Room database while background schedulers sync local modifications when connectivity is restored.',
      principles: [
        'Local DB First: View models fetch records from Room/SQLite cache. UI is populated instantly.',
        'Background Syncer: WorkManager (Android) triggers delta-updates only on valid networks.',
        'Conflict Solver: Timestamps decide whether database values overwrite server attributes.'
      ],
      diagram: (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 py-6 font-mono text-[10px] sm:text-xs">
          <div className="flex flex-col items-center">
            <div className="px-4 py-2 rounded-lg border border-white/10 glass-panel text-white">User Actions</div>
            <div className="text-white/40 py-1">↓ Write</div>
            <div className="px-5 py-2.5 rounded-lg border border-[#00F5D4] bg-[#00F5D4]/10 text-[#00F5D4] font-bold">
              ROOM DB / SQLITE (SSOT)
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-white/40 text-center px-2">WorkManager Scheduler</div>
            <div className="text-white/40">⇄ Syncs in Background ⇄</div>
            <div className="text-white/40 text-center text-[10px] text-white/30">Network Checker</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="px-5 py-2.5 rounded-lg border border-[#8B5CF6] bg-[#8B5CF6]/10 text-[#8B5CF6] font-bold">
              REST / GRAPHQL API
            </div>
            <div className="text-white/40 py-1">↓ Save</div>
            <div className="px-4 py-2 rounded-lg border border-white/10 glass-panel text-white">Cloud Server</div>
          </div>
        </div>
      )
    },
    {
      id: 'realtime-sockets',
      title: 'Real-time WebSocket Sync',
      icon: <Globe size={16} />,
      tagline: 'Low-latency Realtime Channels',
      rationale: 'Used in Divine Talk and 3FitStyle, this pattern maintains duplex socket connections for chat message delivery, queue statuses, and game ticker feeds. Standard timers are replaced by event-driven websocket frames.',
      principles: [
        'Heartbeat Monitor: Periodic ping-pong payloads verify socket connection active.',
        'Connection Handshake: Socket registers client ID and listens for custom payload channels.',
        'Optimistic Updates: Local UI reflects sent messages immediately, resolving if connection drops.'
      ],
      diagram: (
        <div className="flex flex-col items-center gap-3 py-6 font-mono text-[10px] sm:text-xs">
          <div className="flex items-center gap-8">
            <div className="px-4 py-2 rounded-lg border border-white/10 glass-panel text-white">Client App</div>
            <div className="px-4 py-2 rounded-lg border border-[#00F5D4] bg-[#00F5D4]/10 text-[#00F5D4] font-bold">Socket.IO Server</div>
          </div>
          <div className="w-full max-w-sm flex flex-col gap-1 items-center bg-white/[0.02] p-4 rounded-xl border border-white/5 text-[10px] text-white/50 text-left">
            <div>1. [Emit] join_room &#123; roomId: "talk_123" &#125;</div>
            <div className="text-[#00F5D4]">2. [Listen] astrologer_status_changed &#123; online: true &#125;</div>
            <div>3. [Emit] send_chat_message &#123; text: "hello" &#125;</div>
            <div className="text-[#8B5CF6]">4. [Listen] chat_message_received &#123; text: "hello", read: false &#125;</div>
          </div>
        </div>
      )
    }
  ];

  const currentPattern = patterns.find(p => p.id === activeTab) || patterns[0];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-16">
        
        {/* Page Header */}
        <div className="text-left mb-12 flex flex-col items-start gap-4">
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#10B981] uppercase tracking-widest flex items-center gap-1.5">
            <Share2 size={12} />
            Mobile Architecture
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white dark:text-white light:text-[#0f172a]">
            Mobile System Design
          </h1>
          <p className="text-sm md:text-base text-white/50 dark:text-white/50 light:text-black/50 max-w-xl">
            A walkthrough of patterns and syncing layers used to deploy robust, high-performance Android & Flutter applications.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-8 border-b border-white/5 dark:border-white/5 light:border-black/5 no-scrollbar">
          {patterns.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#10B981] text-slate-900 shadow-lg shadow-[#10B981]/15'
                  : 'bg-white/5 text-white/60 dark:text-white/60 light:text-[#0f172a]/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.icon}
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Box: Rationale & Principles */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <GlowCard className="p-6 md:p-8 text-left flex flex-col justify-between h-full hover:border-[#10B981]/30 transition-colors">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-mono text-[#10B981] uppercase tracking-wider">Pattern Rationale</span>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white dark:text-white light:text-[#0f172a]">
                    {currentPattern.tagline}
                  </h3>
                  <p className="text-xs md:text-sm text-white/60 dark:text-white/60 light:text-[#0f172a]/70 leading-relaxed">
                    {currentPattern.rationale}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 dark:border-white/5 light:border-black/5">
                  <h4 className="text-xs uppercase font-mono tracking-widest text-white/40 dark:text-white/40 light:text-black/40 mb-3">Core Principles</h4>
                  <ul className="space-y-3">
                    {currentPattern.principles.map((princ, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-xs md:text-sm text-white/70 dark:text-white/70 light:text-[#0f172a]/80 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-2 shrink-0" />
                        {princ}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlowCard>
            </div>

            {/* Right Box: Visual block Diagram */}
            <div className="lg:col-span-6">
              <GlowCard className="p-6 md:p-8 flex flex-col justify-center items-center h-full hover:border-[#10B981]/30 transition-colors bg-gradient-to-tr from-white/[0.01] to-[#10B981]/5">
                <span className="text-[10px] font-mono text-white/30 self-start mb-6">Interactive Block Flow Mapping</span>
                <div className="w-full flex-1 flex items-center justify-center">
                  {currentPattern.diagram}
                </div>
                <span className="text-[10px] text-white/30 self-end mt-6">Design Architecture Pattern Verified</span>
              </GlowCard>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </PageTransition>
  );
};
