import { AppIcon } from "@web/components/AppIcon";
import { cn } from "@web/lib/cn";
import { morphTransition } from "@web/lib/motion";
import { SpringBoardTile } from "@web/types/springboard";
import { motion } from "framer-motion";
import Link from "next/link";
import { FunctionComponent, useState } from "react";

interface SpringBoardItemProps {
	tile: Pick<SpringBoardTile, "id" | "colSpan" | "backgroundColor" | "children" | "label" | "padding">;
	pathPrefix?: string;
}

export const SpringBoardItem: FunctionComponent<SpringBoardItemProps> = ({ tile, pathPrefix }) => {
	const [isAnimating, setIsAnimating] = useState(false);
	return (
		<div className={cn("flex flex-col gap-2", tile.colSpan === 2 ? "col-span-2" : "")}>
			<Link
				href={pathPrefix ? `${pathPrefix}/${tile.id}` : `/${tile.id}`}
				id={`card-${tile.id}`}
				className={cn("relative", tile.colSpan === 2 ? "h-0 w-full pb-[calc(50%-1rem)] md:h-full md:pb-0" : "aspect-square")}>
				<motion.div
					layoutId={`card-${tile.id}`}
					onLayoutAnimationStart={() => setIsAnimating(true)}
					onLayoutAnimationComplete={() => setIsAnimating(false)}
					style={{ zIndex: isAnimating ? 50 : 1 }}
					transition={morphTransition}
					className={cn("h-full w-full", tile.colSpan === 2 ? "absolute inset-0" : "relative")}>
					<AppIcon padding="p-4 md:p-6" tile={tile} className="z-0 h-full w-full cursor-pointer rounded-3xl transition-transform hover:scale-105 active:scale-95" />
				</motion.div>
			</Link>
			<p className="truncate text-center text-xs drop-shadow-xl md:text-sm lg:text-base">{tile.label}</p>
		</div>
	);
};
