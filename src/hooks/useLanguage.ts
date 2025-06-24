
import { useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

export type Language = 'en' | 'ka';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language || 'en';
    setLanguage(savedLanguage);
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    // For now, we reload to apply language changes
    window.location.reload();
  };

  const t = translations[language];

  return { language, changeLanguage, t };
};
