
import { useLanguage } from '@/hooks/useLanguage';
import { IconLink, IconUpload, IconBrain, IconBolt, IconArrowRight } from '@tabler/icons-react';
import AnimatedSection from '@/components/AnimatedSection';

const HowSection = () => {
  const { t } = useLanguage();

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
                delay={100 + index * 50}
              >
                <div className="relative group">
                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 z-10">
                      <IconArrowRight className="w-6 h-6 text-primary/30 transform translate-x-6 -translate-y-1/2 transition-all duration-300 group-hover:text-primary/60" stroke={1.5} />
                    </div>
                  )}
                  
                  <div className="glass-card p-6 md:p-8 text-center h-full min-h-[280px] md:min-h-[300px] group-hover:scale-105 transition-all duration-300 hover:shadow-xl border border-border/20 hover:border-border/40">
                    <div className="relative mb-6 md:mb-8">
                      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                        <IconComponent className={`w-8 h-8 md:w-10 md:h-10 ${step.color} icon-float`} stroke={1.5} />
                      </div>
                      <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 break-words">{step.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground break-words">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Integration highlights with improved mobile responsiveness */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="mt-12 md:mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-8 glass-card rounded-full px-4 py-3 md:px-8 md:py-4 border border-border/20 hover:shadow-xl transition-all duration-300 hover:border-border/40 max-w-full">
              <div className="flex items-center">
                <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                  {t.how.integrations.title}
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 lg:gap-6">
                <div className="text-xs sm:text-sm font-medium hover:text-primary transition-colors cursor-pointer hover:scale-105 transform duration-300 px-2 py-1 rounded break-words">
                  {t.how.integrations.wordpress}
                </div>
                <div className="text-xs sm:text-sm font-medium hover:text-primary transition-colors cursor-pointer hover:scale-105 transform duration-300 px-2 py-1 rounded break-words">
                  {t.how.integrations.shopify}
                </div>
                <div className="text-xs sm:text-sm font-medium hover:text-primary transition-colors cursor-pointer hover:scale-105 transform duration-300 px-2 py-1 rounded break-words">
                  {t.how.integrations.customSites}
                </div>
                <div className="text-xs sm:text-sm font-medium hover:text-primary transition-colors cursor-pointer hover:scale-105 transform duration-300 px-2 py-1 rounded break-words">
                  {t.how.integrations.apis}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HowSection;
