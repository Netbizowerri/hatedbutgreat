import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Quote, MapPin, Award } from 'lucide-react';
import { Profile } from '../../types';
import { PersonSchema } from '../seo/JsonLd';

interface ProfileModalProps {
  profile: Profile | null;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ profile, onClose }) => {
  if (!profile) return null;

  const categoryColors = {
    medical: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    business: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    entertainment: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
  };

  return (
    <AnimatePresence>
      <PersonSchema profile={profile} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card bg-zinc-950/95 text-white p-6 sm:p-8 md:p-10 border border-[#008751]/40 z-10 shadow-2xl rounded-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-zinc-800/80 hover:bg-[#008751] hover:text-white transition-colors text-zinc-300"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-2/5 aspect-[4/5] rounded-xl overflow-hidden relative border border-zinc-700/60 shadow-lg flex-shrink-0">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-accent font-bold uppercase tracking-wider border ${categoryColors[profile.category]}`}>
                {profile.category}
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#008751] uppercase mb-2">
                  <Award className="w-4 h-4" />
                  <span>EXCELLENCE DOSSIER</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                  {profile.name}
                </h2>
                <p className="text-zinc-400 font-medium text-sm sm:text-base mb-4 flex items-center gap-2">
                  <span>{profile.field}</span>
                  {profile.location && (
                    <>
                      <span className="text-zinc-600">•</span>
                      <span className="flex items-center gap-1 text-xs font-mono text-zinc-500">
                        <MapPin className="w-3 h-3 text-[#008751]" /> {profile.location}
                      </span>
                    </>
                  )}
                </p>

                <div className="p-4 rounded-xl bg-zinc-900/80 border-l-4 border-[#008751] mb-6">
                  <p className="text-sm sm:text-base font-semibold text-zinc-100 italic">
                    "{profile.achievement}"
                  </p>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                  {profile.bio}
                </p>

                {profile.quote && (
                  <div className="mb-8 relative pl-6 py-2 border-l border-zinc-700">
                    <Quote className="absolute -left-3 -top-2 w-5 h-5 text-[#008751]/60 bg-zinc-950" />
                    <p className="font-display italic text-lg text-[#008751]">
                      "{profile.quote}"
                    </p>
                  </div>
                )}
              </div>

              {profile.sourceUrl && (
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between flex-wrap gap-4">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                    VERIFIED PUBLIC RECORD
                  </span>
                  <a
                    href={profile.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-[#008751] hover:text-white transition-colors rounded-full font-accent font-bold text-xs uppercase tracking-widest"
                  >
                    <span>View Official Bio</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
