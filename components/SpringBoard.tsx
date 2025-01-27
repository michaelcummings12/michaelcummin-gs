"use client";
import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FunctionComponent, useEffect } from "react";
import { SpringBoardTiles } from "../types/springboard";
import { AboutLogo, BreakingEnteringLogo, ChicagoCareLogo, ContactLogo, GcnLogo, RhythmLogo } from "./Logos";
import { Signature } from "./Signature";

const iconClass = "h-full w-full drop-shadow";

const tiles: SpringBoardTiles = [
	{ backgroundColor: "bg-blue-600", tileIcon: <BreakingEnteringLogo className={clsx("fill-white", iconClass)} />, label: "Breaking & Entering", id: "breaking-entering" },
	{ backgroundColor: "bg-white", tileIcon: <ChicagoCareLogo className={iconClass} />, label: "Chicago.care", id: "chicago-care" },
	{ backgroundColor: "bg-slate-900", tileIcon: <GcnLogo className={clsx("fill-blue-500", iconClass)} />, label: "GCN", id: "gcn" },
	{ backgroundColor: "bg-zinc-900", tileIcon: <RhythmLogo className={iconClass} />, label: "Rhythm", id: "rhythm" },
	{ backgroundColor: "bg-gradient-to-br from-fuchsia-500 to-purple-700", tileIcon: <ContactLogo className={iconClass} />, label: "Contact", id: "contact" },
	{ backgroundColor: "bg-gradient-to-br from-cyan-400 to-blue-700", expandedBackgroundColor: "bg-white", tileIcon: <AboutLogo className={iconClass} />, label: "About", id: "about" }
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
				<motion.div variants={variants} initial="initial" animate="animate" exit="exit" className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 max-h-full">
					{tiles.map((tile, index) => (
						<div key={`tile-${index}`} className="text-center flex flex-col">
							<Link href={`/${tile.id}`} id={`tile-${tile.id}`} className="aspect-square relative">
								<motion.div layoutId={`card-${tile.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative w-full h-full">
									<div className={clsx(tile.backgroundColor, "hover:scale-105 active:scale-95 cursor-pointer z-0", "w-full h-full transition-all overflow-hidden rounded-3xl")}>
										<div className="absolute inset-0 rounded-3xl h-full w-full pointer-events-none border border-white/10 z-20" />
										<div className="flex items-center justify-center lg:p-8 p-4 max-w-full aspect-square">{tile.tileIcon}</div>
									</div>
								</motion.div>
							</Link>
							<p className="pt-2 text-xs md:text-sm lg:text-base">{tile.label}</p>
						</div>
					))}
				</motion.div>
			</div>
			<Signature />
		</div>
	);
};
