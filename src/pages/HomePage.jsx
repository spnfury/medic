import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhatIsSection from '@/components/WhatIsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import MedicalHistorySection from '@/components/MedicalHistorySection';
import TeamSection from '@/components/TeamSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>SaludCheck365 - Tu Salud, Nuestra Prioridad</title>
        <meta name="description" content="SaludCheck365 es tu compañero de salud personal. Gestiona tu historial médico, recibe recordatorios y mantén tu salud bajo control." />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <WhatIsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <MedicalHistorySection />
        <PricingSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;