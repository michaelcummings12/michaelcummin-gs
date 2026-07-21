"use client";

import { motion, Variants } from "framer-motion";
import { FunctionComponent } from "react";
import { Signature as SignatureIcon } from "./Icons";

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

export const Signature: FunctionComponent = () => (
	<motion.div variants={variants} initial="exit" animate="enter" className="pointer-events-none fixed right-0 bottom-0 z-0 p-4 py-12 lg:px-8">
		<SignatureIcon className="fill-white" height="36px" />
	</motion.div>
);
