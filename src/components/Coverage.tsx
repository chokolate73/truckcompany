"use client";

import { motion } from "framer-motion";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "./AnimateOnScroll";
import AnimatedCounter from "./AnimatedCounter";

const lanes = [
  { from: "Midwest", to: "Northeast", detail: "IL, IN, OH → NY, PA, NJ, MA" },
  { from: "Midwest", to: "Southeast", detail: "IL, IN → TN, GA, FL, SC" },
  { from: "Midwest", to: "West Coast", detail: "IL, MO → CA, OR, WA" },
  { from: "Midwest", to: "Southwest", detail: "IL → TX, AZ, NV, NM" },
  { from: "Midwest", to: "Northwest", detail: "IL → CO, ID, MT, WY" },
  { from: "Southeast", to: "Northeast", detail: "FL, GA → NY, MA, CT" },
];

const regions = [
  "Northeast",
  "Mid-Atlantic",
  "Southeast",
  "Midwest",
  "South Central",
  "Mountain West",
  "Pacific Northwest",
  "Southwest",
  "Great Plains",
];

export default function Coverage() {
  return (
    <section id="coverage" className="bg-bg-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="font-inter text-sm font-semibold text-accent tracking-widest uppercase">
            Service Coverage
          </span>
          <h2 className="font-manrope font-extrabold text-text-dark text-4xl lg:text-5xl mt-3">
            We Go Where You Need
          </h2>
          <p className="font-inter text-text-muted text-lg mt-4 max-w-2xl mx-auto">
            Operating from our Gurnee, IL hub, D&V Services covers every major
            freight lane across all 48 contiguous states.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map placeholder */}
          <AnimateOnScroll variant="fade-left" duration={0.7}>
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden aspect-[16/9] border border-border-light"
                style={{
                  background:
                    "linear-gradient(135deg, #0F1D3A 0%, #1B2A4A 100%)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-manrope font-extrabold text-white text-6xl">
                      <AnimatedCounter target={48} duration={1500} />
                    </p>
                    <p className="font-inter text-text-white-muted text-lg mt-1">
                      Contiguous US States
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="space-y-8">
            <div>
              <AnimateOnScroll variant="fade-up" delay={0.1}>
                <h3 className="font-manrope font-bold text-text-dark text-xl mb-4">
                  Key Freight Lanes
                </h3>
              </AnimateOnScroll>
              <StaggerContainer className="grid gap-3" staggerDelay={0.08}>
                {lanes.map((lane) => (
                  <StaggerItem key={`${lane.from}-${lane.to}`} variant="fade-left">
                    <motion.div
                      whileHover={{
                        x: 4,
                        transition: { duration: 0.2 },
                      }}
                      className="bg-bg-alt border border-border-light rounded-xl px-5 py-3.5 flex items-center justify-between cursor-default hover:border-accent/30 hover:shadow-sm transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-manrope font-semibold text-accent text-sm">
                          {lane.from}
                        </span>
                        <span className="text-text-muted">&rarr;</span>
                        <span className="font-manrope font-semibold text-text-dark text-sm">
                          {lane.to}
                        </span>
                      </div>
                      <span className="font-inter text-text-muted text-xs">
                        {lane.detail}
                      </span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <AnimateOnScroll variant="fade-up" delay={0.3}>
              <h3 className="font-manrope font-bold text-text-dark text-xl mb-4">
                Regional Coverage
              </h3>
              <div className="flex flex-wrap gap-2">
                {regions.map((r, i) => (
                  <motion.span
                    key={r}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
                    className="bg-navy text-white font-inter text-sm px-3 py-1.5 rounded-full cursor-default"
                  >
                    {r}
                  </motion.span>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variant="fade-up" delay={0.4}>
              <div className="bg-accent/10 border border-accent/25 rounded-xl px-6 py-5">
                <p className="font-manrope font-bold text-text-dark text-lg mb-1">
                  Need a custom lane?
                </p>
                <p className="font-inter text-text-muted text-sm">
                  Contact our dispatch team — we&apos;ll work with you to find a
                  solution for any origin or destination.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
