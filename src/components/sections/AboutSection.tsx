
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';
import { Building2, GraduationCap, Headphones, Users, Globe, Shield, Clock } from 'lucide-react';

const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const audiences = [
    {
      icon: Building2,
      title: t.about.businesses.title,
      description: t.about.businesses.description,
      color: 'text-blue-400'
    },
    {
      icon: GraduationCap,
      title: t.about.universities.title,
      description: t.about.universities.description,
      color: 'text-green-400'
    },
    {
      icon: Headphones,
      title: t.about.support.title,
      description: t.about.support.description,
      color: 'text-purple-400'
    },
    {
      icon: Users,
      title: t.about.ngos.title,
      description: t.about.ngos.description,
      color: 'text-orange-400'
    }
  ];

  const stats = [
    {
      icon: Globe,
      value: '50+',
      label: 'Languages Supported',
      color: 'text-blue-400'
    },
    {
      icon: Shield,
      value: '99.9%',
      label: 'Uptime Guarantee',
      color: 'text-green-400'
    },
    {
      icon: Clock,
      value: '10s',
      label: 'Average Response Time',
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="about" className="section-container bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.about.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon;
            return (
              <div 
                key={index}
                className="animate-scale-in group"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="glass-card p-6 text-center h-full group-hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className={`w-8 h-8 ${audience.color} icon-float`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{audience.title}</h3>
                  <p className="text-muted-foreground text-sm">{audience.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced stats section */}
        <div className="grid md:grid-cols-3 gap-8 stagger-animation">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className={`w-6 h-6 ${stat.color} icon-float`} />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
