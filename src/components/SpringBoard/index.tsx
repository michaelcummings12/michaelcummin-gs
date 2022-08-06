import { motion, useAnimation, Variants } from "framer-motion";
import Link from "next/link";
import { FunctionComponent, PropsWithChildren, useEffect, useState } from "react";
import { usePrivacyModal } from "../../contexts/PrivacyModalContext";
import { useMobile } from "../../hooks/useMobile";
import { SpringBoardTiles } from "../../types/springboard";
import { cc } from "../../utils/cc";
import { ExpandedTile } from "../ExpandedTile";
import { Signature } from "../Signature";
import { Tile } from "../Tile";

interface SpringBoardProps {
	tiles: SpringBoardTiles;
	activeTile: string | undefined;
	disableInitialAnimation?: boolean;
	setActiveTile: any;
}

const tileVariants: Variants = {
	enter: {
		scale: 1
	},
	exit: {
		scale: 1.1
	}
};

const variants: Variants = {
	enter: {
		scale: 1,
		transition: {
			duration: 1,
			type: "spring"
		}
		// gridGap: "2rem"
	},
	enterReducedMotion: {
		scale: 1,
		transition: { duration: 0 }
	},
	exit: {
		// gridGap: "5rem",
		scale: 2
	}
};

export const SpringBoard: FunctionComponent<PropsWithChildren<SpringBoardProps>> = ({ activeTile, tiles, disableInitialAnimation, setActiveTile }) => {
	const { isPrivacyModalVisible } = usePrivacyModal();
	const [maxWidth, setMaxWidth] = useState<number>();
	const isMobile = useMobile();

	const controls = useAnimation();

	const onKeyDown = (e: KeyboardEvent) => {
		if (activeTile && e.key === "Escape") return setActiveTile(-1);
	};

	const onWindowResize = () => {
		if (typeof window === undefined) return;

		const height = window.innerHeight;
		let maxWidth;
		if (isMobile) {
			maxWidth = Math.round(height * (3 / 5));
		} else {
			maxWidth = Math.round(height * (4 / 3));
		}
		setMaxWidth(maxWidth);
	};

	useEffect(() => {
		onWindowResize();
	});

	useEffect(() => {
		if (!disableInitialAnimation) {
			controls.start("enter");
		} else {
			controls.start("enterReducedMotion");
		}
	}, [disableInitialAnimation, controls]);

	useEffect(() => {
		window.addEventListener("keydown", onKeyDown);
		window.addEventListener("resize", onWindowResize);
		return () => {
			window.removeEventListener("keydown", onKeyDown);
			window.removeEventListener("resize", onWindowResize);
		};
	});

	return (
		<div className="w-screen-safe h-screen-safe max-w-screen-safe relative bg-black flex justify-center items-center overflow-hidden">
			<div className="max-w-[1200px] max-h-[900px] lg:max-h-full h-full w-full lg:p-8 p-4 flex justify-center items-center">
				<motion.div animate={controls} variants={variants} initial="exit" exit="exit" className="grid sm:grid-cols-3 grid-cols-2 lg:gap-8 md:gap-6 gap-4 max-h-full" style={{ width: maxWidth }}>
					{tiles.map((tile, key) => {
						const active: boolean = tile.id === activeTile;
						const isMobileAndPrivacyModalVisible: boolean = isPrivacyModalVisible && isMobile && tile.id === "contact";

						return (
							<motion.div variants={tileVariants} initial="exit" animate="enter" exit="exit" className="aspect-square" key={key}>
								<Link href={`/#${tile.id}`}>
									<a id={`href-${tile.id}`} className={active ? "cursor-default" : "cursor-pointer"}>
										<motion.div layoutId={`card-${key}`} animate={{ zIndex: active ? 50 : 0, scale: isMobileAndPrivacyModalVisible ? 0.95 : 1, transition: { zIndex: { delay: active ? 0 : 0.3 } } }} className={cc(active ? "absolute top-0 left-0 p-0" : "relative", "w-full h-full z-0")}>
											<motion.div className={cc(tile.backgroundColor, active ? "" : tile.shadow || "", active ? "z-50 rounded-b-0" : "hover:scale-105 active:scale-95 cursor-pointer z-0", "w-full h-full transition-all overflow-hidden rounded-3xl")}>
												{active ? <ExpandedTile backgroundColor={tile.expandedBackgroundColor || tile.backgroundColor}>{tile.projectContent}</ExpandedTile> : <Tile>{tile.tileIcon}</Tile>}
											</motion.div>
										</motion.div>
									</a>
								</Link>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
			<Signature />
		</div>
	);
};
