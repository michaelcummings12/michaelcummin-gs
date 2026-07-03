import { MonogramLogo } from "@web/components/Logos/Placeholder";
import { SpringBoardTile } from "@web/types/springboard";

export const openSource: SpringBoardTile[] = [
	{
		id: "mrbd-ui-kit",
		label: "mrbd-ui-kit",
		category: "UI Framework",
		date: "2026-06",
		tagline: "A UI framework for building Meta Ray-Ban Display web apps.",
		backgroundColor: "bg-violet-600",
		children: <MonogramLogo text="UI" className="h-full w-full text-white" />
	},
	{
		id: "name-to-gender",
		label: "name-to-gender",
		category: "Library",
		date: "2026-07",
		tagline: "Input a first name and get a predicted gender with a probability score.",
		backgroundColor: "bg-emerald-600",
		children: <MonogramLogo text="NG" className="h-full w-full text-white" />
	},
	{
		id: "tailwindcss-text-box-trim",
		label: "tailwindcss-text-box-trim",
		category: "Tailwind Plugin",
		date: "2026-03",
		tagline: "A Tailwind CSS plugin for trimming the whitespace around text.",
		backgroundColor: "bg-sky-500",
		children: <MonogramLogo text="TT" className="h-full w-full text-white" />
	}
];
