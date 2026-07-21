"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FunctionComponent } from "react";

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

const linkClass = "text-white/50 transition-colors hover:text-white";

export const Footer: FunctionComponent = () => (
	<motion.footer variants={variants} initial="exit" animate="enter" className="fixed inset-x-0 bottom-0 z-0">
		<div className="flex items-center justify-between p-4 lg:px-8">
			<p className="text-xs text-white/50">
				&copy; {new Date().getFullYear()}{" "}
				<Link href="https://www.dontstop.llc" target="_blank" rel="noopener noreferrer" className={linkClass}>
					Don&apos;t Stop, LLC
				</Link>
			</p>
			<div className="flex items-center gap-3 text-xs sm:gap-4">
				<Link href="/privacy-policy" className={linkClass}>
					Privacy Policy
				</Link>
				<Link href="/terms-of-use" className={linkClass}>
					Terms of Use
				</Link>
			</div>
		</div>
	</motion.footer>
);
