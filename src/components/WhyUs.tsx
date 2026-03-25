"use client";

import { CalendarCheck, Map, Headphones, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "./AnimateOnScroll";

const cards = [
  {
    icon: CalendarCheck,
    stat: "Since 2016",
    label: "Years of Experience",
    text: "Nearly a decade of reliable freight operations. We know the roads, lanes, and what it takes to deliver on time.",
  },
  {
    icon: Map,
    stat: "48 States",
    label: "Nationwide Coverage",
    text: "Full continental US coverage. Whether it's coast-to-coast or regional, we have the network to get it done.",
  },
  {
    icon: Headphones,
    stat: "24/7",
    label: "Dispatch Support",
    text: "Our dispatch team is available around the clock. Real people, real answers — any hour of the day or night.",
  },
  {
    icon: ShieldCheck,
    stat: "Safety First",
    label: "Compliance & Safety",
    text: "Rigorous driver vetting, DOT compliance, and ongoing safety training keep every load — and every driver — protected.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-stone-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="font-inter text-sm font-semibold text-orange tracking-widest uppercase">
            Why D&V Services
          </span>
          <h2 className="font-manrope font-extrabold text-navy text-4xl lg:text-5xl mt-3">
            The D&V Difference
          </h2>
          <p className="font-inter text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            We&apos;re not just another carrier. We&apos;re a partner you can
            count on.
          </p>
        </AnimateOnScroll>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.12}
        >
          {cards.map((card) => (
            <StaggerItem key={card.label} variant="fade-up">
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5 transition-all group h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-5 group-hover:bg-orange/20 transition-colors">
                  <card.icon
                    className="w-6 h-6 text-orange"
                    strokeWidth={1.5}
                  />
                </div>
                <p className="font-manrope font-extrabold text-navy text-4xl mb-1">
                  {card.stat}
                </p>
                <p className="font-manrope font-bold text-navy-700 text-sm uppercase tracking-wide mb-3">
                  {card.label}
                </p>
                <p className="font-inter text-gray-500 text-sm leading-relaxed">
                  {card.text}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
