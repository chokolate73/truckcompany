"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const inputClass =
  "w-full border border-border-light rounded-xl px-4 py-3 font-inter text-sm text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors";
const labelClass =
  "font-inter text-text-dark text-sm font-medium block mb-1.5";

export default function ApplyModal() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleOpen = () => {
      setOpen(true);
    };
    window.addEventListener("openApplyModal", handleOpen);
    return () => window.removeEventListener("openApplyModal", handleOpen);
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
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4 text-text-dark" />
            </button>

            <div className="p-6 sm:p-8">
              {/* Title */}
              <h2 className="font-manrope font-extrabold text-text-dark text-xl sm:text-2xl mb-6">
                CDL Driver Application
              </h2>

              <DriverForm />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
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
          <label htmlFor="modal-driver-name" className={labelClass}>
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="modal-driver-name"
            name="full_name"
            required
            className={inputClass}
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="modal-driver-phone" className={labelClass}>
            Phone <span className="text-accent">*</span>
          </label>
          <input
            type="tel"
            id="modal-driver-phone"
            name="phone"
            required
            className={inputClass}
            placeholder="(555) 000-0000"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="modal-driver-email" className={labelClass}>
          Email <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="modal-driver-email"
          name="email"
          required
          className={inputClass}
          placeholder="you@email.com"
        />
      </div>

      {/* Row: CDL Type + Years of Experience */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="modal-cdl-type" className={labelClass}>
            CDL Type <span className="text-accent">*</span>
          </label>
          <select
            id="modal-cdl-type"
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
          <label htmlFor="modal-experience" className={labelClass}>
            Years of Experience <span className="text-accent">*</span>
          </label>
          <select
            id="modal-experience"
            name="years_experience"
            required
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select experience
            </option>
            <option value="Less than 1 year">Less than 1 year</option>
            <option value="1-2 years">1-2 years</option>
            <option value="3-5 years">3-5 years</option>
            <option value="5-10 years">5-10 years</option>
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
        <label htmlFor="modal-freight-type" className={labelClass}>
          Preferred Freight Type
        </label>
        <select
          id="modal-freight-type"
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
        <label htmlFor="modal-driver-notes" className={labelClass}>
          Additional Notes
        </label>
        <textarea
          id="modal-driver-notes"
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
