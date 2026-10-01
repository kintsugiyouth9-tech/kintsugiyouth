"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/drive0.jpg", alt: "Drive 1" },
  { src: "/drive1.jpg", alt: "Drive 2" },
  { src: "/drive3.jpg", alt: "Drive 3" },
  { src: "/drive4.jpg", alt: "Drive 4" },
  { src: "/drive5.jpg", alt: "Drive 5" },
  { src: "/drive6.jpg", alt: "Drive 6" },
  { src: "/drive7.jpg", alt: "Drive 7" },
];

export function Gallery() {
  return (
    <section className="gallery-section py-20" style={{ background: "linear-gradient(180deg, transparent, rgba(245,199,156,0.15) 50%, transparent)" }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {images.map((img, index) => (
<motion.div
              key={img.src}
              className="group aspect-[4/3] md:aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-[0_8px_24px_-12px_rgba(150,100,60,0.3)] border border-gold/10 transition-all duration-300"
              whileHover={{ y: -8, boxShadow: "0 16px 36px -16px rgba(150,100,60,0.4)" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 14vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}