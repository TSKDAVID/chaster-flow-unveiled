
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';

const WhySection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const problems = [
    {
      icon: '⏱️',
      title: t.why.problem.slow,
      description: t.why.problem.slowDesc
    },
    {
      icon: '💔',
      title: t.why.problem.trust,
      description: t.why.problem.trustDesc
    },
    {
      icon: '💰',
      title: t.why.problem.cost,
      description: t.why.problem.costDesc
    }
  ];

  const solutions = [
    {
      icon: '⚡',
      title: t.why.solution.instant,
      description: t.why.solution.instantDesc
    },
    {
      icon: '🧠',
      title: t.why.solution.smart,
      description: t.why.solution.smartDesc
    },
    {
      icon: '📈',
      title: t.why.solution.scalable,
      description: t.why.solution.scalableDesc
    }
  ];

  return (
    <section id="why" className="section-container bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
            {t.why.title}
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {t.why.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Problem Side */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-8 text-red-400">
              {t.why.problem.title}
            </h3>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="glass-card p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{problem.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{problem.title}</h4>
                      <p className="text-muted-foreground">{problem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Side */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-8 text-green-400">
              {t.why.solution.title}
            </h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="glass-card p-6 hover:bg-white/10 transition-all duration-300 border-l-4 border-primary">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{solution.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{solution.title}</h4>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
