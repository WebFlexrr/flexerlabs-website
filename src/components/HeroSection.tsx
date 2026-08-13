"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
	pillText: string;
	title: string;
	tagline?: string;
}

const HeroSection: FC<HeroSectionProps> = ({ pillText, title, tagline }) => {
	return (
		<section className="relative flex min-h-[45vh] w-full flex-col items-center justify-center overflow-hidden bg-[#020817] pt-32 pb-14 text-white sm:pt-36 sm:pb-16">
			{/* Ambient background glows */}
			<div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/15 via-indigo-500/15 to-purple-600/10 blur-[130px]" />

			{/* Subtle grid overlay */}
			<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

			<div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
				{/* Top Pill Badge */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-400 uppercase shadow-lg shadow-blue-500/10 backdrop-blur-xl sm:text-sm"
				>
					<span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
					{pillText}
				</motion.div>

				{/* Title */}
				<motion.h1
					initial={{ opacity: 0, y: 25 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-6 max-w-4xl text-3xl leading-[1.15] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
				>
					{title}
				</motion.h1>

				{/* Tagline */}
				{tagline && (
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
					>
						{tagline}
					</motion.p>
				)}
			</div>
		</section>
	);
};

export default HeroSection;
