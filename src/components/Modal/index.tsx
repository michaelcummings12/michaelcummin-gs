import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import { FunctionComponent, PropsWithChildren, useCallback, useEffect } from "react";
import { useMobile } from "../../hooks/useMobile";
import { MobileModal } from "./Mobile";

interface ModalProps {
	isActive: boolean;
	setActive: () => void;
}

const backgroundVariants: Variants = {
	visible: {
		opacity: 1
	},
	hidden: {
		opacity: 0
	}
};

const modalVariants: Variants = {
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			type: "spring"
		}
	},
	hidden: {
		opacity: 0,
		y: "100%"
	}
};

const Modal: FunctionComponent<PropsWithChildren<ModalProps>> = ({ isActive, setActive, children }) => {
	const isMobile = useMobile();

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") {
				e.stopPropagation();
				return setActive();
			}
		},
		[setActive]
	);

	useEffect(() => {
		if (isActive) {
			document.addEventListener("keydown", onKeyDown);
			document.body.classList.add("overflow-hidden");
		}
		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.body.classList.remove("overflow-hidden");
		};
	}, [isActive, onKeyDown]);

	if (!isActive && !isMobile) return null;

	return isMobile ? (
		<MobileModal setActive={setActive} isActive={isActive}>
			{children}
		</MobileModal>
	) : (
		<div className="px-8 py-4 z-50 fixed inset-0 flex justify-center items-center max-h-screen-safe">
			<motion.div initial="hidden" animate="visible" exit="hidden" variants={backgroundVariants} className="absolute inset-0 bg-overlay backdrop-blur-xl" onClick={setActive} />
			<motion.div initial="hidden" animate="visible" exit="hidden" variants={modalVariants} className="z-40 h-full shadow-modal">
				<div className={clsx(isMobile ? "w-full" : "w-[500px]", "bg-white p-4 rounded-xl relative overflow-y-scroll scrollbar-hide h-full")}>{children}</div>
			</motion.div>
		</div>
	);
};

export default Modal;
