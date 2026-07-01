import React from 'react';
import { Stethoscope, Award, ArrowLeft, HeartPulse, Sparkles, Globe, Users, HeartHandshake, BookOpen, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { profiles } from '../data/profiles';
import { ProfileCard } from '../components/ui/ProfileCard';
import { PageTransition, SectionDivider } from '../components/ui/LayoutDecorations';
import { useProfile } from '../context/ProfileContext';
import { SeoMeta } from '../components/seo/SeoMeta';
import { BreadcrumbSchema } from '../components/seo/JsonLd';

export const MedicalExcellence: React.FC = () => {
  const { setSelectedProfile } = useProfile();
  const medicalList = profiles.filter((p) => p.category === 'medical');

  return (
    <PageTransition>
      <SeoMeta
        title="Medical Excellence — Nigerian Hands That Heal the World"
        description="Meet Nigerian physicians, surgeons, and epidemiologists leading world-class hospitals. From pioneering IVF in Africa to discovering CTE and containing Ebola."
        url="/medical-excellence"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Medical Excellence', url: '/medical-excellence' },
      ]} />
      <div className="pt-28 lg:pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Breadcrumb / Back */}
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-[#008751] transition-colors uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Universal Portal</span>
          </Link>

          {/* Pillar Hero */}
          <div className="glass-card p-8 sm:p-16 border-emerald-500/30 bg-gradient-to-r from-zinc-950 via-[#008751]/10 to-zinc-950 relative overflow-hidden">
            <div className="max-w-4xl space-y-6 relative z-10">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono uppercase tracking-widest w-fit">
                <Stethoscope className="w-4 h-4" />
                <span>PILLAR ONE ARCHIVE</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
                Nigerian Hands That<br />
                <span className="text-[#008751]">Heal the World</span>
              </h1>

              <p className="text-zinc-300 text-lg sm:text-xl font-body leading-relaxed">
                From pioneering reproductive surgeries delivering Africa's first IVF infants to discovering neuropathological CTE in American football and halting continental Ebola outbreaks — meet the Nigerian clinicians redefining medicine.
              </p>
            </div>
            
            <HeartPulse className="absolute -right-12 -bottom-12 w-96 h-96 text-emerald-500/10 pointer-events-none stroke-[0.5]" />
          </div>

          {/* Global Diaspora Distributions Section */}
          <div className="space-y-8">
            <div className="border-b border-zinc-800 pb-4">
              <h2 className="font-accent font-extrabold text-xs tracking-[0.3em] uppercase text-zinc-400">
                GLOBAL DIASPORA DISTRIBUTIONS
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Introduction Column */}
              <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center gap-2 text-[#008751] font-mono text-xs uppercase tracking-wider">
                  <Globe className="w-4 h-4" />
                  <span>Lifeline to Domestic Health</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  Denying Brain Drain, <br />
                  <span className="text-[#008751]">Leading Global Care</span>
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-body">
                  Nigerian medical professionals in the diaspora—particularly in the US, UK, and Canada—are highly regarded for their expertise, holding prominent roles in critical care, medical research, and academic medicine. They serve as a vital lifeline to the domestic healthcare sector through annual clinical missions, capacity building, and knowledge transfer.
                </p>
              </div>

              {/* Stat Cards Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    region: 'United States & Canada',
                    stat: '4,000+',
                    label: 'Healthcare Professionals',
                    detail: 'Over 4,000 physicians, dentists, and allied health professionals are represented by the Association of Nigerian Physicians in the Americas (ANPA). This figure is the highest number of diaspora physicians in the United States.',
                    icon: Users
                  },
                  {
                    region: 'United Kingdom',
                    stat: '12,000+',
                    label: 'Registered Doctors',
                    detail: 'The UK General Medical Council (GMC) registry features over 12,000 Nigerian-trained doctors. This figure represents the highest number of diaspora physicians in the United Kingdom.',
                    icon: Stethoscope
                  },
                  {
                    region: 'Global Footprint',
                    stat: 'Thousands',
                    label: 'Practicing Worldwide',
                    detail: 'Beyond North America and Europe, thousands of highly regarded Nigerian doctors practice in nations like South Africa and Saudi Arabia, bringing elite clinical expertise to the global stage.',
                    icon: Activity
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -6, borderColor: 'rgba(16, 185, 129, 0.4)' }}
                      transition={{ duration: 0.3 }}
                      className="glass-card p-6 border border-zinc-800/80 bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 flex flex-col justify-between h-full group"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                            {item.region}
                          </span>
                          <Icon className="w-5 h-5 text-[#008751] group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="space-y-1">
                          <div className="text-3xl font-black font-mono tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                            {item.stat}
                          </div>
                          <div className="text-xs font-accent font-extrabold uppercase text-emerald-500 tracking-wider">
                            {item.label}
                          </div>
                        </div>
                        <p className="text-zinc-400 text-xs leading-relaxed font-body pt-2 border-t border-zinc-900">
                          {item.detail}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Verified Profiles Grid */}
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <h2 className="font-accent font-extrabold text-xs tracking-[0.3em] uppercase text-zinc-400">
                DOCUMENTED MEDICAL TITANS ({medicalList.length})
              </h2>
              <span className="text-xs font-mono text-[#008751]">SCRAPEGRAPHAI VERIFIED</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {medicalList.map((prof) => (
                <ProfileCard key={prof.id} profile={prof} onSelect={setSelectedProfile} />
              ))}
            </div>
          </div>

          {/* Diaspora Impact on Nigeria's Healthcare Section */}
          <div className="space-y-8">
            <SectionDivider title="DIASPORA IMPACT ON NIGERIA'S HEALTHCARE" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Medical Missions',
                  desc: 'Organizations like ANPA regularly fly teams of diaspora surgeons and specialists to Nigeria to perform free life-saving surgeries, provide dental and vision care, and treat thousands of indigent patients.',
                  icon: HeartHandshake,
                  tag: 'DIRECT CLINICAL INTERVENTION'
                },
                {
                  title: 'Training and Advocacy',
                  desc: 'Diaspora doctors actively conduct Continuing Medical Education (CME) seminars, such as ACLS/BLS and trauma training, to upskill local medical personnel and improve patient outcomes.',
                  icon: BookOpen,
                  tag: 'CAPACITY BUILDING'
                },
                {
                  title: 'Telehealth Collaborations',
                  desc: 'Initiatives like the ANPA ECHO Project enable remote, continuous clinical mentorship and case reviews between US-based specialists and Nigeria-based doctors.',
                  icon: Activity,
                  tag: 'TELEHEALTH & MENTORSHIP'
                }
              ].map((impact, idx) => {
                const Icon = impact.icon;
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
                        {impact.tag}
                      </span>
                      <h4 className="font-display font-bold text-xl text-white">
                        {impact.title}
                      </h4>
                      <p className="text-zinc-400 text-sm leading-relaxed font-body">
                        {impact.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Quote Pull Block */}
          <div className="glass-card p-10 sm:p-14 bg-zinc-900/50 border border-zinc-800 text-center max-w-4xl mx-auto space-y-4">
            <Award className="w-10 h-10 text-[#008751] mx-auto" />
            <blockquote className="font-display italic text-2xl sm:text-3xl text-white leading-relaxed">
              "I did what any dedicated physician sworn to the Hippocratic oath would do for their nation."
            </blockquote>
            <cite className="text-xs font-mono uppercase tracking-widest text-zinc-400 block pt-2">
              — Dr. Stella Ameyo Adadevoh, Ebola Containment Heroine
            </cite>
          </div>

          {/* Talk Show Tie-in */}
          <SectionDivider title="TALK SHOW SYNC" />
          <div className="glass-card p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-[#008751]/30">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-display text-3xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
                <Sparkles className="w-6 h-6 text-[#008751]" />
                <span>Watch Episode 01: Hands That Heal</span>
              </h3>
              <p className="text-zinc-400 text-sm">Exclusive interviews with Nigerian surgeons navigating foreign health systems.</p>
            </div>
            <Link
              to="/talk-show"
              className="px-8 py-4 bg-white text-black font-accent font-black uppercase text-xs tracking-widest rounded-full hover:bg-[#008751] hover:text-white transition-colors flex-shrink-0"
            >
              Go to Talk Show Portal
            </Link>
          </div>
        </div>
      </div>

    </PageTransition>
  );
};
