"use client";

import { CircleCheckBig } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "./AnimateOnScroll";

const checkpoints = [
  "Reliability you can count on — every load, every lane.",
  "Safety-first operations with rigorous driver standards.",
  "Transparent communication from pickup to delivery.",
  "Trusted by shippers, brokers, and carriers nationwide.",
];

export default function About() {
  return (
    <section id="about" className="bg-bg-light pt-20 lg:pt-24 pb-28">
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
              {/* Main fleet image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/image/about-fleet.jpg"
                  alt="D&V Services fleet of trucks"
                  className="w-full h-full object-cover min-h-[400px] lg:min-h-[500px]"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    target.parentElement!.style.background =
                      "linear-gradient(135deg, #0F1D3A 0%, #1B2A4A 100%)";
                    target.parentElement!.classList.add("min-h-[400px]", "lg:min-h-[500px]");
                  }}
                />
              </div>

              {/* Orange accent decoration — bottom right */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/15 rounded-2xl -z-10" />

              {/* Small stats badge overlaying the bottom of the image */}
              <div className="absolute -bottom-6 left-4 right-4 bg-white rounded-xl shadow-lg p-4 border border-border-light">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-manrope font-extrabold text-accent text-2xl">2016</p>
                    <p className="font-inter text-text-muted text-xs">Established</p>
                  </div>
                  <div className="border-x border-border-light">
                    <p className="font-manrope font-extrabold text-accent text-2xl">48</p>
                    <p className="font-inter text-text-muted text-xs">States</p>
                  </div>
                  <div>
                    <p className="font-manrope font-extrabold text-accent text-2xl">4</p>
                    <p className="font-inter text-text-muted text-xs">Services</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
