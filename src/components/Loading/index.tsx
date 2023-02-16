import clsx from "clsx";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";

const loadingContainerVariants = {
	start: {
		transition: {
			staggerChildren: 0.2
		}
	},
	end: {
		transition: {
			staggerChildren: 0.2
		}
	}
};

const loadingCircleVariants = {
	start: {
		y: "0%"
	},
	end: {
		y: "100%"
	}
};

const loadingCircleTransition = {
	duration: 0.5,
	yoyo: Infinity,
	ease: "easeInOut"
};

interface LoadingProps {
	className?: string;
}

const Loading: FunctionComponent<LoadingProps> = ({ className = "" }) => {
	return (
		<motion.div variants={loadingContainerVariants} initial="start" animate="end" className="flex justify-between" style={{ width: "2rem", height: "1.25rem" }}>
			<motion.span className={clsx(className, "rounded-full")} variants={loadingCircleVariants} transition={loadingCircleTransition} style={{ width: "0.5rem", height: "0.5rem" }} />
			<motion.span className={clsx(className, "rounded-full")} variants={loadingCircleVariants} transition={loadingCircleTransition} style={{ width: "0.5rem", height: "0.5rem" }} />
			<motion.span className={clsx(className, "rounded-full")} variants={loadingCircleVariants} transition={loadingCircleTransition} style={{ width: "0.5rem", height: "0.5rem" }} />
		</motion.div>
	);
};

export default Loading;
