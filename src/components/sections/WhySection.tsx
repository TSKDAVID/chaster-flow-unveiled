
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';
import { IconClock, IconHeart, IconCurrencyDollar, IconBolt, IconBrain, IconTrendingUp } from '@tabler/icons-react';
import AnimatedSection from '@/components/AnimatedSection';

const WhySection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const problems = [
    {
      icon: IconClock,
      title: t.why.problem.slow,
      description: t.why.problem.slowDesc,
      color: 'text-red-400'
    },
    {
      icon: IconHeart,
      title: t.why.problem.trust,
      description: t.why.problem.trustDesc,
      color: 'text-orange-400'
    },
    {
      icon: IconCurrencyDollar,
      title: t.why.problem.cost,
      description: t.why.problem.costDesc,
      color: 'text-yellow-400'
    }
  ];

  const solutions = [
    {
      icon: IconBolt,
      title: t.why.solution.instant,
      description: t.why.solution.instantDesc,
      color: 'text-green-400'
    },
    {
      icon: IconBrain,
      title: t.why.solution.smart,
      description: t.why.solution.smartDesc,
      color: 'text-blue-400'
    },
    {
      icon: IconTrendingUp,
      title: t.why.solution.scalable,
      description: t.why.solution.scalableDesc,
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="why" className="section-container bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.why.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.why.subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Problem Side */}
          <AnimatedSection animation="slide-left" delay={200}>
            <div>
              <h3 className="text-2xl font-bold mb-8 text-red-400">
                {t.why.problem.title}
              </h3>
              <div className="space-y-6">
                {problems.map((problem, index) => {
                  const IconComponent = problem.icon;
                  return (
                    <AnimatedSection key={index} animation="fade-up" delay={400 + index * 100}>
                      <div className="glass-card p-6 group hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 transition-colors duration-300 group-hover:scale-110`}>
                            <IconComponent className={`w-6 h-6 ${problem.color} icon-float`} stroke={1.5} />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-2">{problem.title}</h4>
                            <p className="text-muted-foreground">{problem.description}</p>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* Solution Side */}
          <AnimatedSection animation="slide-right" delay={400}>
            <div>
              <h3 className="text-2xl font-bold mb-8 text-green-400">
                {t.why.solution.title}
              </h3>
              <div className="space-y-6">
                {solutions.map((solution, index) => {
                  const IconComponent = solution.icon;
                  return (
                    <AnimatedSection key={index} animation="fade-up" delay={600 + index * 100}>
                      <div className="glass-card p-6 border-l-4 border-primary group hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110`}>
                            <IconComponent className={`w-6 h-6 ${solution.color} icon-float`} stroke={1.5} />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-2">{solution.title}</h4>
                            <p className="text-muted-foreground">{solution.description}</p>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
