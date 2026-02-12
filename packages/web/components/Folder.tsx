"use client";
import { cn } from "@web/lib/cn";
import { SpringBoardTile } from "@web/types/springboard";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";

interface FolderProps {
	tiles: SpringBoardTile[];
}

/**
 * Folder tile component for SpringBoard
 * Shows a preview of the 4 left-most tiles
 */
export const Folder: FunctionComponent<FolderProps> = ({ tiles }) => {
	const previewTiles = [...tiles.slice(0, 2), ...tiles.slice(3, 5)];
	return (
		<div className="grid h-full w-full grid-cols-2 gap-4">
			{previewTiles.map(({ backgroundColor, children }, index) => (
				<motion.div layoutId="card-projects" key={index} className={cn(backgroundColor, "aspect-square h-full w-full rounded-2xl p-2 shadow-sm")}>
					{children}
				</motion.div>
			))}
		</div>
	);
};
