
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { IconCheck, IconX, IconBuilding, IconSchool, IconHeart, IconShoppingCart, IconUsers } from '@tabler/icons-react';

interface OrganizationPlansModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrganizationPlansModal = ({ isOpen, onClose }: OrganizationPlansModalProps) => {
  const { language } = useLanguage();
  const t = translations[language];

  const organizationPlans = [
    {
      name: t.pricing.organizations.small.name,
      price: '$29',
      conversations: '500',
      description: t.pricing.organizations.small.description,
      icon: IconBuilding,
      color: 'text-blue-500',
      features: t.pricing.organizations.small.features
    },
    {
      name: t.pricing.organizations.university.name,
      price: '$89',
      conversations: '2,000',
      description: t.pricing.organizations.university.description,
      icon: IconSchool,
      color: 'text-green-500',
      features: t.pricing.organizations.university.features
    },
    {
      name: t.pricing.organizations.ecommerce.name,
      price: '$149',
      conversations: '5,000',
      description: t.pricing.organizations.ecommerce.description,
      icon: IconShoppingCart,
      color: 'text-purple-500',
      features: t.pricing.organizations.ecommerce.features
    },
    {
      name: t.pricing.organizations.ngo.name,
      price: '$39',
      conversations: '1,000',
      description: t.pricing.organizations.ngo.description,
      icon: IconHeart,
      color: 'text-red-500',
      features: t.pricing.organizations.ngo.features
    },
    {
      name: t.pricing.organizations.enterprise.name,
      price: '$299',
      conversations: '15,000',
      description: t.pricing.organizations.enterprise.description,
      icon: IconUsers,
      color: 'text-orange-500',
      features: t.pricing.organizations.enterprise.features
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto glass-card border border-border/20">
        <DialogHeader className="border-b border-border/20 pb-4">
          <DialogTitle className="text-2xl font-bold text-center">
            {t.pricing.organizationPlans}
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-accent rounded-md transition-colors"
          >
            <IconX className="w-5 h-5" />
          </button>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {organizationPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div key={index} className="glass-card p-6 border border-border/20 hover:border-border/40 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className={`w-8 h-8 ${plan.color}`} stroke={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-2">
                    {plan.price}<span className="text-lg text-muted-foreground">/mo</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">{plan.description}</p>
                  <div className="text-primary font-medium">{plan.conversations} {t.pricing.conversationsPerMonth}</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <IconCheck className="w-3 h-3 text-green-400" stroke={2} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full btn-primary">
                  {t.pricing.selectPlan}
                </Button>
              </div>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrganizationPlansModal;
