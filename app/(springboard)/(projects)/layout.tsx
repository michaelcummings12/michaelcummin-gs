"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const layoutId = pathname.split("/").pop();
	return (
		<motion.div layoutId={`card-${layoutId}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="absolute h-full w-full inset-0 z-50">
			{children}
		</motion.div>
	);
}
