"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const faqs = [
  {
    q: "What areas does D&V Services cover?",
    a: "We operate across all 48 contiguous United States, with primary freight lanes running from our Gurnee, Illinois hub to the Northeast, Southeast, West Coast, and Southwest regions. Contact our dispatch team for specific lane availability.",
  },
  {
    q: "What types of freight do you handle?",
    a: "We offer four core shipping services: Full Truckload (FTL) for dedicated capacity, Less Than Truckload (LTL) for smaller shipments, Flatbed for oversized or heavy cargo, and Refrigerated transport for temperature-sensitive freight.",
  },
  {
    q: "How do I request a shipping quote?",
    a: "You can reach our team directly by phone at (224) 330-2245 or email dvservices.safety@gmail.com. We typically respond within a few hours during business days, and our dispatch is available 24/7 for urgent requests.",
  },
  {
    q: "Are you hiring CDL drivers?",
    a: "Yes! We're actively recruiting experienced Class A CDL drivers. We offer competitive pay, consistent home time, and a safety-first team culture. Visit our Careers page or call us directly to learn more about current openings.",
  },
  {
    q: "What safety standards does D&V Services maintain?",
    a: "Safety is our top priority. We're fully FMCSA authorized and DOT compliant, with regular fleet inspections, comprehensive driver vetting (background checks, drug testing, CDL verification), and real-time GPS tracking on all shipments.",
  },
  {
    q: "How long has D&V Services been in business?",
    a: "D&V Services Inc. was founded in 2016 in Gurnee, Illinois. With nearly a decade of experience, we've built a reputation for reliable, on-time freight delivery across the continental United States.",
  },
  {
    q: "Do you offer dedicated or contract hauling?",
    a: "Yes, we offer dedicated fleet services for clients with consistent shipping needs. Contact our team to discuss customized solutions for your specific freight requirements and lane volumes.",
  },
  {
    q: "How can I track my shipment?",
    a: "All our trucks are equipped with GPS tracking. Once your load is in transit, your dispatcher can provide real-time location updates. We also proactively communicate any schedule changes or delivery ETAs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-bg-alt py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="font-inter text-sm font-semibold text-accent tracking-widest uppercase">
            Frequently Asked Questions
          </span>
          <h2 className="font-manrope font-extrabold text-text-dark text-4xl lg:text-5xl mt-3">
            Got Questions? We&apos;ve Got Answers.
          </h2>
          <p className="font-inter text-text-muted text-lg mt-4 max-w-2xl mx-auto">
            Everything you need to know about working with D&V Services.
          </p>
        </AnimateOnScroll>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <AnimateOnScroll key={i} variant="fade-up" delay={i * 0.05}>
              <div className="border-b border-border-light">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="font-manrope font-bold text-text-dark text-base lg:text-lg pr-4 group-hover:text-accent transition-colors">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-text-muted" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="font-inter text-text-muted text-base leading-relaxed pb-5">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
