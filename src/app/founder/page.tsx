"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Reveal";

export default function FounderPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="page-hero">
          <span className="kicker">The Founder</span>
          <h1>Annika Aggarwal</h1>
          <p>Founder, Kintsugi Youth</p>
        </div>

        <Divider />

        <section className="py-16 md:py-24">
          <div className="container-custom max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8">
                Hi, I&apos;m Annika Aggarwal
              </h2>
              <p className="text-ink-soft text-lg mb-6">
                I am an 18-year-old Psychology Honours student at Bharti College, DU, and the Founder of Kintsugi Youth, an organisation focused on youth development, happiness, mental health and more.
              </p>
              <p className="text-ink-soft text-lg mb-6">
                Beyond my studies, I am deeply passionate about diplomacy and leadership, most recently serving as core and secreteriat of MUNs conferences. I actively participate in my college societies and am always looking for ways to combine my background in psychology with meaningful community impact and public speaking.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}