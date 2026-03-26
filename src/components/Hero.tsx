"use client";

import { motion } from "framer-motion";
import { MapPin, Shield, Clock, ArrowRight } from "lucide-react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0F1D3A" }}
    >
      {/* Background truck image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[position:75%_30%] md:bg-center"
        style={{ backgroundImage: "url('/images/hero-truck.jpg')" }}
      />

      {/* Left-to-right gradient overlay (desktop) — sharper transition */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, rgba(15,29,58,0.97) 0%, rgba(15,29,58,0.92) 20%, rgba(15,29,58,0.75) 40%, rgba(15,29,58,0.35) 60%, rgba(15,29,58,0.10) 80%, rgba(15,29,58,0.05) 100%)",
        }}
      />

      {/* Top-to-bottom gradient overlay (mobile) — truck visible at top, dark below */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,29,58,0.50) 0%, rgba(15,29,58,0.80) 30%, rgba(15,29,58,0.95) 50%, rgba(15,29,58,0.95) 100%)",
        }}
      />

      {/* Subtle top/bottom gradient for navbar and wave transition */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,29,58,0.7) 0%, transparent 30%, transparent 80%, rgba(15,29,58,0.5) 100%)",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 pt-28 pb-16 lg:py-0"
      >
        <div className="max-w-xl lg:max-w-3xl xl:max-w-4xl">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent font-inter font-semibold text-sm px-4 py-1.5 rounded-full mb-6"
          >
            <MapPin className="w-3.5 h-3.5" />
            Gurnee, Illinois — Serving All 48 States
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-manrope font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight mb-6"
          >
            Moving America&apos;s
            <span className="block text-accent">Freight Forward.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-inter text-text-white-muted text-lg lg:text-2xl leading-relaxed mb-10 lg:mb-12 max-w-lg lg:max-w-2xl"
          >
            D&V Services Inc. delivers reliable FTL, LTL, Flatbed, and
            Refrigerated shipping across the continental United States. Trusted
            since 2016.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-14">
            <button className="group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-manrope font-bold text-lg px-10 py-5 rounded-xl transition-all shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5 w-full sm:w-auto">
              Apply to Drive
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-manrope font-semibold text-lg px-8 py-5 rounded-xl transition-all hover:-translate-y-0.5 w-full sm:w-auto">
              Our Services
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-text-white-muted">
              <Shield className="w-4 h-4 text-accent shrink-0" />
              <span className="font-inter text-sm font-medium">
                Safety-First Culture
              </span>
            </div>
            <div className="flex items-center gap-2 text-text-white-muted">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <span className="font-inter text-sm font-medium">
                All 48 Contiguous States
              </span>
            </div>
            <div className="flex items-center gap-2 text-text-white-muted">
              <Clock className="w-4 h-4 text-accent shrink-0" />
              <span className="font-inter text-sm font-medium">
                24/7 Dispatch Support
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}
