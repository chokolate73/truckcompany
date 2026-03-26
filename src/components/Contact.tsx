"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "./AnimateOnScroll";

const contactCards = [
  {
    icon: MapPin,
    label: "Address",
    value: "3650 Washington St, Gurnee, IL 60031",
    sub: "Lake County, IL",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(224) 330-2245",
    href: "tel:+12243302245",
    sub: "Mon–Fri 8am–6pm CT",
  },
  {
    icon: Mail,
    label: "Email",
    value: "dvservices.safety@gmail.com",
    href: "mailto:dvservices.safety@gmail.com",
    sub: "We respond within 24hrs",
  },
  {
    icon: Clock,
    label: "Dispatch",
    value: "24 / 7 Available",
    sub: "Drivers always supported",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-bg-alt py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <span className="font-inter text-sm font-semibold text-accent tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="font-manrope font-extrabold text-text-dark text-4xl lg:text-5xl mt-3">
            Contact Us
          </h2>
          <p className="font-inter text-text-muted text-lg mt-4 max-w-xl mx-auto">
            Ready to ship? Looking to drive? Reach out directly — we&apos;d love
            to hear from you.
          </p>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: contact cards + careers banner */}
          <div className="space-y-5">
            <StaggerContainer
              className="grid sm:grid-cols-2 gap-5"
              staggerDelay={0.1}
            >
              {contactCards.map((card) => (
                <StaggerItem key={card.label} variant="fade-up">
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="bg-white rounded-2xl p-7 border border-border-light hover:border-accent/30 hover:shadow-lg transition-all h-full"
                    style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
                  >
                    <div className="w-11 h-11 bg-accent-soft rounded-xl flex items-center justify-center mb-4">
                      <card.icon
                        className="w-5 h-5 text-accent"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="font-inter text-text-muted text-xs uppercase tracking-widest mb-1">
                      {card.label}
                    </p>
                    {card.href ? (
                      <a
                        href={card.href}
                        className="font-manrope font-bold text-text-dark text-lg hover:text-accent transition-colors block"
                      >
                        {card.value}
                      </a>
                    ) : (
                      <p className="font-manrope font-bold text-text-dark text-lg">
                        {card.value}
                      </p>
                    )}
                    <p className="font-inter text-text-muted text-sm mt-1">
                      {card.sub}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* CDL Careers Banner */}
            <AnimateOnScroll variant="fade-up" delay={0.3}>
              <motion.div
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                className="bg-accent rounded-2xl p-7 shadow-lg shadow-accent/20"
              >
                <p className="font-manrope font-bold text-white text-xl mb-2">
                  CDL Drivers — Join Our Team
                </p>
                <p className="font-inter text-white/85 text-sm mb-3">
                  Competitive Pay &bull; Consistent Home Time &bull; Safety-First
                  Culture &bull; Modern Equipment
                </p>
                <p className="font-inter text-white/70 text-xs mb-4">
                  Class A CDL required. 2+ years experience preferred.
                </p>
                <a
                  href="mailto:dvservices.safety@gmail.com?subject=CDL Driver Application"
                  className="inline-block bg-white hover:bg-white/90 text-accent font-manrope font-bold text-sm px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  Apply to Drive
                </a>
              </motion.div>
            </AnimateOnScroll>
          </div>

          {/* Right: contact form */}
          <AnimateOnScroll variant="fade-right" delay={0.2} duration={0.7}>
            <div className="bg-white rounded-2xl p-8 border border-border-light shadow-sm">
              <h3 className="font-manrope font-bold text-text-dark text-xl mb-6">
                Send Us a Message
              </h3>
              <form
                action="mailto:dvservices.safety@gmail.com"
                method="POST"
                encType="text/plain"
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="font-inter text-text-dark text-sm font-medium block mb-1.5"
                  >
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-border-light rounded-xl px-4 py-3 font-inter text-sm text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="font-inter text-text-dark text-sm font-medium block mb-1.5"
                  >
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-border-light rounded-xl px-4 py-3 font-inter text-sm text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="font-inter text-text-dark text-sm font-medium block mb-1.5"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border border-border-light rounded-xl px-4 py-3 font-inter text-sm text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="font-inter text-text-dark text-sm font-medium block mb-1.5"
                  >
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full border border-border-light rounded-xl px-4 py-3 font-inter text-sm text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                    placeholder="Tell us about your shipping needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-white font-manrope font-bold text-base px-6 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
