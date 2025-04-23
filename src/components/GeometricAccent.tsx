
import React from 'react';

interface GeometricAccentProps {
  type?: 'circle' | 'square' | 'line' | 'dots';
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const GeometricAccent: React.FC<GeometricAccentProps> = ({
  type = 'circle',
  position = 'top-right',
  color = 'bg-blush-light',
  size = 'medium',
  className = '',
}) => {
  const positionClasses = {
    'top-left': 'top-[-5%] left-[-5%]',
    'top-right': 'top-[-5%] right-[-5%]',
    'bottom-left': 'bottom-[-5%] left-[-5%]',
    'bottom-right': 'bottom-[-5%] right-[-5%]',
  };

  const sizeClasses = {
    small: type === 'circle' ? 'w-24 h-24' : type === 'square' ? 'w-20 h-20' : 'w-32 h-0.5',
    medium: type === 'circle' ? 'w-40 h-40' : type === 'square' ? 'w-32 h-32' : 'w-48 h-0.5',
    large: type === 'circle' ? 'w-64 h-64' : type === 'square' ? 'w-48 h-48' : 'w-72 h-0.5',
  };

  const renderShape = () => {
    switch (type) {
      case 'circle':
        return (
          <div 
            className={`rounded-full ${color} ${sizeClasses[size]} opacity-20 absolute ${positionClasses[position]} ${className} animate-float blur-xl`}
          />
        );
      case 'square':
        return (
          <div 
            className={`${color} ${sizeClasses[size]} opacity-20 absolute ${positionClasses[position]} ${className} rotate-12 animate-float blur-md`}
          />
        );
      case 'line':
        return (
          <div 
            className={`${color} ${sizeClasses[size]} opacity-30 absolute ${positionClasses[position]} ${className} rotate-45`}
          />
        );
      case 'dots':
        return (
          <div className={`absolute ${positionClasses[position]} ${className} grid grid-cols-3 gap-2`}>
            {[...Array(9)].map((_, i) => (
              <div 
                key={i} 
                className={`${color} w-2 h-2 rounded-full opacity-20`}
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="geometric-accent">
      {renderShape()}
    </div>
  );
};

export default GeometricAccent;
