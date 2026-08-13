import {
	Bot,
	Code,
	Cpu,
	Layout,
	Layers,
	Palette,
	PanelsTopLeft,
	Search,
	Smartphone,
	Sparkles,
	Terminal,
} from "lucide-react";
import { IoLogoAndroid } from "react-icons/io";

export const services = [
	{
		title: "Landing Page Development",
		slug: "landing-page",
		tagline:
			"High-converting, lightning-fast landing pages engineered to turn visitors into paying customers.",
		icon: <PanelsTopLeft className="h-8 w-8 text-blue-400" />,
		description: [
			"We build modern, conversion-focused landing pages that blend captivating visual aesthetics with pixel-perfect responsiveness.",
			"Every page is carefully optimized for maximum speed, smooth micro-interactions, clear messaging, and measurable ROI.",
		],
		gradient: "from-blue-500/20 via-transparent to-purple-500/10",
		bannerImage: "/services/website.jpg",
		offers: [
			{
				title: "Conversion Architecture",
				description:
					"Crafting high-impact hero sections, persuasive value propositions, and seamless call-to-action funnels.",
				icon: <Layout className="h-5 w-5 text-blue-400" />,
			},
			{
				title: "Mobile-First & Responsive",
				description:
					"Impeccable responsiveness ensuring flawless presentation across mobile, tablet, and ultra-wide screens.",
				icon: <Smartphone className="h-5 w-5 text-blue-400" />,
			},
			{
				title: "Speed & Performance",
				description:
					"Sub-second load times, 95+ Google PageSpeed scores, and clean semantic code for peak SEO discoverability.",
				icon: <Sparkles className="h-5 w-5 text-blue-400" />,
			},
			{
				title: "A/B Testing & Analytics",
				description:
					"Built-in event tracking, heatmaps, and continuous conversion optimization to boost your ROI.",
				icon: <Code className="h-5 w-5 text-blue-400" />,
			},
		],
		features: [
			"Custom high-converting UI/UX layouts",
			"Next.js & Tailwind CSS modern stack",
			"Framer Motion interactive animations",
			"SEO optimization & OpenGraph integration",
			"Form capture & CRM webhook integration",
			"Core Web Vitals sub-second performance",
		],
		benefits: [
			"Significantly higher conversion rates",
			"Lower customer acquisition costs",
			"Instant credibility and brand trust",
			"Fast turnaround and painless launches",
			"Full mobile responsiveness",
		],
		process: [
			{
				title: "Discovery & Strategy",
				description: "Analyzing audience demographics and conversion targets",
				image: "/images/services/discovery.jpg",
			},
			{
				title: "Wireframing & Copy",
				description:
					"Structuring high-impact sections and persuasive messaging",
				image: "/images/services/planning.jpg",
			},
			{
				title: "Interactive Development",
				description:
					"Coding with Next.js, responsive layouts, and fluid motion",
				image: "/images/services/development.jpg",
			},
			{
				title: "Testing & QA",
				description: "Cross-device responsiveness and speed benchmarking",
				image: "/images/services/testing.jpg",
			},
			{
				title: "Launch & Optimization",
				description: "Deploying to production and fine-tuning conversions",
				image: "/images/services/deployment.jpg",
			},
		],
	},
	{
		title: "AI Automation & Chatbots",
		slug: "ai-automation",
		tagline:
			"Smart AI agents, custom workflow automations, and intelligent chatbot integrations for modern businesses.",
		icon: <Bot className="h-8 w-8 text-amber-400" />,
		description: [
			"Harness the power of LLMs and autonomous AI workflows to automate repetitive tasks and deliver instant customer support.",
			"We integrate custom AI agents, automated customer funnels, and enterprise automation pipelines tailored to your operations.",
		],
		gradient: "from-amber-500/20 via-transparent to-orange-500/10",
		bannerImage: "/services/website.jpg",
		offers: [
			{
				title: "Custom AI Agents",
				description:
					"Autonomous agents trained on your business data for intelligent decision making and automation.",
				icon: <Cpu className="h-5 w-5 text-amber-400" />,
			},
			{
				title: "Conversational Chatbots",
				description:
					"24/7 AI-powered assistants with RAG-based domain knowledge that convert leads and answer queries.",
				icon: <Bot className="h-5 w-5 text-amber-400" />,
			},
			{
				title: "Workflow Automation",
				description:
					"Automate data entry, CRM synchronization, customer follow-ups, and notifications effortlessly.",
				icon: <Sparkles className="h-5 w-5 text-amber-400" />,
			},
			{
				title: "API & Model Fine-Tuning",
				description:
					"Integrating OpenAI, Anthropic Claude, and custom vector databases into your product.",
				icon: <Terminal className="h-5 w-5 text-amber-400" />,
			},
		],
		features: [
			"RAG-powered conversational AI bots",
			"OpenAI, Claude, & Gemini model integrations",
			"Vector databases (Pinecone, Supabase pgvector)",
			"Zapier, Make, and webhook automations",
			"CRM & customer ticketing auto-sync",
			"Custom dashboard & analytics reporting",
		],
		benefits: [
			"24/7 automated customer engagement",
			"Drastic reduction in manual operational costs",
			"Instant response times with zero wait queue",
			"Scalable handling of thousands of inquiries",
			"Seamless integration with existing software",
		],
		process: [
			{
				title: "Workflow Audit",
				description: "Identifying repetitive bottlenecks and AI opportunities",
				image: "/images/services/discovery.jpg",
			},
			{
				title: "Knowledge Base Curation",
				description: "Preparing documents, FAQs, and integration schemas",
				image: "/images/services/planning.jpg",
			},
			{
				title: "Agent Development",
				description: "Engineering prompts, tool calls, and API pipelines",
				image: "/images/services/development.jpg",
			},
			{
				title: "Validation & Safety",
				description: "Rigorous testing of edge cases and guardrails",
				image: "/images/services/testing.jpg",
			},
			{
				title: "Deployment & Monitoring",
				description: "Live rollout with real-time performance analytics",
				image: "/images/services/deployment.jpg",
			},
		],
	},
	{
		title: "App Development",
		slug: "app-development",
		tagline:
			"High-performance native and cross-platform mobile apps for iOS and Android.",
		icon: <IoLogoAndroid className="h-8 w-8 text-emerald-400" />,
		description: [
			"We create custom mobile applications that deliver native performance, smooth animations, and exceptional user delight.",
			"From early concept to App Store and Google Play publishing, we handle the full product development lifecycle.",
		],
		gradient: "from-emerald-500/20 via-transparent to-cyan-500/10",
		bannerImage: "/services/website.jpg",
		offers: [
			{
				title: "Cross-Platform Frameworks",
				description:
					"Cost-effective Flutter and React Native apps with single codebase efficiency and native speed.",
				icon: <Smartphone className="h-5 w-5 text-emerald-400" />,
			},
			{
				title: "Cloud & Realtime Sync",
				description:
					"Robust real-time features including instant chat, push notifications, and live geolocation tracking.",
				icon: <Layers className="h-5 w-5 text-emerald-400" />,
			},
			{
				title: "Offline-First Architecture",
				description:
					"Reliable local data caching and instant sync when network connectivity resumes.",
				icon: <Code className="h-5 w-5 text-emerald-400" />,
			},
			{
				title: "App Store Publishing",
				description:
					"End-to-end guidance for Apple App Store and Google Play review and approval.",
				icon: <Sparkles className="h-5 w-5 text-emerald-400" />,
			},
		],
		features: [
			"iOS & Android cross-platform builds",
			"React Native & Flutter architecture",
			"Secure authentication & biometric login",
			"In-app purchases & Stripe integration",
			"Push notifications & deep linking",
			"Comprehensive CI/CD mobile build pipeline",
		],
		benefits: [
			"Fast time-to-market across iOS and Android",
			"Fluid 60 FPS animations and responsiveness",
			"Enterprise-grade security and encryption",
			"Scalable backend connectivity",
			"Guaranteed App Store compliance",
		],
		process: [
			{
				title: "User Journey & Wireframes",
				description:
					"Designing intuitive mobile screens and interaction patterns",
				image: "/images/services/discovery.jpg",
			},
			{
				title: "Architecture & Backend",
				description: "Configuring cloud databases and secure API endpoints",
				image: "/images/services/planning.jpg",
			},
			{
				title: "Mobile App Coding",
				description: "Building components with reusable modular architecture",
				image: "/images/services/development.jpg",
			},
			{
				title: "Device QA Testing",
				description: "Simulating on multiple real iOS and Android devices",
				image: "/images/services/testing.jpg",
			},
			{
				title: "Store Release & Support",
				description: "Handling app store submission and continuous updates",
				image: "/images/services/deployment.jpg",
			},
		],
	},
	{
		title: "UI/UX Design",
		slug: "uiux-design",
		tagline:
			"Beautiful, intuitive, and conversion-driven product designs that elevate your brand and delight users.",
		icon: <Palette className="h-8 w-8 text-purple-400" />,
		description: [
			"User-centered design solutions combining deep customer research, sleek visual polish, and frictionless interaction models.",
			"We create scalable design systems, interactive Figma prototypes, and memorable branding assets that stand out.",
		],
		gradient: "from-purple-500/20 via-transparent to-pink-500/10",
		bannerImage: "/services/website.jpg",
		offers: [
			{
				title: "Wireframing & Prototyping",
				description:
					"Translating complex product requirements into clear, clickable, interactive Figma prototypes.",
				icon: <Layout className="h-5 w-5 text-purple-400" />,
			},
			{
				title: "Scalable Design Systems",
				description:
					"Complete component libraries, typography tokens, and guidelines ready for developer handoff.",
				icon: <Layers className="h-5 w-5 text-purple-400" />,
			},
			{
				title: "User Journey & UX Audits",
				description:
					"Eliminating friction points and optimizing usability for maximum retention and conversion.",
				icon: <Search className="h-5 w-5 text-purple-400" />,
			},
			{
				title: "Brand Identity & Visuals",
				description:
					"Distinct color palettes, iconography, and aesthetic guidelines that define your digital presence.",
				icon: <Palette className="h-5 w-5 text-purple-400" />,
			},
		],
		features: [
			"Interactive high-fidelity Figma prototypes",
			"Complete atomic design systems & tokens",
			"User personas, journeys & information architecture",
			"Micro-interactions & motion design specs",
			"Usability testing and heuristic evaluations",
			"Pixel-perfect developer handoff assets",
		],
		benefits: [
			"Enhanced user satisfaction and retention",
			"Clear product-market visual positioning",
			"Faster development with standardized components",
			"Decreased user churn and bounce rates",
			"Consistent multi-platform branding",
		],
		process: [
			{
				title: "UX Research",
				description: "Competitor analysis and user behavior discovery",
				image: "/images/services/research.jpg",
			},
			{
				title: "Information Architecture",
				description: "Mapping user journeys and low-fidelity wireframes",
				image: "/images/services/strategy.jpg",
			},
			{
				title: "High-Fidelity Design",
				description: "Crafting polished UI components and design systems",
				image: "/images/services/design.jpg",
			},
			{
				title: "Interactive Prototype",
				description: "Validating user flows with clickable prototypes",
				image: "/images/services/testing.jpg",
			},
			{
				title: "Handoff & Support",
				description: "Preparing specs and supporting frontend integration",
				image: "/images/services/implementation.jpg",
			},
		],
	},
	{
		title: "Full-Stack Web Development",
		slug: "web-development",
		tagline:
			"Scalable, resilient web applications built with Next.js, React, Node.js, and modern cloud databases.",
		icon: <Code className="h-8 w-8 text-indigo-400" />,
		description: [
			"We engineer full-stack web applications and SaaS platforms with robust architectures, secure APIs, and responsive frontends.",
			"Whether you are building an MVP or scaling an enterprise platform, we deliver clean, maintainable, production-ready code.",
		],
		gradient: "from-indigo-500/20 via-transparent to-blue-500/10",
		bannerImage: "/services/website.jpg",
		offers: [
			{
				title: "SaaS & Web App Architecture",
				description:
					"Building robust multi-tenant web apps with authentication, role permissions, and billing.",
				icon: <Code className="h-5 w-5 text-indigo-400" />,
			},
			{
				title: "API & Backend Engineering",
				description:
					"High-throughput REST and GraphQL APIs using Node.js, Express, PostgreSQL, and Redis.",
				icon: <Terminal className="h-5 w-5 text-indigo-400" />,
			},
			{
				title: "CMS & Headless Platforms",
				description:
					"Headless content management integration with Sanity, Strapi, and Contentful for agile content teams.",
				icon: <Layers className="h-5 w-5 text-indigo-400" />,
			},
			{
				title: "Cloud Deployment & DevOps",
				description:
					"CI/CD deployment pipelines on Vercel, AWS, and Docker for 99.9% uptime and zero-downtime releases.",
				icon: <Sparkles className="h-5 w-5 text-indigo-400" />,
			},
		],
		features: [
			"Next.js App Router & React Server Components",
			"PostgreSQL, MongoDB, Supabase, & Prisma ORM",
			"Authentication (NextAuth, Clerk, Supabase Auth)",
			"Stripe payments & automated subscription management",
			"Real-time WebSocket & Server-Sent Events",
			"Automated testing with Jest and Playwright",
		],
		benefits: [
			"Enterprise scalability and 99.9% reliability",
			"Future-proof, modular TypeScript codebase",
			"Fast page loads and responsive performance",
			"Secure data handling and auth protocols",
			"Rapid development cycles and CI/CD pipelines",
		],
		process: [
			{
				title: "Technical Architecture",
				description: "Defining data schemas, API contracts, and tech stack",
				image: "/images/services/discovery.jpg",
			},
			{
				title: "Sprint Planning",
				description: "Agile roadmap with prioritized deliverables",
				image: "/images/services/planning.jpg",
			},
			{
				title: "Full-Stack Development",
				description: "Developing frontend components and backend services",
				image: "/images/services/development.jpg",
			},
			{
				title: "Automated Testing",
				description: "Unit, integration, and security test suites",
				image: "/images/services/testing.jpg",
			},
			{
				title: "Deployment & Monitoring",
				description: "Production release with log tracking and metrics",
				image: "/images/services/deployment.jpg",
			},
		],
	},
	{
		title: "SEO & Growth Optimization",
		slug: "seo-optimization",
		tagline:
			"Data-driven technical SEO, performance tuning, and growth strategies to dominate search rankings.",
		icon: <Search className="h-8 w-8 text-sky-400" />,
		description: [
			"Maximize your organic discoverability and search presence with comprehensive technical SEO and on-page optimization.",
			"We identify high-intent keywords, structure semantic schemas, and optimize Core Web Vitals to boost organic traffic.",
		],
		gradient: "from-sky-500/20 via-transparent to-teal-500/10",
		bannerImage: "/services/website.jpg",
		offers: [
			{
				title: "Technical SEO Audits",
				description:
					"Identifying crawl errors, broken links, metadata gaps, and indexing issues.",
				icon: <Search className="h-5 w-5 text-sky-400" />,
			},
			{
				title: "Core Web Vitals Tuning",
				description:
					"Optimizing LCP, FID/INP, and CLS scores for superior Google PageSpeed performance.",
				icon: <Sparkles className="h-5 w-5 text-sky-400" />,
			},
			{
				title: "Schema & Structured Data",
				description:
					"Implementing JSON-LD rich snippets, OpenGraph tags, and sitemaps for rich search results.",
				icon: <Code className="h-5 w-5 text-sky-400" />,
			},
			{
				title: "Keyword & Content Strategy",
				description:
					"Targeting high-intent search terms to drive qualified leads and higher conversions.",
				icon: <Layout className="h-5 w-5 text-sky-400" />,
			},
		],
		features: [
			"Comprehensive technical site audit & remediation",
			"Structured data & JSON-LD schema implementation",
			"Dynamic XML sitemaps and robots.txt configuration",
			"Image compression & modern WebP/AVIF formatting",
			"Canonical tags and internationalization setup",
			"Google Analytics 4 & Search Console configuration",
		],
		benefits: [
			"Higher Google rankings on target keywords",
			"Sustained organic traffic and lead flow",
			"Faster site speed and reduced bounce rate",
			"Enhanced rich snippet visibility in search results",
			"Long-term compound organic growth",
		],
		process: [
			{
				title: "Audit & Analysis",
				description: "Scanning domain health, backlinks, and keyword ranking",
				image: "/images/services/discovery.jpg",
			},
			{
				title: "Strategy & Keyword Map",
				description: "Identifying high-value target keywords and topics",
				image: "/images/services/planning.jpg",
			},
			{
				title: "On-Page & Tech Fixes",
				description: "Applying schema markup, meta tags, and speed fixes",
				image: "/images/services/development.jpg",
			},
			{
				title: "Performance Verification",
				description: "Testing with Google Lighthouse and Search Console",
				image: "/images/services/testing.jpg",
			},
			{
				title: "Tracking & Reporting",
				description: "Monthly rank tracking and continuous optimization",
				image: "/images/services/deployment.jpg",
			},
		],
	},
];
