"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
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

        <div className="grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-12 items-center">
          {/* Left: contact cards stacked vertically */}
          <StaggerContainer
            className="flex flex-col gap-4"
            staggerDelay={0.1}
          >
            {contactCards.map((card) => (
              <StaggerItem key={card.label} variant="fade-up">
                <div className="bg-white rounded-xl px-5 py-4 border border-border-light hover:border-accent/30 hover:shadow-md transition-all flex items-center gap-4">
                  <div className="w-11 h-11 bg-accent-soft rounded-xl flex items-center justify-center shrink-0">
                    <card.icon
                      className="w-5 h-5 text-accent"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-inter text-text-muted text-xs uppercase tracking-widest mb-0.5">
                      {card.label}
                    </p>
                    {card.href ? (
                      <a
                        href={card.href}
                        className="font-manrope font-bold text-text-dark text-sm hover:text-accent transition-colors block truncate"
                      >
                        {card.value}
                      </a>
                    ) : (
                      <p className="font-manrope font-bold text-text-dark text-sm">
                        {card.value}
                      </p>
                    )}
                    <p className="font-inter text-text-muted text-xs mt-0.5">
                      {card.sub}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

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
