import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CommandsSection from "@/components/CommandsSection";
import StatsSection from "@/components/StatsSection";
import ManagementFeaturesSection from "@/components/ManagementFeaturesSection";
import GroupGamesSection from "@/components/GroupGamesSection";
import SoloGamesSection from "@/components/SoloGamesSection";
import UIFeaturesSection from "@/components/UIFeaturesSection";
import InteractiveFeaturesSection from "@/components/InteractiveFeaturesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ManagementFeaturesSection />
      <GroupGamesSection />
      <SoloGamesSection />
      <UIFeaturesSection />
      <InteractiveFeaturesSection />
      <CommandsSection />
      <Footer />
    </main>
  );
}
