"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-custom">
        <motion.div
          className="cta-band rounded-[36px] p-10 md:p-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: "linear-gradient(135deg, var(--color-pink), var(--color-peach))",
            borderRadius: "36px",
          }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">
            Bring the gold to your city
          </h2>
          <p className="text-ink-soft text-lg max-w-xl mx-auto mb-8">
            No experience needed — every drive starts with a short orientation. Two hours or a whole class, there&apos;s a seam for you.
          </p>
          <Link href="/join" className="btn-primary inline-flex">
            Contribute
          </Link>
        </motion.div>
      </div>
    </section>
  );
}