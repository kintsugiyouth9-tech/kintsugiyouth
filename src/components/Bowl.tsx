"use client";

import { motion } from "framer-motion";

export function Bowl() {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 400 400" fill="none" className="w-full max-w-[440px]" style={{ filter: "drop-shadow(0 30px 40px rgba(150,100,50,0.25))" }}>
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E0B84B" />
            <stop offset="1" stopColor="#B57F2A" />
          </linearGradient>
        </defs>
        <path d="M70 170 C70 250 130 320 200 320 C270 320 330 250 330 170" fill="#F6D3DD" stroke="#E8A9BC" strokeWidth="2" />
        <ellipse cx="200" cy="170" rx="130" ry="34" fill="#F5C79C" stroke="#EFAE79" strokeWidth="2" />
        <ellipse cx="200" cy="168" rx="112" ry="24" fill="#FBEADD" />
        <motion.path d="M120 160 L165 200 L150 260 L185 300" stroke="url(#goldGrad)" strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1] }} />
        <motion.path d="M200 150 L210 210 L260 240 L250 290" stroke="url(#goldGrad)" strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.8, delay: 0.35, ease: [0.65, 0, 0.35, 1] }} />
        <motion.path d="M260 165 L230 195 L245 250" stroke="url(#goldGrad)" strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.8, delay: 0.7, ease: [0.65, 0, 0.35, 1] }} />
        <motion.path d="M150 260 L110 280" stroke="url(#goldGrad)" strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.8, delay: 1.0, ease: [0.65, 0, 0.35, 1] }} />
        <motion.path d="M120 160 L165 200 L150 260 L185 300" stroke="#E0B84B" strokeWidth={7} opacity={0.25} strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1] }} />
        <motion.path d="M200 150 L210 210 L260 240 L250 290" stroke="#E0B84B" strokeWidth={7} opacity={0.25} strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.8, delay: 0.35, ease: [0.65, 0, 0.35, 1] }} />
        <motion.path d="M260 165 L230 195 L245 250" stroke="#E0B84B" strokeWidth={7} opacity={0.25} strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.8, delay: 0.7, ease: [0.65, 0, 0.35, 1] }} />
        <motion.path d="M150 260 L110 280" stroke="#E0B84B" strokeWidth={7} opacity={0.25} strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.8, delay: 1.0, ease: [0.65, 0, 0.35, 1] }} />
      </svg>
    </motion.div>
  );
}