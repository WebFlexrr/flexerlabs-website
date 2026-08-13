import React from "react";
import BlogCard from "@/components/BlogCard";
import { imageUrlFor } from "@/sanity/config/SanityImageUrl";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import SectionHeading from "@/components/SectionHeading";
import { getBlogs } from "@/sanity/actions/queryActions";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BlogSection = async () => {
	const blogs = await getBlogs();
	return (
		<section
			id="insights"
			className="relative w-full overflow-hidden bg-[#020817] py-20 lg:py-28"
		>
			{/* Ambient background glow */}
			<div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/5 blur-[140px]" />

			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<SectionHeading
					subHeading="Insights & Articles"
					heading="Latest From Our Engineering Blog"
					para="Thoughts, tutorials, and deep-dives on Next.js, product design, AI automation, and scaling modern web apps."
				/>

				<div className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{blogs.slice(0, 3).map((blog) => (
						<div key={blog._id} className="h-full">
							<BlogCard
								image={
									blog.thumbnail
										? imageUrlFor(blog.thumbnail as SanityImageSource).url()
										: "/assets/background-home-2.jpg"
								}
								title={blog.title}
								description={blog.description}
								slug={blog.slug?.current}
								date={blog._createdAt}
							/>
						</div>
					))}
				</div>

				<div className="mt-14 flex w-full items-center justify-center">
					<Link href="/blogs">
						<Button className="group rounded-full border border-white/15 bg-white/5 px-8 py-6 text-base font-medium text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10">
							<span>Read All Insights</span>
							<ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default BlogSection;
