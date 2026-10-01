import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DrivesSection } from "@/components/DrivesSection";
import { Divider } from "@/components/Reveal";

export default function DrivesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="page-hero">
          <span className="kicker">Our Drives</span>
          <h1>Four ways we mend gaps</h1>
          <p>Each drive is planned, packed, and delivered by youth volunteers in partnership with vetted NGOs on the ground.</p>
        </div>

        <Divider />

        <DrivesSection />
      </main>
      <Footer />
    </>
  );
}