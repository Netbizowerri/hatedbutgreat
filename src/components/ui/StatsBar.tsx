import React from 'react';
import { motion } from 'motion/react';
import { statsData } from '../../data/profiles';

export const StatsBar: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 border-y border-zinc-800 bg-zinc-900/60 backdrop-blur-md">
      {statsData.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`p-6 sm:p-8 ${index !== statsData.length - 1 ? 'border-r border-zinc-800' : ''}`}
        >
          <div className="text-zinc-500 text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2 font-bold font-accent">
            {stat.label}
          </div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-black font-mono tracking-tighter text-white">
            {stat.value}
            <span className="text-sm sm:text-base text-[#008751] ml-1">{stat.suffix}</span>
          </div>
          <div className="mt-4 h-1 bg-zinc-800 w-full rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${Math.min(stat.value, 100)}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className={`h-full ${index % 2 === 0 ? 'bg-[#008751]' : 'bg-[#10B981]'}`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
