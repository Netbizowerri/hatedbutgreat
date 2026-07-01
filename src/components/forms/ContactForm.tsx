import React, { useState } from 'react';
import { FORMSPREE_ENDPOINTS, PRIVYR_WEBHOOK } from '../../lib/formspree';
import { Send, CheckCircle2, ShieldAlert } from 'lucide-react';

interface ContactFormProps {
  defaultPurpose?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultPurpose = 'General Inquiry' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: defaultPurpose,
    country: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Submit to Formspree
      const formspreeRes = await fetch(FORMSPREE_ENDPOINTS.contact, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (formspreeRes.ok) {
        // Fire Privyr lead CRM webhook asynchronously
        fetch(PRIVYR_WEBHOOK, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            source: 'HatedButGreat.com Contact Portal',
            custom_fields: {
              purpose: formData.purpose,
              country: formData.country,
              message: formData.message,
            },
          }),
        }).catch(() => {}); // non-blocking

        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="glass-card p-8 sm:p-12 text-center border border-emerald-500/40 bg-zinc-950 max-w-2xl mx-auto my-8">
        <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-display text-3xl font-bold text-white mb-2">Transmission Received</h3>
        <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
          Thank you, <strong className="text-white">{formData.name}</strong>. Your message regarding{' '}
          <span className="text-[#008751]">{formData.purpose}</span> has been logged into our global redemptive dossier. Our team will contact you shortly.
        </p>
        <button
          onClick={() => {
            setFormData({ name: '', email: '', purpose: 'General Inquiry', country: '', message: '' });
            setStatus('idle');
          }}
          className="px-6 py-2.5 rounded-full bg-zinc-800 text-xs font-accent uppercase font-bold tracking-widest text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors"
        >
          Send Another Dispatch
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-10 max-w-2xl mx-auto space-y-6 bg-zinc-950/80">
      <div className="flex items-center gap-2 border-b border-zinc-800 pb-4 mb-2">
        <span className="w-2 h-2 rounded-full bg-[#008751] animate-pulse" />
        <span className="text-xs font-mono tracking-widest uppercase text-zinc-400">
          OFFICIAL DISPATCH FORM
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-accent font-bold uppercase tracking-wider text-zinc-300 block">
            Full Name <span className="text-[#008751]">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Dr. Adaeze Okafor"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full glass-input px-4 py-3 text-sm"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-accent font-bold uppercase tracking-wider text-zinc-300 block">
            Email Address <span className="text-[#008751]">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="e.g. adaeze@hospital.org"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full glass-input px-4 py-3 text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-accent font-bold uppercase tracking-wider text-zinc-300 block">
            Purpose <span className="text-[#008751]">*</span>
          </label>
          <select
            value={formData.purpose}
            onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
            className="w-full glass-input px-4 py-3 text-sm bg-zinc-900"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Talk Show Feature Request">Talk Show Feature Request</option>
            <option value="Media & Press Interview">Media & Press Interview</option>
            <option value="Corporate Sponsorship / Partnership">Corporate Partnership</option>
            <option value="Excellence Dossier Submission">Excellence Dossier Submission</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-accent font-bold uppercase tracking-wider text-zinc-300 block">
            Country of Residence
          </label>
          <input
            type="text"
            placeholder="e.g. United Kingdom, USA, Canada..."
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className="w-full glass-input px-4 py-3 text-sm"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-accent font-bold uppercase tracking-wider text-zinc-300 block">
          Message / Story Details <span className="text-[#008751]">*</span>
        </label>
        <textarea
          required
          rows={5}
          placeholder="Share your story of excellence, partnership proposal, or talk show inquiry..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full glass-input px-4 py-3 text-sm resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-2 text-red-400 text-xs">
          <ShieldAlert className="w-4 h-4 flex-shrink-0" />
          <span>Dispatch error. Please verify your internet connection or email us directly at contact@hatedbutgreat.com</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 bg-white text-black font-accent font-black uppercase text-xs tracking-[0.2em] rounded-full hover:bg-[#008751] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-xl disabled:opacity-60"
      >
        <Send className="w-4 h-4" />
        <span>{status === 'submitting' ? 'Transmitting Dispatch...' : 'Transmit Official Dispatch'}</span>
      </button>
    </form>
  );
};
