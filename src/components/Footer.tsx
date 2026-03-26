"use client";

import { Truck } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { href: "#about", label: "About Us" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#services", label: "Services" },
  { href: "#coverage", label: "Coverage" },
  { href: "#contact", label: "Contact" },
];

const servicesList = [
  "Full Truckload (FTL)",
  "Less Than Truckload (LTL)",
  "Flatbed",
  "Refrigerated",
];

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

const socials = [
  { Icon: FacebookIcon, label: "Facebook" },
  { Icon: LinkedinIcon, label: "LinkedIn" },
  { Icon: InstagramIcon, label: "Instagram" },
  { Icon: TwitterIcon, label: "Twitter" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="bg-navy text-text-white-muted pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-border-dark">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-manrope font-extrabold text-white text-base">
                  D&V Services Inc.
                </p>
                <p className="font-inter text-text-white-muted text-xs">
                  Trucking &amp; Freight
                </p>
              </div>
            </div>
            <p className="font-inter text-text-white-muted text-sm leading-relaxed mb-5">
              Reliable freight solutions across all 48 contiguous US states.
              Serving shippers, brokers, and carriers since 2016.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  whileHover={{ y: -3, transition: { duration: 0.15 } }}
                  className="w-8 h-8 bg-white/10 hover:bg-accent/70 rounded-lg flex items-center justify-center transition-colors"
                >
                  <s.Icon className="w-4 h-4 text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-manrope font-bold text-white text-sm uppercase tracking-widest mb-5">
              Quick Links
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-inter text-text-white-muted text-sm hover:text-accent hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-manrope font-bold text-white text-sm uppercase tracking-widest mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {servicesList.map((svc) => (
                <li key={svc}>
                  <span className="font-inter text-text-white-muted text-sm">
                    {svc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-manrope font-bold text-white text-sm uppercase tracking-widest mb-5">
              Contact
            </p>
            <address className="not-italic space-y-3">
              <p className="font-inter text-text-white-muted text-sm">
                Gurnee, Illinois 60031
              </p>
              <a
                href="tel:+18475550100"
                className="font-inter text-text-white-muted text-sm hover:text-accent transition-colors block"
              >
                (847) 555-0100
              </a>
              <a
                href="mailto:dispatch@dvservicesinc.com"
                className="font-inter text-text-white-muted text-sm hover:text-accent transition-colors block"
              >
                dispatch@dvservicesinc.com
              </a>
              <p className="font-inter text-text-white-muted text-sm">
                Dispatch: 24/7
              </p>
            </address>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-white/40 text-sm">
            &copy; 2026 D&V Services Inc. All rights reserved.
          </p>
          <p className="font-inter text-white/40 text-sm">
            MC# &middot; DOT# &middot; FMCSA Compliant
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
