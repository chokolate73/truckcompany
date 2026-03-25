import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-stone-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-inter text-sm font-semibold text-orange tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="font-manrope font-extrabold text-navy text-4xl lg:text-5xl mt-3">
            Contact Us
          </h2>
          <p className="font-inter text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Ready to ship? Looking to drive? Reach out directly — no forms, no
            runaround.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Address */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-orange/30 transition-all">
              <div className="w-11 h-11 bg-orange/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-orange" strokeWidth={1.5} />
              </div>
              <p className="font-inter text-gray-400 text-xs uppercase tracking-widest mb-1">
                Address
              </p>
              <p className="font-manrope font-bold text-navy text-lg">
                Gurnee, Illinois 60031
              </p>
              <p className="font-inter text-gray-400 text-sm mt-1">
                Lake County, IL
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-orange/30 transition-all">
              <div className="w-11 h-11 bg-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-orange" strokeWidth={1.5} />
              </div>
              <p className="font-inter text-gray-400 text-xs uppercase tracking-widest mb-1">
                Phone
              </p>
              <a
                href="tel:+18475550100"
                className="font-manrope font-bold text-navy text-lg hover:text-orange transition-colors block"
              >
                (847) 555-0100
              </a>
              <p className="font-inter text-gray-400 text-sm mt-1">
                Mon–Fri 8am–6pm CT
              </p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-orange/30 transition-all">
              <div className="w-11 h-11 bg-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-orange" strokeWidth={1.5} />
              </div>
              <p className="font-inter text-gray-400 text-xs uppercase tracking-widest mb-1">
                Email
              </p>
              <a
                href="mailto:dispatch@dvservicesinc.com"
                className="font-manrope font-bold text-navy text-lg hover:text-orange transition-colors block"
              >
                dispatch@dvservicesinc.com
              </a>
              <p className="font-inter text-gray-400 text-sm mt-1">
                We respond within 24hrs
              </p>
            </div>

            {/* Dispatch */}
            <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-orange/30 transition-all">
              <div className="w-11 h-11 bg-orange/10 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-orange" strokeWidth={1.5} />
              </div>
              <p className="font-inter text-gray-400 text-xs uppercase tracking-widest mb-1">
                Dispatch
              </p>
              <p className="font-manrope font-bold text-navy text-lg">
                24 / 7 Available
              </p>
              <p className="font-inter text-gray-400 text-sm mt-1">
                Drivers always supported
              </p>
            </div>

            {/* CDL Banner */}
            <div className="sm:col-span-2 bg-navy rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="flex-1">
                <p className="font-manrope font-bold text-white text-xl mb-1">
                  CDL Drivers — Join Our Team
                </p>
                <p className="font-inter text-navy-200 text-sm">
                  We&apos;re actively recruiting Class A CDL drivers. Competitive
                  pay, home time, and a team that respects your hustle.
                </p>
              </div>
              <a
                href="mailto:dispatch@dvservicesinc.com?subject=CDL Driver Application"
                className="shrink-0 bg-orange hover:bg-orange-600 text-white font-manrope font-bold text-sm px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
              >
                Apply to Drive
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-[420px]">
            <iframe
              title="D&V Services Inc. Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47460.09268847853!2d-87.9589!3d42.3706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f9e4a7a9e3a25%3A0x3c3c3c3c3c3c3c3c!2sGurnee%2C+IL+60031!5e0!3m2!1sen!2sus!4v1710000000000"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
