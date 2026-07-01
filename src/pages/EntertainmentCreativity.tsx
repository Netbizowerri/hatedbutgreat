import React from 'react';
import { Mic, ArrowLeft, Radio, Sparkles, Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profiles } from '../data/profiles';
import { ProfileCard } from '../components/ui/ProfileCard';
import { PageTransition, SectionDivider } from '../components/ui/LayoutDecorations';
import { useProfile } from '../context/ProfileContext';
import { SeoMeta } from '../components/seo/SeoMeta';
import { BreadcrumbSchema } from '../components/seo/JsonLd';

export const EntertainmentCreativity: React.FC = () => {
  const { setSelectedProfile } = useProfile();
  const entertainmentList = profiles.filter((p) => p.category === 'entertainment');

  return (
    <PageTransition>
      <SeoMeta
        title="Entertainment & Creativity — Nigerian Creativity That Conquered the Globe"
        description="Afrobeats stadium headliners, Nobel literature laureates, and Nollywood cinematic sovereignty. Nigerian culture dominates the global stage."
        url="/entertainment-creativity"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Entertainment Creativity', url: '/entertainment-creativity' },
      ]} />
      <div className="pt-28 lg:pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Breadcrumb */}
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-[#008751] transition-colors uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Universal Portal</span>
          </Link>

          {/* Pillar Hero */}
          <div className="glass-card p-8 sm:p-16 border-emerald-500/20 bg-gradient-to-r from-zinc-950 via-[#008751]/5 to-zinc-950 relative overflow-hidden">
            <div className="max-w-4xl space-y-6 relative z-10">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#008751]/10 text-emerald-400 border border-[#008751]/20 text-xs font-mono uppercase tracking-widest w-fit">
                <Mic className="w-4 h-4" />
                <span>PILLAR THREE ARCHIVE</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                Nigerian Creativity That<br />
                <span className="text-emerald-400">Conquered the Globe</span>
              </h1>

              <p className="text-zinc-300 text-lg sm:text-xl font-body leading-relaxed">
                Afrobeats stadium ambassadors. Nollywood cinematic sovereignty. Nobel literary laureates. The world finally celebrates the rhythm and storytelling prowess Nigerians always possessed.
              </p>
            </div>
            
            <Music2 className="absolute -right-12 -bottom-12 w-96 h-96 text-emerald-500/5 pointer-events-none" />
          </div>

          {/* Verified Profiles Grid */}
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <h2 className="font-accent font-extrabold text-xs tracking-[0.3em] uppercase text-zinc-400">
                DOCUMENTED CULTURAL TITANS ({entertainmentList.length})
              </h2>
              <span className="text-xs font-mono text-emerald-400">GLOBAL GRAMMY & NOBEL ARCHIVE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {entertainmentList.map((prof) => (
                <ProfileCard key={prof.id} profile={prof} onSelect={setSelectedProfile} />
              ))}
            </div>
          </div>

          {/* Unique Section — Decorative Waveform Visualizer */}
          <SectionDivider title="SOUND OF A NATION" subtitle="DECORATIVE AFROBEATS WAVEFORM RHYTHM" />
          
          <div className="glass-card p-8 sm:p-12 bg-zinc-900/40 border border-zinc-800 text-center space-y-6">
            <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-widest">
              <Radio className="w-4 h-4 animate-pulse" />
              <span>AFROBEATS RHYTHM GENERATOR: 124 BPM</span>
            </div>
            
            <div className="flex items-end justify-center gap-1.5 sm:gap-2 h-28 max-w-2xl mx-auto pt-4">
              {[40, 75, 30, 90, 60, 100, 45, 80, 95, 35, 85, 50, 70, 90, 40, 100, 60, 80, 30, 70, 95, 55, 85].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-emerald-600 via-[#008751] to-emerald-400 rounded-full transition-all duration-300 hover:scale-y-125"
                  style={{ height: `${h}%`, opacity: 0.6 + (i % 3) * 0.15 }}
                />
              ))}
            </div>
            
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              "WE REFUSED TO ASK FOR PERMISSION TO BE HEARD. WE SIMPLY TURNED UP THE VOLUME."
            </p>
          </div>

          {/* Talk Show Sync */}
          <div className="glass-card p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-emerald-500/20 bg-zinc-900/30">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-display text-3xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
                <Sparkles className="w-6 h-6 text-emerald-400" />
                <span>Watch Episode 03: Owning the Cultural Lens</span>
              </h3>
              <p className="text-zinc-400 text-sm">Chimamanda Adichie & Genevieve Nnaji on narrative dignity.</p>
            </div>
            <Link
              to="/talk-show"
              className="px-8 py-4 bg-[#008751] text-white font-accent font-black uppercase text-xs tracking-widest rounded-full hover:bg-white hover:text-black transition-colors flex-shrink-0"
            >
              Go to Talk Show Portal
            </Link>
          </div>
        </div>
      </div>

    </PageTransition>
  );
};
