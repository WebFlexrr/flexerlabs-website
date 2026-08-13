"use client";
import React from "react";
import { CallToActionButton } from "@/components/CallToActionButton";
import Image from "next/image";
import "swiper/css";
import Link from "next/link";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

// Portfolio images data
const portfolioImages = [
	{
		id: 1,
		src: "/web/website1.jpg",
		alt: "Digital Treasures Website",
	},
	{
		id: 2,
		src: "/web/website2.jpg",
		alt: "Automated Agency Platform",
	},
	{
		id: 3,
		src: "/web/website3.png",
		alt: "Financial Dashboard App",
	},
	{
		id: 4,
		src: "/web/website4.jpg",
		alt: "Architectural Portfolio",
	},
];

const people = [
	{
		id: 1,
		name: "Alex Reed",
		designation: "Founder, Fintech SaaS",
		image:
			"https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 2,
		name: "David Chen",
		designation: "CTO, CloudOps",
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 3,
		name: "Sarah Jenkins",
		designation: "Product Lead, Elevate",
		image:
			"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
	},
	{
		id: 4,
		name: "Michael Ross",
		designation: "CEO, GrowthWave",
		image:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
	},
];

const HeroSection = () => {
	return (
		<section className="dark relative flex h-auto w-full flex-col items-center justify-center overflow-hidden bg-[#020817] pt-24 pb-16 text-white sm:pt-28 md:pt-32">
			{/* Ambient background glow */}
			<div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/15 via-indigo-500/15 to-purple-600/10 blur-[120px]" />

			<div className="mx-auto flex h-fit w-full max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
				{/* Availability status badge */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300 shadow-lg shadow-emerald-500/5 backdrop-blur-md sm:text-sm"
				>
					<span className="relative flex h-2.5 w-2.5">
						<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
						<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
					</span>
					<span>Accepting New Client Projects for 2025/2026</span>
				</motion.div>

				{/* Main Headline */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mb-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
				>
					We Ship{" "}
					<span className="bg-gradient-to-r from-pink-500 via-rose-400 to-amber-300 bg-clip-text text-transparent">
						Products
					</span>{" "}
					That <br className="hidden sm:inline" />
					<span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
						Stand Out
					</span>{" "}
					Everywhere
				</motion.h1>

				{/* Subtitle */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mb-10 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl"
				>
					Empowering startups & SaaS founders to design, build, and launch
					exceptional, high-converting digital products faster.
				</motion.p>

				{/* Action Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mb-14 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
				>
					<CallToActionButton />
					<Link href="/work" className="w-full sm:w-auto">
						<Button
							variant="outline"
							className="group w-full rounded-full border-white/15 bg-white/5 px-7 py-6 text-base font-medium text-white shadow-md backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10 sm:w-auto"
						>
							<span>Explore Our Work</span>
							<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
						</Button>
					</Link>
				</motion.div>

				{/* Social Proof Stack */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-3.5 shadow-xl backdrop-blur-xl sm:flex-row"
				>
					<div className="flex items-center">
						<AnimatedTooltip items={people} />
					</div>
					<div className="hidden h-6 w-px bg-white/10 sm:block" />
					<div className="flex flex-col items-center text-left sm:items-start">
						<div className="flex items-center gap-1 text-amber-400">
							{[...Array(5)].map((_, i) => (
								<Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
							))}
							<span className="ml-1 text-xs font-bold text-white">5.0</span>
						</div>
						<span className="text-xs font-medium text-slate-300">
							15+ high-growth startups launched
						</span>
					</div>
				</motion.div>
			</div>

			{/* Portfolio Showcase Marquee */}
			<div className="relative mt-16 w-full overflow-hidden">
				{/* Gradient mask on both edges for seamless fade */}
				<div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-[#020817] to-transparent sm:w-48" />
				<div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-[#020817] to-transparent sm:w-48" />

				<div className="flex w-full overflow-hidden">
					<div className="animate-hero-marquee flex shrink-0 items-center gap-6 py-4">
						{[...portfolioImages, ...portfolioImages, ...portfolioImages].map(
							(image, idx) => (
								<div
									key={`${image.id}-${idx}`}
									className="group relative aspect-[16/10] w-[300px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-2 transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 sm:w-[380px] md:w-[440px]"
								>
									<div className="relative h-full w-full overflow-hidden rounded-xl">
										<img
											src={image.src}
											alt={image.alt}
											className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
											loading="eager"
										/>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</div>

			{/* Tech Stack Trust Bar */}
			<div className="mt-8 flex flex-wrap items-center justify-center gap-3 px-4 text-xs text-slate-400 sm:text-sm">
				<span className="font-medium text-slate-300">
					Engineered with industry-standard stacks:
				</span>
				<div className="flex items-center gap-2">
					<span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">
						<Image
							src="/com-logos/figma.png"
							width={14}
							height={14}
							alt="Figma"
							className="h-3.5 w-3.5"
						/>
						Figma
					</span>
					<span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">
						<Image
							src="/tech-logos/react.png"
							width={14}
							height={14}
							alt="React"
							className="h-3.5 w-3.5"
						/>
						React & Next.js
					</span>
					<span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200">
						<Image
							src="/tech-logos/framer.png"
							width={14}
							height={14}
							alt="Framer"
							className="h-3.5 w-3.5"
						/>
						Framer Motion
					</span>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
