import { BreakingEnteringLogo, ChatPepLogo, ChicagoCareLogo, DisplayListLogo, FairTicketsLogo, GcnLogo, RhythmLogo } from "@web/components/Logos";
import { HCLogo } from "@web/components/Logos/HC";
import { NodroLogo } from "@web/components/Logos/Nodro";
import { SpringBoardTile } from "@web/types/springboard";

/** Ventures Michael founded or co-founded and built himself */
export const ventures: SpringBoardTile[] = [
	{
		id: "chicago-care",
		label: "Chicago.care",
		category: "Healthcare",
		date: "2022-08",
		tagline: "Healthcare access platform built and launched in 24 hours, featured on NBC.",
		backgroundColor: "bg-white",
		children: <ChicagoCareLogo className="h-full w-full" />
	},
	{
		id: "chatpep",
		label: "ChatPEP",
		category: "AI",
		date: "2026-06",
		tagline: "An AI research assistant for peptides.",
		backgroundColor: "bg-black",
		children: <ChatPepLogo className="h-full w-full fill-white" />
	},
	{
		id: "fair-tickets",
		label: "Fair.tickets",
		category: "Ticketing",
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
		tagline: "The only streaming service where you can watch full-length concerts.",
		backgroundColor: "bg-zinc-950",
		children: <RhythmLogo className="h-full w-full" />
	},
	{
		id: "gcn",
		label: "GCN",
		category: "Fintech",
		date: "2022-01",
		tagline: "Platform opening up accessible participation in Bitcoin mining infrastructure.",
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
		category: "Media",
		date: "2021-09",
		tagline: "Digital platform for the advertising-industry media company Breaking & Entering.",
		backgroundColor: "bg-blue-600",
		children: <BreakingEnteringLogo className="h-full w-full fill-white" />
	}
];

/** All projects */
export const projects: SpringBoardTile[] = [...ventures, ...clientWork];

/** The four highlighted on the home folder preview and the about page teaser */
export const featuredProjects: SpringBoardTile[] = ["chatpep", "fair-tickets", "nodro", "rhythm"].map((id) => projects.find((p) => p.id === id)!);
