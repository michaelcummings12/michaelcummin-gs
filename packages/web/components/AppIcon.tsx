"use client";
import { cn } from "@web/lib/cn";
import { morphTransition } from "@web/lib/motion";
import { SpringBoardTile } from "@web/types/springboard";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";

interface AppIconProps {
	tile: Pick<SpringBoardTile, "backgroundColor" | "children" | "padding">;
	/** Size, rounding, shadow, hover, etc. The rounding here is inherited by the inner border. */
	className?: string;
	/** Inner padding used when the tile doesn't set its own (tile.padding wins, e.g. "p-0" for full-bleed logos) */
	padding?: string;
	/** Drop the inner hairline border (used by the tiny folder preview) */
	noBorder?: boolean;
	/** When set, renders as a motion element with this layoutId so it can morph into its detail page */
	layoutId?: string;
}

/**
 * The shared "app icon" primitive: a brand-colored rounded tile holding a logo.
 * Used by the home grid, the folder preview, the projects/open-source folder, and the about page.
 */
export const AppIcon: FunctionComponent<AppIconProps> = ({ tile, className, padding = "p-3", noBorder, layoutId }) => {
	const classes = cn("relative flex items-center justify-center overflow-hidden", tile.backgroundColor, className);
	const inner = (
		<>
			{!noBorder && <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-white/10" />}
			<div className={cn("flex h-full w-full items-center justify-center", tile.padding ?? padding)}>{tile.children}</div>
		</>
	);

	if (layoutId) {
		return (
			<motion.div layoutId={layoutId} transition={morphTransition} className={classes}>
				{inner}
			</motion.div>
		);
	}
	return <div className={classes}>{inner}</div>;
};
