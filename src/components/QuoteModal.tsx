"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const inputClass =
  "w-full border border-border-light rounded-xl px-4 py-3 font-inter text-sm text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors";
const labelClass =
  "font-inter text-text-dark text-sm font-medium block mb-1.5";

export default function QuoteModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("openQuoteModal", handleOpen);
    return () => window.removeEventListener("openQuoteModal", handleOpen);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4 text-text-dark" />
            </button>

            <div className="p-6 sm:p-8">
              <h2 className="font-manrope font-extrabold text-text-dark text-xl sm:text-2xl mb-6">
                Get a Quote
              </h2>

              <form
                action="mailto:dvservices.safety@gmail.com"
                method="POST"
                encType="text/plain"
                className="space-y-5"
              >
                <div>
                  <label htmlFor="quote-name" className={labelClass}>
                    Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="quote-name"
                    name="name"
                    required
                    className={inputClass}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="quote-email" className={labelClass}>
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="quote-email"
                    name="email"
                    required
                    className={inputClass}
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="quote-phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="quote-phone"
                    name="phone"
                    className={inputClass}
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="quote-message" className={labelClass}>
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="quote-message"
                    name="message"
                    required
                    rows={4}
                    className={`${inputClass} resize-none`}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
