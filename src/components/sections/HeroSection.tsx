
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { IconPlayerPlay, IconBolt, IconArrowRight } from '@tabler/icons-react';
import AnimatedSection from '@/components/AnimatedSection';

const HeroSection = () => {
  const { t } = useLanguage();

  // TODO: Integrate with backend endpoint /api/start-trial
  const handleTryNow = async () => {
    console.log('Try Now clicked - integrate with /api/start-trial');
  };
<div style="width: 100%; max-width: 400px; height: 600px;">
    <iframe 
        src="https://preview--chaster-widget-scribe.lovable.app/" 
        style="width: 100%; height: 100%; border: none; border-radius: 12px;"
        title="Chaster Chat Widget">
    </iframe>
</div>

  // TODO: Integrate with backend endpoint /api/demo-video
  const handleWatchDemo = async () => {
    console.log('Watch Demo clicked - integrate with /api/demo-video');
  };

  return (
    <section id="hero" className="section-container gradient-bg relative overflow-hidden min-h-screen flex items-center pt-20 sm:pt-24">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-primary/60 rounded-full animate-ping" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 w-full">
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <IconBolt className="w-6 h-6 sm:w-8 sm:h-8 text-primary mr-2 sm:mr-3 icon-float flex-shrink-0" stroke={1.5} />
            <span className="text-primary font-semibold text-sm sm:text-lg break-words">
              {t.hero.aiPowered}
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={200}>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 px-2 break-words">
            {t.hero.headline}
          </h1>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-up" delay={300}>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 px-4 max-w-3xl mx-auto break-words">
            {t.hero.subheadline}
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={400}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button
              size="lg"
              onClick={handleTryNow}
              className="btn-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
            >
              {t.hero.tryNow}
              <IconArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" stroke={1.5} />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleWatchDemo}
              className="btn-secondary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg group transition-all duration-300 hover:scale-105"
            >
              <IconPlayerPlay className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform duration-300 group-hover:scale-110 flex-shrink-0" stroke={1.5} />
              {t.hero.watchDemo}
            </Button>
          </div>
        </AnimatedSection>

        {/* Floating stats with improved loading and text wrapping */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-12 px-4">
          <AnimatedSection animation="scale-in" delay={500}>
            <div className="glass-card px-3 sm:px-6 py-2 sm:py-3 hover:scale-105 transition-all duration-300 min-w-0 w-full sm:w-auto">
              <div className="text-xl sm:text-2xl font-bold text-primary">10s</div>
              <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap break-words text-center">
                {t.hero.stats.responseTime}
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="scale-in" delay={600}>
            <div className="glass-card px-3 sm:px-6 py-2 sm:py-3 hover:scale-105 transition-all duration-300 min-w-0 w-full sm:w-auto">
              <div className="text-xl sm:text-2xl font-bold text-primary">50+</div>
              <div className="text-xs sm:text-sm text-muted-foreground break-words text-center">
                {t.hero.stats.languages}
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="scale-in" delay={700}>
            <div className="glass-card px-3 sm:px-6 py-2 sm:py-3 hover:scale-105 transition-all duration-300 min-w-0 w-full sm:w-auto">
              <div className="text-xl sm:text-2xl font-bold text-primary">99.9%</div>
              <div className="text-xs sm:text-sm text-muted-foreground break-words text-center">
                {t.hero.stats.uptime}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
