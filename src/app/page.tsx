import { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { AboutTuckerSection } from "@/components/sections/home/AboutTuckerSection";
import { ApproachSection } from "@/components/sections/home/ApproachSection";
import { ConnectSection } from "@/components/sections/home/ConnectSection";
import { BlazingStarStorySection } from "@/components/sections/home/BlazingStarStorySection";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Tucker Eads, LCSW",
  description:
    "Tucker Eads, LCSW - Evidence-based psychotherapy for anxiety, stress, and life transitions across Illinois and Indiana. Specializing in ACT and DBT approaches.",
  path: "",
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      {/* Hero Section */}
      <HeroSection />

      {/* About Tucker Section - Refactored Grid */}
      <AboutTuckerSection />

      {/* Therapeutic Approach - Animated Feature Hub */}
      <ApproachSection />

      {/* Connect & Consult Action Center */}
      <ConnectSection />

      {/* Botanical Discovery Storytelling */}
      <BlazingStarStorySection />
    </main>
  );
}
