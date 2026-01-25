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
	{
		backgroundColor: "bg-blue-600",
		tileIcon: <BreakingEnteringLogo className={clsx("fill-white", iconClass)} />,
		label: "Breaking & Entering",
		id: "breaking-entering"
	},
	{ backgroundColor: "bg-white", tileIcon: <ChicagoCareLogo className={iconClass} />, label: "Chicago.care", id: "chicago-care" },
	{ backgroundColor: "bg-slate-900", tileIcon: <GcnLogo className={clsx("fill-blue-500", iconClass)} />, label: "GCN", id: "gcn" },
	{ backgroundColor: "bg-zinc-900", tileIcon: <RhythmLogo className={iconClass} />, label: "Rhythm", id: "rhythm" },
	{ backgroundColor: "bg-gradient-to-br from-fuchsia-500 to-purple-700", tileIcon: <ContactLogo className={iconClass} />, label: "Contact", id: "contact" },
	{
		backgroundColor: "bg-gradient-to-br from-cyan-400 to-blue-700",
		expandedBackgroundColor: "bg-white",
		tileIcon: <AboutLogo className={iconClass} />,
		label: "About",
		id: "about"
	}
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
		<div className="relative flex h-full max-h-screen w-full items-center justify-center overflow-hidden bg-black">
			<div className="flex h-full max-h-[900px] w-full max-w-[1200px] items-center justify-center p-4 lg:max-h-full lg:p-8">
				<motion.div variants={variants} initial="initial" animate="animate" exit="exit" className="grid max-h-full grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3">
					{tiles.map((tile, index) => (
						<div key={`tile-${index}`} className="flex flex-col text-center">
							<Link href={`/${tile.id}`} id={`tile-${tile.id}`} className="relative aspect-square">
								<motion.div layoutId={`card-${tile.id}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative h-full w-full">
									<div className={clsx(tile.backgroundColor, "z-0 cursor-pointer hover:scale-105 active:scale-95", "h-full w-full overflow-hidden rounded-3xl transition-all")}>
										<div className="pointer-events-none absolute inset-0 z-20 h-full w-full rounded-3xl border border-white/10" />
										<div className="flex aspect-square max-w-full items-center justify-center p-4 lg:p-8">{tile.tileIcon}</div>
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
