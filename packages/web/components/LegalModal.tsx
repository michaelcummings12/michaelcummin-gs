"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Close } from "./Icons";

interface LegalModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const LegalModal: FunctionComponent<LegalModalProps> = ({ isOpen, onClose }) => (
	<AnimatePresence>
		{isOpen && (
			<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
				<motion.div
					initial={{ opacity: 0, scale: 0.95, y: 20 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.95, y: 20 }}
					transition={{ type: "spring", duration: 0.5, bounce: 0 }}
					className="relative flex w-full max-w-sm flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/90 shadow-2xl backdrop-blur-xl"
					onClick={(e) => e.stopPropagation()}>
					<div className="flex items-center justify-between border-b border-white/10 p-4">
						<h3 className="font-heading text-lg font-semibold text-white">Legal</h3>
						<button onClick={onClose} className="rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white" aria-label="Close modal">
							<Close className="h-5 w-5 fill-current" />
						</button>
					</div>
					<div className="flex flex-col p-2">
						<Link href="/privacy" onClick={onClose} className="group flex items-center justify-between rounded-2xl p-4 transition-colors hover:bg-white/5">
							<span className="text-white/80 transition-colors group-hover:text-white">Privacy Policy</span>
							<motion.span className="text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-white" aria-hidden="true">
								&rarr;
							</motion.span>
						</Link>
						<Link href="/terms" onClick={onClose} className="group flex items-center justify-between rounded-2xl p-4 transition-colors hover:bg-white/5">
							<span className="text-white/80 transition-colors group-hover:text-white">Terms of Use</span>
							<motion.span className="text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-white" aria-hidden="true">
								&rarr;
							</motion.span>
						</Link>
					</div>
					<div className="border-t border-white/10 bg-zinc-900/50 p-4 text-center">
						<p className="text-xs text-white/50">&copy; {new Date().getFullYear()} Michael Cummings. All rights reserved.</p>
					</div>
				</motion.div>
			</div>
		)}
	</AnimatePresence>
);
