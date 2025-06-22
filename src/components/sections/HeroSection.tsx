
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // TODO: Integrate with backend endpoint /api/start-trial
  const handleTryNow = async () => {
    console.log('Try Now clicked - integrate with /api/start-trial');
  };

  // TODO: Integrate with backend endpoint /api/demo-video
  const handleWatchDemo = async () => {
    console.log('Watch Demo clicked - integrate with /api/demo-video');
  };

  return (
    <section id="hero" className="section-container gradient-bg relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up">
          {t.hero.headline}
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {t.hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <Button
            size="lg"
            onClick={handleTryNow}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            {t.hero.tryNow}
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={handleWatchDemo}
            className="border-2 border-border hover:bg-accent px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            {t.hero.watchDemo}
          </Button>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '3s' }} />
      </div>
    </section>
  );
};

export default HeroSection;
