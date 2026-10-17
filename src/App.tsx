import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorks } from './components/HowItWorks';
import { WhyMultipleContainers } from './components/WhyMultipleContainers';
import { FutureRoadmap } from './components/FutureRoadmap';
import { BatchEstimator } from './components/BatchEstimator';
import { BenefitsSection } from './components/BenefitsSection';
import { WhoItServes } from './components/WhoItServes';
import { PilotCTA } from './components/PilotCTA';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDemoModal = () => {
    setDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setDemoModalOpen(false);
  };

  const handleJumpToContact = () => {
    setDemoModalOpen(false);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F2] text-[#252A26] selection:bg-[#8FA894]/30 selection:text-[#244C3A]">
      {/* Navigation */}
      <Navbar onRequestDemo={handleOpenDemoModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onRequestDemo={handleOpenDemoModal}
          onExploreHowItWorks={() => scrollToSection('how-it-works')}
        />

        {/* 2. Problem Section */}
        <ProblemSection />

        {/* 3. Solution Section */}
        <SolutionSection />

        {/* 4. How It Works (Workflow + Independent Batch Diagram) */}
        <HowItWorks />

        {/* 5. Why Multiple Containers? */}
        <WhyMultipleContainers />

        {/* 6. Institutional Feasibility & Sizing Estimator */}
        <BatchEstimator onDiscussEstimate={() => scrollToSection('contact')} />

        {/* 7. Benefits Section (6 Feature Cards) */}
        <BenefitsSection />

        {/* 8. Who It Serves (Colleges, Office Parks, Hotels, Cafeterias) */}
        <WhoItServes />

        {/* 9. Strategic Roadmap: Growing Towards Integrated Waste Management */}
        <FutureRoadmap />

        {/* 10. Pilot Project CTA (Deep Forest Green) */}
        <PilotCTA onDiscussPilot={() => scrollToSection('contact')} />

        {/* 11. FAQ Section */}
        <FAQSection />

        {/* 12. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Request a Demo Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={handleCloseDemoModal}
        onJumpToContact={handleJumpToContact}
      />
    </div>
  );
}
