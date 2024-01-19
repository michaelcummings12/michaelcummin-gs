import { motion, Variants } from "framer-motion";
import { FunctionComponent, PropsWithChildren } from "react";

const variants: Variants = {
	enter: {
		opacity: 1,
		transition: {
			duration: 0.6
		}
	},
	exit: {
		opacity: 0
	}
};

export const Tile: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
	return (
		<motion.div className="w-full h-full" variants={variants}>
			<div className="flex items-center justify-center lg:p-8 p-4 max-w-full aspect-square">{children}</div>
		</motion.div>
	);
};
