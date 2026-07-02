import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FORMSPREE_ENDPOINTS } from '../../lib/formspree';
import { Send, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_ENDPOINTS.newsletter, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, source: 'Footer Newsletter' }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-zinc-900">
          {/* Col 1: Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/V0DyFQ2L/Whats-App-Image-2026-06-29-at-11-46-59-AM.jpg"
                alt="Nigerian Flag"
                className="h-16 w-auto object-contain rounded-sm"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://i.ibb.co/4ZDMQ0Z9/Hated-But-Great.png" 
                alt="Hated But Great" 
                className="h-12 sm:h-16 w-auto object-contain" 
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-zinc-400 text-sm font-body leading-relaxed">
              Global Nigerian Image Redemption Platform. Celebrating indigenous intellect, medical breakthroughs, and unstoppable business acumen across diaspora.
            </p>
            <div className="pt-2 text-xs font-mono text-[#008751] uppercase tracking-widest">
              "FEARED BECAUSE WE'RE GREAT."
            </div>
          </div>

          {/* Col 2: Pillars */}
          <div className="space-y-4">
            <h4 className="font-accent font-extrabold text-xs tracking-widest uppercase text-zinc-400">
              EXCELLENCE PILLARS
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link to="/medical-excellence" className="text-zinc-300 hover:text-[#008751] transition-colors">
                  Medical Excellence
                </Link>
              </li>
              <li>
                <Link to="/business-adventures" className="text-zinc-300 hover:text-[#008751] transition-colors">
                  Business Adventures
                </Link>
              </li>
              <li>
                <Link to="/entertainment-creativity" className="text-zinc-300 hover:text-[#008751] transition-colors">
                  Entertainment Creativity
                </Link>
              </li>
              <li>
                <Link to="/talk-show" className="text-zinc-300 hover:text-[#008751] transition-colors">
                  HBG Talk Show
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Portal */}
          <div className="space-y-4">
            <h4 className="font-accent font-extrabold text-xs tracking-widest uppercase text-zinc-400">
              LEGAL & RECORD
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link to="/contact" className="text-zinc-300 hover:text-white transition-colors">
                  Partner / Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-zinc-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use" className="text-zinc-400 hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-zinc-400 hover:text-white transition-colors">
                  Editorial Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Mini-Form */}
          <div className="space-y-4">
            <h4 className="font-accent font-extrabold text-xs tracking-widest uppercase text-zinc-400">
              JOIN THE MOVEMENT
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Get bi-weekly dossiers of Nigerian greatness delivered to your inbox. No spam. Just undeniable excellence.
            </p>
            {status === 'success' ? (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center gap-2 text-emerald-400 text-xs font-medium">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Dossier subscription active! Welcome.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full glass-input px-4 py-3 pr-10 text-xs"
                  />
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="absolute right-2 top-1.5 p-2 rounded-lg bg-[#008751] text-white hover:bg-white hover:text-black transition-colors disabled:opacity-50"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {status === 'error' && (
                  <p className="text-[10px] text-red-400 font-mono">Failed to register. Try again later.</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Heritage Attribution */}
        <div className="py-10 text-center border-b border-zinc-800/50">
          <p className="text-white font-accent font-extrabold text-lg sm:text-xl tracking-wide">
            Hated But Great Project is an initiative of{' '}
            <span className="text-[#008751]">HERITAGE PROMOTION</span>
          </p>
        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4 font-mono">
          <p>© 2026 Hated But Great. All Rights Reserved. A Global Nigerian Image Redemption Project.</p>

        </div>
      </div>
    </footer>
  );
};
