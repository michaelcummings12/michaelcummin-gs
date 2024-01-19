"use client"
import clsx from "clsx";
import { AnimatePresence, m, Variants } from "framer-motion";
import { FunctionComponent, PropsWithChildren } from "react";
import { CloseIcon } from "./icons";

interface ExpandedTileProps {
	backgroundColor: string;
}

export const ExpandedTile: FunctionComponent<PropsWithChildren<ExpandedTileProps>> = ({ children, backgroundColor }) => {
	const variants: Variants = {
		enter: {
			opacity: 1
		},
		exit: {
			opacity: 0
		}
	};
	return (
		<AnimatePresence>
			<m.div variants={variants} initial="exit" animate="enter" exit="exit" className={clsx(backgroundColor, "text-black h-full w-full overflow-hidden rounded-t-3xl translate-y-0")}>
				<div className="absolute top-0 right-0 p-4 z-50">
					<a
						href="/"
						className="cursor-pointer relative top-0 left-0 p-4 border border-gray-400/25 bg-gray-500/50 border-blachover:bg-gray-500/75 hover:shadow-xl backdrop-blur-xl rounded-full transition-all fill-black shadow hover:scale-105 active:scale-95 h-[48px] w-[48px] flex items-center justify-center">
						<CloseIcon className="-rotate-90 fill-inherit h-full w-full" />
					</a>
				</div>
				<div className="relative h-full w-full overflow-y-scroll scrollbar-hide">{children}</div>
			</m.div>
		</AnimatePresence>
	);
};
