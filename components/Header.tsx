import { motion, Variants } from "framer-motion";
import { FunctionComponent } from "react";
import { McLogo } from "./Icons";

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
		<motion.div variants={variants} initial="exit" animate="enter" exit="exit" className="pointer-events-none fixed z-40 flex w-full justify-center">
			<div className="rounded-3xl rounded-t-none bg-white/30 p-4 backdrop-blur-xl">
				<McLogo height="56px" className="fill-black" />
			</div>
		</motion.div>
	);
};

export default Header;
