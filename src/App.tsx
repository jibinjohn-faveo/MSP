import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CoreAutomationPillars } from './components/CoreAutomationPillars';
import { PlatformTour } from './components/PlatformTour';
import { FeatureGrid } from './components/FeatureGrid';
import { TrustBannerCTA } from './components/TrustBannerCTA';
import { WhyFaveo } from './components/WhyFaveo';
import { CustomerJourneyFunnel } from './components/CustomerJourneyFunnel';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { TrialModal } from './components/TrialModal';
import { DemoModal } from './components/DemoModal';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [modalDefaults, setModalDefaults] = useState<{ endpoints?: number; deployment?: string }>({
    endpoints: 250,
    deployment: 'cloud'
  });

  const handleOpenTrial = (defaults?: { endpoints?: number; deployment?: string }) => {
    if (defaults) {
      setModalDefaults(defaults);
    }
    setTrialModalOpen(true);
  };

  const handleOpenDemo = (defaults?: { endpoints?: number; deployment?: string }) => {
    if (defaults) {
      setModalDefaults(defaults);
    }
    setDemoModalOpen(true);
  };

  const scrollToJourney = () => {
    const el = document.getElementById('journey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 antialiased selection:bg-sky-600 selection:text-white">
      {/* Primary Faveo RMM Website Structure */}
      <>
          <Navbar
            onOpenTrial={() => handleOpenTrial()}
            onOpenDemo={() => handleOpenDemo()}
          />

          <main className="flex-1">
            {/* Hero: "RMM Software to Centralize Your IT Infrastructure" */}
            <Hero
              onOpenTrial={() => handleOpenTrial()}
              onOpenDemo={() => handleOpenDemo()}
              onExploreFunnel={scrollToJourney}
            />

            {/* Screenshots 1-2: "Automate IT and Secure Devices Using Our RMM Software" */}
            <CoreAutomationPillars
              onOpenTrial={() => handleOpenTrial()}
              onOpenDemo={() => handleOpenDemo()}
            />

            {/* Screenshots 3-6: "Manage Everything from One Platform" (3D Isometric FAVEO Tower with Glowing Pillars) */}
            <PlatformTour
              onOpenTrial={() => handleOpenTrial()}
              onOpenDemo={() => handleOpenDemo()}
            />

            {/* Screenshots 7-9: "Explore the Features and Solutions of Our RMM Software" (3x3 Grid with Solid Blue Icon Badges) */}
            <FeatureGrid
              onOpenTrial={() => handleOpenTrial()}
              onOpenDemo={() => handleOpenDemo()}
            />

            {/* Screenshot 10: Royal Blue CTA Banner "See Why 5000+ Businesses Trust Faveo" */}
            <TrustBannerCTA
              onSignUp={() => handleOpenTrial()}
            />

            {/* Screenshots 11-16: "Why Faveo RMM Software Is The Right Choice For Your IT Needs?" */}
            <WhyFaveo
              onOpenTrial={() => handleOpenTrial()}
              onOpenDemo={() => handleOpenDemo()}
            />

            {/* Customer Journey Conversion Funnel */}
            <CustomerJourneyFunnel
              onOpenTrial={handleOpenTrial}
              onOpenDemo={handleOpenDemo}
            />

            {/* FAQ Section: All 8 original FAQs */}
            <FAQSection
              onOpenDemo={() => handleOpenDemo()}
            />

            {/* Final CTA Banner */}
            <CTASection
              onOpenTrial={() => handleOpenTrial()}
              onOpenDemo={() => handleOpenDemo()}
            />
          </main>

          <Footer
            onOpenTrial={() => handleOpenTrial()}
            onOpenDemo={() => handleOpenDemo()}
          />
        </>

      {/* Conversion Funnel Modals */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        defaultEndpoints={modalDefaults.endpoints}
        defaultDeployment={modalDefaults.deployment}
      />

      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        defaultEndpoints={modalDefaults.endpoints}
        defaultDeployment={modalDefaults.deployment}
      />
    </div>
  );
}
