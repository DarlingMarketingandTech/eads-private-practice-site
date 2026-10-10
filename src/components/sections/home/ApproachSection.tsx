"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import content from "@/content/homepage.json";
import { useRef } from "react";

const approaches = content.approach.cards;

export function ApproachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="approach"
      ref={ref}
      className="relative py-20 md:py-32 bg-[#f4f9f4] rounded-t-[5rem]"
    >
      {/* Decorative botanical divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg
          width="120"
          height="40"
          viewBox="0 0 120 40"
          fill="none"
          className="text-stone-300"
        >
          <path
            d="M60 0 C60 20, 40 20, 20 30 M60 0 C60 20, 80 20, 100 30"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="60" cy="2" r="3" fill="currentColor" />
          <path
            d="M55 8 Q60 15 65 8"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl text-stone-900 mb-4">
            {content.approach.heading}
          </h2>
        </motion.div>

        {/* Animated Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        >
          {approaches.map((item) => {
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 hover:shadow-2xl hover:shadow-stone-200/60 transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="mb-6"></div>
                <h3 className="text-2xl font-bold mb-4 text-stone-800">
                  {item.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">{item.content}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Commitment Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-28 text-center max-w-3xl mx-auto"
        >
          <p className="italic text-xl md:text-2xl text-stone-700 leading-relaxed">
            {content.approach.commitment}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
