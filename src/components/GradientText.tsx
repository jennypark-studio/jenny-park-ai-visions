
import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'blush' | 'warm' | 'ai';
}

const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  className = '', 
  variant = 'blush' 
}) => {
  const gradientClasses = {
    blush: 'bg-gradient-to-r from-blush to-blush-light',
    warm: 'bg-gradient-to-r from-taupe-dark to-charcoal-light',
    ai: 'bg-gradient-to-r from-ai to-ai-light',
  };

  return (
    <span 
      className={cn(
        gradientClasses[variant],
        'bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </span>
  );
};

export default GradientText;
