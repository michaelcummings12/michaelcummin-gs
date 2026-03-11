"use client";
import { cn } from "@web/lib/cn";
import { projects } from "@web/lib/projects";
import { motion, Variants } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { FunctionComponent, useEffect } from "react";
import { SpringBoardTile } from "../types/springboard";
import { BlogWidget } from "./BlogWidget";
import { Folder } from "./Folder";
import { AboutLogo, ContactLogo } from "./Logos";
import { FlappyBird } from "./Logos/FlappyBird";
import { Signature } from "./Signature";
import { SpringBoardItem } from "./SpringBoardItem";

const iconClass = "h-full w-full drop-shadow";

const tiles: SpringBoardTile[] = [
	{
		backgroundColor: "bg-purple-500",
		children: <BlogWidget />,
		colSpan: 2,
		label: "Blog",
		id: "blog",
		padding: "p-2 md:p-4"
	},
	{
		backgroundColor: "bg-gray-800",
		children: <Folder tiles={projects} />,
		label: "Projects",
		id: "projects",
		padding: "p-2 md:p-4"
	},
	{
		backgroundColor: "bg-gradient-to-br from-yellow-500 to-orange-700",
		children: <FlappyBird className={cn(iconClass, "object-contain p-4")} />,
		label: "Flappy Bird",
		id: "flappy-bird"
	},
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
			// Goes up one level in the URL
			const path = pathname.slice(0, pathname.lastIndexOf("/")) || "/";
			router.push(path);
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
