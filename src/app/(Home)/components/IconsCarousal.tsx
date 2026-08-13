"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Sparkles } from "lucide-react";

const techStackRow1 = [
	{ name: "Next.js", logo: "/com-logos/nextjs.png", invert: true },
	{ name: "React", logo: "/com-logos/React.png", invert: false },
	{ name: "Node.js", logo: "/com-logos/node-js.png", invert: false },
	{ name: "Tailwind CSS", logo: "/com-logos/Tailwind.png", invert: false },
	{ name: "AWS", logo: "/com-logos/aws.png", invert: false },
	{ name: "Figma", logo: "/com-logos/figma.png", invert: false },
	{ name: "Framer", logo: "/com-logos/Framer.png", invert: false },
	{ name: "MongoDB", logo: "/com-logos/MongoDB.png", invert: false },
	{ name: "Redis", logo: "/com-logos/Redis.png", invert: false },
	{ name: "Stripe", logo: "/com-logos/stripe.png", invert: false },
];

const techStackRow2 = [
	{ name: "Vercel", logo: "/com-logos/Vercel.png", invert: true },
	{ name: "Sanity CMS", logo: "/com-logos/sanity.png", invert: false },
	{ name: "GraphQL", logo: "/com-logos/GraphQL.png", invert: false },
	{ name: "Python", logo: "/com-logos/python.png", invert: false },
	{ name: "FastAPI", logo: "/com-logos/fastApi.png", invert: false },
	{ name: "GitHub", logo: "/com-logos/Github.png", invert: true },
	{ name: "Appwrite", logo: "/com-logos/Appwrite.png", invert: false },
	{ name: "Postman", logo: "/com-logos/Postman.png", invert: false },
	{ name: "Docker & AWS", logo: "/com-logos/aws.png", invert: false },
	{ name: "React Native", logo: "/com-logos/React.png", invert: false },
];

const IconsCarousal = () => {
	return (
		<section className="relative w-full overflow-hidden border-y border-white/5 bg-[#020817] py-16 sm:py-20">
			{/* Ambient glow */}
			<div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-64 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[100px]" />

			<div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
				<div className="mb-10 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-400 uppercase">
					<Sparkles className="h-3.5 w-3.5" />
					Cutting-Edge Modern Tech Stack
				</div>

				<div className="relative w-full">
					{/* Left and Right edge fade masks */}
					<div className="pointer-events-none absolute top-0 left-0 z-20 h-full w-20 bg-gradient-to-r from-[#020817] to-transparent sm:w-40" />
					<div className="pointer-events-none absolute top-0 right-0 z-20 h-full w-20 bg-gradient-to-l from-[#020817] to-transparent sm:w-40" />

					{/* Swiper Row 1 - Left to Right */}
					<Swiper
						spaceBetween={20}
						slidesPerView="auto"
						loop={true}
						speed={4000}
						autoplay={{
							delay: 0,
							disableOnInteraction: false,
							reverseDirection: false,
						}}
						modules={[Autoplay]}
						className="tech-swiper mb-6 flex w-full"
					>
						{techStackRow1.map((tech, index) => (
							<SwiperSlide key={index} style={{ width: "auto" }}>
								<div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-blue-500/10">
									<div className="relative flex h-7 w-7 items-center justify-center">
										<Image
											src={tech.logo}
											alt={tech.name}
											width={28}
											height={28}
											className={`max-h-7 max-w-7 object-contain transition-transform duration-300 group-hover:scale-110 ${
												tech.invert ? "brightness-0 invert" : ""
											}`}
										/>
									</div>
									<span className="text-sm font-semibold text-slate-200 transition-colors group-hover:text-white">
										{tech.name}
									</span>
								</div>
							</SwiperSlide>
						))}
					</Swiper>

					{/* Swiper Row 2 - Right to Left */}
					<Swiper
						spaceBetween={20}
						slidesPerView="auto"
						loop={true}
						speed={4000}
						autoplay={{
							delay: 0,
							disableOnInteraction: false,
							reverseDirection: true,
						}}
						modules={[Autoplay]}
						className="tech-swiper flex w-full"
					>
						{techStackRow2.map((tech, index) => (
							<SwiperSlide key={index} style={{ width: "auto" }}>
								<div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 backdrop-blur-md transition-all duration-300 hover:border-indigo-500/40 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-indigo-500/10">
									<div className="relative flex h-7 w-7 items-center justify-center">
										<Image
											src={tech.logo}
											alt={tech.name}
											width={28}
											height={28}
											className={`max-h-7 max-w-7 object-contain transition-transform duration-300 group-hover:scale-110 ${
												tech.invert ? "brightness-0 invert" : ""
											}`}
										/>
									</div>
									<span className="text-sm font-semibold text-slate-200 transition-colors group-hover:text-white">
										{tech.name}
									</span>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default IconsCarousal;
