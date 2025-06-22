
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { Play, Zap, ArrowRight } from 'lucide-react';

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
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-primary/60 rounded-full animate-ping" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto stagger-animation">
        <div className="flex items-center justify-center mb-6">
          <Zap className="w-8 h-8 text-primary mr-3 icon-float" />
          <span className="text-primary font-semibold text-lg">AI-Powered Customer Support</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          {t.hero.headline}
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          {t.hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={handleTryNow}
            className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg group"
          >
            {t.hero.tryNow}
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={handleWatchDemo}
            className="btn-secondary px-8 py-4 text-lg font-semibold rounded-lg group"
          >
            <Play className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" />
            {t.hero.watchDemo}
          </Button>
        </div>

        {/* Floating stats */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12">
          <div className="glass-card px-6 py-3 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-2xl font-bold text-primary">10s</div>
            <div className="text-sm text-muted-foreground">Response Time</div>
          </div>
          <div className="glass-card px-6 py-3 animate-fade-up" style={{ animationDelay: '1s' }}>
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Languages</div>
          </div>
          <div className="glass-card px-6 py-3 animate-fade-up" style={{ animationDelay: '1.2s' }}>
            <div className="text-2xl font-bold text-primary">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
