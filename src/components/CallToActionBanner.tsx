"use client";
import React from "react";
import { CallToActionButton } from "@/components/CallToActionButton";
import {
	Avatar,
	AvatarFallback,
	AvatarGroup,
	AvatarImage,
} from "@/components/ui/avatar";
import { CheckCircle } from "lucide-react";

const CallToActionBanner = (): React.JSX.Element => {
	return (
		<section className="relative w-full overflow-hidden bg-[#020817] py-16 sm:py-24">
			{/* Ambient background glows */}
			<div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[140px]" />

			<div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
				<div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-b from-blue-950/40 via-slate-900/70 to-slate-950/90 p-8 text-center shadow-2xl backdrop-blur-2xl sm:p-14">
					{/* Subtle decorative grid pattern */}
					<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />

					<div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6">
						{/* Trust avatars */}
						<div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
							<AvatarGroup className="flex items-center" max={4}>
								<Avatar className="h-8 w-8 border border-white/20">
									<AvatarImage src="/assets/avatar1.png" />
									<AvatarFallback>JD</AvatarFallback>
								</Avatar>
								<Avatar className="h-8 w-8 border border-white/20">
									<AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" />
									<AvatarFallback>SJ</AvatarFallback>
								</Avatar>
								<Avatar className="h-8 w-8 border border-white/20">
									<AvatarImage src="/assets/avatar2.png" />
									<AvatarFallback>MR</AvatarFallback>
								</Avatar>
							</AvatarGroup>
							<span className="text-xs font-semibold text-slate-200">
								Joined by 15+ high-growth brands
							</span>
						</div>

						{/* Headline */}
						<h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
							Ready to Scale Your{" "}
							<span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
								Digital Product?
							</span>
						</h2>

						{/* Description */}
						<p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
							Let's build a stunning, high-converting digital experience that
							sets you apart from competitors. Book your free technical
							consultation today.
						</p>

						{/* CTA Action */}
						<div className="pt-2">
							<CallToActionButton />
						</div>

						{/* Guarantee checks */}
						<div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs font-medium text-slate-400 sm:gap-6">
							<div className="flex items-center gap-1.5">
								<CheckCircle className="h-4 w-4 text-emerald-400" />
								<span>No-obligation consultation</span>
							</div>
							<div className="flex items-center gap-1.5">
								<CheckCircle className="h-4 w-4 text-emerald-400" />
								<span>Transparent milestone pricing</span>
							</div>
							<div className="flex items-center gap-1.5">
								<CheckCircle className="h-4 w-4 text-emerald-400" />
								<span>Direct engineer communication</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CallToActionBanner;
