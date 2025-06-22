
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';
import { Clock, Heart, DollarSign, Zap, Brain, TrendingUp } from 'lucide-react';

const WhySection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const problems = [
    {
      icon: Clock,
      title: t.why.problem.slow,
      description: t.why.problem.slowDesc,
      color: 'text-red-400'
    },
    {
      icon: Heart,
      title: t.why.problem.trust,
      description: t.why.problem.trustDesc,
      color: 'text-orange-400'
    },
    {
      icon: DollarSign,
      title: t.why.problem.cost,
      description: t.why.problem.costDesc,
      color: 'text-yellow-400'
    }
  ];

  const solutions = [
    {
      icon: Zap,
      title: t.why.solution.instant,
      description: t.why.solution.instantDesc,
      color: 'text-green-400'
    },
    {
      icon: Brain,
      title: t.why.solution.smart,
      description: t.why.solution.smartDesc,
      color: 'text-blue-400'
    },
    {
      icon: TrendingUp,
      title: t.why.solution.scalable,
      description: t.why.solution.scalableDesc,
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="why" className="section-container bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.why.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.why.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Problem Side */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-8 text-red-400">
              {t.why.problem.title}
            </h3>
            <div className="space-y-6 stagger-animation">
              {problems.map((problem, index) => {
                const IconComponent = problem.icon;
                return (
                  <div key={index} className="glass-card p-6 group">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 transition-colors duration-300`}>
                        <IconComponent className={`w-6 h-6 ${problem.color} icon-float`} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{problem.title}</h4>
                        <p className="text-muted-foreground">{problem.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Solution Side */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-8 text-green-400">
              {t.why.solution.title}
            </h3>
            <div className="space-y-6 stagger-animation">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div key={index} className="glass-card p-6 border-l-4 border-primary group">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300`}>
                        <IconComponent className={`w-6 h-6 ${solution.color} icon-float`} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{solution.title}</h4>
                        <p className="text-muted-foreground">{solution.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
