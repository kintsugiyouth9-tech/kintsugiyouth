"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";

const partners = [
  { name: "NGO Partner 1", description: "Description of partnership", tag: "Education" },
  { name: "NGO Partner 2", description: "Description of partnership", tag: "Healthcare" },
  { name: "NGO Partner 3", description: "Description of partnership", tag: "Community" },
  { name: "NGO Partner 4", description: "Description of partnership", tag: "Environment" },
];

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="page-hero">
          <span className="kicker">Partners</span>
          <h1>Organisations we work with</h1>
          <p>Vetted NGOs and community organisations we partner with to deliver drives on the ground.</p>
        </div>

        <Divider />

        <section className="py-20">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {partners.map((p) => (
                <span key={p.name} className="partner-pill px-5 py-3 rounded-full bg-white border border-gold/20 font-medium text-sm shadow-[0_8px_20px_-14px_rgba(150,100,60,0.4)]">
                  {p.name}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {partners.map((partner) => (
                <motion.div
                  key={partner.name}
                  className="partner-card bg-white rounded-[22px] p-8 shadow-[0_14px_34px_-20px_rgba(150,100,60,0.3)] border border-gold/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                  <p className="text-ink-soft text-sm mb-4">{partner.description}</p>
                  <span className="tag text-xs font-bold uppercase tracking-wide text-gold">{partner.tag}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}