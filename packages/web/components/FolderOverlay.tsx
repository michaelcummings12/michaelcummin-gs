"use client";

import { AppIcon } from "@web/components/AppIcon";
import { Close } from "@web/components/Icons";
import { cn } from "@web/lib/cn";
import { morphTransition } from "@web/lib/motion";
import { SpringBoardTile } from "@web/types/springboard";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FunctionComponent } from "react";

export interface FolderGroup {
	/** Optional heading shown above the group (e.g. "Founded & built") */
	title?: string;
	/** Route prefix each item links to */
	pathPrefix: string;
	items: SpringBoardTile[];
}

interface FolderOverlayProps {
	groups: FolderGroup[];
	isOpen: boolean;
	onClose: () => void;
	/** Overall folder title */
	title?: string;
	/** layoutId suffix used for the open/close morph (matches the home tile) */
	morphId?: string;
}

const cardVariants = {
	initial: { opacity: 0, y: 14 },
	animate: { opacity: 1, y: 0 }
};

const Card: FunctionComponent<{ tile: SpringBoardTile; pathPrefix: string }> = ({ tile, pathPrefix }) => (
	<motion.div variants={cardVariants}>
		<Link
			href={`${pathPrefix}/${tile.id}`}
			scroll={false}
			className="group relative flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/10 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 md:p-5">
			{/* Ambient brand-color glow */}
			<div
				className={cn(
					tile.backgroundColor,
					"pointer-events-none absolute -top-10 -left-10 size-32 rounded-full opacity-25 blur-2xl transition-opacity duration-300 group-hover:opacity-45"
				)}
			/>

			<div className="relative flex items-center gap-4">
				{/* Hover scale lives on this wrapper, not the AppIcon: the AppIcon is the layout
				    morph element, and a CSS transition-transform on it fights framer's per-frame
				    transform writes during the morph (smeared, laggy snap-back). */}
				<div className="size-14 shrink-0 transition-transform duration-300 group-hover:scale-105 md:size-16">
					<AppIcon tile={tile} layoutId={`card-${tile.id}`} className="size-full rounded-2xl shadow-lg" />
				</div>
				<div className="flex min-w-0 flex-col gap-1.5">
					<p className="truncate text-base font-semibold text-white md:text-lg">{tile.label}</p>
					<div className="flex items-center gap-2">
						{tile.category && (
							<span className="w-fit rounded-full border border-white/15 px-2 py-0.5 text-[11px] font-medium tracking-wide text-white/50">{tile.category}</span>
						)}
						{tile.date && <span className="text-[11px] font-medium tracking-wide text-white/40 tabular-nums">{tile.date.slice(0, 4)}</span>}
					</div>
				</div>
			</div>

			{tile.tagline && <p className="relative line-clamp-2 text-sm leading-snug text-white/60">{tile.tagline}</p>}
		</Link>
	</motion.div>
);

export const FolderOverlay: FunctionComponent<FolderOverlayProps> = ({ groups, isOpen, onClose, title = "Projects", morphId = "projects" }) => (
	<AnimatePresence>
		{isOpen && (
			<>
				{/* Fixed blurred backdrop over the (pinned) springboard. */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={onClose}
					className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xl"
				/>
				{/* Close button: on mobile the card fills the width, so tapping the backdrop isn't reliable. */}
				<motion.button
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={onClose}
					aria-label="Close projects"
					className="fixed top-0 right-0 z-50 m-4 flex size-12 cursor-pointer items-center justify-center rounded-full border border-white/5 bg-gray-500/75 p-4 shadow backdrop-blur transition-all hover:scale-105 hover:shadow-lg active:scale-95 active:shadow">
					<Close className="h-full w-full fill-white" />
				</motion.button>
				{/* Content sits in normal flow so the WINDOW scrolls, not a nested box. Framer accounts for window
				    scroll natively, so the icon morph lines up even when the list is scrolled. The springboard behind
				    is pinned (fixed), so only this content scrolls. */}
				{/* m-auto (not items-center) centers the folder when it fits but top-aligns when it's taller than the
				    screen, so the top stays reachable instead of being clipped above the scroll. */}
				<div className="relative z-40 flex min-h-screen p-4" onClick={onClose}>
					<motion.div
						layoutId={`card-${morphId}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={morphTransition}
						className="relative m-auto flex w-full max-w-3xl flex-col"
						onClick={(e) => e.stopPropagation()}>
						<h2 className="mb-5 shrink-0 text-center text-2xl font-semibold text-white md:text-3xl">{title}</h2>
						<motion.div
							initial={{ scale: 0.96, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.96, opacity: 0 }}
							transition={{ type: "spring", duration: 0.5, bounce: 0 }}
							className="flex flex-col gap-8 rounded-4xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl md:p-6">
							{groups.map((group, i) => (
								<motion.div
									key={i}
									className="flex flex-col gap-3"
									initial="initial"
									animate="animate"
									variants={{ animate: { transition: { staggerChildren: 0.05, delayChildren: 0.05 * i } } }}>
									{group.title && <p className="px-1 text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">{group.title}</p>}
									<div className="grid gap-3 sm:grid-cols-2">
										{group.items.map((tile) => (
											<Card key={tile.id} tile={tile} pathPrefix={group.pathPrefix} />
										))}
									</div>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</div>
			</>
		)}
	</AnimatePresence>
);
