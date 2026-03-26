"use client";

import { CircleCheckBig } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "./AnimateOnScroll";
import AnimatedCounter from "./AnimatedCounter";

const checkpoints = [
  "Reliability you can count on — every load, every lane.",
  "Safety-first operations with rigorous driver standards.",
  "Transparent communication from pickup to delivery.",
  "Trusted by shippers, brokers, and carriers nationwide.",
];

export default function About() {
  return (
    <section id="about" className="bg-bg-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll variant="fade-left" duration={0.7}>
            <span className="font-inter text-sm font-semibold text-accent tracking-widest uppercase">
              About D&V Services
            </span>
            <h2 className="font-manrope font-extrabold text-text-dark text-4xl lg:text-5xl leading-tight mt-3 mb-6">
              Built on Trust. <br />
              Driven by Results.
            </h2>
            <p className="font-inter text-text-muted text-lg leading-relaxed mb-5">
              Founded in 2016 in Gurnee, Illinois, D&V Services Inc. was built
              on a simple premise: freight should move on time, every time. What
              started as a local operation has grown into a nationwide carrier
              serving all 48 contiguous US states.
            </p>
            <p className="font-inter text-text-muted text-lg leading-relaxed mb-8">
              We serve shippers, freight brokers, and direct clients who need a
              reliable partner — one that answers the phone, keeps its
              commitments, and operates with the highest safety standards in the
              industry.
            </p>
            <StaggerContainer className="space-y-3" staggerDelay={0.1}>
              {checkpoints.map((text) => (
                <StaggerItem key={text}>
                  <li className="flex items-start gap-3 list-none">
                    <CircleCheckBig className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="font-inter text-text-dark text-base">
                      {text}
                    </span>
                  </li>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimateOnScroll>

          <AnimateOnScroll variant="fade-right" duration={0.7} delay={0.2}>
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden aspect-[4/3] bg-cover bg-center"
                style={{
                  background:
                    "linear-gradient(135deg, #0F1D3A 0%, #1B2A4A 100%)",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-10">
                  <div className="text-center mb-10">
                    <p className="font-inter text-text-white-muted text-sm uppercase tracking-widest mb-2">
                      Est.
                    </p>
                    <p className="font-manrope font-extrabold text-8xl text-white leading-none">
                      <AnimatedCounter target={2016} duration={2000} />
                    </p>
                    <p className="font-inter text-text-white-muted text-lg mt-3">
                      Gurnee, Illinois
                    </p>
                  </div>
                  <div className="w-full border-t border-border-dark pt-8 grid grid-cols-2 gap-6 text-center">
                    <div>
                      <p className="font-manrope font-extrabold text-accent text-4xl">
                        <AnimatedCounter target={48} duration={1500} />
                      </p>
                      <p className="font-inter text-text-white-muted text-sm mt-1">
                        States Covered
                      </p>
                    </div>
                    <div>
                      <p className="font-manrope font-extrabold text-accent text-4xl">
                        <AnimatedCounter target={4} duration={1000} />
                      </p>
                      <p className="font-inter text-text-white-muted text-sm mt-1">
                        Service Types
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-soft rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-bg-alt rounded-xl -z-10" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
