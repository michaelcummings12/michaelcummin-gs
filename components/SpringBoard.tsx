"use client";
import { TileIds } from "@/types/tile";
import clsx from "clsx";
import { domAnimation, LazyMotion, m, useAnimation, Variants } from "framer-motion";
import { Dispatch, FunctionComponent, PropsWithChildren, SetStateAction, useEffect, useState } from "react";
import { usePrivacyModal } from "../contexts/PrivacyModalContext";
import { useMobile } from "../hooks/useMobile";
import { SpringBoardTiles } from "../types/springboard";
import { ExpandedTile } from "./ExpandedTile";
import { Signature } from "./Signature";
import { Tile } from "./Tile";

interface SpringBoardProps {
	tiles: SpringBoardTiles;
	activeTile?: string;
	disableInitialAnimation?: boolean;
	setActiveTile: Dispatch<SetStateAction<TileIds | undefined>>;
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
	},
	enterReducedMotion: {
		scale: 1,
		transition: { duration: 0 }
	},
	exit: {
		scale: 2
	}
};

export const SpringBoard: FunctionComponent<PropsWithChildren<SpringBoardProps>> = ({ activeTile, tiles, disableInitialAnimation, setActiveTile }) => {
	const { isPrivacyModalVisible } = usePrivacyModal();
	const [maxWidth, setMaxWidth] = useState<number>();
	const isMobile = useMobile();

	const controls = useAnimation();

	const onKeyDown = (e: KeyboardEvent) => {
		if (activeTile && e.key === "Escape") return setActiveTile(undefined);
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
		<LazyMotion features={domAnimation}>
			<div className="w-screen-safe h-screen-safe max-w-screen-safe relative bg-black flex justify-center items-center overflow-hidden">
				<div className="max-w-[1200px] max-h-[900px] lg:max-h-full h-full w-full lg:p-8 p-4 flex justify-center items-center">
					<m.div animate={controls} variants={variants} initial="exit" exit="exit" className="grid sm:grid-cols-3 grid-cols-2 lg:gap-8 md:gap-6 gap-4 max-h-full" style={{ width: maxWidth }}>
						{tiles.map((tile, key) => {
							const active: boolean = tile.id === activeTile;
							const isMobileAndPrivacyModalVisible: boolean = isPrivacyModalVisible && isMobile && tile.id === "contact";

							return (
								<m.div variants={tileVariants} initial="exit" animate="enter" exit="exit" className="aspect-square" key={key}>
									<a href={`/#${tile.id}`} id={`href-${tile.id}`} className={active ? "cursor-default" : "cursor-pointer"}>
										<m.div
											layoutId={`card-${key}`}
											animate={{ zIndex: active ? 50 : 0, scale: isMobileAndPrivacyModalVisible ? 0.95 : 1, transition: { zIndex: { delay: active ? 0 : 0.3 } } }}
											className={clsx(active ? "absolute top-0 left-0 p-0" : "relative", "w-full h-full z-0")}>
											<m.div className={clsx(tile.backgroundColor, active ? "" : tile.shadow || "", active ? "z-50 rounded-b-0" : "hover:scale-105 active:scale-95 cursor-pointer z-0", "w-full h-full transition-all overflow-hidden rounded-3xl")}>
												{active ? <ExpandedTile backgroundColor={tile.expandedBackgroundColor || tile.backgroundColor}>{tile.projectContent}</ExpandedTile> : <Tile>{tile.tileIcon}</Tile>}
											</m.div>
										</m.div>
									</a>
								</m.div>
							);
						})}
					</m.div>
				</div>
				<Signature />
			</div>
		</LazyMotion>
	);
};
