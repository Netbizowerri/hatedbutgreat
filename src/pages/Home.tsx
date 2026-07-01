import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Stethoscope, TrendingUp, Mic, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { profiles } from '../data/profiles';
import { ProfileCard } from '../components/ui/ProfileCard';
import { StatsBar } from '../components/ui/StatsBar';
import { PageTransition, HeroParticles, SectionDivider } from '../components/ui/LayoutDecorations';
import { useProfile } from '../context/ProfileContext';
import { SeoMeta } from '../components/seo/SeoMeta';
import { OrganizationSchema, WebSiteSchema } from '../components/seo/JsonLd';
import type { Profile } from '../types';

const HERO_IMAGES: Record<number, string> = {
  101: 'https://i.ibb.co/4w706Xkt/Hated-But-Great-1.jpg',
  301: 'https://i.ibb.co/ycGtJtgn/Hated-But-Great-3.jpg',
  103: 'https://i.ibb.co/cXCSJtwB/Hated-But-Great.jpg',
  104: 'https://i.ibb.co/275mZjZR/Hated-But-Great-2.jpg',
};

export const Home: React.FC = () => {
  const { setSelectedProfile } = useProfile();

  const heroProfiles = ([101, 301, 103, 104]
    .map(id => profiles.find(p => p.id === id))
    .filter((p): p is Profile => !!p)
    .map(p => ({ ...p, image: HERO_IMAGES[p.id] ?? p.image })))

  const pillars = [
    {
      title: 'Medical Excellence',
      path: '/medical-excellence',
      icon: Stethoscope,
      color: 'text-[#008751]',
      borderColor: 'hover:border-[#008751]',
      desc: 'Nigerian physicians, surgeons, and research epidemiologists leading world-class hospitals and curing global diseases.',
    },
    {
      title: 'Business Adventures',
      path: '/business-adventures',
      icon: TrendingUp,
      color: 'text-[#008751]',
      borderColor: 'hover:border-[#008751]',
      desc: 'From chaotic Lagos markets to Geneva WTO headquarters and $20B industrial refineries — unstoppable capital architects.',
    },
    {
      title: 'Entertainment Creativity',
      path: '/entertainment-creativity',
      icon: Mic,
      color: 'text-[#008751]',
      borderColor: 'hover:border-[#008751]',
      desc: 'Afrobeats stadium headliners, Nobel literature laureates, and cinematic directors dictating the tempo of modern pop culture.',
    },
  ];

  return (
    <PageTransition>
      <SeoMeta
        title="Global Nigerian Image Redemption Platform"
        description="Hated But Great — The definitive cultural declaration documenting Nigerian excellence across medicine, business, and entertainment. Meet the Nigerians redefining global achievement."
        url="/"
      />
      <OrganizationSchema />
      <WebSiteSchema />
      <div className="relative overflow-hidden">
        {/* Section 1 — Full Viewport Hero */}
        <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-40 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-zinc-950">
          <HeroParticles />

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Column: Bold Typography & Manifesto */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-[#008751] uppercase tracking-[0.2em]">
                <ShieldCheck className="w-3 h-3 text-[#008751]" />
                <span>GLOBAL NIGERIAN IMAGE REDEMPTION</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                Hated. Doubted.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008751] via-[#10B981] to-[#008751]">
                  Undeniably Great.
                </span>
              </h1>

              <p className="max-w-2xl text-zinc-300 text-lg sm:text-xl font-body leading-relaxed mx-auto lg:mx-0">
                A definitive cultural declaration documenting indigenous intellect across medicine, enterprise, and storytelling — for those who rise despite visa discrimination and systemic prejudice.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/medical-excellence"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-black font-accent font-black uppercase text-xs tracking-widest rounded-full hover:bg-[#008751] hover:text-white transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Explore Dossiers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/talk-show"
                  className="w-full sm:w-auto px-8 py-4 glass-card text-white font-accent font-bold uppercase text-xs tracking-widest rounded-full hover:border-[#008751] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#008751]" />
                  <span>Watch Talk Show</span>
                </Link>
              </div>


            </div>

            {/* Right Column: ScrapeGraph Mosaic Tiles */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {heroProfiles.map((prof, idx) => (
                <motion.div
                  key={prof.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 + 0.3 }}
                  onClick={() => setSelectedProfile(prof)}
                  className={`relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer group shadow-2xl border border-zinc-800 ${
                    idx === 1 ? 'translate-y-6 sm:translate-y-8' : idx === 2 ? '-translate-y-6 sm:-translate-y-8' : ''
                  }`}
                >
                  <img
                    src={prof.image}
                    alt={prof.name}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-110 group-hover:brightness-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[9px] font-mono tracking-widest text-[#008751] uppercase block">
                      {prof.category}
                    </span>
                    <h3 className="font-display font-bold text-base text-white leading-tight">
                      {prof.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 — Mission Statement */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D] border-t border-zinc-900">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <span className="text-xs font-mono font-bold tracking-[0.4em] uppercase text-[#008751] block">
              THE HISTORIC DISTINCTION
            </span>
            
            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight">
              "Nigeria is a colonial mapping.<br />
              <span className="text-[#008751]">Nigerians are an indestructible force.</span>"
            </h2>

            <div className="glass-card p-8 sm:p-12 text-left relative max-w-4xl mx-auto bg-zinc-900/40 border-l-4 border-l-[#008751]">
              <p className="text-zinc-300 text-lg sm:text-xl font-body leading-relaxed space-y-4">
                <span className="block mb-4">
                  There is a clear and critical difference between Nigeria (a nation formed by 1914 colonial borders) and Nigerians: a people whose survival resilience, intellectual brilliance, and creativity is unmatched anywhere on earth.
                </span>
                <span className="block">
                  The Igbo commercial genius, Yoruba administrative mastery, and Hausa agricultural excellence collectively elevated our nation in the 1960s to where the Naira outvalued the US Dollar. Despite systemic passport rejection and dehumanizing visa walls, that greatness never died — it simply conquered the globe.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 — Notable Nigerians Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8">
              <div>
                <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#008751]">
                  VERIFIED EXCELLENCE ARCHIVE
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2">
                  Living Proof of Greatness
                </h2>
              </div>
              <p className="text-zinc-400 max-w-md text-sm font-body">
                Selected profiles scraped from global public news archives and medical journals demonstrating world-first achievements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {profiles.slice(0, 6).map((profile) => (
                <ProfileCard key={profile.id} profile={profile} onSelect={setSelectedProfile} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — Three Pillars CTA Strip */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-950 via-[#1A1A2E]/40 to-zinc-950 border-y border-zinc-900">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#008751]">
                THE CORE VERTICALS
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
                Three Pillars of Global Redemption
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <Link
                    key={pillar.title}
                    to={pillar.path}
                    className={`glass-card p-8 group flex flex-col justify-between transition-all duration-300 ${pillar.borderColor}`}
                  >
                    <div className="space-y-6">
                      <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className={`w-7 h-7 ${pillar.color}`} />
                      </div>
                      <h3 className="font-display text-3xl font-bold text-white group-hover:text-[#008751] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-zinc-300 text-sm font-body leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="pt-8 mt-8 border-t border-zinc-800 flex items-center justify-between text-xs font-accent font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white">
                      <span>Explore Pillar</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#008751]" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 5 — Talk Show Teaser */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
          <div className="max-w-7xl mx-auto glass-card p-8 sm:p-16 border-[#008751]/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#008751]/10 to-transparent pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase px-3 py-1 bg-[#008751] text-white rounded-full inline-block">
                  OFFICIAL VIDEO PORTAL
                </span>
                <h2 className="font-display text-4xl sm:text-6xl font-bold text-white">
                  The Hated But Great<br />Talk Show
                </h2>
                <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                  Where undeniable excellence speaks for itself. Watch unfiltered conversations with Nigerian medical scientists, billionaire founders, and Grammy ambassadors deconstructing stereotypes.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    to="/talk-show"
                    className="px-8 py-4 bg-white text-black font-accent font-extrabold uppercase text-xs tracking-widest rounded-full hover:bg-[#008751] hover:text-white transition-colors shadow-xl"
                  >
                    View Episode Lineup
                  </Link>
                  <Link
                    to="/contact"
                    className="px-8 py-4 glass-card text-zinc-300 hover:text-white font-accent font-bold uppercase text-xs tracking-widest rounded-full hover:border-white transition-colors"
                  >
                    Apply as Guest
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 aspect-video rounded-2xl overflow-hidden border border-zinc-700/80 shadow-2xl relative group">
                <img
                  src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1000&q=80"
                  alt="Talk Show Studio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#008751] text-white flex items-center justify-center shadow-2xl pl-1 group-hover:scale-110 transition-transform cursor-pointer">
                    <Sparkles className="w-8 h-8 fill-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 — Vortex Style Stats Dashboard Bar */}
        <SectionDivider title="QUANTIFIABLE IMPACT DASHBOARD" subtitle="LIVE METRICS MATRIX" />
        <StatsBar />

        {/* Section 7 — Join the Movement Strip */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Join the Redemption Movement
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg font-body max-w-2xl mx-auto">
              Contribute your story or stay informed with our curated dispatches of Nigerian excellence worldwide.
            </p>
            <div className="pt-4 flex justify-center">
              <Link
                to="/contact"
                className="px-10 py-5 bg-[#008751] text-white font-accent font-black uppercase text-sm tracking-[0.25em] rounded-full hover:bg-[#10B981] hover:text-white transition-all duration-300 shadow-2xl"
              >
                Transmit Your Dossier
              </Link>
            </div>
          </div>
        </section>
      </div>

    </PageTransition>
  );
};
