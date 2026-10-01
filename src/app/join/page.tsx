"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Reveal";

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    interest: "Volunteering at a drive",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you! Your registration has been received.");
        setFormData({ name: "", email: "", city: "", interest: "Volunteering at a drive" });
      } else {
        setStatus("error");
        setMessage(result.error || "Registration failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="page-hero">
          <span className="kicker">Get Involved</span>
          <h1>Bring the gold to your city</h1>
          <p>Whether you&apos;ve got two hours on a Saturday or a whole class willing to organise, there&apos;s a seam for you to join.</p>
        </div>

        <Divider />

        <section className="py-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="kicker">Why Join</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">Four ways in</h2>
                <ul className="space-y-4">
                  {[
                    "No experience needed — every drive starts with a short orientation.",
                    "Run a drive at your own school, college, or residential society.",
                    "Every donation is tracked from collection to the partner NGO.",
                    "Volunteers get certificates and priority for leadership roles.",
                  ].map((point, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-ink-soft"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="w-2 h-2 mt-2 rounded-[2px] bg-gold flex-shrink-0 rotate-45" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[36px] p-8 md:p-12 shadow-default border border-gold/10 space-y-5"
              >
                <h3 className="text-2xl font-bold mb-6">Join Kintsugi Youth</h3>

                <div>
                  <label htmlFor="name" className="block text-sm text-ink-soft font-medium mb-2">
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-ink/20 bg-cream text-ink focus:border-gold focus:bg-white focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-ink-soft font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-ink/20 bg-cream text-ink focus:border-gold focus:bg-white focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm text-ink-soft font-medium mb-2">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    placeholder="Where are you based?"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-ink/20 bg-cream text-ink focus:border-gold focus:bg-white focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm text-ink-soft font-medium mb-2">
                    I&apos;m interested in
                  </label>
                  <select
                    id="interest"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-ink/20 bg-cream text-ink focus:border-gold focus:bg-white focus:outline-none transition-all appearance-none"
                  >
                    <option value="Volunteering at a drive">Volunteering at a drive</option>
                    <option value="Starting a drive at my school/college">Starting a drive at my school/college</option>
                    <option value="Partnering as an NGO">Partnering as an NGO</option>
                    <option value="Donating">Donating</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary w-full md:w-auto mt-2"
                >
                  {status === "submitting" ? "Submitting..." : "Join Kintsugi Youth"}
                </button>

                {message && (
                  <motion.p
                    className={`text-sm ${status === "success" ? "text-gold" : "text-red-600"}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {message}
                  </motion.p>
                )}
              </motion.form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}