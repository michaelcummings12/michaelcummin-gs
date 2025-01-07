"use client";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FunctionComponent, useEffect } from "react";
import { SpringBoardTiles } from "../types/springboard";
import { AboutTileIcon, BreakingEnteringTileIcon, ChicagoCareTileIcon, ContactTileIcon, GCNTileIcon, RhythmTileIcon } from "./Projects";
import { Signature } from "./Signature";

const tiles: SpringBoardTiles = [
	{
		backgroundColor: "bg-white",
		tileIcon: <ChicagoCareTileIcon />,
		id: "chicago-care"
	},
	{ backgroundColor: "bg-blue-600", tileIcon: <BreakingEnteringTileIcon />, id: "breaking-entering" },
	{ backgroundColor: "bg-black", shadow: "shadow-rhythm", tileIcon: <RhythmTileIcon />, id: "rhythm" },
	{
		backgroundColor: "bg-projects-gcn-700",
		shadow: "shadow-gcn",
		tileIcon: <GCNTileIcon />,
		id: "gcn"
	},
	{ backgroundColor: "bg-gradient-to-br from-fuchsia-500 to-purple-700", tileIcon: <ContactTileIcon />, id: "contact" },
	{ backgroundColor: "bg-gradient-to-br from-cyan-400 to-blue-700", expandedBackgroundColor: "bg-white", tileIcon: <AboutTileIcon />, id: "about" }
];

const variants: Variants = {
	initial: {
		opacity: 0,
		scale: 0.5,
		transition: {
			duration: 1,
			type: "spring"
		}
	},
	animate: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
			type: "spring"
		}
	},
	exit: {
		opacity: 0,
		scale: 0.5
	}
};

export const SpringBoard: FunctionComponent = () => {
	const pathname = usePathname();
	const router = useRouter();
	const onKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Escape" && pathname !== "/") {
			router.push("/");
		}
	};
	useEffect(() => {
		window.addEventListener("keydown", onKeyDown);
		return () => {
			window.removeEventListener("keydown", onKeyDown);
		};
	});
	return (
		<div className="w-full h-full max-h-screen relative bg-black flex justify-center items-center overflow-hidden">
			<div className="max-w-[1200px] max-h-[900px] lg:max-h-full h-full w-full lg:p-8 p-4 flex justify-center items-center">
				<motion.div variants={variants} initial="initial" animate="animate" exit="exit" className="grid grid-cols-2 md:grid-cols-3 gap-8 max-h-full">
					{tiles.map((tile, key) => (
						<Link href={`/${tile.id}`} id={`href-${tile.id}`} className="aspect-square relative" key={key}>
							<motion.div layoutId={`card-${tile.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative w-full h-full">
								<div className={clsx(tile.backgroundColor, "hover:scale-105 active:scale-95 cursor-pointer z-0", "w-full h-full transition-all overflow-hidden rounded-3xl")}>
									<div className="flex items-center justify-center lg:p-8 p-4 max-w-full aspect-square">{tile.tileIcon}</div>
								</div>
							</motion.div>
						</Link>
					))}
				</motion.div>
			</div>
			<Signature />
		</div>
	);
};