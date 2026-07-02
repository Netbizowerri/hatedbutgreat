import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Globe, Heart } from 'lucide-react';

interface NavLink {
  name: string;
  path: string;
}

interface MobileMenuTrayProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export const MobileMenuTray: React.FC<MobileMenuTrayProps> = ({ isOpen, onClose, links }) => {
  const location = useLocation();

  const trayVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', damping: 28, stiffness: 320 },
    },
    exit: {
      y: '100%',
      opacity: 0,
      transition: { duration: 0.25, ease: 'easeIn' },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Bottom Sheet Tray */}
          <motion.div
            variants={trayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-h-[88vh] bg-zinc-950 text-white rounded-t-[28px] border-t border-[#008751]/40 shadow-2xl flex flex-col overflow-hidden pb-[env(safe-area-inset-bottom)]"
          >
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 pt-6 pb-3">
              <img
                src="https://i.ibb.co/V0DyFQ2L/Whats-App-Image-2026-06-29-at-11-46-59-AM.jpg"
                alt="Nigerian Flag"
                className="h-16 w-auto object-contain rounded-sm"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://i.ibb.co/4ZDMQ0Z9/Hated-But-Great.png"
                alt="Hated But Great"
                className="h-12 sm:hidden w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Nigerian Flag Top Accent Strip */}
            <div className="w-full h-1.5 grid grid-cols-3">
              <div className="bg-[#008751]" />
              <div className="bg-white" />
              <div className="bg-[#008751]" />
            </div>

            {/* Drag Handle Indicator */}
            <div className="w-full pt-3 pb-1 flex justify-center">
              <div className="w-12 h-1.5 bg-zinc-800 rounded-full" />
            </div>

            {/* Header & Close CTA */}
            <div className="px-6 py-4 flex items-center justify-between border-b border-zinc-900">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#008751]" />
                <span className="font-accent font-extrabold text-xs tracking-widest uppercase text-zinc-400">
                  NAVIGATION PORTAL
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Close menu tray"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links List */}
            <div className="px-6 py-6 overflow-y-auto flex-1 space-y-3">
              {links.map((link, idx) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={onClose}
                      className={`flex items-center justify-between min-h-[56px] px-5 rounded-2xl transition-all font-display text-2xl font-bold tracking-tight ${
                        isActive
                          ? 'bg-[#008751]/15 text-[#008751] border border-[#008751]/30'
                          : 'bg-zinc-900/60 text-zinc-100 hover:bg-zinc-800'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#008751]" />}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Tray Footer CTA */}
            <div className="p-6 border-t border-zinc-900 bg-zinc-950">
              <Link
                to="/talk-show"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 py-4 bg-white text-black font-accent font-black uppercase text-xs tracking-widest rounded-full hover:bg-[#008751] hover:text-white transition-colors shadow-lg mb-4"
              >
                <Sparkles className="w-4 h-4 fill-black" />
                <span>Watch The Talk Show</span>
              </Link>
              <p className="text-center text-[11px] font-mono text-zinc-500 flex items-center justify-center gap-1">
                <span>Made with</span>
                <Heart className="w-3 h-3 text-[#008751] fill-[#008751]" />
                <span>for Nigerians Worldwide • © 2026 HBG</span>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
