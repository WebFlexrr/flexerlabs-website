import ProjectCard from "@/app/(Marketing)/works/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { getProjects } from "@/sanity/actions/queryActions";
import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProjectsSection = async (): Promise<React.JSX.Element> => {
	const projects = await getProjects();
	return (
		<section
			id="projects"
			className="relative w-full overflow-hidden bg-[#020817] py-20 lg:py-28"
		>
			{/* Ambient background glow */}
			<div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[140px]" />

			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					subHeading="Featured Portfolio"
					heading="Crafted with Precision & Passion"
					para="Explore some of our latest client work across custom SaaS, high-converting landing pages, and interactive web applications."
				/>

				<div className="mt-14 grid w-full grid-cols-1 gap-8 md:grid-cols-2">
					{projects.map((item, index) => (
						<ProjectCard
							key={item.title}
							thumbnail={imageUrlFor(item.thumbnail as SanityImageSource).url()}
							title={item.title}
							description={item.description}
							tags={item.tags}
							slug={item.slug?.current}
							link={item.link}
							index={index}
						/>
					))}
				</div>

				<div className="mt-14 flex w-full items-center justify-center">
					<Link href="/work">
						<Button className="group rounded-full border border-white/15 bg-white/5 px-8 py-6 text-base font-medium text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10">
							<span>View All Case Studies</span>
							<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
