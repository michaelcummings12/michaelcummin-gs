import { BreakingEnteringLogo, ChatPepLogo, ChicagoCareLogo, DisplayListLogo, FairTicketsLogo, GcnLogo, RhythmLogo } from "@web/components/Logos";
import { HCLogo } from "@web/components/Logos/HC";
import { NodroLogo } from "@web/components/Logos/Nodro";
import { MonogramLogo } from "@web/components/Logos/Placeholder";
import { SpringBoardTile } from "@web/types/springboard";

/** Ventures Michael founded or co-founded and built himself */
export const ventures: SpringBoardTile[] = [
	{
		id: "chicago-care",
		label: "Chicago.care",
		category: "Healthcare",
		date: "2022-08",
		tagline: "Healthcare access platform featured on NBC.",
		backgroundColor: "bg-white",
		children: <ChicagoCareLogo className="h-full w-full" />
	},
	{
		id: "chatpep",
		label: "ChatPEP",
		category: "AI",
		date: "2026-06",
		tagline: "The best AI research assistant for peptides.",
		backgroundColor: "bg-black",
		children: <ChatPepLogo className="h-full w-full fill-white" />
	},
	{
		id: "fair-tickets",
		label: "Fair.tickets",
		category: "Entertainment",
		date: "2026-05",
		tagline: "The only fee-free ticketing platform built for creators.",
		backgroundColor: "bg-slate-900",
		children: <FairTicketsLogo className="h-full w-full" />
	},
	{
		id: "displaylist",
		label: "DisplayList.fun",
		category: "Wearables",
		date: "2026-06",
		tagline: "A list app for Meta Ray-Ban Display glasses.",
		backgroundColor: "bg-[#00cca8]",
		padding: "p-0",
		children: <DisplayListLogo className="h-full w-full" />
	},
	{
		id: "rhythm",
		label: "Rhythm",
		category: "Entertainment",
		date: "2023-02",
		tagline: "The only streaming service where you can watch full concerts.",
		backgroundColor: "bg-zinc-950",
		children: <RhythmLogo className="h-full w-full" />
	},
	{
		id: "gcn",
		label: "GCN",
		category: "Cryptocurrency",
		date: "2022-01",
		tagline: "Accessible participation in Bitcoin mining.",
		backgroundColor: "bg-slate-900",
		children: <GcnLogo className="h-full w-full fill-blue-500" />
	},
	{
		id: "nodro",
		label: "Nødro",
		category: "Productivity",
		date: "2025-11",
		tagline: "A minimalist social scheduling platform designed around clarity and restraint.",
		backgroundColor: "bg-orange-50",
		children: <NodroLogo className="h-full w-full" />
	}
];

/** Work built for clients, where Michael was the engineer but not the founder */
export const clientWork: SpringBoardTile[] = [
	{
		id: "house-calls",
		label: "House Calls",
		category: "Entertainment",
		date: "2024-10",
		tagline: "Real-time AI concierge for a Chicago house-music event brand.",
		backgroundColor: "bg-black",
		children: <HCLogo className="h-full w-full fill-white" />
	},
	{
		id: "breaking-entering",
		label: "Breaking & Entering",
		category: "Advertising",
		date: "2021-09",
		tagline: "Digital platform for the advertising-industry media company.",
		backgroundColor: "bg-blue-600",
		children: <BreakingEnteringLogo className="h-full w-full fill-white" />
	}
];

export const openSource: SpringBoardTile[] = [
	{
		id: "mrbd-ui-kit",
		label: "mrbd-ui-kit",
		category: "Open Source",
		date: "2026-06",
		tagline: "A UI framework for building Meta Ray-Ban Display web apps.",
		backgroundColor: "bg-violet-600",
		children: <MonogramLogo text="UI" className="h-full w-full text-white" />
	},
	{
		id: "name-to-gender",
		label: "name-to-gender",
		category: "Open Source",
		date: "2026-07",
		tagline: "Input a first name and get a predicted gender with a probability score.",
		backgroundColor: "bg-emerald-600",
		children: <MonogramLogo text="NG" className="h-full w-full text-white" />
	},
	{
		id: "tailwindcss-text-box-trim",
		label: "tailwindcss-text-box-trim",
		category: "Open Source",
		date: "2026-03",
		tagline: "A Tailwind CSS plugin for trimming the whitespace around text.",
		backgroundColor: "bg-sky-500",
		children: <MonogramLogo text="TT" className="h-full w-full text-white" />
	}
];

/** All projects */
export const projects: SpringBoardTile[] = [...ventures, ...clientWork];

/** Every project with a page, including open source (used for the sitemap and crawlable index) */
export const allProjects: SpringBoardTile[] = [...ventures, ...clientWork, ...openSource];

/** The four highlighted on the home folder preview and the about page teaser */
export const featuredProjects: SpringBoardTile[] = ["chatpep", "fair-tickets", "nodro", "rhythm"].map((id) => projects.find((p) => p.id === id)!);
