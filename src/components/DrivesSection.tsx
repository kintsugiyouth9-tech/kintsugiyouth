"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const drives = [
  {
    title: "Expressive Therapy Drives",
    description: "Creative therapy sessions and workshops for youth mental health, led by trained facilitators.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#B57F2A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M20 6H4a1 1 0 00-1 1v3h18V7a1 1 0 00-1-1z" />
        <path d="M4 10v9a1 1 0 001 1h14a1 1 0 001-1v-9" />
        <path d="M12 6V4a2 2 0 114 0v2" />
      </svg>
    ),
  },
  {
    title: "Mindful Spaces Drives",
    description: "Creating safe, calming spaces in schools and communities for mental wellness and reflection.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#B57F2A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    title: "Community Circle Drives",
    description: "Weekly community circles where youth gather to share, listen, and support each other's mental health journeys.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#B57F2A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2v4M6 4l2 3M18 4l-2 3" />
        <circle cx="12" cy="14" r="8" />
        <path d="M9 14h6M12 11v6" />
      </svg>
    ),
  },
  {
    title: "Awareness & Outreach Drives",
    description: "Mental health awareness campaigns and outreach programs to reduce stigma and connect youth to resources.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#B57F2A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 5 6.5 5c1.9 0 3.4 1 5.5 3 2.1-2 3.6-3 5.5-3C21 5 23.5 8.5 21.5 12.5 19 16.65 12 21 12 21z" />
      </svg>
    ),
  },
];

export function DrivesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1180px] mx-auto px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.14em] text-gold font-bold mb-4 block">Our Drives</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Four ways we mend gaps</h2>
          <p className="text-ink-soft text-lg">Each drive is planned, packed, and delivered by youth volunteers in partnership with vetted NGOs on the ground.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {drives.map((drive, index) => (
            <motion.div
              key={drive.title}
              className="group relative bg-white rounded-[26px] p-8 border border-gold/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_44px_-18px_rgba(150,100,60,0.4)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="absolute bottom-0 left-0 right-0 h-[5px] bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="w-14 h-14 rounded-xl mb-5 flex items-center justify-center bg-gradient-to-br from-peach to-pink">
                {drive.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{drive.title}</h3>
              <p className="text-ink-soft text-base leading-relaxed">{drive.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/drives" className="inline-flex px-7 py-4 rounded-full border-[1.5px] border-ink/25 text-ink font-medium hover:border-gold hover:bg-gold/5 transition-all">
            View All Drives
          </Link>
        </motion.div>
      </div>
    </section>
  );
}