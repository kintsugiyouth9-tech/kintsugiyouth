"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Bowl } from "./Bowl";

export function Hero() {
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-20">
      <div className="max-w-[1180px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.14em] text-gold font-bold mb-4 block">
              A youth-led repair movement
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-6">
              What breaks<br />
              can become{" "}
              <span className="bg-gradient-to-r from-gold via-peach-deep to-gold-bright bg-clip-text text-transparent">
                more beautiful.
              </span>
            </h1>
            <p className="text-ink-soft text-lg md:text-xl max-w-xl mb-10">
              Kintsugi Youth is a youth collective that runs donation and fundraising drives for grassroots NGOs — mending gaps in our communities the way a kintsugi artisan mends a bowl: openly, carefully, with gold along every seam.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/join"
                className="bg-gradient-to-br from-gold-bright to-gold text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Contribute
              </Link>
              <Link
                href="/drives"
                className="px-7 py-4 rounded-full border-[1.5px] border-ink/25 text-ink font-medium hover:border-gold hover:bg-gold/5 transition-all"
              >
                See Our Drives
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Bowl />
          </motion.div>
        </div>
      </div>
    </section>
  );
}