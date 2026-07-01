import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Profile } from '../../types';

interface ProfileCardProps {
  profile: Profile;
  onSelect: (profile: Profile) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onSelect }) => {
  const badgeColors = {
    medical: 'bg-[#008751] text-white',
    business: 'bg-[#008751]/80 text-white',
    entertainment: 'bg-[#008751] text-white'
  };

  return (
    <motion.div
      onClick={() => onSelect(profile)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect(profile); } }}
      role="button"
      tabIndex={0}
      aria-label={`View dossier: ${profile.name}`}
      className="glass-card overflow-hidden group cursor-pointer flex flex-col justify-between h-full hover:border-[#008751]/60 transition-all duration-300 relative"
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25 }}
    >
      <div>
        <div className="relative h-64 sm:h-72 overflow-hidden bg-zinc-900">
          <img
            src={profile.image}
            alt={profile.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
          
          <span className={`absolute top-4 right-4 text-xs font-accent font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md ${badgeColors[profile.category]}`}>
            {profile.category}
          </span>

          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-[10px] font-mono tracking-widest text-[#008751] uppercase block mb-1">
              {profile.field}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-white font-bold group-hover:text-[#008751] transition-colors leading-tight">
              {profile.name}
            </h3>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <p className="text-zinc-300 text-sm font-body leading-relaxed line-clamp-3">
            {profile.achievement}
          </p>
        </div>
      </div>

      <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400 group-hover:text-white transition-colors">
        <span className="font-accent font-semibold tracking-wider uppercase text-[11px] text-[#008751]">
          Explore Dossier
        </span>
        <div className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-[#008751] group-hover:text-white transition-colors">
          <ExternalLink className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.div>
  );
};
