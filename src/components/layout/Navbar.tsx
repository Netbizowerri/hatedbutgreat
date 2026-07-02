import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Sparkles } from 'lucide-react';
import { MobileMenuTray } from './MobileMenuTray';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Medical Excellence', path: '/medical-excellence' },
    { name: 'Business Adventures', path: '/business-adventures' },
    { name: 'Entertainment Creativity', path: '/entertainment-creativity' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800 shadow-2xl py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="https://i.ibb.co/V0DyFQ2L/Whats-App-Image-2026-06-29-at-11-46-59-AM.jpg"
              alt="Nigerian Flag"
              className="h-12 w-auto object-contain rounded-sm transition-transform group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://i.ibb.co/4ZDMQ0Z9/Hated-But-Great.png" 
              alt="Hated But Great" 
              className="h-10 sm:h-12 w-auto object-contain brightness-100 transition-opacity duration-200 group-hover:opacity-90" 
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-accent font-bold tracking-widest uppercase text-zinc-300">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={`transition-colors py-1 relative ${
                    isActive ? 'text-[#008751]' : 'hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#008751]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/talk-show"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-accent font-extrabold uppercase text-xs tracking-widest rounded-full hover:bg-[#008751] hover:text-white transition-all duration-200 shadow-lg"
            >
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>Watch Talk Show</span>
            </Link>

            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-[#008751] transition-colors"
              aria-label="Open mobile menu"
              aria-expanded={isMobileOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenuTray
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
};
