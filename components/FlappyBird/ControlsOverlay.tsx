import { FunctionComponent } from "react";

interface ControlsOverlayProps {
	onStart: () => void;
	gameState: "START" | "PLAYING" | "GAME_OVER";
	score: number;
	highScore: number;
}

export const ControlsOverlay: FunctionComponent<ControlsOverlayProps> = ({ onStart, gameState, score, highScore }) => {
	if (gameState === "PLAYING") return null;

	return (
		<div
			className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/60 text-white backdrop-blur-sm"
			onClick={(e) => {
				e.stopPropagation();
				onStart();
			}}>
			<div className="flex flex-col items-center gap-4 rounded-2xl bg-zinc-900 p-8 text-center shadow-xl ring-1 ring-white/10">
				{gameState === "GAME_OVER" && (
					<div className="mb-4">
						<h2 className="text-3xl font-bold text-red-500">Game Over!</h2>
						<p className="text-xl">Score: {score}</p>
						<p className="text-sm text-zinc-400">Best: {highScore}</p>
					</div>
				)}

				{gameState === "START" && <h1 className="mb-2 text-4xl font-bold tracking-tight">Flappy Bird</h1>}

				<div className="space-y-2 text-sm text-zinc-300">
					<p>
						Press <span className="rounded bg-zinc-700 px-2 py-1 font-mono font-bold text-white">Space</span> or{" "}
						<span className="rounded bg-zinc-700 px-2 py-1 font-mono font-bold text-white">Tap</span> to jump
					</p>
					<p>Avoid the pipes!</p>
				</div>

				<button
					className="mt-4 rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:scale-105 active:scale-95"
					onClick={(e) => {
						e.stopPropagation();
						onStart();
					}}>
					{gameState === "START" ? "Start Game" : "Play Again"}
				</button>
			</div>
		</div>
	);
};
