"use client";
import { PrivacyModal } from "@/components/PrivacyModal";
import {
	AboutProjectContent,
	AboutTileIcon,
	BreakingEnteringProjectContent,
	BreakingEnteringTileIcon,
	ChicagoCareProjectContent,
	ChicagoCareTileIcon,
	ContactProjectContent,
	ContactTileIcon,
	GCNProjectContent,
	GCNTileIcon,
	ShareHouseProjectContent,
	ShareHouseTileIcon
} from "@/components/Projects";
import { SpringBoard } from "@/components/SpringBoard";
import { PrivacyModalProvider } from "@/contexts/PrivacyModalContext";
import { SpringBoardTiles } from "@/types/springboard";
import { TileIds } from "@/types/tile";
import clsx from "clsx";
import { useEffect, useState } from "react";

const tiles: SpringBoardTiles = [
	{ className: "row-start-1", backgroundColor: "bg-black", shadow: "shadow-be", tileIcon: <BreakingEnteringTileIcon />, projectContent: <BreakingEnteringProjectContent />, id: "be" },
	{
		className: "row-start-1",
		backgroundColor: "bg-white",
		tileIcon: <ChicagoCareTileIcon />,
		projectContent: <ChicagoCareProjectContent />,
		id: "cc"
	},
	{
		className: "row-start-1",
		backgroundColor: "bg-projects-gcn-700",
		shadow: "shadow-gcn",
		tileIcon: <GCNTileIcon />,
		projectContent: <GCNProjectContent />,
		id: "gcn"
	},
	{ className: "row-start-2", backgroundColor: "bg-projects-sh", tileIcon: <ShareHouseTileIcon />, projectContent: <ShareHouseProjectContent />, id: "sh" },
	{ className: "row-start-2", backgroundColor: "background-purple-gradient", tileIcon: <ContactTileIcon />, projectContent: <ContactProjectContent />, id: "contact" },
	{ className: "row-start-2", backgroundColor: "background-blue-gradient", expandedBackgroundColor: "bg-white", tileIcon: <AboutTileIcon />, projectContent: <AboutProjectContent />, id: "about" }
];

export default function Page() {
	const [activeTile, setActiveTile] = useState<TileIds | undefined>();
	useEffect(() => {
		// Update the active tile based on the hash path.
		const onHashChange = (event: HashChangeEvent) => {
			const hash = event.newURL.split("#")[1];
			const id = hash.replace("/#", "");
			if (!(Object as any).values(TileIds).includes(id)) return setActiveTile(undefined);
			return setActiveTile(id as TileIds);
		};
		window.addEventListener("hashchange", onHashChange);
		return () => {
			window.removeEventListener("hashchange", onHashChange);
		};
	}, []);
	return (
		<PrivacyModalProvider>
			<div className={clsx(activeTile ? "overflow-hidden" : "", "h-full w-full")}>
				<SpringBoard tiles={tiles} activeTile={activeTile} setActiveTile={setActiveTile} />
			</div>
			<PrivacyModal />
		</PrivacyModalProvider>
	);
}
