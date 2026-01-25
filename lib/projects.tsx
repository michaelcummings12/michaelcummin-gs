import { BreakingEnteringLogo, ChicagoCareLogo, GcnLogo, RhythmLogo } from "@/components/Logos";
import { HouseCallsLogo } from "@/components/Logos/HouseCalls";
import { NodroLogo } from "@/components/Logos/Nodro";
import { SpringBoardTile } from "@/types/springboard";

export const projects: SpringBoardTile[] = [
	{
		id: "breaking-entering",
		label: "Breaking & Entering",
		backgroundColor: "bg-blue-600",
		children: <BreakingEnteringLogo className="h-full w-full fill-white drop-shadow" />
	},
	{
		id: "chicago-care",
		label: "Chicago.care",
		backgroundColor: "bg-white",
		children: <ChicagoCareLogo className="h-full w-full drop-shadow" />
	},
	{
		id: "gcn",
		label: "GCN",
		backgroundColor: "bg-slate-900",
		children: <GcnLogo className="h-full w-full fill-blue-500 drop-shadow" />
	},
	{
		id: "house-calls",
		label: "House Calls",
		backgroundColor: "bg-black",
		children: <HouseCallsLogo className="h-full w-full fill-white drop-shadow" />
	},
	{
		id: "nodro",
		label: "Nodro",
		backgroundColor: "bg-orange-50",
		children: <NodroLogo className="h-full w-full drop-shadow" />
	},
	{
		id: "rhythm",
		label: "Rhythm",
		backgroundColor: "bg-zinc-900",
		children: <RhythmLogo className="h-full w-full drop-shadow" />
	}
];
