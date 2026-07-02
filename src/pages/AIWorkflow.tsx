import React, { useState } from 'react';
import { Cpu, ClipboardList, PenTool, Database, Code, CheckSquare, CloudLightning } from 'lucide-react';
import { PageTransition } from '../layouts/PageTransition';
import { GlowCard } from '../components/ui/GlowCard';

interface WorkflowStep {
  index: number;
  label: string;
  tool: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  actionItem: string;
}

export const AIWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: WorkflowStep[] = [
    {
      index: 0,
      label: 'Requirement Gathering',
      tool: 'Client Specs',
      icon: <ClipboardList size={18} />,
      color: '#00F5D4',
      description: 'Understanding core business requirements, identifying key user flows, cataloging assets, and defining release metrics.',
      actionItem: 'Outline features and establish data schemas for mobile endpoints.'
    },
    {
      index: 1,
      label: 'Planning & Sizing',
      tool: 'Agile Grooming',
      icon: <PenTool size={18} />,
      color: '#8B5CF6',
      description: 'Decomposing epics into single stories. Mapping tasks on Jira dashboards, assigning story points, and checking project dependencies.',
      actionItem: 'Detail developer tasks and define sprint checkpoints.'
    },
    {
      index: 2,
      label: 'Systems Architecture',
      tool: 'Diagram Design',
      icon: <Database size={18} />,
      color: '#3B82F6',
      description: 'Drafting data schemas, selecting states and dependencies, defining SQLite models, and mapping clean boundaries.',
      actionItem: 'Choose BLoC or MVVM patterns and design syncing layers.'
    },
    {
      index: 3,
      label: 'Claude AI',
      tool: 'Context Analysis',
      icon: <Cpu size={18} />,
      color: '#10B981',
      description: 'Piping long architecture specifications and data models to Claude to generate complex boilerplate repositories and data parsing mocks.',
      actionItem: 'Create initial API repositories and unit test stubs.'
    },
    {
      index: 4,
      label: 'Cursor AI',
      tool: 'Code Compilation',
      icon: <Code size={18} />,
      color: '#00F5D4',
      description: 'Using Cursors context-aware codebase search to review legacy functions, refactor files, and resolve typescript bindings quickly.',
      actionItem: 'Write complex local UI bindings and resolve layout constraints.'
    },
    {
      index: 5,
      label: 'ChatGPT & DeepSeek',
      tool: 'Logic Debugging',
      icon: <Cpu size={18} />,
      color: '#8B5CF6',
      description: 'Leveraging reasoning capabilities to resolve complex multi-threading errors, local memory crashes, and SQLite lock triggers.',
      actionItem: 'Resolve thread race conditions and memory leaks.'
    },
    {
      index: 6,
      label: 'Gemini (Android Studio)',
      tool: 'IDE Assistance',
      icon: <Code size={18} />,
      color: '#3B82F6',
      description: 'Using Gemini embedded in Android Studio to review XML layouts, query Gradle properties, and generate automated code docstrings.',
      actionItem: 'Inspect performance profiling alerts directly in the workspace.'
    },
    {
      index: 7,
      label: 'Antigravity AI',
      tool: 'Agentic Coding',
      icon: <CloudLightning size={18} />,
      color: '#10B981',
      description: 'Utilizing Antigravity AI agent flows to write system files, execute builds, verify directories, and publish code iterations.',
      actionItem: 'Let Antigravity deploy base layouts and package scripts autonomously.'
    },
    {
      index: 8,
      label: 'Implementation',
      tool: 'Developer Review',
      icon: <CheckSquare size={18} />,
      color: '#00F5D4',
      description: 'Compiling codebases, verifying UI elements comply with accessibility, checking color configurations, and reviewing changes.',
      actionItem: 'Merge features into standard Git branches and verify layouts.'
    },
    {
      index: 9,
      label: 'Testing & Validation',
      tool: 'Lints & Unit tests',
      icon: <CheckSquare size={18} />,
      color: '#8B5CF6',
      description: 'Executing unit testing suites and running lints to verify build success and zero production warnings.',
      actionItem: 'Ensure 100% test coverage for critical business logic.'
    },
    {
      index: 10,
      label: 'Staged Deployment',
      tool: 'Play Store Stage',
      icon: <CloudLightning size={18} />,
      color: '#3B82F6',
      description: 'Publishing app updates to Play Store internal tracks, testing features, and scaling to public release stages.',
      actionItem: 'Deploy staging artifacts and review crash rates.'
    }
  ];

  const currentStep = steps[activeStep];

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-16">
        
        {/* Page Header */}
        <div className="text-left mb-12 flex flex-col items-start gap-4">
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#8B5CF6] uppercase tracking-widest flex items-center gap-1.5">
            <CloudLightning size={12} />
            AI Pipeline
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white dark:text-white light:text-[#0f172a]">
            AI-Assisted Workflow
          </h1>
          <p className="text-sm md:text-base text-white/50 dark:text-white/50 light:text-black/50 max-w-xl">
            A linear workflow showing how I combine human system design and advanced AI agents to accelerate software deployment.
          </p>
        </div>

        {/* Workflow Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive flow list */}
          <div className="lg:col-span-5 flex flex-col gap-3 max-h-[70vh] overflow-y-auto pr-2">
            {steps.map((step) => {
              const isActive = step.index === activeStep;
              return (
                <div
                  key={step.index}
                  onClick={() => setActiveStep(step.index)}
                  className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all border ${
                    isActive 
                      ? 'bg-white/5 border-[#8B5CF6] pl-6' 
                      : 'bg-white/[0.01] border-white/5 hover:bg-white/5 hover:border-white/10'
                  }`}
                >
                  <div 
                    className="p-2.5 rounded-lg flex items-center justify-center shrink-0"
                    style={{ 
                      backgroundColor: isActive ? `${step.color}20` : 'rgba(255,255,255,0.03)',
                      color: step.color
                    }}
                  >
                    {step.icon}
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-white/40 block">STEP 0{step.index + 1}</span>
                    <h3 className="font-heading font-bold text-xs md:text-sm text-white dark:text-white light:text-[#0f172a] -mt-0.5">
                      {step.label}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Step details display */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <GlowCard className="p-6 md:p-8 text-left hover:border-[#8B5CF6]/30 transition-colors">
              <div className="flex flex-col gap-6">
                
                {/* Step index & tag */}
                <div className="flex justify-between items-center pb-4 border-b border-white/5 dark:border-white/5 light:border-black/5">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-white/40 uppercase">Current Pipeline Phase</span>
                    <span className="text-2xl font-heading font-extrabold text-white dark:text-white light:text-[#0f172a] mt-1">
                      Step {currentStep.index + 1}: {currentStep.label}
                    </span>
                  </div>
                  
                  <span 
                    className="px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold uppercase"
                    style={{ 
                      backgroundColor: `${currentStep.color}15`, 
                      color: currentStep.color,
                      border: `1px solid ${currentStep.color}30`
                    }}
                  >
                    {currentStep.tool}
                  </span>
                </div>

                {/* Details description */}
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-white/40 dark:text-white/40 light:text-black/40">Workflow Detail</h4>
                  <p className="mt-3 text-sm md:text-base text-white/70 dark:text-white/70 light:text-[#0f172a]/80 leading-relaxed">
                    {currentStep.description}
                  </p>
                </div>

                {/* Actionable item */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-left">
                  <h4 className="text-[10px] font-mono uppercase text-[#8B5CF6] tracking-widest font-bold">Action Item</h4>
                  <p className="mt-2 text-xs md:text-sm text-white/80 dark:text-white/80 light:text-[#0f172a]/90 font-medium">
                    {currentStep.actionItem}
                  </p>
                </div>

              </div>
            </GlowCard>
          </div>

        </div>

      </div>
    </PageTransition>
  );
};
