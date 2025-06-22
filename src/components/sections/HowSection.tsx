
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';

const HowSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const steps = [
    {
      number: '01',
      title: t.how.step1.title,
      description: t.how.step1.description,
      icon: '🔗'
    },
    {
      number: '02',
      title: t.how.step2.title,
      description: t.how.step2.description,
      icon: '📤'
    },
    {
      number: '03',
      title: t.how.step3.title,
      description: t.how.step3.description,
      icon: '🧠'
    },
    {
      number: '04',
      title: t.how.step4.title,
      description: t.how.step4.description,
      icon: '⚡'
    }
  ];

  return (
    <section id="how" className="section-container bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
            {t.how.title}
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {t.how.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative animate-fade-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-primary/30 transform translate-x-full -translate-y-1/2" />
              )}
              
              <div className="glass-card p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-2xl font-bold text-primary mb-2">{step.number}</div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Integration highlights */}
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center space-x-8 bg-background/50 rounded-full px-8 py-4 border border-border">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Integrates with:</span>
            </div>
            <div className="text-sm font-medium">WordPress</div>
            <div className="text-sm font-medium">Shopify</div>
            <div className="text-sm font-medium">Custom Sites</div>
            <div className="text-sm font-medium">APIs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
