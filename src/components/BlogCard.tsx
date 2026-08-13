"use client";
import React from "react";
import { CalendarDays, Clock, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
	image: string;
	title?: string;
	description?: string;
	slug?: string;
	date: string;
	category?: string;
	avgReadingTime?: number;
	authorName?: string;
}

const BlogCard = ({
	image = "",
	title,
	description,
	slug,
	date,
	category = "Engineering",
	avgReadingTime = 4,
	// authorName = "Webflexrr Team",
}: BlogCardProps) => {
	return (
		<div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-blue-500/10">
			{/* Top Image */}
			<div>
				<Link
					href={`/blogs/${slug}`}
					className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-950"
				>
					<Image
						src={image || "/assets/background-home-2.jpg"}
						alt={title ?? "Blog post thumbnail"}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-cover transition-transform duration-500 group-hover:scale-105"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

					{/* Category Badge */}
					<span className="absolute top-3.5 left-3.5 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-blue-300 backdrop-blur-md">
						{category}
					</span>
				</Link>

				{/* Body Content */}
				<div className="space-y-3 p-6">
					<div className="flex items-center gap-3 text-xs text-slate-400">
						<span className="flex items-center gap-1.5">
							<CalendarDays className="h-3.5 w-3.5 text-blue-400" />
							{new Date(date).toLocaleDateString("en-US", {
								month: "short",
								day: "numeric",
								year: "numeric",
							})}
						</span>
						<span>•</span>
						<span className="flex items-center gap-1.5">
							<Clock className="h-3.5 w-3.5 text-blue-400" />
							{avgReadingTime} min read
						</span>
					</div>

					<Link href={`/blogs/${slug}`} className="block">
						<h3 className="line-clamp-2 text-lg font-bold text-white transition-colors group-hover:text-blue-300">
							{title}
						</h3>
					</Link>

					<p className="line-clamp-2 text-sm leading-relaxed text-slate-300">
						{description}
					</p>
				</div>
			</div>

			{/* Footer Link */}
			<div className="mt-2 border-t border-white/5 p-6 pt-0">
				<Link
					href={`/blogs/${slug}`}
					className="inline-flex items-center text-xs font-semibold text-blue-400 transition-colors group-hover:text-blue-300"
				>
					<span>Read Full Article</span>
					<ArrowUpRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
				</Link>
			</div>
		</div>
	);
};

export default BlogCard;
