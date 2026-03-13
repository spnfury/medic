import React from 'react';
import { Helmet } from 'react-helmet';
import { useContent } from '@/hooks/useContent';
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
  const { content, loading } = useContent();

  if (loading || !content) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#1CAEC1] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
      </Helmet>
      <Header content={content.header} />
      <main>
        <HeroSection content={content.hero} />
        <WhatIsSection content={content.whatIs} />
        <HowItWorksSection content={content.howItWorks} />
        <FeaturesSection content={content.features} />
        <MedicalHistorySection content={content.medicalHistory} />
        <PricingSection content={content.pricing} />
        <TeamSection content={content.team} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
};

export default HomePage;