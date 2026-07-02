import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { PageTransition } from '../layouts/PageTransition';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-24 text-center flex flex-col items-center justify-center min-h-[50vh] gap-6">
        <div className="p-4 rounded-full bg-red-500/10 border border-red-500/30 text-red-500">
          <AlertCircle size={40} />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-mono text-red-400 uppercase tracking-widest">Error 404</span>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-white dark:text-white light:text-[#0f172a]">
            Page Not Found
          </h1>
          <p className="text-white/50 dark:text-white/50 light:text-black/50 text-xs md:text-sm max-w-xs mx-auto mt-2 leading-relaxed">
            The path you are looking for does not exist or has been shifted.
          </p>
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00F5D4]/40 hover:bg-white/10 text-white dark:text-white light:text-[#0f172a] font-bold text-xs md:text-sm transition-all cursor-pointer flex items-center gap-2"
        >
          <ArrowLeft size={14} />
          Return Home
        </button>
      </div>
    </PageTransition>
  );
};
