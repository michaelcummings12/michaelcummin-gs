import { motion, Variants } from "framer-motion";
import React, { FunctionComponent } from "react";
import { MCLogo } from "../icons";

const variants: Variants = {
	enter: {
		translateY: "-5%",
		transition: {
			duration: 1,
			type: "spring"
		}
	},
	exit: {
		translateY: "-100%"
	}
};

const Header: FunctionComponent = () => {
	return (
		<motion.div variants={variants} initial="exit" animate="enter" exit="exit" className="w-full flex justify-center fixed pointer-events-none z-40">
			<div className="rounded-3xl p-4 bg-white/30 rounded-t-none backdrop-blur-xl">
				<MCLogo height="56px" className="fill-black" />
			</div>
		</motion.div>
	);
};

export default Header;
