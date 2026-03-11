import { motion } from "framer-motion";
import { FunctionComponent } from "react";

interface ControlsOverlayProps {
	onStart: () => void;
	gameState: "START" | "PLAYING" | "GAME_OVER";
	score: number;
	highScore: number;
}

export const ControlsOverlay: FunctionComponent<ControlsOverlayProps> = ({ onStart, gameState, score, highScore }) => {
	if (gameState === "PLAYING") {
		return null;
	}

	return (
		<div className="absolute inset-0 z-40 flex flex-col items-center select-none">
			{gameState === "START" && (
				<div
					className="absolute inset-0 flex h-full w-full flex-col items-center justify-between py-12"
					onPointerDown={(e) => {
						e.stopPropagation();
						onStart();
					}}>
					<div className="mt-20 flex flex-col items-center gap-4 sm:flex-row">
						<h1
							className="flappy-font z-10 text-center text-4xl leading-normal drop-shadow-[2px_3px_0_#543847] filter sm:text-5xl"
							style={{
								background: "linear-gradient(to bottom, #9ce659 0%, #9ce659 48%, #4ba314 52%, #4ba314 100%)",
								WebkitBackgroundClip: "text",
								WebkitTextStroke: "2px white",
								color: "transparent"
							}}>
							Flappy
							<br className="sm:hidden" /> Bird
						</h1>
					</div>
					<div className="mb-20 flex w-full cursor-default justify-center gap-4 px-4 sm:gap-8">
						<button
							className="cursor-pointer bg-[#e45c14] px-6 py-2 text-lg text-white shadow-[0_0_0_2px_#543847,0_4px_0_2px_#543847] transition active:translate-y-1 active:shadow-[0_0_0_2px_#543847,0_2px_0_2px_#543847] sm:px-8 sm:py-3 sm:text-xl"
							style={{
								border: "2px solid white",
								WebkitTextStroke: "1px #543847"
							}}
							onPointerDown={(e) => {
								e.stopPropagation();
								onStart();
							}}>
							START
						</button>
					</div>
				</div>
			)}

			{gameState === "GAME_OVER" && (
				<div
					className="absolute inset-0 z-50 flex h-full w-full cursor-pointer flex-col items-center pt-24 pb-12"
					onPointerDown={(e) => {
						e.stopPropagation();
						onStart();
					}}>
					<motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, ease: [0.175, 0.885, 0.32, 1.275] }}>
						<h2
							className="text-4xl leading-normal whitespace-nowrap drop-shadow-[2px_3px_0_#543847] filter sm:text-5xl"
							style={{
								background: "linear-gradient(to bottom, #f8d820 0%, #f8d820 48%, #d86800 52%, #d86800 100%)",
								WebkitBackgroundClip: "text",
								WebkitTextStroke: "2px white",
								color: "transparent"
							}}>
							Game Over
						</h2>
					</motion.div>
					<motion.div
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.4, delay: 0.2, ease: [0.175, 0.885, 0.32, 1.275] }}
						className="mt-12 flex w-64 flex-col items-center rounded border-[3px] border-[#543847] bg-[#ded895] p-6 shadow-[0_4px_0_#543847]"
						onPointerDown={(e) => e.stopPropagation()} // Prevent accidental reset when clicking scorecard
					>
						<p className="mb-2 text-xl text-[#e45c14] drop-shadow-[0_0_0_#543847] [text-shadow:2px_2px_0_#543847]">Score</p>
						<p className="mb-6 text-3xl text-white [text-shadow:2px_2px_0_#543847]" style={{ WebkitTextStroke: "2px #543847" }}>
							{score}
						</p>

						<p className="mb-2 text-xl text-[#e45c14] drop-shadow-[0_0_0_#543847] [text-shadow:2px_2px_0_#543847]">Best</p>
						<p className="text-3xl text-white [text-shadow:2px_2px_0_#543847]" style={{ WebkitTextStroke: "2px #543847" }}>
							{highScore}
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
						className="mt-auto mb-20 flex w-full cursor-default justify-center gap-4 px-4 sm:gap-8"
						onPointerDown={(e) => e.stopPropagation()}>
						<button
							className="cursor-pointer bg-[#e45c14] px-6 py-2 text-lg text-white shadow-[0_0_0_2px_#543847,0_4px_0_2px_#543847] transition active:translate-y-1 active:shadow-[0_0_0_2px_#543847,0_2px_0_2px_#543847] sm:px-8 sm:py-3 sm:text-xl"
							style={{
								border: "2px solid white",
								WebkitTextStroke: "1px #543847"
							}}
							onPointerDown={(e) => {
								e.stopPropagation();
								onStart();
							}}>
							RESTART
						</button>
					</motion.div>
				</div>
			)}
		</div>
	);
};
