import Head from "next/head";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";
import { AboutProjectContent, AboutTileIcon, BreakingEnteringProjectContent, BreakingEnteringTileIcon, ChicagoCareProjectContent, ChicagoCareTileIcon, ContactProjectContent, ContactTileIcon, GCNProjectContent, GCNTileIcon, ShareHouseProjectContent, ShareHouseTileIcon } from "../components/Projects";
import { SpringBoard } from "../components/SpringBoard";
import { usePrivacyModal } from "../contexts/PrivacyModalContext";
import { SpringBoardTiles } from "../types/springboard";
import { cc } from "../utils/cc";

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

enum TileIds {
	About = "about",
	BreakingEntering = "be",
	ChicagoCare = "cc",
	Contact = "contact",
	GCN = "gcn",
	ShareHouse = "sh"
}

export const HomeView: FunctionComponent = () => {
	const [activeTile, setActiveTile] = useState<TileIds | undefined>();
	const [disableInitialAnimation, setDisableInitialAnimation] = useState<boolean>(false);
	const router = useRouter();
	const { isPrivacyModalVisible, setPrivacyModalVisible } = usePrivacyModal();

	// Update the active tile based on the hash path.
	const onHashChange = (hash: string) => {
		let id = hash.replace("/#", "");
		if (!(Object as any).values(TileIds).includes(id)) return setActiveTile(undefined);
		return setActiveTile(id as TileIds);
	};

	// Listen to router for changes in the hash path.
	useEffect(() => {
		router.events.on("hashChangeStart", onHashChange);
		return () => {
			router.events.off("hashChangeStart", onHashChange);
		};
	}, [router.events]);

	// If the user navigates to a hash from an external URL, replace the current path with the root path, then push the hash.
	// When the user first clicks the back button, they will go back to the project dashboard.
	// If the user clicks the back button again, they will return to their previous url.
	useEffect(() => {
		if (!router.asPath) return;
		let path = router.asPath;
		async function checkPath() {
			if (path !== "/") {
				setDisableInitialAnimation(true);
				await router.replace("/");
				await router.push(path);
			}
		}
		checkPath();
	}, []);

	useEffect(() => {
		if (!router.asPath || !isPrivacyModalVisible) return;
		return setPrivacyModalVisible(false);
	}, [router.asPath]);

	return (
		<div className={cc(activeTile ? "overflow-hidden" : "", "h-full w-full")}>
			<Head>
				<title>Michael Cummings</title>
				<meta name="theme-color" content="#000000" />
			</Head>
			<SpringBoard tiles={tiles} activeTile={activeTile} setActiveTile={setActiveTile} disableInitialAnimation={disableInitialAnimation} />
		</div>
	);
};
