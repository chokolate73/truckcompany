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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgb(10, 23, 41) 0%, rgb(21, 42, 71) 50%, rgb(28, 51, 84) 100%)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-900/40" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-orange/20 animate-float"
            style={{
              width: `${8 + i * 6}px`,
              height: `${8 + i * 6}px`,
              left: `${15 + i * 18}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40"
      >
        <div className="max-w-3xl">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 bg-orange/15 border border-orange/30 text-orange font-inter font-semibold text-sm px-4 py-1.5 rounded-full mb-6"
          >
            <MapPin className="w-3.5 h-3.5" />
            Gurnee, Illinois — Serving All 48 States
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-manrope font-extrabold text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6"
          >
            Moving America&apos;s
            <span className="block text-orange">Freight Forward.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-inter text-navy-100 text-xl lg:text-2xl leading-relaxed mb-10 max-w-2xl"
          >
            D&V Services Inc. delivers reliable FTL, LTL, Flatbed, and
            Refrigerated shipping across the continental United States. Trusted
            since 2016.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-14">
            <button className="group inline-flex items-center gap-2 bg-orange hover:bg-orange-600 text-white font-manrope font-bold text-lg px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-orange/30 hover:-translate-y-0.5">
              Apply to Drive
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-manrope font-semibold text-lg px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5">
              Our Services
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-navy-200">
              <Shield className="w-4 h-4 text-orange shrink-0" />
              <span className="font-inter text-sm font-medium">
                Safety-First Culture
              </span>
            </div>
            <div className="flex items-center gap-2 text-navy-200">
              <MapPin className="w-4 h-4 text-orange shrink-0" />
              <span className="font-inter text-sm font-medium">
                All 48 Contiguous States
              </span>
            </div>
            <div className="flex items-center gap-2 text-navy-200">
              <Clock className="w-4 h-4 text-orange shrink-0" />
              <span className="font-inter text-sm font-medium">
                24/7 Dispatch Support
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
