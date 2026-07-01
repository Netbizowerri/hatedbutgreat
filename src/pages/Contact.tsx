import React from 'react';
import { ContactForm } from '../components/forms/ContactForm';
import { PageTransition } from '../components/ui/LayoutDecorations';
import { SeoMeta } from '../components/seo/SeoMeta';
import { FAQPageSchema, HowToSchema } from '../components/seo/JsonLd';
import { Mail, Globe, Shield } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <PageTransition>
      <SeoMeta
        title="Contact — Get in Touch"
        description="Partner with Hated But Great. Submit excellence dossiers, talk show guest applications, press inquiries, or corporate partnership proposals."
        url="/contact"
      />
      <FAQPageSchema questions={[
        { question: 'How do I submit an excellence dossier?', answer: 'Fill out the contact form on this page with your story or nomination details. Our team will review and respond.' },
        { question: 'How can I partner with Hated But Great?', answer: 'Reach out via the contact form or email partners@hatedbutgreat.com with your proposal.' },
        { question: 'Can I nominate someone for the archive?', answer: 'Yes. Use the contact form and select "Excellence Dossier Submission" as the purpose.' },
      ]} />
      <HowToSchema steps={[
        { name: 'Fill in your details', text: 'Enter your full name, email address, purpose, and country of residence.' },
        { name: 'Write your message', text: 'Share your story of excellence, partnership proposal, or talk show inquiry in detail.' },
        { name: 'Submit the dispatch', text: 'Click "Transmit Official Dispatch". Our producers will review and respond within business days.' },
      ]} />
      <div className="pt-28 lg:pt-36 pb-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold tracking-[0.35em] uppercase text-[#008751]">
              GLOBAL DISPATCH CENTER
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Get in Touch • Partner With Us
            </h1>
            <p className="text-zinc-300 text-base sm:text-lg font-body">
              Whether you are an international journalist inquiring about Nigerian data, a talk show sponsor, or a diaspora citizen submitting a dossier — our lines are open.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Col: Contact Form */}
            <div className="lg:col-span-8">
              <ContactForm />
            </div>

            {/* Right Col: Purpose & Direct Info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="glass-card p-6 space-y-4 bg-zinc-900/50">
                <h3 className="font-accent font-extrabold text-xs tracking-widest uppercase text-[#008751] flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>DIRECT DISPATCH CHANNELS</span>
                </h3>
                <div className="space-y-3 text-sm font-mono text-zinc-300">
                  <p className="border-b border-zinc-800 pb-2">
                    <span className="text-zinc-500 block text-xs">Media & Press Inquiries</span>
                    press@hatedbutgreat.com
                  </p>
                  <p className="border-b border-zinc-800 pb-2">
                    <span className="text-zinc-500 block text-xs">Talk Show Production</span>
                    show@hatedbutgreat.com
                  </p>
                  <p>
                    <span className="text-zinc-500 block text-xs">General Partnerships</span>
                    partners@hatedbutgreat.com
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 space-y-4 bg-zinc-900/50">
                <h3 className="font-accent font-extrabold text-xs tracking-widest uppercase text-[#008751] flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>PRIVYR LEAD CAPTURE SYNC</span>
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  All dispatches transmitted through our portal fire encrypted webhooks directly into our Privyr CRM infrastructure for immediate producer triage.
                </p>
              </div>

              <div className="glass-card p-6 space-y-3 bg-zinc-900/50">
                <h3 className="font-accent font-extrabold text-xs tracking-widest uppercase text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#008751]" />
                  <span>DIASPORA CHAPTERS</span>
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Lagos Hub • London Chapter • New York & Houston Bureau • Geneva Diplomacy Desk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
