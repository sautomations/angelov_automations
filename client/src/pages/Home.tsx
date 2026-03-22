import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import ProblemSection from "@/components/ProblemSection";
import ProcessSection from "@/components/ProcessSection";
import CalculatorSection from "@/components/CalculatorSection";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import IndustriesSection from "@/components/IndustriesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#E8E8ED]">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <ProblemSection />
      <ProcessSection />
      <CalculatorSection />
      <PricingSection />
      <FeaturesSection />
      <IndustriesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
