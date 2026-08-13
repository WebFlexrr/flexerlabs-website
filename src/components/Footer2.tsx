"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Footer2 = () => {
	const socialLinks = [
		{
			title: "Twitter / X",
			icon: <FaXTwitter className="text-base" />,
			link: "https://x.com/webflexrrlabs",
		},
		{
			title: "LinkedIn",
			icon: <FaLinkedin className="text-base" />,
			link: "https://www.linkedin.com/company/webflexrrlabs",
		},
		{
			title: "Instagram",
			icon: <LuInstagram className="text-base" />,
			link: "https://www.instagram.com/webflexrr_labs",
		},
		{
			title: "GitHub",
			icon: <FaGithub className="text-base" />,
			link: "https://github.com",
		},
	];

	const quickLinks = [
		{ title: "Home", link: "/" },
		{ title: "Services", link: "/services" },
		{ title: "Projects & Portfolio", link: "/work" },
		{ title: "Insights & Blog", link: "/blogs" },
		{ title: "Careers", link: "/careers" },
		{ title: "Contact Us", link: "/contact" },
	];

	const servicesLinks = [
		{ title: "Landing Page Development", link: "/services/landing-page" },
		{ title: "AI Automation & Chatbots", link: "/services/ai-automation" },
		{ title: "App Development", link: "/services/app-development" },
		{ title: "UI/UX Design", link: "/services/uiux-design" },
		{ title: "Full-Stack Web Apps", link: "/services/web-development" },
		{ title: "SEO & Growth Optimization", link: "/services/seo-optimization" },
	];

	const contactInfo = [
		{
			title: "+91 9038007312",
			icon: <FiPhone className="shrink-0 text-base text-blue-400" />,
			link: "https://wa.me/919038007312",
		},
		{
			title: "+91 7044785308",
			icon: <FiPhone className="shrink-0 text-base text-blue-400" />,
			link: "https://wa.me/917044785308",
		},
		{
			title: "info@webflexrr.com",
			icon: <IoMailOutline className="shrink-0 text-base text-blue-400" />,
			link: "mailto:info@webflexrr.com",
		},
		{
			title: "Worldwide Remote & Hybrid",
			icon: <FiMapPin className="shrink-0 text-base text-blue-400" />,
			link: "#",
		},
	];

	return (
		<footer className="relative w-full overflow-hidden border-t border-white/10 bg-[#01040f] text-white">
			{/* Ambient background glow */}
			<div className="pointer-events-none absolute right-1/4 bottom-0 -z-10 h-72 w-96 rounded-full bg-blue-600/5 blur-[120px]" />

			<div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
				<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
					{/* Brand Column (4 cols) */}
					<div className="space-y-5 sm:col-span-2 lg:col-span-4">
						<Link href="/" className="inline-flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 shadow-inner">
								<Image
									src="/logos/white-logo.png"
									width={22}
									height={22}
									alt="Webflexrr Labs"
									className="object-contain"
								/>
							</div>
							<span className="font-space-grotesk text-xl font-bold tracking-tight text-white">
								Webflexrr Labs.
							</span>
						</Link>

						<p className="max-w-sm text-sm leading-relaxed text-slate-400">
							We build high-converting Landing Pages, Next.js Web Applications,
							and AI Automation Systems that help modern brands scale rapidly.
						</p>

						{/* Social Icons */}
						<div className="flex items-center gap-2 pt-2">
							{socialLinks.map((item) => (
								<Link
									key={item.title}
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={item.title}
									className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-blue-500/10"
								>
									{item.icon}
								</Link>
							))}
						</div>
					</div>

					{/* Quick Links (2 cols) */}
					<div className="space-y-4 lg:col-span-2">
						<h4 className="text-xs font-bold tracking-wider text-slate-300 uppercase">
							Quick Links
						</h4>
						<ul className="space-y-2.5">
							{quickLinks.map((item) => (
								<li key={item.title}>
									<Link
										href={item.link}
										className="inline-block text-sm text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-blue-400"
									>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services (3 cols) */}
					<div className="space-y-4 lg:col-span-3">
						<h4 className="text-xs font-bold tracking-wider text-slate-300 uppercase">
							Services
						</h4>
						<ul className="space-y-2.5">
							{servicesLinks.map((item) => (
								<li key={item.title}>
									<Link
										href={item.link}
										className="inline-block text-sm text-slate-400 transition-all duration-200 hover:translate-x-1 hover:text-blue-400"
									>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info & CTA (3 cols) */}
					<div className="space-y-4 lg:col-span-3">
						<h4 className="text-xs font-bold tracking-wider text-slate-300 uppercase">
							Contact Info
						</h4>
						<ul className="space-y-3">
							{contactInfo.map((item) => (
								<li key={item.title}>
									<Link
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
									>
										{item.icon}
										<span className="truncate">{item.title}</span>
									</Link>
								</li>
							))}
						</ul>

						<div className="pt-2">
							<Link href="/contact" className="block">
								<Button className="w-full rounded-full bg-blue-600 font-medium text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500">
									<span>Start a Project</span>
									<ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</Link>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
					<p>
						© {new Date().getFullYear()} Webflexrr Labs. All rights reserved.
					</p>
					<div className="flex items-center gap-6">
						<Link
							href="/terms"
							className="transition-colors hover:text-slate-300"
						>
							Terms & Conditions
						</Link>
						<Link
							href="/privacy"
							className="transition-colors hover:text-slate-300"
						>
							Privacy Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer2;
