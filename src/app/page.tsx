import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { DrivesSection } from "@/components/DrivesSection";
import { ImpactSection } from "@/components/ImpactSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { CTASection } from "@/components/CTASection";
import { Divider } from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Divider />
        <PhilosophySection />
        <Divider />
        <DrivesSection />
        <Divider />
        <ImpactSection />
        <Divider />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}