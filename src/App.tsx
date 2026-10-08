import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyFaveo } from './components/WhyFaveo';
import { FeatureGrid } from './components/FeatureGrid';
import { Testimonials } from './components/Testimonials';
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

  const scrollToWhyChoose = () => {
    const el = document.getElementById('why-faveo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 antialiased selection:bg-sky-600 selection:text-white">
      {/* Header Navigation */}
      <Navbar
        onOpenTrial={() => handleOpenTrial()}
        onOpenDemo={() => handleOpenDemo()}
      />

      <main className="flex-1">
        {/* 1. Banner Section (Hero + Lead Capture Form) */}
        <Hero
          onOpenTrial={() => handleOpenTrial()}
          onOpenDemo={() => handleOpenDemo()}
          onExploreFunnel={scrollToWhyChoose}
        />

        {/* 2. Pain Points of the Audience or Why Should You Choose */}
        <WhyFaveo
          onOpenTrial={() => handleOpenTrial()}
          onOpenDemo={() => handleOpenDemo()}
        />

        {/* 3. Features (Explore the Features and Solutions of Our RMM Software) */}
        <FeatureGrid
          onOpenTrial={() => handleOpenTrial()}
          onOpenDemo={() => handleOpenDemo()}
        />

        {/* 4. Testimonials (10,000+ Businesses, Metrics & Verified Reviews) */}
        <Testimonials
          onOpenTrial={() => handleOpenTrial()}
          onOpenDemo={() => handleOpenDemo()}
        />

        {/* 5. CTA (Streamline Your Workflow with Faveo) */}
        <CTASection
          onOpenTrial={() => handleOpenTrial()}
          onOpenDemo={() => handleOpenDemo()}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenTrial={() => handleOpenTrial()}
        onOpenDemo={() => handleOpenDemo()}
      />

      {/* Conversion Modals */}
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
