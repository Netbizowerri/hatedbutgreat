import React from 'react';
import { PageTransition } from '../components/ui/LayoutDecorations';
import { SeoMeta } from '../components/seo/SeoMeta';
import { OrganizationSchema, WebSiteSchema } from '../components/seo/JsonLd';
import { Shield, FileText, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'disclaimer';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const content = {
    privacy: {
      title: 'Global Privacy Policy',
      icon: Shield,
      updated: 'June 2025',
      body: (
        <>
          <p>This Privacy Policy governs the manner in which Hated But Great (www.hatedbutgreat.com) collects, maintains, and uses information collected from users across our global platform.</p>
          <h3 className="font-display font-bold text-2xl text-white mt-8 mb-4">1. Information Collection Protocol</h3>
          <p>We collect personally identifiable information (Full Name, Email Address, Country of Residence, Profession) strictly when voluntarily transmitted via our contact forms, talk show guest applications, or newsletter subscriptions.</p>
          <h3 className="font-display font-bold text-2xl text-white mt-8 mb-4">2. CRM & Third-Party Processing</h3>
          <p>Dispatch dispatches are processed securely through Formspree endpoints and synchronized via webhooks into Privyr CRM. We do not sell or lease user dossiers to commercial data brokers.</p>
          <h3 className="font-display font-bold text-2xl text-white mt-8 mb-4">3. ScrapeGraphAI Image Sourcing & Attribution</h3>
          <p>Portrait photographs displayed in our archive are sourced from publicly available Wikipedia infoboxes and licensed news archives (The Guardian Nigeria, Punch, The Sun) for educational and editorial redemption advocacy under fair use doctrines.</p>
          <h3 className="font-display font-bold text-2xl text-white mt-8 mb-4">4. Data Deletion Rights</h3>
          <p>Diaspora citizens may request the immediate purging of their dispatch records by contacting privacy@hatedbutgreat.com.</p>
        </>
      ),
    },
    terms: {
      title: 'Terms of Universal Use',
      icon: FileText,
      updated: 'June 2025',
      body: (
        <>
          <p>By accessing www.hatedbutgreat.com, you agree to bound by these Terms of Universal Use and applicable federal and international laws.</p>
          <h3 className="font-display font-bold text-2xl text-white mt-8 mb-4">1. Intellectual Property & Sovereignty</h3>
          <p>All original essays, aesthetic layouts, glassmorphism tokens, and talk show branding are the intellectual property of the Hated But Great redemption initiative.</p>
          <h3 className="font-display font-bold text-2xl text-white mt-8 mb-4">2. Permitted Advocacy Use</h3>
          <p>Visitors are granted permission to share verified dossiers and excerpts on social channels solely for non-commercial affirmation of Nigerian excellence, provided full attribution to www.hatedbutgreat.com is retained.</p>
          <h3 className="font-display font-bold text-2xl text-white mt-8 mb-4">3. Governing Jurisdiction</h3>
          <p>Any dispute arising from the interpretation of these terms shall be governed by the judicial laws of the Federal Republic of Nigeria.</p>
        </>
      ),
    },
    disclaimer: {
      title: 'Editorial & Legal Disclaimer',
      icon: AlertTriangle,
      updated: 'June 2025',
      body: (
        <>
          <p>Hated But Great is a cultural declaration platform designed to counter unjust global narratives regarding Nigerian citizens.</p>
          <h3 className="font-display font-bold text-2xl text-white mt-8 mb-4">1. Editorial Purpose</h3>
          <p>The biographical profiles documented on this platform are compiled for public advocacy, historical education, and media affirmation. While every effort is made to verify scientific and commercial claims against official records, corrections are welcomed at editorial@hatedbutgreat.com.</p>
          <h3 className="font-display font-bold text-2xl text-white mt-8 mb-4">2. No Official Affiliation</h3>
          <p>Unless explicitly indicated as a confirmed talk show guest or corporate partner, featured Nigerian doctors, founders, and Grammy laureates are celebrated independently based on their public merit. Appearance in our dossier does not imply official commercial sponsorship.</p>
        </>
      ),
    },
  }[type];

  const IconComp = content.icon;

  const paths: Record<string, string> = {
    privacy: '/privacy-policy',
    terms: '/terms-of-use',
    disclaimer: '/disclaimer',
  };

  return (
    <PageTransition>
      <SeoMeta
        title={content.title}
        description={`${content.title} for Hated But Great. Last updated ${content.updated}.`}
        url={paths[type]}
      />
      <OrganizationSchema />
      <WebSiteSchema />
      <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 min-h-screen">
        <div className="max-w-3xl mx-auto space-y-10">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-[#008751] transition-colors uppercase tracking-widest">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Universal Portal</span>
          </Link>

          <div className="glass-card p-8 sm:p-12 border-zinc-800 bg-zinc-900/40">
            <div className="flex items-center gap-3 text-[#008751] mb-4">
              <IconComp className="w-6 h-6" />
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">LAST UPDATED: {content.updated}</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-8 border-b border-zinc-800 pb-6">
              {content.title}
            </h1>

            <div className="space-y-6 text-zinc-300 font-body text-base sm:text-lg leading-relaxed">
              {content.body}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
