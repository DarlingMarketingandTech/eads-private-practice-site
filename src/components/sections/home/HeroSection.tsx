"use client";

import Image from "next/image";
import content from "@/content/homepage.json";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-[60vh] min-h-[420px] md:h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 animate-fade-in">
        <Image
          src={content.hero.backgroundImage}
          alt="Field of blazing star flowers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B261D]/60 via-[#1B261D]/50 to-[#1B261D]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg tracking-tight"
        >
          {content.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl mb-12 text-white/95 drop-shadow-md font-light"
        >
          {content.hero.subtitle}
        </motion.p>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="#about"
            aria-label="Scroll to the about section"
            className="group mt-8 animate-bounce inline-flex flex-col items-center text-white/80 hover:text-white transition-colors"
          >
            <span className="text-sm mb-2 font-medium tracking-wide">
              Scroll down
            </span>
            <ArrowDown className="h-6 w-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
