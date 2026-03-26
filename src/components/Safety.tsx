"use client";

import {
  ShieldCheck,
  FileCheck,
  Award,
  ClipboardCheck,
  Users,
  Eye,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "./AnimateOnScroll";

const badges = [
  {
    icon: ShieldCheck,
    title: "FMCSA Authorized",
    desc: "Fully authorized motor carrier operating under federal regulations.",
  },
  {
    icon: FileCheck,
    title: "DOT Compliant",
    desc: "Department of Transportation registered and compliant fleet.",
  },
  {
    icon: Award,
    title: "Clean Safety Record",
    desc: "Proven track record with no critical violations.",
  },
  {
    icon: ClipboardCheck,
    title: "Regular Inspections",
    desc: "Fleet maintained and inspected on strict schedules.",
  },
  {
    icon: Users,
    title: "Vetted Drivers",
    desc: "All drivers background-checked, drug-tested, and CDL-verified.",
  },
  {
    icon: Eye,
    title: "Real-Time Tracking",
    desc: "GPS-monitored fleet with 24/7 dispatch visibility.",
  },
];

export default function Safety() {
  return (
    <section id="safety" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll variant="fade-left" duration={0.7}>
            <span className="font-inter text-sm font-semibold text-accent tracking-widest uppercase">
              Safety & Compliance
            </span>
            <h2 className="font-manrope font-extrabold text-text-dark text-4xl lg:text-5xl leading-tight mt-3 mb-6">
              Your Freight in <br />
              Safe Hands.
            </h2>
            <p className="font-inter text-text-muted text-lg leading-relaxed mb-8">
              Safety isn&apos;t just a policy — it&apos;s our operating standard.
              Every driver, every truck, every load meets the highest regulatory
              and industry standards.
            </p>
            <div className="bg-accent/10 border border-accent/25 rounded-xl px-6 py-5">
              <p className="font-inter text-text-muted text-sm">
                MC# XXXXXXX &middot; DOT# XXXXXXX &middot; FMCSA Registered
                Carrier
              </p>
            </div>
          </AnimateOnScroll>

          <StaggerContainer
            className="grid sm:grid-cols-2 gap-5"
            staggerDelay={0.1}
          >
            {badges.map((badge) => (
              <StaggerItem key={badge.title} variant="fade-up">
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-6 border border-border-light hover:border-accent/30 hover:shadow-lg transition-all h-full"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
                >
                  <div className="w-11 h-11 bg-accent-soft rounded-xl flex items-center justify-center mb-4">
                    <badge.icon
                      className="w-5 h-5 text-accent"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-manrope font-bold text-text-dark text-base mb-1">
                    {badge.title}
                  </h3>
                  <p className="font-inter text-text-muted text-sm leading-relaxed">
                    {badge.desc}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
