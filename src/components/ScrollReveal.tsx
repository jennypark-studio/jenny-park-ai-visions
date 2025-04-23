
import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade' | 'slide' | 'text' | 'scale';
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  threshold?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  delay = 0, 
  animation = 'fade',
  direction = 'up',
  duration = 700,
  threshold = 0.1
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold]);

  // Define transform styles based on animation type and direction
  const getInitialStyles = () => {
    if (animation === 'fade') {
      return {
        opacity: 0,
        transform: direction === 'up' ? 'translateY(20px)' : 
                  direction === 'down' ? 'translateY(-20px)' : 
                  direction === 'left' ? 'translateX(20px)' : 
                  'translateX(-20px)'
      };
    }
    
    if (animation === 'slide') {
      return {
        opacity: 0,
        transform: direction === 'up' ? 'translateY(50px)' : 
                  direction === 'down' ? 'translateY(-50px)' : 
                  direction === 'left' ? 'translateX(50px)' : 
                  'translateX(-50px)'
      };
    }
    
    if (animation === 'scale') {
      return {
        opacity: 0,
        transform: 'scale(0.95)'
      };
    }
    
    if (animation === 'text') {
      return {
        overflow: 'hidden'
      };
    }
    
    return {};
  };

  if (animation === 'text') {
    // Special case for text reveal animation
    return (
      <div 
        ref={ref}
        className={`text-reveal ${isVisible ? 'revealed' : ''} ${className}`}
      >
        <div 
          className="text-reveal-content"
          style={{
            transitionDelay: `${delay}ms`,
            transitionDuration: `${duration}ms`
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...getInitialStyles(),
        opacity: isVisible ? 1 : getInitialStyles().opacity,
        transform: isVisible ? 'translate(0) scale(1)' : getInitialStyles().transform,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
