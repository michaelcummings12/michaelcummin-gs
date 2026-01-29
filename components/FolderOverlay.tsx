"use client";

import { SpringBoardTile } from "@/types/springboard";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";
import { SpringBoardItem } from "./SpringBoardItem";

interface FolderOverlayProps {
	pathPrefix: string;
	items: SpringBoardTile[];
	isOpen: boolean;
	onClose: () => void;
}

export const FolderOverlay: FunctionComponent<FolderOverlayProps> = ({ items, isOpen, onClose, pathPrefix }) => {
	usePathname(); // No idea why this is needed. But if I remove it, it breaks the layout animation ¯\_(ツ)_/¯
	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-40 flex items-center justify-center p-4" onClick={onClose}>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/40 backdrop-blur-xl" />
					<motion.div
						layoutId="card-projects"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ type: "spring", duration: 0.5, bounce: 0 }}
						className="relative flex flex-col items-center"
						onClick={(e) => e.stopPropagation()}>
						<h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">Projects</h2>
						<div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md md:p-8">
							<motion.div
								// initial={{ scale: 0.5 }}
								// animate={{ scale: 1 }}
								// exit={{ scale: 0.5 }}
								transition={{ type: "spring", duration: 0.5, bounce: 0 }}
								className="grid grid-cols-3 gap-4 md:gap-6">
								{items.map((tile) => (
									<SpringBoardItem key={tile.id} tile={tile} pathPrefix={pathPrefix} />
								))}
							</motion.div>
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};
