import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatCardProps {
  value: string; // e.g. "4.5+", "30+", "1.6M+"
  label: string; // e.g. "Years Experience"
  index: number;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Parse numeric parts and any suffixes (e.g. 4.5 and +)
    const matches = value.match(/^([\d.]+)([KM+]*)$/);
    if (!matches) {
      setDisplayValue(value);
      return;
    }

    const num = parseFloat(matches[1]);
    const suffix = matches[2] || '';
    
    let start = 0;
    const duration = 1500; // 1.5 seconds
    const steps = 40;
    const increment = num / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= num) {
        clearInterval(timer);
        setDisplayValue(value);
      } else {
        const formatted = Number.isInteger(num) 
          ? Math.floor(start).toString() 
          : start.toFixed(1);
        setDisplayValue(formatted + suffix);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="p-6 rounded-2xl glass-panel border border-white/5 flex flex-col items-center justify-center text-center group hover:border-[#00F5D4]/30 hover:bg-white/5 transition-all duration-300 shadow-xl"
    >
      <span className="text-3xl md:text-4xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00F5D4] via-[#3B82F6] to-[#8B5CF6] group-hover:scale-105 transition-transform duration-300">
        {displayValue}
      </span>
      <span className="mt-2 text-[10px] md:text-xs text-white/50 group-hover:text-white/80 transition-colors uppercase font-mono tracking-wider">
        {label}
      </span>
    </motion.div>
  );
};
