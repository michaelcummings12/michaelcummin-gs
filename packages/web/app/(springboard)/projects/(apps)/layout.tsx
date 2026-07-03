"use client";
import { CloseButton } from "@web/components/CloseButton";
import { morphTransition } from "@web/lib/motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const layoutId = pathname.split("/").pop();
	// The projects folder scrolls with the window, so its icons live in document space. This page must share that
	// space for the morph to line up (a `fixed` page is scroll-independent and lands off by scrollY when scrolled).
	// So position it `absolute` at the current scroll offset and freeze the page scroll while it's open.
	const [top, setTop] = useState(0);
	useLayoutEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setTop(window.scrollY);
		const { overflow } = document.body.style;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = overflow;
		};
	}, []);
	return (
		<motion.div
			layoutId={`card-${layoutId}`}
			style={{ top }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={morphTransition}
			className="absolute left-0 z-50 h-screen w-full">
			<CloseButton returnTo="/projects" />
			{children}
		</motion.div>
	);
}
