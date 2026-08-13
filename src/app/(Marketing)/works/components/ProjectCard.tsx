"use client";
import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
	thumbnail?: string;
	title?: string;
	description?: string;
	link?: string;
	index?: number;
	tags?: string[];
	slug?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
	thumbnail = "",
	title,
	description,
	tags,
	slug,
	index = 0,
}) => {
	const destination = slug ? `/works/${slug}` : "#";

	return (
		<motion.div
			layout
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{
				duration: 0.4,
				delay: Math.min(index * 0.08, 0.4),
				ease: "easeOut",
			}}
			className="h-full"
		>
			<Link
				href={destination}
				className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-blue-500/10 sm:p-5"
			>
				{/* Top Image Preview Container */}
				<div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-950">
					{thumbnail ? (
						<Image
							alt={title ?? "Project Thumbnail"}
							src={thumbnail}
							fill
							unoptimized
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							className="object-cover transition-transform duration-500 group-hover:scale-105"
						/>
					) : (
						<div className="flex h-full w-full items-center justify-center bg-slate-800 text-slate-500">
							No Preview
						</div>
					)}
					<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
				</div>

				{/* Card Body Content */}
				<div className="flex flex-1 flex-col justify-between pt-5">
					<div className="space-y-3">
						{/* Tags */}
						{tags && tags.length > 0 && (
							<div className="flex flex-wrap gap-2">
								{tags.map((tag) => (
									<span
										key={tag}
										className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-0.5 text-xs font-semibold text-blue-300 backdrop-blur-md"
									>
										{tag}
									</span>
								))}
							</div>
						)}

						{/* Title */}
						<h3 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-blue-300">
							{title}
						</h3>

						{/* Description */}
						{description && (
							<p className="line-clamp-2 text-sm leading-relaxed text-slate-300">
								{description}
							</p>
						)}
					</div>

					{/* Card Footer Button */}
					<div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
						<span className="text-xs font-semibold tracking-wider text-slate-400 uppercase transition-colors group-hover:text-blue-400">
							View Case Study
						</span>
						<div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 group-hover:rotate-45 group-hover:border-blue-500/50 group-hover:bg-blue-600 group-hover:text-white">
							<ArrowUpRight className="h-4 w-4" />
						</div>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectCard;
