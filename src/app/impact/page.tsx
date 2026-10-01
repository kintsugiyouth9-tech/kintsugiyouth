import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImpactSection } from "@/components/ImpactSection";
import { Divider } from "@/components/Reveal";

export default function ImpactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="page-hero">
          <span className="kicker">The Repair So Far</span>
          <h1>Two months in, and the seams are already showing</h1>
          <p>Kintsugi Youth started in June 2026. Here&apos;s what our first stretch looks like.</p>
        </div>

        <Divider />

        <ImpactSection />
      </main>
      <Footer />
    </>
  );
}