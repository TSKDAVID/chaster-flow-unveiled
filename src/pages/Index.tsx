
import { useScrollSections } from '@/hooks/useScrollSections';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import WhySection from '@/components/sections/WhySection';
import HowSection from '@/components/sections/HowSection';
import PricingSection from '@/components/sections/PricingSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import ChatInterface from '@/components/chat/ChatInterface';

const Index = () => {
  const sectionIds = ['hero', 'why', 'how', 'pricing', 'about', 'contact'];
  const { currentSection, scrollToSection } = useScrollSections(sectionIds);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation 
        onSectionClick={scrollToSection}
        currentSection={currentSection}
      />
      
      <main>
        <HeroSection />
        <WhySection />
        <HowSection />
        <PricingSection />
        <AboutSection />
        <ContactSection />
      </main>

      <ChatInterface />
    </div>
  );
};

export default Index;
