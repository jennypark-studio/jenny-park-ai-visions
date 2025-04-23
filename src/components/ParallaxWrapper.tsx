
import React, { ReactNode } from 'react';

interface ParallaxWrapperProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({
  children,
  direction = 'up',
  speed = 'medium',
  className = '',
}) => {
  // Data attribute will be read by our useScrollAnimation hook
  const dataDirection = `data-parallax-direction="${direction}"`;
  
  // Speed modifiers - these will be used by our CSS to determine intensity
  const speedClass = {
    slow: 'data-parallax-speed="0.05"',
    medium: 'data-parallax-speed="0.1"',
    fast: 'data-parallax-speed="0.15"',
  };

  return (
    <div className={`parallax-wrapper ${className}`}>
      <div 
        className="parallax-element"
        data-parallax-direction={direction}
        data-parallax-speed={
          speed === 'slow' ? '0.05' : 
          speed === 'medium' ? '0.1' : '0.15'
        }
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxWrapper;
