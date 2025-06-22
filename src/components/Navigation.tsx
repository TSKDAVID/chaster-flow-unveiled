
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  onSectionClick: (index: number) => void;
  currentSection: number;
}

const Navigation = ({ onSectionClick, currentSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language];

  const sections = ['home', 'why', 'how', 'pricing', 'about', 'contact'] as const;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gradient">
              Chaster
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {sections.map((section, index) => (
                <button
                  key={section}
                  onClick={() => onSectionClick(index)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === index
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {t.nav[section]}
                </button>
              ))}
            </div>
          </div>

          {/* Theme and Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => changeLanguage(language === 'en' ? 'ka' : 'en')}
              className="px-3 py-1 rounded-md text-sm font-medium border border-border hover:bg-accent"
            >
              {language === 'en' ? 'KA' : 'EN'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className={`w-full h-0.5 bg-current transform transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <div className={`w-full h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-full h-0.5 bg-current transform transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {sections.map((section, index) => (
                <button
                  key={section}
                  onClick={() => {
                    onSectionClick(index);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    currentSection === index
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {t.nav[section]}
                </button>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-md text-muted-foreground hover:text-foreground"
                >
                  {theme === 'dark' ? '☀️' : '🌙'}
                </button>
                <button
                  onClick={() => changeLanguage(language === 'en' ? 'ka' : 'en')}
                  className="px-3 py-1 rounded-md text-sm font-medium border border-border hover:bg-accent"
                >
                  {language === 'en' ? 'KA' : 'EN'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
