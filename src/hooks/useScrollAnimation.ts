
import { useEffect, useState, useCallback } from 'react';

export const useScrollAnimation = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    // Mark that scrolling has occurred
    if (!hasScrolled) {
      setHasScrolled(true);
    }
    
    const elements = document.querySelectorAll('.reveal-on-scroll, .text-reveal');
    
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const elementHeight = element.getBoundingClientRect().height;
      const elementVisible = 100;
      
      // If element is within viewport
      if (
        elementTop < window.innerHeight - elementVisible &&
        elementBottom > elementVisible
      ) {
        element.classList.add('revealed');
      } else if (
        // Optional: Remove class when element is no longer visible
        // Uncomment to enable this behavior
        // (elementTop > window.innerHeight || elementBottom < 0) &&
        // element.classList.contains('revealed')
        false
      ) {
        element.classList.remove('revealed');
      }
    });
    
    // Handle parallax effects
    const parallaxElements = document.querySelectorAll('.parallax-element');
    parallaxElements.forEach((element) => {
      const scrollPosition = window.scrollY;
      const elementTop = element.getBoundingClientRect().top + scrollPosition;
      const elementInView = scrollPosition > elementTop - window.innerHeight && 
                           scrollPosition < elementTop + element.clientHeight;
                           
      if (elementInView) {
        const distance = (scrollPosition - (elementTop - window.innerHeight)) * 0.05;
        // Apply transform based on element's data-parallax-direction
        const direction = element.getAttribute('data-parallax-direction') || 'up';
        
        if (direction === 'up') {
          element.style.transform = `translateY(-${distance}px)`;
        } else if (direction === 'down') {
          element.style.transform = `translateY(${distance}px)`;
        } else if (direction === 'left') {
          element.style.transform = `translateX(-${distance}px)`;
        } else if (direction === 'right') {
          element.style.transform = `translateX(${distance}px)`;
        }
      }
    });
  };
    
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check for elements already in viewport on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { hasScrolled };
};

export default useScrollAnimation;
