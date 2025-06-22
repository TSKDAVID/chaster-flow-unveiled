
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';
import { IconLink, IconUpload, IconBrain, IconBolt, IconArrowRight } from '@tabler/icons-react';
import AnimatedSection from '@/components/AnimatedSection';

const HowSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const steps = [
    {
      number: '01',
      title: t.how.step1.title,
      description: t.how.step1.description,
      icon: IconLink,
      color: 'text-blue-400'
    },
    {
      number: '02',
      title: t.how.step2.title,
      description: t.how.step2.description,
      icon: IconUpload,
      color: 'text-green-400'
    },
    {
      number: '03',
      title: t.how.step3.title,
      description: t.how.step3.description,
      icon: IconBrain,
      color: 'text-purple-400'
    },
    {
      number: '04',
      title: t.how.step4.title,
      description: t.how.step4.description,
      icon: IconBolt,
      color: 'text-yellow-400'
    }
  ];

  return (
    <section id="how" className="section-container bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.how.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.how.subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <AnimatedSection 
                key={index} 
                animation="scale-in"
                delay={200 + index * 100}
              >
                <div className="relative group">
                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 z-10">
                      <IconArrowRight className="w-6 h-6 text-primary/30 transform translate-x-6 -translate-y-1/2 transition-all duration-300 group-hover:text-primary/60" stroke={1.5} />
                    </div>
                  )}
                  
                  <div className="glass-card p-6 text-center h-full group-hover:scale-105 transition-all duration-300 hover:shadow-xl">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                        <IconComponent className={`w-8 h-8 ${step.color} icon-float`} stroke={1.5} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Integration highlights */}
        <AnimatedSection animation="fade-up" delay={600}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 glass-card rounded-full px-8 py-4 border border-border hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Integrates with:</span>
              </div>
              <div className="text-sm font-medium hover:text-primary transition-colors cursor-pointer hover:scale-105 transform duration-300">WordPress</div>
              <div className="text-sm font-medium hover:text-primary transition-colors cursor-pointer hover:scale-105 transform duration-300">Shopify</div>
              <div className="text-sm font-medium hover:text-primary transition-colors cursor-pointer hover:scale-105 transform duration-300">Custom Sites</div>
              <div className="text-sm font-medium hover:text-primary transition-colors cursor-pointer hover:scale-105 transform duration-300">APIs</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HowSection;
