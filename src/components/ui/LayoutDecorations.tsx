import React from 'react';
import { motion } from 'motion/react';

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const SectionDivider: React.FC<{ title?: string; subtitle?: string }> = ({ title, subtitle }) => {
  return (
    <div className="w-full py-12 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="w-full flex items-center justify-center gap-6 max-w-7xl px-4">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-[#008751]/60" />
        {title && (
          <div className="text-center px-4">
            <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#008751] block">
              {title}
            </span>
            {subtitle && (
              <span className="text-[11px] font-sans text-zinc-500 uppercase tracking-widest mt-0.5 block">
                {subtitle}
              </span>
            )}
          </div>
        )}
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-zinc-800 to-[#008751]/60" />
      </div>
    </div>
  );
};

export const HeroParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle Grid Noise */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #008751 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Floating Atmosphere Orbs */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full bg-[#10B981] opacity-10 blur-[120px] animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/6 w-[450px] h-[450px] rounded-full bg-[#008751] opacity-10 blur-[140px] animate-float-delayed" />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full bg-blue-900 opacity-10 blur-[100px] animate-float-slow" />

      {/* Faint repeated watermark "AND YET WE RISE" */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.02] select-none pointer-events-none">
        <h1 className="font-display font-black text-[22vw] text-white whitespace-nowrap -rotate-12 tracking-tighter">
          AND YET WE RISE
        </h1>
      </div>
    </div>
  );
};
