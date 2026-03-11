import { cn } from "@web/lib/cn";
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
					transition={{ type: "spring", duration: 0.5, bounce: 0 }}
					className={cn("h-full w-full", tile.colSpan === 2 ? "absolute inset-0" : "relative")}>
					<div className={cn(tile.backgroundColor, "z-0 cursor-pointer hover:scale-105 active:scale-95", "h-full w-full overflow-hidden rounded-3xl transition-transform")}>
						<div className="pointer-events-none absolute inset-0 z-20 h-full w-full rounded-3xl border border-white/10" />
						<div className={cn(tile.padding ?? "p-4 lg:p-8", "flex h-full max-w-full items-center justify-center")}>{tile.children}</div>
					</div>
				</motion.div>
			</Link>
			<p className="truncate text-center text-xs md:text-sm lg:text-base">{tile.label}</p>
		</div>
	);
};
