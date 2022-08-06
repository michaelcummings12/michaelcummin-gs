import { motion, Variants } from "framer-motion";
import { FunctionComponent } from "react";
import { Signature as SignatureIcon } from "../icons";

const variants: Variants = {
	enter: {
		opacity: 1,
		transition: {
			duration: 1.2
		}
	},
	exit: {
		opacity: 0
	}
};

export const Signature: FunctionComponent = () => {
	return (
		<motion.div variants={variants} initial="exit" animate="enter" className="fixed right-0 bottom-0">
			<div className="lg:p-8 p-4">
				<SignatureIcon className="fill-white" height="36px" />
			</div>
		</motion.div>
	);
};
