import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhilosophySection } from "@/components/PhilosophySection";
import { Divider } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";

export default function PhilosophyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="page-hero">
          <span className="kicker">The Philosophy</span>
          <h1>Kintsugi — <span className="text-gold font-shippori text-2xl">金継ぎ</span>, &ldquo;golden joinery&rdquo;</h1>
          <p>Why a youth donation drive is named after a 15th-century Japanese repair art — and what it asks of everyone who volunteers with us.</p>
        </div>

        <Divider />

        <PhilosophySection />

        <Divider />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}