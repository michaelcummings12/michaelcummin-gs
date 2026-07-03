"use client";
import { CloseButton } from "@web/components/CloseButton";
import { morphTransition } from "@web/lib/motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const layoutId = pathname.split("/").pop();
	return (
		<motion.div
			layoutId={`card-${layoutId}`}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={morphTransition}
			className="absolute inset-0 z-50 h-full w-full">
			<CloseButton />
			{children}
		</motion.div>
	);
}
