
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import { translations } from '@/i18n/translations';
import { IconSun, IconMoon, IconMenu2, IconX, IconWorld } from '@tabler/icons-react';

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/20 animate-slide-up">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <div className="text-xl sm:text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-300 cursor-pointer truncate">
              Chaster
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block flex-1 max-w-2xl mx-8">
            <div className="flex items-center justify-center space-x-1">
              {sections.map((section, index) => (
                <button
                  key={section}
                  onClick={() => onSectionClick(index)}
                  className={`px-2 xl:px-3 py-2 rounded-md text-xs xl:text-sm font-medium nav-link transition-all duration-300 hover:scale-105 whitespace-nowrap ${
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

          {/* Theme and Language Toggle - Always Visible */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:bg-accent"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <IconSun className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" stroke={1.5} />
              ) : (
                <IconMoon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300" stroke={1.5} />
              )}
            </button>
            <button
              onClick={() => changeLanguage(language === 'en' ? 'ka' : 'en')}
              className="px-2 py-1 text-xs sm:text-sm font-medium border border-border/40 hover:border-primary/50 rounded-md flex items-center space-x-1 transition-all duration-300 hover:scale-105 hover:bg-accent whitespace-nowrap"
              aria-label="Change language"
            >
              <IconWorld className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300" stroke={1.5} />
              <span className="transition-colors duration-300">{language === 'en' ? 'KA' : 'EN'}</span>
            </button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-muted-foreground hover:text-foreground p-2 transition-all duration-300 hover:scale-110 hover:bg-accent rounded-md"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <IconX className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" stroke={1.5} />
                ) : (
                  <IconMenu2 className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" stroke={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fade-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-border/20 rounded-b-lg">
              {sections.map((section, index) => (
                <button
                  key={section}
                  onClick={() => {
                    onSectionClick(index);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-3 rounded-md text-base font-medium w-full text-left transition-all duration-300 hover:scale-[1.02] ${
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
        )}
      </div>
    </nav>
  );
};

export default Navigation;
