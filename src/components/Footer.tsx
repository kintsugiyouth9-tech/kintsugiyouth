import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const footerLinks = [
    { href: "/philosophy", label: "Philosophy" },
    { href: "/drives", label: "Our Drives" },
    { href: "/impact", label: "Impact" },
    { href: "/founder", label: "About Founder" },
    { href: "/partners", label: "Partners" },
    { href: "/join", label: "Get Involved" },
  ];

  return (
    <footer className="pt-20 pb-10 text-center border-t border-gold/10">
      <div className="max-w-[1180px] mx-auto px-8">
        <Link href="/" className="flex items-center justify-center gap-3 font-shippori text-xl font-bold mb-6">
          <Image src="/logo.jpg" alt="" width={32} height={32} className="w-8 h-8 rounded-lg object-cover" />
          <span>Kintsugi Youth</span>
        </Link>

        <p className="text-ink-soft max-w-[420px] mx-auto mb-8">
          A youth organisation joining communities together, one gold seam at a time.
        </p>

        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-ink-soft/70">
          © 2026 Kintsugi Youth Youth Collective. Started June 2026 — mended with gold ever since.
        </p>
      </div>
    </footer>
  );
}