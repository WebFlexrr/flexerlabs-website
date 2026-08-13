"use client";
import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

import { services } from "@/db/services";
import Link from "next/link";

const Services = () => {
	return (
		<section
			id="services"
			className="relative w-full overflow-hidden bg-[#020817] py-20 lg:py-28"
		>
			{/* Ambient background glows */}
			<div className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/5 blur-[140px]" />

			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					subHeading="Our Services"
					heading="How We Help Brands Grow"
					para="Empowering startups and forward-thinking businesses with battle-tested digital engineering, high-converting design, and intelligent AI automation."
				/>

				<div className="mt-16 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: index * 0.1,
								ease: "easeOut",
							}}
							className="h-full w-full"
						>
							<ServicesCard
								title={service.title}
								description={service.tagline}
								features={service.features}
								gradient={service.gradient}
								icon={service.icon}
								slug={service.slug}
							/>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;

const ServicesCard = ({
	title,
	description,
	icon,
	gradient,
	features,
	slug,
}: {
	title: string;
	description: string;
	icon: React.JSX.Element;
	features: string[];
	gradient: string;
	slug: string;
}) => {
	return (
		<div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-blue-500/10 sm:p-7">
			{/* Ambient card gradient */}
			<div
				className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient} opacity-40 transition-opacity duration-500 group-hover:opacity-70`}
			/>

			<div className="relative z-10">
				{/* Top icon and link badge */}
				<div className="flex items-center justify-between">
					<div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-inner backdrop-blur-md transition-transform duration-300 group-hover:scale-105 group-hover:border-blue-500/30">
						{icon}
					</div>
					<Link
						href={`/services/${slug}`}
						className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 opacity-0 transition-all duration-300 group-hover:border-blue-500/40 group-hover:text-white group-hover:opacity-100 hover:border-blue-600 hover:bg-blue-600"
						aria-label={`Learn more about ${title}`}
					>
						<ArrowUpRight className="h-4 w-4" />
					</Link>
				</div>

				{/* Title and description */}
				<div className="mt-6 space-y-2">
					<h3 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-blue-200">
						{title}
					</h3>
					<p className="text-sm leading-relaxed text-slate-300">
						{description}
					</p>
				</div>

				<div className="my-5 h-px w-full bg-white/10" />

				{/* Features list */}
				<ul className="space-y-2.5">
					{features.slice(0, 5).map((item, idx) => (
						<li
							key={idx}
							className="flex items-start gap-2.5 text-xs text-slate-300 sm:text-sm"
						>
							<span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
								<Check className="h-2.5 w-2.5 stroke-[3]" />
							</span>
							<span>{item}</span>
						</li>
					))}
				</ul>
			</div>

			<div className="relative z-10 mt-6 pt-2">
				<Link
					href={`/services/${slug}`}
					className="inline-flex items-center text-xs font-semibold tracking-wide text-blue-400 transition-colors hover:text-blue-300"
				>
					<span>Explore Service Details</span>
					<ArrowUpRight className="ml-1 h-3.5 w-3.5" />
				</Link>
			</div>
		</div>
	);
};
