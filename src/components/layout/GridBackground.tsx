import React from 'react';

export const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Dark Luxury background */}
      <div className="absolute inset-0 bg-[#050816]" />
      
      {/* Grid lines */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Aurora lights */}
      <div className="absolute inset-0 aurora-bg" />

      {/* Glowing floating spots */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#8B5CF6]/15 blur-[120px] glow-spot" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#00F5D4]/10 blur-[120px] glow-spot" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-[40%] left-[60%] w-[35%] h-[35%] rounded-full bg-[#3B82F6]/10 blur-[100px] glow-spot" style={{ animationDelay: '-2s' }} />
    </div>
  );
};
