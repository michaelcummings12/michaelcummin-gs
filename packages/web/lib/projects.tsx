import { BreakingEnteringLogo, ChicagoCareLogo, GcnLogo, RhythmLogo } from "@web/components/Logos";
import { HCLogo } from "@web/components/Logos/HC";
import { NodroLogo } from "@web/components/Logos/Nodro";
import { SpringBoardTile } from "@web/types/springboard";

export const projects: SpringBoardTile[] = [
	{
		id: "breaking-entering",
		label: "Breaking & Entering",
		backgroundColor: "bg-blue-600",
		children: <BreakingEnteringLogo className="h-full w-full fill-white" />
	},
	{
		id: "chicago-care",
		label: "Chicago.care",
		backgroundColor: "bg-white",
		children: <ChicagoCareLogo className="h-full w-full" />
	},
	{
		id: "gcn",
		label: "GCN",
		backgroundColor: "bg-slate-900",
		children: <GcnLogo className="h-full w-full fill-blue-500" />
	},
	{
		id: "house-calls",
		label: "House Calls",
		backgroundColor: "bg-black",
		children: <HCLogo className="h-full w-full fill-white" />
	},
	{
		id: "nodro",
		label: "Nødro",
		backgroundColor: "bg-orange-50",
		children: <NodroLogo className="h-full w-full" />
	},
	{
		id: "rhythm",
		label: "Rhythm",
		backgroundColor: "bg-zinc-900",
		children: <RhythmLogo className="h-full w-full" />
	}
];
