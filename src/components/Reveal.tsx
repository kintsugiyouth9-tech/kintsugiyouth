"use client";

import { motion } from "framer-motion";

export function Divider() {
  return (
    <div className="w-full max-w-[1180px] mx-auto px-8">
      <svg viewBox="0 0 1180 34" preserveAspectRatio="none" className="w-full h-[34px]">
        <motion.path
          d="M0 17 Q 200 2, 340 20 T 700 14 T 1180 18"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth={2}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
        />
      </svg>
    </div>
  );
}