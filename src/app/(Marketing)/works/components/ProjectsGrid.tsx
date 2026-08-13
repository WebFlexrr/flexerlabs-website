"use client";
import React, { useState, useMemo } from "react";
import { Project } from "@/types/sanity";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { Layers } from "lucide-react";

export interface ProjectWithThumbnail extends Project {
	thumbnailUrl?: string;
}

interface ProjectsGridProps {
	projects: ProjectWithThumbnail[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
	const [activeCategory, setActiveCategory] = useState("All");

	// Extract unique categories/tags
	const categories = useMemo(() => {
		const tagSet = new Set<string>();
		tagSet.add("All");
		projects.forEach((p) => {
			if (p.tags && Array.isArray(p.tags)) {
				p.tags.forEach((t) => tagSet.add(t));
			}
		});
		return Array.from(tagSet);
	}, [projects]);

	// Filter projects
	const filteredProjects = useMemo(() => {
		if (activeCategory === "All") return projects;
		return projects.filter((p) =>
			p.tags && Array.isArray(p.tags)
				? p.tags.some((t) => t.toLowerCase() === activeCategory.toLowerCase())
				: false
		);
	}, [projects, activeCategory]);

	return (
		<section className="relative w-full bg-[#020817] px-4 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				{/* Category Filter Pills */}
				<div className="mb-12 flex flex-wrap items-center justify-center gap-2.5">
					{categories.map((category) => {
						const isActive =
							activeCategory.toLowerCase() === category.toLowerCase();
						return (
							<button
								key={category}
								onClick={() => setActiveCategory(category)}
								className={`cursor-pointer rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm ${
									isActive
										? "scale-105 bg-blue-600 text-white shadow-lg ring-2 shadow-blue-600/30 ring-blue-400/50"
										: "border border-white/10 bg-slate-900/60 text-slate-300 hover:border-blue-500/40 hover:bg-slate-900/90 hover:text-white"
								}`}
							>
								{category}
							</button>
						);
					})}
				</div>

				{/* Projects Grid */}
				{filteredProjects.length > 0 ? (
					<motion.div
						layout
						className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:gap-10"
					>
						<AnimatePresence mode="popLayout">
							{filteredProjects.map((project, index) => (
								<ProjectCard
									key={project._id || project.title}
									thumbnail={project.thumbnailUrl}
									slug={project.slug?.current}
									tags={project.tags}
									title={project.title}
									description={project.description}
									link={project.link}
									index={index}
								/>
							))}
						</AnimatePresence>
					</motion.div>
				) : (
					<div className="flex flex-col items-center justify-center py-20 text-center">
						<div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-400">
							<Layers className="h-8 w-8" />
						</div>
						<h3 className="mt-4 text-xl font-bold text-white">
							No projects found
						</h3>
						<p className="mt-2 text-sm text-slate-400">
							Try selecting another category to view our client case studies.
						</p>
						<button
							onClick={() => setActiveCategory("All")}
							className="mt-6 rounded-full bg-blue-600 px-6 py-2.5 text-xs font-semibold text-white transition-all hover:bg-blue-500"
						>
							View All Projects
						</button>
					</div>
				)}
			</div>
		</section>
	);
}
