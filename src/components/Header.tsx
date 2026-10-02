"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/philosophy", label: "Philosophy" },
    { href: "/drives", label: "Our Drives" },
    { href: "/impact", label: "Impact" },
    { href: "/founder", label: "About Founder" },
    { href: "/partners", label: "Partners" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-cream/90 backdrop-blur-md border-b border-gold/20" : "bg-transparent"
    }`}>
      <div className="max-w-[1180px] mx-auto px-8">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 font-shippori text-xl font-bold">
            <Image src="/logo.jpg" alt="" width={32} height={32} className="w-8 h-8 rounded-lg object-cover" />
            <span>Kintsugi Youth</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink-soft hover:text-gold transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/join"
              className="bg-gradient-to-br from-gold-bright to-gold text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all hidden md:inline-flex"
            >
              Contribute
            </Link>
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#4A362F" strokeWidth="2" strokeLinecap="round">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>

        {isOpen && (
          <div className="md:hidden bg-cream border-t border-gold/20 py-6 px-8">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ink-soft hover:text-gold transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/join"
                className="bg-gradient-to-br from-gold-bright to-gold text-white px-6 py-2.5 rounded-full text-sm font-medium text-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Contribute
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}