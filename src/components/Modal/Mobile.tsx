import { motion, Variants } from "framer-motion";
import { FunctionComponent, PropsWithChildren, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { cc } from "../../utils/cc";

interface MobileModalProps {
	isActive: boolean;
	setActive: any;
}

const backgroundVariants: Variants = {
	visible: {
		opacity: 1
	},
	hidden: {
		opacity: 0
	}
};

export const MobileModal: FunctionComponent<PropsWithChildren<MobileModalProps>> = ({ children, isActive, setActive }) => {
	const [isDragging, setDragging] = useState<boolean>(false);
	const [allowScroll, setAllowScroll] = useState<boolean>(true);

	const [posY, setY] = useState<number>(0);

	let touchStart: { posY: number; time: number } = { posY: 0, time: 0 };

	const modalRef = useRef<HTMLDivElement>(null);
	const childrenRef = useRef<HTMLDivElement>(null);
	const dragRef = useRef<HTMLDivElement>(null);

	const reset = () => {
		setY(0);
		touchStart = { posY: 0, time: 0 };
		setAllowScroll(true);
	};

	const onTouchStart = (e: TouchEvent) => {
		if (!modalRef.current!.contains(e.target as Node)) return setActive(false);

		flushSync(() => setDragging(true));

		touchStart = { posY: Math.round(e.touches[0].clientY), time: Date.now() };
	};

	const onTouch = (e: TouchEvent) => {
		if (childrenRef.current!.scrollTop > 0 && !dragRef.current!.contains(e.target as Node)) return;

		const currentPos = Math.round(e.touches[0].clientY);
		const calculatedMove = currentPos - touchStart.posY;

		if (calculatedMove < 0) return setAllowScroll(true);

		childrenRef.current!.scrollTo({ top: childrenRef.current!.scrollTop - calculatedMove, behavior: "smooth" });

		setAllowScroll(false);

		flushSync(() => setY(calculatedMove));
	};

	const onTouchEnd = (e: TouchEvent) => {
		const touchEnd = Math.round(e.changedTouches[0].clientY);
		const touchEndTime = Date.now();

		const calculatedMove = touchEnd - touchStart.posY;

		flushSync(() => setDragging(false));

		// Detect if the user performed an intertial scroll and close the modal if so
		const touchDiff = touchEnd - touchStart.posY;
		const timeDiff = touchEndTime - touchStart.time;
		const velocity = Math.round((touchDiff / timeDiff) * 100) / 100;

		// Close the modal if the scroll is greater than 23.5% of the window height, or if the velocity is greater than 3
		if (calculatedMove > window.innerHeight * 0.235 || velocity > 3) setActive(false);

		// Clear state
		reset();
	};

	useEffect(() => {
		if (!isActive) return;

		window.addEventListener("touchstart", onTouchStart);
		window.addEventListener("touchmove", onTouch);
		window.addEventListener("touchend", onTouchEnd);

		return () => {
			window.removeEventListener("touchstart", onTouchStart);
			window.removeEventListener("touchmove", onTouch);
			window.removeEventListener("touchend", onTouchEnd);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isActive]);

	return (
		<>
			<motion.div initial="hidden" animate={isActive ? "visible" : "hidden"} variants={backgroundVariants} className={cc(isActive ? "pointer-events-auto" : "pointer-events-none", "absolute inset-0 bg-overlay w-full h-full z-50")} onClick={setActive} />
			<div
				className="left-0 bottom-0 z-50 w-full fixed overflow-hidden rounded-t-xl bg-white shadow-mobile-modal border-white border-t pointer-events-auto"
				style={
					isDragging
						? { transform: `translate3d(0px, ${posY}px, 0px)` }
						: isActive
						? {
								transform: `translate3d(0, 0, 0)`,
								transition: "transform 0.4s cubic-bezier(0.35, 0, 0.65, 1) 0s"
						  }
						: { transform: `translate3d(0px, 100vh, 0px)`, transition: "transform 0.4s cubic-bezier(0.35, 0, 0.65, 1) 0s" }
				}
				ref={modalRef}>
				<div className="h-full min-h-full relative">
					<div className="w-full h-[3rem] relative top-0 bg-white" style={{ zIndex: 1000 }} ref={dragRef}>
						<button className="absolute bg-white" style={{ height: "5px", width: "44px", borderRadius: "4px", top: "1.25rem", left: "calc(50% - 22px)" }} />
					</div>
					<div className={cc(!allowScroll ? "overflow-hidden" : "overflow-y-scroll", "relative scrollbar-hide min-h-[75vh] max-h-[75vh]")} id="modal-children" ref={childrenRef}>
						<div className="z-50">{children}</div>
					</div>
				</div>
			</div>
		</>
	);
};
