"use client";

import { FlappyBird } from "../Logos/FlappyBird";
import { ControlsOverlay } from "./ControlsOverlay";
import { BIRD_SIZE, PIPE_CAP_HEIGHT, PIPE_GAP, PIPE_WIDTH, PipeData, useFlappyBird } from "./useFlappyBird";

const Pipe = ({ x, topHeight, gameHeight }: Pick<PipeData, "x" | "topHeight"> & { gameHeight: number }) => {
	const bottomPipeTop = topHeight + PIPE_GAP;
	const bottomPipeHeight = gameHeight - bottomPipeTop;
	return (
		<>
			{/* Top Pipe */}
			<div
				className="absolute"
				style={{
					left: x,
					top: 0,
					width: PIPE_WIDTH,
					height: topHeight
				}}>
				{/* Pipe body */}
				<div
					className="absolute w-full"
					style={{
						top: 0,
						height: topHeight - PIPE_CAP_HEIGHT,
						background: "linear-gradient(to right, #73bf2e 0%, #73bf2e 15%, #8ed43a 30%, #afe366 50%, #8ed43a 70%, #73bf2e 85%, #5a9c24 100%)",
						borderLeft: "3px solid #2a5510",
						borderRight: "3px solid #2a5510"
					}}
				/>
				{/* Pipe cap */}
				<div
					className="absolute w-full"
					style={{
						bottom: 0,
						height: PIPE_CAP_HEIGHT,
						left: -3,
						width: PIPE_WIDTH + 6,
						background: "linear-gradient(to right, #73bf2e 0%, #73bf2e 10%, #8ed43a 25%, #afe366 45%, #8ed43a 65%, #73bf2e 80%, #5a9c24 100%)",
						border: "3px solid #2a5510",
						borderRadius: "2px"
					}}
				/>
			</div>
			{/* Bottom Pipe */}
			<div
				className="absolute"
				style={{
					left: x,
					top: bottomPipeTop,
					width: PIPE_WIDTH,
					height: bottomPipeHeight
				}}>
				{/* Pipe cap */}
				<div
					className="absolute w-full"
					style={{
						top: 0,
						height: PIPE_CAP_HEIGHT,
						left: -3,
						width: PIPE_WIDTH + 6,
						background: "linear-gradient(to right, #73bf2e 0%, #73bf2e 10%, #8ed43a 25%, #afe366 45%, #8ed43a 65%, #73bf2e 80%, #5a9c24 100%)",
						border: "3px solid #2a5510",
						borderRadius: "2px"
					}}
				/>
				{/* Pipe body */}
				<div
					className="absolute w-full"
					style={{
						top: PIPE_CAP_HEIGHT,
						bottom: 0,
						background: "linear-gradient(to right, #73bf2e 0%, #73bf2e 15%, #8ed43a 30%, #afe366 50%, #8ed43a 70%, #73bf2e 85%, #5a9c24 100%)",
						borderLeft: "3px solid #2a5510",
						borderRight: "3px solid #2a5510"
					}}
				/>
			</div>
		</>
	);
};

const Bird = ({ x, y, velocity }: { x: number; y: number; velocity: number }) => {
	return (
		<div
			className="absolute"
			style={{
				left: x,
				top: y,
				width: BIRD_SIZE,
				height: BIRD_SIZE,
				transform: `rotate(${Math.max(-20, Math.min(90, velocity * 3))}deg)`
			}}>
			<FlappyBird className="h-full w-full object-contain" />
		</div>
	);
};

interface FlappyBirdGameProps {
	className?: string;
}

/**
 * Flappy Bird Game
 * Slightly less infuriating than the original ;)
 */
export const FlappyBirdGame = ({ className }: FlappyBirdGameProps) => {
	const { containerRef, dimensions, renderPipes, renderBirdY, velocity, score, highScore, gameState, jump } = useFlappyBird();
	return (
		<div
			ref={containerRef}
			className={`relative h-full w-full overflow-hidden bg-sky-300 select-none touch-none ${className}`}
			onPointerDown={(e) => {
				e.preventDefault();
				jump();
			}}>
			<div className="absolute bottom-10 left-10 h-12 w-24 rounded-full bg-white/40 blur-xl" />
			<div className="absolute top-20 right-20 h-16 w-32 rounded-full bg-white/30 blur-xl" />
			{renderPipes.map((pipe, i) => (
				<Pipe key={`pipe-${i}`} x={pipe.x} topHeight={pipe.topHeight} gameHeight={dimensions.height} />
			))}
			<div className="absolute bottom-0 z-20 h-4 w-full border-t-4 border-[#d4ce8c] bg-[#ded895]" />
			<Bird x={50} y={renderBirdY} velocity={velocity} />
			{gameState === "PLAYING" && (
				<div className="pointer-events-none absolute top-[10%] right-0 left-0 z-30 text-center">
					<span className="text-6xl text-white [text-shadow:2px_2px_0_#543847]" style={{ WebkitTextStroke: "2px #543847" }}>
						{score}
					</span>
				</div>
			)}
			<ControlsOverlay gameState={gameState} onStart={() => jump()} score={score} highScore={highScore} />
		</div>
	);
};
