"use client";
import { cn } from "@/lib/cn";
import { SpringBoardTile } from "@/types/springboard";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";

interface FolderProps {
	tiles: SpringBoardTile[];
}

export const Folder: FunctionComponent<FolderProps> = ({ tiles }) => (
	<div className="grid h-full w-full grid-cols-2 gap-4">
		{tiles.slice(0, 4).map(({ backgroundColor, children }, index) => (
			<motion.div layoutId="card-projects" key={index} className={cn(backgroundColor, "aspect-square h-full w-full rounded-2xl p-2 shadow-sm")}>
				{children}
			</motion.div>
		))}
	</div>
);
