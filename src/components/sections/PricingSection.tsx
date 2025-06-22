
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { IconStar, IconBuilding, IconSettings, IconArrowRight } from '@tabler/icons-react';
import AnimatedSection from '@/components/AnimatedSection';
import OrganizationPlansModal from '@/components/OrganizationPlansModal';

const PricingSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [isOrganizationModalOpen, setIsOrganizationModalOpen] = useState(false);

  const handleSelectPlan = async (planType: string) => {
    console.log(`Selected plan: ${planType} - integrate with /api/create-subscription`);
  };

  const plans = [
    {
      name: t.pricing.starter.name,
      price: t.pricing.starter.price,
      description: t.pricing.starter.description,
      features: t.pricing.starter.features,
      isPopular: false,
      icon: IconStar,
      color: 'text-blue-400',
      action: () => handleSelectPlan('starter')
    },
    {
      name: t.pricing.organization.name,
      price: t.pricing.organization.price,
      description: t.pricing.organization.description,
      features: t.pricing.organization.features,
      isPopular: true,
      icon: IconBuilding,
      color: 'text-purple-400',
      action: () => setIsOrganizationModalOpen(true)
    },
    {
      name: t.pricing.custom.name,
      price: t.pricing.custom.price,
      description: t.pricing.custom.description,
      features: t.pricing.custom.features,
      isPopular: false,
      icon: IconSettings,
      color: 'text-green-400',
      action: () => handleSelectPlan('custom')
    }
  ];

  return (
    <section id="pricing" className="section-container bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.pricing.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t.pricing.subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <AnimatedSection
                key={index}
                animation="scale-in"
                delay={300 + index * 100}
              >
                <div className={`relative group ${
                  plan.isPopular ? 'scale-105 z-10' : ''
                }`}>
                  {plan.isPopular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse-glow">
                        {t.pricing.mostPopular}
                      </div>
                    </div>
                  )}
                  
                  <div className={`glass-card p-8 h-full min-h-[500px] group-hover:scale-105 transition-all duration-300 hover:shadow-xl border border-border/20 hover:border-border/40 ${
                    plan.isPopular ? 'border-primary/40 shadow-xl shadow-primary/10' : ''
                  }`}>
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                        <IconComponent className={`w-10 h-10 ${plan.color} icon-float`} stroke={1.5} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                      <div className="text-4xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                        {plan.price}
                        {plan.price !== 'Custom' && plan.price !== t.pricing.custom.price && (
                          <span className="text-lg text-muted-foreground">/mo</span>
                        )}
                      </div>
                      <p className="text-muted-foreground">{plan.description}</p>
                    </div>

                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
                          <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <IconCheck className="w-3 h-3 text-green-400" stroke={2} />
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={plan.action}
                      className={`w-full group hover-stable ${
                        plan.isPopular
                          ? 'btn-primary'
                          : 'btn-secondary'
                      }`}
                    >
                      {plan.name === t.pricing.custom.name ? t.pricing.buildPlan : 
                       plan.name === t.pricing.organization.name ? t.pricing.viewPlans : 
                       t.pricing.selectPlan}
                      <IconArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" stroke={1.5} />
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>

      <OrganizationPlansModal 
        isOpen={isOrganizationModalOpen} 
        onClose={() => setIsOrganizationModalOpen(false)} 
      />
    </section>
  );
};

export default PricingSection;
