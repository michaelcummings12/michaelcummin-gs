"use client";
import { AppIcon } from "@web/components/AppIcon";
import { SpringBoardTile } from "@web/types/springboard";
import { FunctionComponent } from "react";

interface FolderProps {
	tiles: SpringBoardTile[];
}

/**
 * Folder tile component for SpringBoard.
 * Renders a 2x2 preview of whatever tiles it is given (see featuredProjects).
 */
export const Folder: FunctionComponent<FolderProps> = ({ tiles }) => (
	<div className="grid h-full w-full grid-cols-2 gap-2 md:gap-4">
		{tiles.map((tile, index) => (
			<AppIcon padding="p-3 md:p-4" key={index} tile={tile} layoutId="card-projects" noBorder className="aspect-square h-full w-full rounded-2xl shadow-sm" />
		))}
	</div>
);
