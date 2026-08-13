"use client";
import React from "react";
import Image from "next/image";
import { CallToActionButton } from "@/components/CallToActionButton";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Award, Sparkles } from "lucide-react";

const AboutSection = () => {
	const keyHighlights = [
		"Conversion-optimized UI/UX design architecture",
		"Production-ready Next.js & React engineering",
		"Sub-second loading speeds and SEO dominance",
		"Transparent, agile sprint communication",
	];

	return (
		<section className="relative w-full overflow-hidden bg-[#020817] py-20 lg:py-28">
			{/* Ambient background glow */}
			<div className="pointer-events-none absolute top-1/2 left-0 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
			<div className="pointer-events-none absolute top-1/2 right-0 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />

			<div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
				{/* Image Column with Glass Framing */}
				<motion.div
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="relative w-full lg:w-1/2"
				>
					<div className="relative mx-auto overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-2 shadow-2xl backdrop-blur-xl sm:p-3">
						<div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
							<Image
								src="/assets/about.png"
								alt="Webflexrr Labs Team"
								fill
								sizes="(max-width: 1024px) 100vw, 50vw"
								className="object-cover transition-transform duration-700 hover:scale-105"
							/>
						</div>

						{/* Floating highlight card 1 */}
						<div className="absolute -right-2 -bottom-2 flex items-center gap-3 rounded-2xl border border-white/15 bg-slate-900/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:right-6 sm:bottom-6">
							<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
								<Zap className="h-5 w-5" />
							</div>
							<div>
								<div className="text-xs font-semibold text-slate-300">
									Fast Turnaround
								</div>
								<div className="text-sm font-bold text-white">
									MVP in 2–4 Weeks
								</div>
							</div>
						</div>

						{/* Floating highlight card 2 */}
						<div className="absolute -top-2 -left-2 hidden items-center gap-3 rounded-2xl border border-white/15 bg-slate-900/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:top-6 sm:left-6 sm:flex">
							<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
								<Award className="h-5 w-5" />
							</div>
							<div>
								<div className="text-xs font-semibold text-slate-300">
									Satisfaction
								</div>
								<div className="text-sm font-bold text-white">
									100% Client Focus
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Content Column */}
				<motion.div
					initial={{ opacity: 0, x: 40 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="flex w-full flex-col items-start space-y-6 lg:w-1/2"
				>
					<span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-400 uppercase">
						<Sparkles className="h-3.5 w-3.5" />
						About Webflexrr Labs
					</span>

					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
						Our Best Offering for{" "}
						<span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
							Modern Startups
						</span>
					</h2>

					<p className="text-base leading-relaxed text-slate-300 sm:text-lg">
						Webflexrr Labs is a specialized digital agency crafting
						high-performance Landing Pages, Web Apps, and AI Solutions. We
						partner with ambitious founders to engineer scalable,
						high-converting digital experiences that turn visitors into loyal
						customers.
					</p>

					{/* Highlights checklist */}
					<div className="grid w-full grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
						{keyHighlights.map((item, i) => (
							<div
								key={i}
								className="flex items-center gap-2.5 text-sm text-slate-200"
							>
								<CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
								<span>{item}</span>
							</div>
						))}
					</div>

					<div className="pt-4">
						<CallToActionButton />
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutSection;
