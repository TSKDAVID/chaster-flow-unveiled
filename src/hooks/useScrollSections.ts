
import { useState, useEffect, useCallback } from 'react';

export const useScrollSections = (sectionIds: string[]) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = useCallback((index: number) => {
    if (index >= 0 && index < sectionIds.length && !isScrolling) {
      setIsScrolling(true);
      const element = document.getElementById(sectionIds[index]);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        setCurrentSection(index);
        
        // Reset scrolling state after animation
        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    }
  }, [sectionIds, isScrolling]);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, isScrolling]);

  return {
    currentSection,
    scrollToSection,
    isScrolling
  };
};
