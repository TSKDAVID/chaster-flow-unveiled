
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { Check, Star, Crown, Zap, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [isAnnual, setIsAnnual] = useState(false);

  // TODO: Integrate with backend endpoint /api/create-subscription
  const handleSelectPlan = async (planType: string) => {
    console.log(`Selected plan: ${planType} - integrate with /api/create-subscription`);
  };

  // TODO: Integrate with backend endpoint /api/contact-sales
  const handleContactSales = async () => {
    console.log('Contact Sales clicked - integrate with /api/contact-sales');
  };

  const plans = [
    {
      name: t.pricing.starter.name,
      price: t.pricing.starter.price,
      description: t.pricing.starter.description,
      features: t.pricing.starter.features,
      isPopular: false,
      icon: Zap,
      color: 'text-blue-400'
    },
    {
      name: t.pricing.professional.name,
      price: t.pricing.professional.price,
      description: t.pricing.professional.description,
      features: t.pricing.professional.features,
      isPopular: true,
      icon: Star,
      color: 'text-yellow-400'
    },
    {
      name: t.pricing.enterprise.name,
      price: t.pricing.enterprise.price,
      description: t.pricing.enterprise.description,
      features: t.pricing.enterprise.features,
      isPopular: false,
      icon: Crown,
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="pricing" className="section-container bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t.pricing.subtitle}
          </p>

          {/* Enhanced Billing Toggle */}
          <div className="inline-flex items-center glass-card rounded-lg p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                !isAnnual ? 'bg-primary text-primary-foreground shadow-lg scale-105' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t.pricing.monthly}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 relative ${
                isAnnual ? 'bg-primary text-primary-foreground shadow-lg scale-105' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {t.pricing.annually}
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div 
                key={index}
                className={`relative animate-scale-in group ${
                  plan.isPopular ? 'scale-105 z-10' : ''
                }`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {plan.isPopular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse-glow">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`glass-card p-8 h-full group-hover:scale-105 transition-all duration-300 ${
                  plan.isPopular ? 'border-primary border-2 shadow-xl shadow-primary/10' : ''
                }`}>
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className={`w-8 h-8 ${plan.color} icon-float`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">
                      {plan.price}
                      {plan.price !== 'Custom' && (
                        <span className="text-lg text-muted-foreground">/mo</span>
                      )}
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
                        <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <Check className="w-3 h-3 text-green-400" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => plan.name === 'Enterprise' ? handleContactSales() : handleSelectPlan(plan.name)}
                    className={`w-full group ${
                      plan.isPopular
                        ? 'btn-primary'
                        : 'btn-secondary'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? t.pricing.contact : `Choose ${plan.name}`}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
