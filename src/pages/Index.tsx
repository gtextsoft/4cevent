
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { EventDetails } from "@/components/EventDetails";
import { AboutSection } from "@/components/AboutSection";
import { WhyAttend } from "@/components/WhyAttend";
import { WhatYouGain } from "@/components/WhatYouGain";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      <HeroSection />
      <EventDetails />
      <AboutSection />
      <WhyAttend />
      <WhatYouGain />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Index;
