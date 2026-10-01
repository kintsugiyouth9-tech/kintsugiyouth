"use client";

import { motion } from "framer-motion";

const stats = [
  { num: "2", label: "Drives completed" },
  { num: "4", label: "Partner NGOs" },
  { num: "50+", label: "Youth volunteers" },
  { num: "500+", label: "Lives touched" },
];

export function ImpactSection() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container-custom">
        <motion.div
          className="impact-block rounded-[36px] p-10 md:p-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: "linear-gradient(135deg, var(--color-ink) 0%, #5a4238 100%)",
            color: "var(--color-cream)",
            borderRadius: "36px",
          }}
        >
          <div className="mb-10 md:mb-14 max-w-2xl mx-auto">
            <span className="kicker" style={{ color: "var(--color-gold-bright)" }}>The Repair So Far</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4" style={{ color: "var(--color-cream)" }}>
              Two months in, and the seams are already showing
            </h2>
            <p className="text-lg" style={{ color: "rgba(255,248,242,0.75)" }}>
              Kintsugi Youth started in June 2026. Here&apos;s what our first stretch looks like.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-gold-gradient font-shippori font-bold" style={{ fontSize: "clamp(2.2rem, 3.6vw, 3.2rem)" }}>
                  {stat.num}
                </div>
                <div className="text-sm mt-2" style={{ color: "rgba(255,248,242,0.7)" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}