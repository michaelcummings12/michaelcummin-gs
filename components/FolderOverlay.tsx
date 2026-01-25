"use client";

import { cn } from "@/lib/cn";
import { projects } from "@/lib/projects";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

interface FolderOverlayProps {
	isOpen: boolean;
	onClose: () => void;
}

export const FolderOverlay: FunctionComponent<FolderOverlayProps> = ({ isOpen, onClose }) => {
	const pathname = usePathname();

	return (
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-40 flex items-center justify-center" onClick={onClose}>
					<div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />
					<motion.div
						layoutId={`card-projects`}
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
						className="relative flex flex-col items-center"
						onClick={(e) => e.stopPropagation()}>
						<h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">Projects</h2>
						<div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md md:p-8">
							<div className="grid grid-cols-3 gap-4 md:gap-6">
								{projects.map(({ backgroundColor, children, id, label }) => {
									const isActive = pathname.includes(id);
									return (
										<Link key={id} href={`/projects/${id}`} className="group flex flex-col items-center">
											<motion.div
												layoutId={`card-${id}`}
												initial={{ opacity: 0 }}
												animate={{ opacity: isActive ? 0 : 1 }}
												className={cn(
													backgroundColor,
													"aspect-square h-full w-full cursor-pointer rounded-3xl p-3 shadow-lg transition-transform hover:scale-105 active:scale-95"
												)}>
												{children}
											</motion.div>
											<span className="mt-2 truncate text-center text-xs text-white md:text-sm">{label}</span>
										</Link>
									);
								})}
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
};
