
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';
import { Link, Upload, Brain, Zap, ArrowRight } from 'lucide-react';

const HowSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const steps = [
    {
      number: '01',
      title: t.how.step1.title,
      description: t.how.step1.description,
      icon: Link,
      color: 'text-blue-400'
    },
    {
      number: '02',
      title: t.how.step2.title,
      description: t.how.step2.description,
      icon: Upload,
      color: 'text-green-400'
    },
    {
      number: '03',
      title: t.how.step3.title,
      description: t.how.step3.description,
      icon: Brain,
      color: 'text-purple-400'
    },
    {
      number: '04',
      title: t.how.step4.title,
      description: t.how.step4.description,
      icon: Zap,
      color: 'text-yellow-400'
    }
  ];

  return (
    <section id="how" className="section-container bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.how.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.how.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index} 
                className="relative animate-scale-in group"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/30 transform translate-x-6 -translate-y-1/2" />
                  </div>
                )}
                
                <div className="glass-card p-6 text-center h-full group-hover:scale-105 transition-all duration-300">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className={`w-8 h-8 ${step.color} icon-float`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration highlights */}
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center space-x-8 glass-card rounded-full px-8 py-4 border border-border">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Integrates with:</span>
            </div>
            <div className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">WordPress</div>
            <div className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Shopify</div>
            <div className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">Custom Sites</div>
            <div className="text-sm font-medium hover:text-primary transition-colors cursor-pointer">APIs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
