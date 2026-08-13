import React from "react";
import BlurredBg from "@/components/BlurredBg";
import { getProjects } from "@/sanity/actions/queryActions";
import CallToActionBanner from "@/components/CallToActionBanner";
import { ProjectsGrid } from "./components/ProjectsGrid";
import Footer2 from "@/components/Footer2";
import NavBar from "@/components/Navbar";
import { getWorkPageMetadata } from "@/sanity/actions/metadataQueryActions";
import { Metadata } from "next";
import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import HeroSection from "../../../components/HeroSection";

export async function generateMetadata(): Promise<Metadata> {
	const workPage = await getWorkPageMetadata();

	return {
		title: workPage.seo?.metaTitle || "Our Portfolio | Webflexrr Labs",
		description:
			workPage.seo?.metaDescription ||
			"Explore our case studies in Web Development, SaaS Platforms, Mobile Apps, and AI Automations.",
		keywords: workPage.seo?.seoKeywords,
		openGraph: {
			title: workPage.seo?.openGraph?.title || "Webflexrr Labs Portfolio",
			description: workPage.seo?.openGraph?.description,
			url: workPage.seo?.openGraph?.url,
			siteName: workPage.seo?.openGraph?.siteName,
			images: workPage.seo?.openGraph?.image
				? [
						{
							url: imageUrlFor(
								workPage.seo.openGraph.image as SanityImageSource
							).url(),
							width: 1200,
							height: 630,
							alt: workPage.seo?.metaTitle || "Webflexrr Portfolio",
						},
					]
				: [],
		},
	};
}

export default async function Works() {
	const projects = await getProjects();

	const projectsWithThumbnails = projects.map((project) => ({
		...project,
		thumbnailUrl: project.thumbnail
			? imageUrlFor(project.thumbnail as SanityImageSource).url()
			: "",
	}));

	return (
		<main className="relative min-h-screen w-full overflow-x-hidden bg-[#020817] p-0 text-white">
			<BlurredBg />
			<NavBar />
			{/* Hero Section */}
			<HeroSection
				pillText="Case Studies & Portfolio"
				title="Our Diverse Portfolio of Digital Excellence"
				tagline="Explore our proven track record of custom SaaS platforms, high-converting landing pages, mobile apps, and enterprise AI integrations."
			/>
			{/* Interactive Category Filter & Projects Grid */}
			<ProjectsGrid projects={projectsWithThumbnails} />

			<CallToActionBanner />
			<Footer2 />
		</main>
	);
}
