"use client";

import { useState, useEffect } from "react";
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
    sub: "Mon\u2013Fri 8am\u20136pm CT",
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

const inputClass =
  "w-full border border-border-light rounded-xl px-4 py-3 font-inter text-sm text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors";
const labelClass =
  "font-inter text-text-dark text-sm font-medium block mb-1.5";

function ShipperForm() {
  return (
    <form
      action="mailto:dvservices.safety@gmail.com"
      method="POST"
      encType="text/plain"
      className="space-y-5"
    >
      <div>
        <label htmlFor="shipper-name" className={labelClass}>
          Name <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="shipper-name"
          name="name"
          required
          className={inputClass}
          placeholder="Your full name"
        />
      </div>
      <div>
        <label htmlFor="shipper-email" className={labelClass}>
          Email <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="shipper-email"
          name="email"
          required
          className={inputClass}
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="shipper-phone" className={labelClass}>
          Phone
        </label>
        <input
          type="tel"
          id="shipper-phone"
          name="phone"
          className={inputClass}
          placeholder="(555) 000-0000"
        />
      </div>
      <div>
        <label htmlFor="shipper-message" className={labelClass}>
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="shipper-message"
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
  );
}

function DriverForm() {
  return (
    <form
      action="mailto:dvservices.safety@gmail.com"
      method="POST"
      encType="text/plain"
      className="space-y-4"
    >
      {/* Row: Full Name + Phone */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="driver-name" className={labelClass}>
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="driver-name"
            name="full_name"
            required
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="driver-phone" className={labelClass}>
            Phone <span className="text-accent">*</span>
          </label>
          <input
            type="tel"
            id="driver-phone"
            name="phone"
            required
            className={inputClass}
            placeholder="(555) 000-0000"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="driver-email" className={labelClass}>
          Email <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="driver-email"
          name="email"
          required
          className={inputClass}
          placeholder="you@email.com"
        />
      </div>

      {/* Row: CDL Type + Years of Experience */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cdl-type" className={labelClass}>
            CDL Type <span className="text-accent">*</span>
          </label>
          <select
            id="cdl-type"
            name="cdl_type"
            required
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select CDL type
            </option>
            <option value="Class A">Class A</option>
            <option value="Class B">Class B</option>
          </select>
        </div>
        <div>
          <label htmlFor="experience" className={labelClass}>
            Years of Experience <span className="text-accent">*</span>
          </label>
          <select
            id="experience"
            name="years_experience"
            required
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select experience
            </option>
            <option value="Less than 1 year">Less than 1 year</option>
            <option value="1-2 years">1–2 years</option>
            <option value="3-5 years">3–5 years</option>
            <option value="5-10 years">5–10 years</option>
            <option value="10+ years">10+ years</option>
          </select>
        </div>
      </div>

      {/* Endorsements */}
      <div>
        <p className={labelClass}>Endorsements</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-1">
          {["Hazmat", "Tanker", "Doubles/Triples", "TWIC"].map((e) => (
            <label
              key={e}
              className="flex items-center gap-2 font-inter text-sm text-text-dark cursor-pointer"
            >
              <input
                type="checkbox"
                name="endorsements"
                value={e}
                className="w-4 h-4 rounded border-border-light text-accent focus:ring-accent"
              />
              {e}
            </label>
          ))}
        </div>
      </div>

      {/* Preferred Freight Type */}
      <div>
        <label htmlFor="freight-type" className={labelClass}>
          Preferred Freight Type
        </label>
        <select
          id="freight-type"
          name="preferred_freight"
          className={inputClass}
          defaultValue=""
        >
          <option value="" disabled>
            Select freight type
          </option>
          <option value="Dry Van">Dry Van</option>
          <option value="Flatbed">Flatbed</option>
          <option value="Refrigerated">Refrigerated</option>
          <option value="No Preference">No Preference</option>
        </select>
      </div>

      {/* Additional Notes */}
      <div>
        <label htmlFor="driver-notes" className={labelClass}>
          Additional Notes
        </label>
        <textarea
          id="driver-notes"
          name="notes"
          rows={2}
          className={`${inputClass} resize-none max-h-[80px]`}
          placeholder="Anything else we should know..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-accent hover:bg-accent-hover text-white font-manrope font-bold text-base px-6 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
      >
        Submit Application
      </button>
    </form>
  );
}

export default function Contact() {
  const [activeTab, setActiveTab] = useState<"shipper" | "driver">("shipper");

  useEffect(() => {
    const handleSwitchTab = () => setActiveTab("driver");
    window.addEventListener("switchToDriverTab", handleSwitchTab);
    return () => window.removeEventListener("switchToDriverTab", handleSwitchTab);
  }, []);

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
            Ready to ship? Looking to drive? Reach out directly - we&apos;d love
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
                <div className="bg-white rounded-xl px-5 py-4 border border-border-light shadow-sm hover:border-accent/30 hover:shadow-md transition-all flex items-center gap-4">
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

          {/* Right: tabbed form */}
          <AnimateOnScroll variant="fade-right" delay={0.2} duration={0.7}>
            <div className="bg-white rounded-2xl p-8 border border-border-light shadow-sm">
              {/* Tab buttons */}
              <div className="flex gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => setActiveTab("shipper")}
                  className={`flex-1 font-manrope font-bold text-sm px-4 py-3 rounded-xl transition-all ${
                    activeTab === "shipper"
                      ? "bg-accent text-white shadow-md shadow-accent/25"
                      : "bg-white text-text-dark border border-border-light hover:border-accent/30"
                  }`}
                >
                  I&apos;m a Shipper
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("driver")}
                  className={`flex-1 font-manrope font-bold text-sm px-4 py-3 rounded-xl transition-all ${
                    activeTab === "driver"
                      ? "bg-accent text-white shadow-md shadow-accent/25"
                      : "bg-white text-text-dark border border-border-light hover:border-accent/30"
                  }`}
                >
                  I&apos;m a CDL Driver
                </button>
              </div>

              {/* Form content */}
              {activeTab === "shipper" ? <ShipperForm /> : <DriverForm />}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
