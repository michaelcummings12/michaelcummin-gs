"use client";
import { CloseButton } from "@/components/CloseButton";
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
			transition={{ duration: 0.3 }}
			className="absolute inset-0 z-50 h-full w-full">
			<CloseButton returnTo="/projects" />
			{children}
		</motion.div>
	);
}
