
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';

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
      isPopular: false
    },
    {
      name: t.pricing.professional.name,
      price: t.pricing.professional.price,
      description: t.pricing.professional.description,
      features: t.pricing.professional.features,
      isPopular: true
    },
    {
      name: t.pricing.enterprise.name,
      price: t.pricing.enterprise.price,
      description: t.pricing.enterprise.description,
      features: t.pricing.enterprise.features,
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="section-container bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
            {t.pricing.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {t.pricing.subtitle}
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-muted rounded-lg p-1 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                !isAnnual ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'
              }`}
            >
              {t.pricing.monthly}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                isAnnual ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'
              }`}
            >
              {t.pricing.annually}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative animate-fade-up ${
                plan.isPopular ? 'scale-105' : ''
              }`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`glass-card p-8 h-full ${
                plan.isPopular ? 'border-primary border-2' : ''
              }`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-2">
                    {plan.price}
                    {plan.price !== 'Custom' && (
                      <span className="text-lg text-muted-foreground">/mo</span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => plan.name === 'Enterprise' ? handleContactSales() : handleSelectPlan(plan.name)}
                  className={`w-full ${
                    plan.isPopular
                      ? 'bg-primary hover:bg-primary/90'
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                >
                  {plan.name === 'Enterprise' ? t.pricing.contact : `Choose ${plan.name}`}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
