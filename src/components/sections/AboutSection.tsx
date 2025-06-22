
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';

const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const audiences = [
    {
      icon: '🏢',
      title: t.about.businesses.title,
      description: t.about.businesses.description
    },
    {
      icon: '🎓',
      title: t.about.universities.title,
      description: t.about.universities.description
    },
    {
      icon: '🎧',
      title: t.about.support.title,
      description: t.about.support.description
    },
    {
      icon: '🤝',
      title: t.about.ngos.title,
      description: t.about.ngos.description
    }
  ];

  return (
    <section id="about" className="section-container bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
            {t.about.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="animate-fade-up group"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="glass-card p-6 text-center h-full hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{audience.title}</h3>
                <p className="text-muted-foreground text-sm">{audience.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional features highlight */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Languages Supported</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10s</div>
            <div className="text-muted-foreground">Average Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
