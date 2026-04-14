"use client";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { ReactNode } from "react";

export const FadeInStagger = ({ children, className }: { children: ReactNode; className?: string }) => {
	return (
		<LazyMotion features={domAnimation}>
			<m.div
				initial="initial"
				animate="animate"
				variants={{
					initial: {},
					animate: {
						transition: {
							staggerChildren: 0.1
						}
					}
				}}
				className={className}>
				{children}
			</m.div>
		</LazyMotion>
	);
};

export const FadeInStaggerItem = ({ children, className, y = 20 }: { children: ReactNode; className?: string; y?: number }) => {
	return (
		<m.div
			variants={{
				initial: { opacity: 0, y },
				animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.4, 0, 0.25, 1] } }
			}}
			className={className}>
			{children}
		</m.div>
	);
};
