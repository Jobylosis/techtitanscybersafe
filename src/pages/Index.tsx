import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DangersSection from "@/components/DangersSection";
import SafetyTipsSection from "@/components/SafetyTipsSection";
import VideoSection from "@/components/VideoSection";
import EmergencySection from "@/components/EmergencySection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <DangersSection />
      <SafetyTipsSection />
      <VideoSection />
      <EmergencySection />
      <FooterSection />
    </main>
  );
};

export default Index;
