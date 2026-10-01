"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const principles = [
  {
    title: "Visibility over charity",
    description: "We don't hide where help is needed or where it comes from. Every drive is transparent — who gave, what was collected, where it went.",
  },
  {
    title: "Repair, not rescue",
    description: "We work alongside NGOs who know their communities, joining our effort to theirs rather than arriving with our own agenda.",
  },
  {
    title: "The seam is the point",
    description: "We don't just want the gap gone — we want the joining itself, youth and community together, to be worth noticing.",
  },
];

export function PhilosophySection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "linear-gradient(180deg, transparent, rgba(246,211,221,0.35) 40%, rgba(246,211,221,0.35) 60%, transparent)" }}>
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <motion.div
            className="relative max-w-[380px] mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square rounded-full flex items-center justify-center" style={{ background: "radial-gradient(circle at 35% 30%, #fff, var(--pink) 70%)", boxShadow: "var(--shadow-default)" }}>
              <svg viewBox="0 0 200 200" fill="none" className="w-[62%]">
                <circle cx="100" cy="100" r="86" fill="#FBEADD" stroke="#EFAE79" strokeWidth="2" />
                <path d="M40 90 L85 120 L75 165" stroke="#C6972F" strokeWidth="5" strokeLinecap="round" />
                <path d="M100 30 L110 95 L155 115 L145 170" stroke="#C6972F" strokeWidth="5" strokeLinecap="round" />
                <path d="M150 60 L120 100" stroke="#C6972F" strokeWidth="5" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-xs uppercase tracking-[0.14em] text-gold font-bold mb-4 block">The Philosophy</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
              Kintsugi — <span className="font-shippori text-2xl text-gold">金継ぎ</span>, &ldquo;golden joinery&rdquo;
            </h2>
            <p className="text-ink-soft text-lg mb-6">
              In Japan, when a bowl or teacup shatters, it isn&apos;t thrown away. An artisan rejoins the pieces with lacquer dusted in gold — so the fracture becomes the most visible, most valued part of the object. <strong>The crack isn&apos;t hidden. It&apos;s honoured.</strong>
            </p>
            <p className="text-ink-soft text-lg mb-6">
              Kintsugi teaches that damage is part of an object&apos;s history, not something to disguise. A repaired bowl is often considered more beautiful, and more valuable, than one that was never broken.
            </p>
            <p className="text-ink-soft text-lg mb-8">
              We borrow that idea for our work in communities. A school without books, a shelter without blankets, a family without a meal — these are fractures too. We don&apos;t believe in quietly patching them over. We believe in repairing them openly, together, in a way people can see and be part of.
            </p>
            <Link href="/philosophy" className="inline-flex px-7 py-4 rounded-full border-[1.5px] border-ink/25 text-ink font-medium hover:border-gold hover:bg-gold/5 transition-all">
              Read our full philosophy
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              className="relative bg-white rounded-[26px] p-8 border border-gold/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_44px_-18px_rgba(150,100,60,0.4)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-gold to-transparent" />
              <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
              <p className="text-ink-soft text-base leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/philosophy" className="inline-flex px-7 py-4 rounded-full border-[1.5px] border-ink/25 text-ink font-medium hover:border-gold hover:bg-gold/5 transition-all">
            Read Full Philosophy
          </Link>
        </motion.div>
      </div>
    </section>
  );
}