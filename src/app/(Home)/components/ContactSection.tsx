"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SectionHeading from "@/components/SectionHeading";
import toast, { Toaster } from "react-hot-toast";
import { Mail, Phone, Send } from "lucide-react";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { submitFormActions } from "@/lib/server/enquiryForm";

const formSchema = z.object({
	fullName: z
		.string()
		.min(2, "Please provide your full name (at least 2 characters)")
		.max(100),
	email: z.string().email("Please enter a valid email address"),
	message: z
		.string()
		.min(5, "Please tell us a bit about your project (at least 5 characters)")
		.max(2000),
});

const ContactSection = (): React.JSX.Element => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			fullName: "",
			email: "",
			message: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsSubmitting(true);
		try {
			await submitFormActions(values);
			toast.success("Thank you! Your message has been sent successfully.");
			form.reset();
		} catch (error) {
			toast.error("Error! Message was not sent, please retry.");
			console.error(error);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<section
			id="contact"
			className="relative w-full overflow-hidden bg-[#020817] py-20 lg:py-28"
		>
			<Toaster position="bottom-center" reverseOrder={true} />

			{/* Ambient background glows */}
			<div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]" />

			<div className="mx-auto w-full max-w-5xl space-y-12 px-4 sm:px-6 lg:px-8">
				<SectionHeading
					subHeading="Get In Touch"
					heading="Let's Build Something Exceptional"
					para="Have a project in mind or want to explore how Webflexrr Labs can accelerate your business? Reach out and we'll reply within 24 hours."
				/>

				<div className="mx-auto w-full max-w-2xl">
					<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl backdrop-blur-2xl sm:p-8">
						{/* Ambient card gradient */}
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-purple-500/5 opacity-50" />

						<div className="relative z-10 space-y-8">
							{/* Direct Contact Pills */}
							<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
								<Link
									href="mailto:info@webflexrr.com"
									className="group flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-white/[0.07]"
								>
									<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 transition-transform duration-300 group-hover:scale-105">
										<Mail className="h-5 w-5" />
									</div>
									<div className="overflow-hidden">
										<div className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
											Email Us
										</div>
										<div className="truncate text-sm font-medium text-white group-hover:text-blue-300">
											info@webflexrr.com
										</div>
									</div>
								</Link>

								<Link
									href="tel:+919674128921"
									className="group flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/40 hover:bg-white/[0.07]"
								>
									<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 transition-transform duration-300 group-hover:scale-105">
										<Phone className="h-5 w-5" />
									</div>
									<div className="overflow-hidden">
										<div className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
											Call Directly
										</div>
										<div className="truncate text-sm font-medium text-white group-hover:text-emerald-300">
											+91 9674128921
										</div>
									</div>
								</Link>
							</div>

							<div className="h-px w-full bg-white/10" />

							{/* Contact Form */}
							<Form {...form}>
								<form
									onSubmit={form.handleSubmit(onSubmit)}
									className="space-y-5"
								>
									<FormField
										control={form.control}
										name="fullName"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
													Full Name
												</FormLabel>
												<FormControl>
													<Input
														placeholder="e.g. Sarah Connor"
														className="h-12 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
														{...field}
													/>
												</FormControl>
												<FormMessage className="text-xs text-rose-400" />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
													Email Address
												</FormLabel>
												<FormControl>
													<Input
														type="email"
														placeholder="sarah@company.com"
														className="h-12 rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
														{...field}
													/>
												</FormControl>
												<FormMessage className="text-xs text-rose-400" />
											</FormItem>
										)}
									/>

									<FormField
										control={form.control}
										name="message"
										render={({ field }) => (
											<FormItem>
												<FormLabel className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
													Project Details / Message
												</FormLabel>
												<FormControl>
													<Textarea
														placeholder="Tell us about your project goals, timeline, and requirements..."
														rows={4}
														className="resize-none rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
														{...field}
													/>
												</FormControl>
												<FormMessage className="text-xs text-rose-400" />
											</FormItem>
										)}
									/>

									<Button
										type="submit"
										disabled={isSubmitting}
										className="h-12 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:from-blue-500 hover:to-indigo-500 hover:shadow-blue-500/40 disabled:opacity-50"
									>
										{isSubmitting ? (
											<span className="flex items-center gap-2">
												<span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
												Sending...
											</span>
										) : (
											<span className="flex items-center gap-2">
												<Send className="h-4 w-4" />
												Send Inquiry
											</span>
										)}
									</Button>
								</form>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
