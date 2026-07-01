import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'dark' | 'light';
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'dark',
  className = '',
  ...props
}) => {
  const baseClasses = variant === 'dark' ? 'glass-card' : 'glass-card-light text-zinc-900';
  return (
    <div className={`${baseClasses} transition-all duration-300 ${className}`} {...props}>
      {children}
    </div>
  );
};
