import React, { useState } from 'react';
import { Sparkles, Play, Calendar, Clock, Tv, CheckCircle2 } from 'lucide-react';
import { talkShowEpisodes } from '../data/profiles';
import { PageTransition, SectionDivider } from '../components/ui/LayoutDecorations';
import { SeoMeta } from '../components/seo/SeoMeta';
import { VideoObjectSchema, FAQPageSchema } from '../components/seo/JsonLd';
import { FORMSPREE_ENDPOINTS } from '../lib/formspree';
import { motion } from 'motion/react';

export const TalkShow: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    pillar: 'medical',
    country: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleGuestApply = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_ENDPOINTS.talkshow, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'Talk Show Guest Application' }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const pillarBadges = {
    medical: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    business: 'bg-[#008751]/20 text-[#008751] border-[#008751]/30',
    entertainment: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  };

  return (
    <PageTransition>
      <SeoMeta
        title="The Hated But Great Talk Show"
        description="Unfiltered conversations with Nigerian medical scientists, billion-dollar founders, and Grammy ambassadors deconstructing stereotypes. Watch the official video portal."
        url="/talk-show"
      />
      {talkShowEpisodes.map((ep) => (
        <React.Fragment key={ep.id}><VideoObjectSchema episode={ep} /></React.Fragment>
      ))}
      <FAQPageSchema questions={[
        { question: 'How can I watch the Hated But Great Talk Show?', answer: 'Full 4K video episodes are published on the official HBG YouTube channel. Audio podcasts are available on Spotify and Apple Podcasts.' },
        { question: 'How do I apply to be a guest on the show?', answer: 'Use the guest application form on this page to submit your credentials. Our show producers review submissions against our redemptive criteria.' },
        { question: 'Who can be featured on the Talk Show?', answer: 'Notable Nigerian researchers, founders, medical professionals, and cultural ambassadors who are proving Nigerian excellence globally.' },
      ]} />
      <div className="pt-28 lg:pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Hero */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#008751] text-white font-accent font-black uppercase text-xs tracking-widest">
              <Tv className="w-3.5 h-3.5 fill-white" />
              <span>OFFICIAL BROADCAST PORTAL</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Hated But Great<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008751] via-emerald-200 to-[#008751]">
                The Talk Show
              </span>
            </h1>

            <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed">
              Anchored around our three pillars of global redemption. Unfiltered, world-class dialogues with Nigerian scientists, founders, and cultural ambassadors proving our undeniable excellence.
            </p>
          </div>

          {/* Episode Lineup Grid */}
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <h2 className="font-accent font-extrabold text-xs tracking-[0.3em] uppercase text-zinc-400">
                SEASON ONE EPISODE DOSSIERS
              </h2>
              <span className="text-xs font-mono text-[#008751]">4K BROADCAST READY</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {talkShowEpisodes.map((ep) => (
                <motion.div
                  key={ep.id}
                  whileHover={{ y: -8 }}
                  className="glass-card overflow-hidden flex flex-col justify-between border border-zinc-800 hover:border-[#008751]/50 transition-all duration-300 bg-zinc-900/60"
                >
                  <div>
                    <div className="relative aspect-video overflow-hidden bg-zinc-950 group cursor-pointer">
                      <img src={ep.thumbnail} alt={ep.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-[#008751] text-white flex items-center justify-center pl-1 shadow-2xl group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 fill-white" />
                        </div>
                      </div>
                      <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-accent font-bold uppercase tracking-wider border ${pillarBadges[ep.pillar]}`}>
                        {ep.pillar}
                      </span>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#008751]" />{ep.releaseDate}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-zinc-500" />{ep.duration}</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-white leading-tight">{ep.title}</h3>
                      <p className="text-xs font-mono text-[#008751] uppercase tracking-wider">{ep.guestName} ({ep.guestTitle})</p>
                      <p className="text-zinc-300 text-sm font-body leading-relaxed">{ep.summary}</p>
                    </div>
                  </div>

                  <div className="p-6 bg-zinc-950/80 border-t border-zinc-800/80 italic text-xs text-zinc-300">
                    "{ep.featuredQuote}"
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* How to Watch Band */}
          <SectionDivider title="GLOBAL SYNDICATION PROTOCOL" subtitle="HOW TO STREAM" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="glass-card p-8 space-y-3 bg-zinc-900/40">
              <h4 className="font-accent font-black text-sm uppercase tracking-widest text-[#008751]">YouTube Syndication</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">Full 4K video dossiers published directly to the official HBG YouTube channel on premiere dates.</p>
            </div>
            <div className="glass-card p-8 space-y-3 bg-zinc-900/40">
              <h4 className="font-accent font-black text-sm uppercase tracking-widest text-[#008751]">Spotify Audio Feeds</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">High-definition audio podcasts available for diaspora commuters across Spotify and Apple Podcasts.</p>
            </div>
            <div className="glass-card p-8 space-y-3 bg-zinc-900/40">
              <h4 className="font-accent font-black text-sm uppercase tracking-widest text-white">Pan-African Satellite</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">Syndication partners across major West African television channels announced prior to Season 1 broadcast.</p>
            </div>
          </div>

          {/* Apply to be Featured Form */}
          <div className="glass-card p-8 sm:p-16 border-[#008751]/40 bg-gradient-to-b from-zinc-950 to-zinc-900 max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-10">
              <div className="inline-flex items-center gap-2 text-[#008751] text-xs font-mono uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>GUEST RECRUITMENT INITIATIVE</span>
              </div>
              <h3 className="font-display text-4xl font-bold text-white">Apply to Be Featured</h3>
              <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto">
                Are you a notable Nigerian researcher, founder, or creator proving our greatness abroad? Or do you represent someone who deserves global documentation?
              </p>
            </div>

            {status === 'success' ? (
              <div className="p-8 text-center bg-zinc-950 rounded-2xl border border-emerald-500/40 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-display text-2xl font-bold text-white">Application Transmitted</h4>
                <p className="text-zinc-300 text-sm">Our show producers will review your credentials against our redemptive criteria and contact you.</p>
              </div>
            ) : (
              <form onSubmit={handleGuestApply} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-accent font-bold uppercase tracking-wider text-zinc-300">Your Name *</label>
                    <input type="text" required placeholder="e.g. Dr. Emeka Eze" value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})} className="w-full glass-input px-4 py-3 text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-accent font-bold uppercase tracking-wider text-zinc-300">Profession / Title *</label>
                    <input type="text" required placeholder="e.g. Lead Robotic Surgeon" value={formData.profession} onChange={(e)=>setFormData({...formData, profession:e.target.value})} className="w-full glass-input px-4 py-3 text-sm" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-accent font-bold uppercase tracking-wider text-zinc-300">Target Pillar *</label>
                    <select value={formData.pillar} onChange={(e)=>setFormData({...formData, pillar:e.target.value})} className="w-full glass-input px-4 py-3 text-sm bg-zinc-900">
                      <option value="medical">Medical Excellence</option>
                      <option value="business">Business Adventures</option>
                      <option value="entertainment">Entertainment Creativity</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-accent font-bold uppercase tracking-wider text-zinc-300">Current Country *</label>
                    <input type="text" required placeholder="e.g. Germany" value={formData.country} onChange={(e)=>setFormData({...formData, country:e.target.value})} className="w-full glass-input px-4 py-3 text-sm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-accent font-bold uppercase tracking-wider text-zinc-300">Why You / Your Nominee Should Be on the Show *</label>
                  <textarea required rows={4} placeholder="Summarize key world-first achievements or systemic narrative obstacles overcome..." value={formData.message} onChange={(e)=>setFormData({...formData, message:e.target.value})} className="w-full glass-input px-4 py-3 text-sm resize-none" />
                </div>

                <button type="submit" disabled={status==='submitting'} className="w-full py-4 bg-[#008751] text-white font-accent font-black uppercase text-xs tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-2xl">
                  {status === 'submitting' ? 'Submitting Application...' : 'Transmit Guest Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
