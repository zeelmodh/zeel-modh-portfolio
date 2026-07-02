import React from 'react';
import { motion } from 'framer-motion';
import { FaAndroid, FaJava } from 'react-icons/fa';
import { RiFlutterFill } from 'react-icons/ri';
import { SiKotlin, SiDart, SiFirebase, SiSocketdotio, SiTensorflow } from 'react-icons/si';

export const Orbit: React.FC = () => {
  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto flex items-center justify-center pointer-events-none select-none">
      {/* Center Core: Android Logo */}
      <motion.div
        className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-[#00F5D4]/20 to-[#8B5CF6]/20 border border-[#00F5D4]/40 flex items-center justify-center z-10 shadow-2xl relative group cursor-pointer pointer-events-auto"
        whileHover={{ scale: 1.1 }}
      >
        <FaAndroid size={40} className="text-[#00F5D4] group-hover:rotate-12 transition-transform duration-300" />
        <div className="absolute inset-0 rounded-full border border-dashed border-[#00F5D4]/30 animate-spin" style={{ animationDuration: '20s' }} />
      </motion.div>

      {/* Inner Orbit Ring - Rotates clockwise */}
      <motion.div
        className="absolute w-[60%] h-[60%] rounded-full border border-white/5 border-dashed"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        {/* Flutter Icon at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <motion.div 
            className="p-2 md:p-2.5 rounded-full glass-panel border border-white/10 text-[#02569B] hover:border-[#00F5D4]/50 cursor-pointer shadow-md"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            whileHover={{ scale: 1.15 }}
          >
            <RiFlutterFill className="w-4 h-4 md:w-5 md:h-5" />
          </motion.div>
        </div>
        {/* Dart Icon at bottom-left */}
        <div className="absolute bottom-[6.7%] left-[15%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <motion.div 
            className="p-2 md:p-2.5 rounded-full glass-panel border border-white/10 text-[#0175C2] hover:border-[#00F5D4]/50 cursor-pointer shadow-md"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            whileHover={{ scale: 1.15 }}
          >
            <SiDart className="w-3.5 h-3.5 md:w-4.5 md:h-4.5" />
          </motion.div>
        </div>
        {/* Java Icon at bottom-right */}
        <div className="absolute bottom-[6.7%] right-[6%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <motion.div 
            className="p-2 md:p-2.5 rounded-full glass-panel border border-white/10 text-[#007396] hover:border-[#00F5D4]/50 cursor-pointer shadow-md"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            whileHover={{ scale: 1.15 }}
          >
            <FaJava className="w-4 h-4 md:w-5 md:h-5" />
          </motion.div>
        </div>
      </motion.div>

      {/* Outer Orbit Ring - Rotates counter-clockwise */}
      <motion.div
        className="absolute w-[90%] h-[90%] rounded-full border border-white/5"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {/* Kotlin at top-left */}
        <div className="absolute top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <motion.div 
            className="p-2 md:p-2.5 rounded-full glass-panel border border-white/10 text-[#7F52FF] hover:border-[#00F5D4]/50 cursor-pointer shadow-md"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            whileHover={{ scale: 1.15 }}
          >
            <SiKotlin className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </motion.div>
        </div>
        {/* Firebase at top-right */}
        <div className="absolute top-[14.6%] right-[6.6%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <motion.div 
            className="p-2 md:p-2.5 rounded-full glass-panel border border-white/10 text-[#FFCA28] hover:border-[#00F5D4]/50 cursor-pointer shadow-md"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            whileHover={{ scale: 1.15 }}
          >
            <SiFirebase className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </motion.div>
        </div>
        {/* Socket.io at bottom-left */}
        <div className="absolute bottom-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <motion.div 
            className="p-2 md:p-2.5 rounded-full glass-panel border border-white/10 text-white hover:border-[#00F5D4]/50 cursor-pointer shadow-md"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            whileHover={{ scale: 1.15 }}
          >
            <SiSocketdotio className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </motion.div>
        </div>
        {/* TensorFlow at bottom-right */}
        <div className="absolute bottom-[14.6%] right-[6.6%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
          <motion.div 
            className="p-2 md:p-2.5 rounded-full glass-panel border border-white/10 text-[#FF6F00] hover:border-[#00F5D4]/50 cursor-pointer shadow-md"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            whileHover={{ scale: 1.15 }}
          >
            <SiTensorflow className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
