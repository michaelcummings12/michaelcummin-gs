import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import { FunctionComponent, PropsWithChildren } from "react";
import { cc } from "../../utils/cc";
import { CloseIcon } from "../icons";

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
			<motion.div variants={variants} initial="exit" animate="enter" exit="exit" className={cc(backgroundColor, "text-black h-full w-full overflow-hidden rounded-t-3xl translate-y-0")}>
				<div className="absolute top-0 right-0 p-4 z-50">
					<Link href="/">
						<a>
							<div className="cursor-pointer relative top-0 left-0 p-4 bg-white-300/50 hover:bg-white-300/80 backdrop-blur-xl rounded-full transition-all fill-black shadow hover:scale-105 active:scale-95 h-[48px] w-[48px] flex items-center justify-center">
								<CloseIcon className="-rotate-90 fill-inherit h-full w-full" />
							</div>
						</a>
					</Link>
				</div>
				<div className="relative h-full w-full overflow-y-scroll scrollbar-hide">{children}</div>
			</motion.div>
		</AnimatePresence>
	);
};
