import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata: Metadata = {
	title: {
		default: "WebFlexrr Labs ",
		template: "%s | WebFlexrr Labs",
	},
	description:
		"WebFlexrr Labs: Elevate your online presence with WebFlexrr's Web Development . Specializing in E-commerce Solutions, Responsive Design, SEO, and more for impactful, custom web solutions. Learn more....",
	metadataBase: new URL("https://www.webflexrr.com"),
	alternates: {
		canonical: "/",
		languages: {
			"en-US": "/en-US",
			"de-DE": "/de-DE",
		},
	},
	verification: {
		google: process.env.GOOGLE_CONSOLE_VID,
	},
	referrer: "origin-when-cross-origin",
	keywords: [
		"WebFlexrr Web Development",
		"WebFlexrr Labs",
		"WebFlexrr SEO Solutions",
		"E-commerce Solutions by WebFlexrr",
		"WebFlexrr SEO Experts",
		"Responsive WebFlexrr Design",
		"Web Development",
		"SAAS Development",
		"Website Design",
		"SEO Services",
		"Online Presence",
		"E-commerce Solutions",
		"Responsive Design",
		"Branding Services",
		"Mobile App Development",
		"Search Engine Optimization",
		"Web Analytics",
		"User Experience (UX) Design",
		"Conversion Optimization",
		"Custom Web Solutions",
	],
	authors: { name: "WebFlexrr Labs" },
	creator: "Tech Team of WebFlexrr",
	publisher: "WebFlexrr Labs",
	openGraph: {
		title: "WebFlexrr Labs",
		description:
			"WebFlexrr Digital Services | Empowering Your Online Presence with Expert Web Development and Strategic Digital Marketing Solutions",
		url: "https://www.webflexrr.com",
		siteName: "WebFlexrr Labs",
		images: [
			{
				url: "/logos/logo2.png",
				width: 1200,
				height: 630,
				alt: "WebFlexrr",
			},
		],
		type: "website",
	},
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<head>
				{/* Meta Pixel Code */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?                         
              n.callMethod.apply(n,arguments):n.queue.push   
              (arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!
              0;n.version='2.0';n.queue=[];t=b.createElement(e);
              t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,
              'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
					}}
				/>
				<noscript>
					<img
						height="1"
						width="1"
						style={{ display: "none" }}
						src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=
            PageView&noscript=1"
					/>
				</noscript>
				{/* End Meta Pixel Code */}
			</head>
			<body className="dark min-h-screen bg-[#020817] text-white antialiased selection:bg-blue-600 selection:text-white">
				<ClientWrapper>{children}</ClientWrapper>
			</body>
		</html>
	);
}
