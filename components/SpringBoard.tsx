"use client";
import { projects } from "@/lib/projects";
import { motion, Variants } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { FunctionComponent, useEffect } from "react";
import { SpringBoardTile } from "../types/springboard";
import { BlogWidget } from "./BlogWidget";
import { Folder } from "./Folder";
import { AboutLogo, ContactLogo } from "./Logos";
import { Signature } from "./Signature";
import { SpringBoardItem } from "./SpringBoardItem";

const iconClass = "h-full w-full drop-shadow";

const tiles: SpringBoardTile[] = [
	{
		backgroundColor: "bg-purple-500",
		children: <BlogWidget />,
		colSpan: 2,
		label: "Blog",
		id: "blog"
	},
	{
		backgroundColor: "bg-gray-800",
		children: <Folder tiles={projects} />,
		label: "Projects",
		id: "projects"
	},
	{
		backgroundColor: "bg-sky-400",
		children: (
			<div className="flex h-full w-full items-center justify-center">
				<div className="relative h-12 w-12 rounded-full border-2 border-black bg-yellow-400">
					<div className="absolute top-1 right-1 h-3 w-3 rounded-full border border-black bg-white">
						<div className="absolute top-1 right-0.5 h-1 w-1 rounded-full bg-black" />
					</div>
					<div className="absolute top-4 left-1 h-2 w-4 rounded-full bg-white/50" />
					<div className="absolute top-4 -right-2 h-2 w-3 rounded-r-md border border-black bg-orange-500" />
				</div>
			</div>
		),
		label: "Flappy Bird",
		id: "flappy-bird"
	},
	// { backgroundColor: "bg-white", children: <ChicagoCareLogo className={iconClass} />, label: "Chicago.care", id: "chicago-care" },
	// { backgroundColor: "bg-slate-900", children: <GcnLogo className={cn("fill-blue-500", iconClass)} />, label: "GCN", id: "gcn" },
	// { backgroundColor: "bg-zinc-900", children: <RhythmLogo className={iconClass} />, label: "Rhythm", id: "rhythm" },
	{ backgroundColor: "bg-gradient-to-br from-lime-500 to-green-700", children: <ContactLogo className={iconClass} />, label: "Contact", id: "contact" },
	{
		backgroundColor: "bg-gradient-to-br from-cyan-400 to-blue-700",
		expandedBackgroundColor: "bg-white",
		children: <AboutLogo className={iconClass} />,
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
		<div className="relative h-full max-h-screen w-full bg-black">
			<div className="m-auto flex h-full max-h-225 w-full max-w-300 items-start justify-center p-4 md:items-center lg:max-h-full lg:p-8">
				<motion.div variants={variants} initial="initial" animate="animate" exit="exit" className="grid max-h-full grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3">
					{tiles.map((tile) => (
						<SpringBoardItem key={`card-${tile.id}`} tile={tile} />
					))}
				</motion.div>
			</div>
			<Signature />
		</div>
	);
};
