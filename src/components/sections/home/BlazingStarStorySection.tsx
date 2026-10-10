"use client";

import Image from "next/image";
import content from "@/content/homepage.json";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";

export function BlazingStarStorySection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });
	const shouldReduceMotion = useReducedMotion();

	const fadeUpVariant = {
		hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<section
			id="blazing-star"
			ref={ref}
			className="relative py-20 md:py-32 px-6 bg-[#FAF9F6] text-stone-800 rounded-t-[5rem]"
		>
			<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
				{/* Left Column - Text */}
				<motion.div
					className="space-y-8"
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={fadeUpVariant}
					transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				>
					<h2 className="text-4xl md:text-5xl text-stone-900">
						{content.story.heading}
					</h2>
					<p className="text-xl text-stone-800 leading-relaxed">
						{content.story.description}
					</p>
				</motion.div>

				{/* Right Column - Image */}
				<motion.div
					className="relative h-125 overflow-hidden rounded-[3rem] shadow-2xl shadow-stone-200/60"
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
				>
					<Image
						src={content.story.image}
						alt={content.story.imageAlt}
						fill
						className="object-cover"
						priority
					/>
				</motion.div>
			</div>
		</section>
	);
}
