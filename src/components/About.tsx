import { CircleCheckBig } from "lucide-react";

const checkpoints = [
  "Reliability you can count on — every load, every lane.",
  "Safety-first operations with rigorous driver standards.",
  "Transparent communication from pickup to delivery.",
  "Trusted by shippers, brokers, and carriers nationwide.",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-inter text-sm font-semibold text-orange tracking-widest uppercase">
              About D&V Services
            </span>
            <h2 className="font-manrope font-extrabold text-navy text-4xl lg:text-5xl leading-tight mt-3 mb-6">
              Built on Trust. <br />
              Driven by Results.
            </h2>
            <p className="font-inter text-gray-600 text-lg leading-relaxed mb-5">
              Founded in 2016 in Gurnee, Illinois, D&V Services Inc. was built
              on a simple premise: freight should move on time, every time. What
              started as a local operation has grown into a nationwide carrier
              serving all 48 contiguous US states.
            </p>
            <p className="font-inter text-gray-600 text-lg leading-relaxed mb-8">
              We serve shippers, freight brokers, and direct clients who need a
              reliable partner — one that answers the phone, keeps its
              commitments, and operates with the highest safety standards in the
              industry.
            </p>
            <ul className="space-y-3">
              {checkpoints.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <CircleCheckBig className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                  <span className="font-inter text-gray-700 text-base">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden aspect-[4/3] bg-cover bg-center"
              style={{
                background:
                  "linear-gradient(135deg, rgb(14, 32, 57) 0%, rgb(25, 51, 87) 100%)",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-10">
                <div className="text-center mb-10">
                  <p className="font-inter text-navy-200 text-sm uppercase tracking-widest mb-2">
                    Est.
                  </p>
                  <p className="font-manrope font-extrabold text-8xl text-white leading-none">
                    2016
                  </p>
                  <p className="font-inter text-navy-100 text-lg mt-3">
                    Gurnee, Illinois
                  </p>
                </div>
                <div className="w-full border-t border-white/20 pt-8 grid grid-cols-2 gap-6 text-center">
                  <div>
                    <p className="font-manrope font-extrabold text-orange text-4xl">
                      48
                    </p>
                    <p className="font-inter text-navy-200 text-sm mt-1">
                      States Covered
                    </p>
                  </div>
                  <div>
                    <p className="font-manrope font-extrabold text-orange text-4xl">
                      4
                    </p>
                    <p className="font-inter text-navy-200 text-sm mt-1">
                      Service Types
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-navy-100 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
