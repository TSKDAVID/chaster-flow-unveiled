
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-300 cursor-pointer">
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
                  className={`px-3 py-2 rounded-md text-sm font-medium nav-link ${
                    currentSection === index
                      ? 'text-primary active'
                      : 'text-muted-foreground hover:text-foreground'
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
              className="p-2 rounded-md text-muted-foreground hover:text-foreground theme-toggle"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => changeLanguage(language === 'en' ? 'ka' : 'en')}
              className="px-3 py-1 text-sm font-medium lang-toggle flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'KA' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground p-2 transition-all duration-300 hover:scale-110"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {sections.map((section, index) => (
                <button
                  key={section}
                  onClick={() => {
                    onSectionClick(index);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${
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
                  className="p-2 rounded-md text-muted-foreground hover:text-foreground theme-toggle"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={() => changeLanguage(language === 'en' ? 'ka' : 'en')}
                  className="px-3 py-1 text-sm font-medium lang-toggle flex items-center space-x-1"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'en' ? 'KA' : 'EN'}</span>
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
