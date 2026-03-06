import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CommandsSection from "@/components/CommandsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <CommandsSection />
      <Footer />
    </main>
  );
}
