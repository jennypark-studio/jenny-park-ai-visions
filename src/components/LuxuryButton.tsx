
import React from 'react';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Omit the 'variant' from ButtonProps to avoid type conflicts
interface LuxuryButtonProps extends Omit<ButtonProps, 'variant'> {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost' | 'minimal';
  withShimmer?: boolean;
}

const LuxuryButton: React.FC<LuxuryButtonProps> = ({ 
  children, 
  variant = 'primary', 
  withShimmer = true,
  className,
  ...props 
}) => {
  const getButtonClasses = () => {
    switch (variant) {
      case 'primary':
        return cn(
          'bg-charcoal text-white border-0 hover:bg-charcoal/90 rounded-none px-8 py-6 text-lg', 
          withShimmer && 'btn-luxury',
          className
        );
      case 'ghost':
        return cn(
          'bg-transparent text-charcoal border border-charcoal/30 hover:border-charcoal/80 hover:bg-transparent rounded-none px-6 py-3',
          className
        );
      case 'minimal':
        return cn(
          'bg-transparent text-charcoal px-0 py-0 hover:bg-transparent border-b border-transparent hover:border-charcoal/50 rounded-none',
          className
        );
      default:
        return className;
    }
  };

  return (
    <Button
      className={getButtonClasses()}
      variant="ghost" // Use a base shadcn variant that we'll override with our classes
      {...props}
    >
      {children}
    </Button>
  );
};

export default LuxuryButton;
