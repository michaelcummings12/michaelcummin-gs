"use client";

import { motion, Variants } from "framer-motion";
import { FunctionComponent, useState } from "react";
import { CircleInfo, Signature as SignatureIcon } from "./Icons";
import { LegalModal } from "./LegalModal";

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
	const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

	return (
		<>
			<motion.div variants={variants} initial="exit" animate="enter" className="fixed right-0 bottom-0 z-40">
				<div className="flex items-center gap-4 p-4 lg:p-8">
					<SignatureIcon className="fill-white" height="36px" />
					<button
						onClick={() => setIsLegalModalOpen(true)}
						aria-label="View legal information"
						className="group flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/5 transition-all hover:bg-white/20 active:scale-95">
						<CircleInfo className="h-5 w-5 fill-white/50 transition-colors group-hover:text-white" />
					</button>
				</div>
			</motion.div>

			<LegalModal isOpen={isLegalModalOpen} onClose={() => setIsLegalModalOpen(false)} />
		</>
	);
};
