"use client";

import Link from "next/link";
import content from "@/content/homepage.json";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Mail, ShieldCheck } from "lucide-react";

const insurancePartners = {
  illinois: content.connect.illinoisInsurance,
  indiana: content.connect.indianaInsurance,
};

export function ConnectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  const fadeUpVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="connect"
      ref={ref}
      className="py-20 md:py-32 bg-[#FCFBF7] text-stone-800 rounded-t-[5rem] relative z-10"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column - Schedule */}
        <motion.div
          className="space-y-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariant}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl text-stone-900 mb-6">
              {content.connect.heading}
            </h2>
            <p className="text-xl text-stone-800 leading-relaxed">
              {content.connect.intro}
            </p>
          </div>

          {/* Action Hub */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              href={content.connect.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#90b654] text-white px-8 py-5 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-transform duration-200"
            >
              <Calendar className="w-5 h-5" />
              {content.connect.bookingLabel}
            </Link>
          </div>

          {/* Email & Phone Contact */}
          <div className="pt-8 border-t border-stone-300">
            <div className="rounded-2xl border border-stone-200 bg-stone-100/60 p-5 md:p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-stone-700 ring-1 ring-stone-200">
                  <Mail className="h-4 w-4" />
                </span>
                <p className="text-base font-medium text-stone-800">
                  {content.connect.contactHeading}
                </p>
              </div>

              <div className="mt-4 space-y-3">
                <a
                  href={`mailto:${content.connect.email}`}
                  className="flex flex-col gap-1 rounded-xl border border-stone-200 bg-white px-4 py-3 transition-colors hover:border-stone-300 hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
                >
                  <span className="text-sm font-medium text-stone-600">Email</span>
                  <span className="break-all text-base font-semibold text-stone-900">
                    {content.connect.email}
                  </span>
                </a>

                <a
                  href={`tel:${content.connect.indianaPhone.replace(/[^\d+]/g, "")}`}
                  className="flex items-center justify-between gap-4 rounded-xl border border-stone-200 bg-white px-4 py-3 transition-colors hover:border-stone-300 hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
                >
                  <span className="text-sm font-medium text-stone-600">Indiana</span>
                  <span className="text-base font-semibold text-stone-900">{content.connect.indianaPhone}</span>
                </a>

                <a
                  href={`tel:${content.connect.illinoisPhone.replace(/[^\d+]/g, "")}`}
                  className="flex items-center justify-between gap-4 rounded-xl border border-stone-200 bg-white px-4 py-3 transition-colors hover:border-stone-300 hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400"
                >
                  <span className="text-sm font-medium text-stone-600">Illinois</span>
                  <span className="text-base font-semibold text-stone-900">{content.connect.illinoisPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Cost & Insurance */}
        <motion.div
          className="space-y-10"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUpVariant}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl text-stone-900 mb-6">
              {content.connect.costHeading}
            </h2>
            <h3 className="text-2xl font-semibold text-stone-900 mb-4">
              {content.connect.insuranceHeading}
            </h3>
            <p className="text-xl text-stone-800 leading-relaxed">
              {content.connect.insuranceIntro}
            </p>
          </div>

          {/* Insurance Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">
                <ShieldCheck className="inline-block w-5 h-5 text-[#90b654] mr-2" />
                Illinois
              </h3>
              <ul className="space-y-2">
                {insurancePartners.illinois.map((partner) => (
                  <li
                    key={partner}
                    className="bg-stone-100 text-stone-800 px-4 py-2 rounded-lg"
                  >
                    {partner}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">
                <ShieldCheck className="inline-block w-5 h-5 text-[#90b654] mr-2" />
                Indiana
              </h3>
              <ul className="space-y-2">
                {insurancePartners.indiana.map((partner) => (
                  <li
                    key={partner}
                    className="bg-stone-100 text-stone-800 px-4 py-2 rounded-lg"
                  >
                    {partner}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Self-Pay Footer */}
          <div className="pt-8 border-t border-stone-300">
            <p className="text-stone-800">
              {content.connect.selfPay}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
