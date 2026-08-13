"use client";
import SectionHeading from "@/components/SectionHeading";
import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FaqSection = () => {
	const FAQ = [
		{
			key: 1,
			title: "How long does it take to complete a project?",
			answer:
				"Project timelines depend on the scope and complexity. A custom high-converting landing page typically takes 1 to 2 weeks, while full-stack web applications and SaaS MVPs range between 3 to 6 weeks. We work in rapid, transparent sprint cycles with weekly milestones.",
		},
		{
			key: 2,
			title: "Do you offer ongoing support and maintenance?",
			answer:
				"Yes, we provide flexible monthly maintenance and retainer plans. Our services include 24/7 uptime monitoring, security patching, dependency upgrades, performance tuning, and continuous feature updates.",
		},
		{
			key: 3,
			title: "What happens if we need revisions or design iterations?",
			answer:
				"Your satisfaction is our highest priority. We include structured review checkpoints throughout the design and development phases, allowing you to give actionable feedback until the finished product matches your vision perfectly.",
		},
		{
			key: 4,
			title: "How does your development process work?",
			answer:
				"We follow a proven 5-stage sprint methodology: (1) Discovery & Strategy, (2) Wireframing & UX Architecture, (3) High-Fidelity UI Design & Prototyping, (4) Production Next.js/React Engineering, and (5) Rigorous QA, SEO Tuning, & Secure Deployment.",
		},
		{
			key: 5,
			title: "Can you build apps using No-Code platforms as well?",
			answer:
				"Yes! While our primary expertise is custom full-stack code (Next.js, React, Node.js), we also build high-speed solutions using modern no-code/low-code tools such as Framer, Webflow, and Supabase when speed-to-market is the top priority.",
		},
		{
			key: 6,
			title: "What is your primary technology stack?",
			answer:
				"We build with industry-leading modern technologies: Next.js 15, React 19, TypeScript, and Tailwind CSS for the frontend; Node.js, Python, PostgreSQL, MongoDB, and Redis for backends; and Framer Motion for smooth micro-animations.",
		},
	];

	return (
		<section
			id="faq"
			className="relative w-full overflow-hidden bg-[#020817] py-20 lg:py-28"
		>
			{/* Ambient glow */}
			<div className="pointer-events-none absolute top-1/2 right-1/2 -z-10 h-[500px] w-[600px] translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/5 blur-[120px]" />

			<div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-12 px-4 sm:px-6 lg:px-8">
				<SectionHeading
					subHeading="Frequently Asked Questions"
					heading="Everything You Need to Know"
					para="Have questions about our process, timeline, or technologies? We've answered the most common ones below."
				/>

				<div className="w-full">
					<Accordion type="single" collapsible className="space-y-4">
						{FAQ.map((faq, index) => (
							<AccordionItem
								key={faq.key}
								value={`item-${index}`}
								className="rounded-2xl border border-white/10 bg-slate-900/50 px-6 py-1 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 data-[state=open]:border-blue-500/50 data-[state=open]:bg-slate-900/80"
							>
								<AccordionTrigger className="py-5 text-left text-base font-semibold text-white hover:text-blue-400 hover:no-underline sm:text-lg">
									<div className="flex items-center gap-3">
										<HelpCircle className="h-5 w-5 shrink-0 text-blue-400 opacity-75" />
										<span>{faq.title}</span>
									</div>
								</AccordionTrigger>
								<AccordionContent className="pt-1 pb-5 pl-8 text-sm leading-relaxed text-slate-300 sm:text-base">
									{faq.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
};

export default FaqSection;
