"use client";
import React, { type FC } from "react";
import { motion } from "framer-motion";

interface HeadingProps {
	heading: string | null;
	subHeading: string;
	para?: string;
	align?: "left" | "center" | "right";
}

const SectionHeading: FC<HeadingProps> = ({
	heading,
	subHeading,
	para,
	align = "center",
}) => {
	const alignmentClasses = {
		left: "items-start text-left",
		center: "items-center text-center",
		right: "items-end text-right",
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className={`mx-auto flex h-auto w-full max-w-4xl flex-col gap-3.5 ${alignmentClasses[align]}`}
		>
			{subHeading && (
				<span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-400 uppercase backdrop-blur-md">
					<span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
					{subHeading}
				</span>
			)}

			{heading && (
				<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
					{heading}
				</h2>
			)}

			{para && (
				<p className="mt-1 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
					{para}
				</p>
			)}
		</motion.div>
	);
};

export default SectionHeading;
