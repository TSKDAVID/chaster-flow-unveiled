
import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/i18n/translations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { IconMail, IconMapPin, IconClock, IconSend, IconWorld, IconPhone } from '@tabler/icons-react';
import AnimatedSection from '@/components/AnimatedSection';

const ContactSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // TODO: Integrate with backend endpoint /api/send-contact-message
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Contact form submitted:', formData);
    console.log('TODO: Integrate with /api/send-contact-message');
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
      newsletter: false
    });
    
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const contactInfo = [
    {
      icon: IconMail,
      title: 'Email',
      detail: 'hello@chaster.ai',
      color: 'text-blue-400'
    },
    {
      icon: IconMapPin,
      title: 'Location',
      detail: 'Tbilisi, Georgia',
      color: 'text-green-400'
    },
    {
      icon: IconClock,
      title: 'Response Time',
      detail: 'Within 24 hours',
      color: 'text-purple-400'
    }
  ];

  return (
    <section id="contact" className="section-container bg-background">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.contact.subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection animation="slide-left" delay={200}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t.contact.name}
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/10"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t.contact.email}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/10"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t.contact.message}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full transition-all duration-300 focus:scale-[1.02] focus:shadow-lg focus:shadow-primary/10"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  id="newsletter"
                  name="newsletter"
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="rounded border-border transition-all duration-300 hover:scale-110"
                />
                <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                  {t.contact.newsletter}
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 group disabled:opacity-50 disabled:pointer-events-none px-6 py-3 rounded-md font-medium"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    {t.contact.send}
                    <IconSend className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" stroke={1.5} />
                  </span>
                )}
              </Button>
            </form>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection animation="slide-right" delay={400}>
            <div className="glass-card p-8 h-full hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <IconWorld className="w-6 h-6 text-primary mr-2 icon-float" stroke={1.5} />
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <AnimatedSection key={index} animation="fade-up" delay={600 + index * 100}>
                      <div className="flex items-center space-x-4 group">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110">
                          <IconComponent className={`w-5 h-5 ${info.color} icon-float`} stroke={1.5} />
                        </div>
                        <div>
                          <div className="font-medium">{info.title}</div>
                          <div className="text-muted-foreground">{info.detail}</div>
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>

              <AnimatedSection animation="fade-up" delay={1000}>
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="text-center text-muted-foreground">
                    {t.contact.footer}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
