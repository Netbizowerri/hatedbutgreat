import React from 'react';
import { 
  TrendingUp, 
  ArrowLeft, 
  Building2, 
  Sparkles, 
  Globe, 
  Coins, 
  Flame, 
  Zap, 
  Briefcase, 
  Compass, 
  CheckCircle2, 
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { profiles } from '../data/profiles';
import { businessTimeline } from '../data/timeline';
import { ProfileCard } from '../components/ui/ProfileCard';
import { PageTransition, SectionDivider } from '../components/ui/LayoutDecorations';
import { useProfile } from '../context/ProfileContext';
import { SeoMeta } from '../components/seo/SeoMeta';
import { BreadcrumbSchema } from '../components/seo/JsonLd';
import { motion } from 'motion/react';

export const BusinessAdventures: React.FC = () => {
  const { setSelectedProfile } = useProfile();
  const businessList = profiles.filter((p) => p.category === 'business');

  return (
    <PageTransition>
      <SeoMeta
        title="Business Adventures — Nigerian Minds That Move Global Markets"
        description="Nigerian entrepreneurs conquering global markets. From fintech unicorns to the Dangote refinery, meet the business titans redefining African capitalism."
        url="/business-adventures"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Business Adventures', url: '/business-adventures' },
      ]} />
      <div className="pt-28 lg:pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Breadcrumb */}
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-[#008751] transition-colors uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Universal Portal</span>
          </Link>

          {/* Pillar Hero */}
          <div className="glass-card p-8 sm:p-16 border-[#008751]/30 bg-gradient-to-r from-zinc-950 via-[#008751]/10 to-zinc-950 relative overflow-hidden">
            <div className="max-w-4xl space-y-6 relative z-10">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#008751]/20 text-[#008751] border border-[#008751]/30 text-xs font-mono uppercase tracking-widest w-fit">
                <TrendingUp className="w-4 h-4" />
                <span>PILLAR TWO ARCHIVE</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                Nigerian Minds That<br />
                <span className="text-[#008751]">Move Global Markets</span>
              </h1>

              <p className="text-zinc-300 text-lg sm:text-xl font-body leading-relaxed">
                Boardrooms. Startups. Multi-billion dollar infrastructure refineries. The relentless Nigerian entrepreneur conquers volatile emerging markets and steers global trade diplomacy.
              </p>
            </div>
            
            <Building2 className="absolute -right-12 -bottom-12 w-96 h-96 text-[#008751]/10 pointer-events-none stroke-[0.5]" />
          </div>

          {/* Diaspora Ventures Overview Section */}
          <div className="space-y-8">
            <div className="border-b border-zinc-800 pb-4">
              <h2 className="font-accent font-extrabold text-xs tracking-[0.3em] uppercase text-zinc-400">
                DIASPORA BUSINESS ADVENTURES
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Introduction Column */}
              <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center gap-2 text-[#008751] font-mono text-xs uppercase tracking-wider">
                  <Briefcase className="w-4 h-4" />
                  <span>Bridging Global Capital</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  Unlocking Scalable <br />
                  <span className="text-[#008751]">Diaspora Ventures</span>
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-body">
                  Nigerian diaspora business adventures is a dynamic movement of entrepreneurs returning or remotely launching scalable ventures. These businesses span diverse sectors like fintech, health-tech, oil and gas, sustainable agriculture, and logistics, bridging the gap between foreign resources and local market needs.
                </p>
              </div>

              {/* High-Profile Success Stories & Startups Grid */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                  <span className="text-xs font-mono uppercase text-zinc-500 tracking-wider">High-Profile Success Stories & Startups</span>
                  <span className="text-xs font-mono text-[#008751] uppercase tracking-widest">PROVED SCALE</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      name: 'LemFi',
                      subtitle: '(Formerly Lemonade Finance)',
                      desc: 'Co-founded by Nigerian expat Ridwan Olalere, this fintech platform simplifies cross-border payments, allowing Africans in the diaspora to send money and manage funds without heavy fees.',
                      tag: 'FINTECH & REMITTANCE',
                      icon: Coins
                    },
                    {
                      name: 'Flying Doctors Nigeria',
                      subtitle: 'Founded by Dr. Ola Orekunrin',
                      desc: 'A UK-trained medical doctor who returned to Nigeria to launch West Africa’s first indigenous air ambulance service. Valued in the tens of millions, it has evacuated hundreds of critical patients.',
                      tag: 'HEALTH-TECH & LOGISTICS',
                      icon: Zap
                    },
                    {
                      name: 'HelpMeWaka',
                      subtitle: 'Founded by Diaspora Visionary',
                      desc: 'A digital startup acting as a smart errand service, helping busy professionals and diasporans get personal and professional tasks managed locally in Nigeria and Ghana without disruption.',
                      tag: 'DIGITAL SERVICES & GIGS',
                      icon: Compass
                    }
                  ].map((startup, idx) => {
                    const Icon = startup.icon;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -6, borderColor: 'rgba(16, 185, 129, 0.4)' }}
                        className="glass-card p-6 border border-zinc-800/80 bg-zinc-900/40 flex flex-col justify-between h-full group"
                      >
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <span className="text-[9px] font-mono uppercase tracking-widest text-[#008751] font-bold">
                              {startup.tag}
                            </span>
                            <Icon className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                          </div>
                          <div>
                            <h4 className="font-display font-bold text-lg text-white group-hover:text-emerald-300 transition-colors">
                              {startup.name}
                            </h4>
                            <span className="text-[10px] font-mono text-zinc-500 block mb-2">{startup.subtitle}</span>
                            <p className="text-zinc-400 text-xs leading-relaxed font-body">
                              {startup.desc}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Special Deep-Dive: Dangote Petroleum Refinery */}
          <div className="space-y-8">
            <SectionDivider title="GLOBAL ENERGY POWERHOUSE" subtitle="DANGOTE PETROLEUM REFINERY SUCCESS" />
            
            <div className="glass-card p-8 sm:p-12 border-emerald-500/20 bg-gradient-to-b from-zinc-950 to-zinc-900 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono uppercase tracking-wider">
                    <Flame className="w-4 h-4 text-emerald-400" />
                    <span>WORLD'S LARGEST SINGLE-TRAIN REFINERY</span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    Transforming Global & Regional <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-emerald-500">
                      Energy Dynamics
                    </span>
                  </h3>

                  <p className="text-zinc-300 text-sm sm:text-base font-body leading-relaxed">
                    The Dangote Petroleum Refinery in Lagos, Nigeria, is transforming global and regional energy markets. As the world’s largest single-train facility, it processes up to <strong>700,000 barrels</strong> of crude oil per day and has rapidly expanded its exports to become a significant global supplier of refined fuels, including being the world's largest exporter of jet fuel.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-start gap-2 text-zinc-400 text-xs font-body">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Processes 700k barrels of crude per day.</span>
                    </div>
                    <div className="flex items-start gap-2 text-zinc-400 text-xs font-body">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>World's largest exporter of jet fuel.</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 grid grid-cols-1 gap-4">
                  <div className="p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
                    <div className="text-2xl font-black font-mono text-emerald-400">700K bpd</div>
                    <div className="text-xs font-accent font-bold uppercase text-zinc-400 tracking-wider">Processing Capacity</div>
                    <p className="text-zinc-500 text-[11px] font-body">Operating efficiently to yield vast volumes of premium petrol, diesel, and high-altitude jet fuel.</p>
                  </div>
                  <div className="p-5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
                    <div className="text-2xl font-black font-mono text-emerald-400">1.4M bpd</div>
                    <div className="text-xs font-accent font-bold uppercase text-zinc-400 tracking-wider">Future Expansion Goal</div>
                    <p className="text-zinc-500 text-[11px] font-body">Backed by a $400M equipment deal to double output and establish the absolute largest single refining complex on earth.</p>
                  </div>
                </div>
              </div>

              {/* Three Key Drivers Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-zinc-800/80 relative z-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-[10px]">01</span>
                    <span>Massive Reach</span>
                  </div>
                  <h4 className="font-display font-bold text-white text-base">Capacity & Global Exports</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed font-body">
                    Exports fuel to major markets across Africa, Europe (including the UK, France, and the Netherlands), Brazil, the United States, and Saudi Arabia.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-[10px]">02</span>
                    <span>East Africa Hub</span>
                  </div>
                  <h4 className="font-display font-bold text-white text-base">Strategic Infrastructure</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed font-body">
                    Secured a massive pipeline deal to construct oil and gas pipelines spanning from Ethiopia to Djibouti, bringing energy products directly to maritime shipping lanes.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-[10px]">03</span>
                    <span>Market Impact</span>
                  </div>
                  <h4 className="font-display font-bold text-white text-base">Atlantic Basin Stabilizer</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed font-body">
                    Acts as a crucial stabilizer for tight global fuel supplies—a role that has become highly strategic amid geopolitical tensions and declining Western refining capacity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Investment Strategies Section */}
          <div className="space-y-8">
            <SectionDivider title="KEY INVESTMENT STRATEGIES" subtitle="BEYOND REMITTANCES INVESTMENT MANDATES" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Real Estate & Agriculture',
                  desc: 'Many professionals use platforms like the African Diaspora Network or Nigerians in Diaspora Commission to channel investments into passive income streams, such as rental properties and agricultural cooperatives.',
                  icon: Coins,
                  tag: 'PASSIVE WEALTH STREAMS'
                },
                {
                  title: 'Tech & Innovation Hubs',
                  desc: 'Diaspora founders consistently leverage global knowledge and venture capital to build tech platforms that serve the African continent, such as Flutterwave and Andela.',
                  icon: Target,
                  tag: 'GLOBAL TECH BRIDGES'
                },
                {
                  title: 'Philanthropy-driven Enterprise',
                  desc: 'Many entrepreneurs prioritize the "Beyond Remittances" strategy, pushing capital into micro, small, and medium-sized enterprises (MSMEs) in fashion, sustainable energy, and design.',
                  icon: Sparkles,
                  tag: 'MSME CATALYZING'
                }
              ].map((strategy, idx) => {
                const Icon = strategy.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, borderColor: 'rgba(16, 185, 129, 0.4)' }}
                    className="glass-card p-8 border border-zinc-800 bg-zinc-900/30 flex flex-col justify-between space-y-6 relative overflow-hidden group"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors" />
                    <div className="space-y-4 relative z-10">
                      <div className="p-3 bg-emerald-500/10 rounded-xl w-fit text-emerald-400">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#008751] block font-bold">
                        {strategy.tag}
                      </span>
                      <h4 className="font-display font-bold text-xl text-white">
                        {strategy.title}
                      </h4>
                      <p className="text-zinc-400 text-sm leading-relaxed font-body">
                        {strategy.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Verified Profiles Grid */}
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <h2 className="font-accent font-extrabold text-xs tracking-[0.3em] uppercase text-zinc-400">
                DOCUMENTED CAPITAL TITANS ({businessList.length})
              </h2>
              <span className="text-xs font-mono text-[#008751]">VERIFIED MACRO DOSSIERS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessList.map((prof) => (
                <ProfileCard key={prof.id} profile={prof} onSelect={setSelectedProfile} />
              ))}
            </div>
          </div>

          {/* Unique Section — Timeline */}
          <SectionDivider title="FROM LAGOS TO THE WORLD" subtitle="DECADE BY DECADE CAPITAL EVOLUTION" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTimeline.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 border-l-2 border-l-[#008751] bg-zinc-900/40 hover:bg-zinc-900/80 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black font-mono text-[#008751]">{item.year}</span>
                  <Globe className="w-4 h-4 text-zinc-600" />
                </div>
                <h4 className="font-display font-bold text-xl text-white mb-2">{item.title}</h4>
                <p className="text-zinc-400 text-sm font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Talk Show Sync */}
          <div className="glass-card p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-[#008751]/30 bg-zinc-900/30">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-display text-3xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
                <Sparkles className="w-6 h-6 text-[#008751]" />
                <span>Watch Episode 02: Scaling African Infrastructure</span>
              </h3>
              <p className="text-zinc-400 text-sm">Tony Elumelu & Jason Njoku break down startup resilience.</p>
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

