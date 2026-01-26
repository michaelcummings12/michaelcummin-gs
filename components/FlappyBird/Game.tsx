"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ControlsOverlay } from "./ControlsOverlay";

// Game Constants
const GRAVITY = 0.25;
const JUMP_STRENGTH = -5.5;
const PIPE_SPEED = 3;
const PIPE_SPACING = 300; // px distance between pipes
const BIRD_SIZE = 30;
const MAX_DELTA = 333;

interface PipeData {
	x: number;
	topHeight: number;
	gap: number;
	passed: boolean;
}

/**
 * Flappy Bird Game
 * Slightly less infuriating than the original ;)
 *
 * Game logic generated with Google Gemini
 * UI generated using v0 by Vercel
 */
export const FlappyBirdGame = () => {
	// Game Dimensions State
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const containerRef = useRef<HTMLDivElement>(null);

	// Game State exposed to React
	const [gameState, setGameState] = useState<"START" | "PLAYING" | "GAME_OVER">("START");
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	// Physics State (Refs for performance/no-re-render loop)
	const birdY = useRef(0); // Initialize in useEffect
	const velocity = useRef(0);
	const pipes = useRef<PipeData[]>([]);
	const lastTime = useRef(0);
	const reqRef = useRef<number>(0);

	// Visual State (synced from refs on frame for rendering)
	const [renderBirdY, setRenderBirdY] = useState(0);
	const [renderPipes, setRenderPipes] = useState<PipeData[]>([]);

	// Handle Resize
	useEffect(() => {
		const handleResize = () => {
			if (containerRef.current) {
				const { clientWidth, clientHeight } = containerRef.current;
				setDimensions({ width: clientWidth, height: clientHeight });

				// Reset bird if not playing to center it
				if (gameState === "START") {
					birdY.current = clientHeight / 2;
					setRenderBirdY(clientHeight / 2);
				}
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize(); // Initial size

		return () => window.removeEventListener("resize", handleResize);
	}, [gameState]);

	// Initialization
	useEffect(() => {
		const stored = localStorage.getItem("flappyHighScore");
		if (stored) setHighScore(parseInt(stored));
	}, []);

	const spawnPipe = (time: number, height: number, width: number) => {
		const minPipeHeight = 50;
		const gap = 200; // Larger gap for full screen/easier play
		const maxTopHeight = height - gap - minPipeHeight - 50; // -50 for ground buffer

		if (maxTopHeight < minPipeHeight) return; // Screen too small

		let minH = minPipeHeight;
		let maxH = maxTopHeight;

		// Constrain based on previous pipe to ensure playability
		if (pipes.current.length > 0) {
			const lastPipe = pipes.current[pipes.current.length - 1];
			minH = Math.max(minPipeHeight, lastPipe.topHeight - MAX_DELTA);
			maxH = Math.min(maxTopHeight, lastPipe.topHeight + MAX_DELTA);
		}

		const topHeight = Math.floor(Math.random() * (maxH - minH + 1)) + minH;

		pipes.current.push({
			x: width,
			topHeight,
			gap,
			passed: false
		});
	};

	const endGame = () => {
		setGameState("GAME_OVER");
		if (reqRef.current) cancelAnimationFrame(reqRef.current);

		if (score > highScore) {
			setHighScore(score);
			localStorage.setItem("flappyHighScore", score.toString());
		}
	};

	const gameLoop = useCallback(
		(time: number) => {
			if (lastTime.current === 0) lastTime.current = time;
			// const delta = time - lastTime.current;
			lastTime.current = time;

			const { height, width } = dimensions;
			if (height === 0 || width === 0) {
				reqRef.current = requestAnimationFrame(gameLoop);
				return;
			}

			// 1. Update Physics
			velocity.current += GRAVITY;
			birdY.current += velocity.current;

			// 2. Check Boundaries
			const groundLevel = height;
			if (birdY.current > groundLevel - BIRD_SIZE) {
				birdY.current = groundLevel - BIRD_SIZE;
				endGame();
				return;
			}
			if (birdY.current < -BIRD_SIZE) {
				birdY.current = -BIRD_SIZE;
				velocity.current = 0;
			}

			// 3. Spawn Pipes
			if (pipes.current.length === 0 || width - pipes.current[pipes.current.length - 1].x >= PIPE_SPACING) {
				spawnPipe(time, height, width);
			}

			// 4. Update Pipes & Collision
			pipes.current.forEach((pipe) => {
				pipe.x -= PIPE_SPEED;

				// Collision Detection
				const birdLeft = 50 + 6;
				const birdRight = 50 + BIRD_SIZE - 6;
				const birdTop = birdY.current + 6;
				const birdBottom = birdY.current + BIRD_SIZE - 6;

				const pipeLeft = pipe.x;
				const pipeRight = pipe.x + 60; // Fixed pipe width
				const pipeTopRectBottom = pipe.topHeight;
				const pipeBottomRectTop = pipe.topHeight + pipe.gap;

				if (birdRight > pipeLeft && birdLeft < pipeRight) {
					if (birdTop < pipeTopRectBottom || birdBottom > pipeBottomRectTop) {
						endGame();
					}
				}

				if (!pipe.passed && birdLeft > pipeRight) {
					pipe.passed = true;
					setScore((s) => s + 1);
				}
			});

			// Cleanup off-screen pipes
			if (pipes.current.length > 0 && pipes.current[0].x < -100) {
				pipes.current.shift();
			}

			// 5. Render
			setRenderBirdY(birdY.current);
			setRenderPipes([...pipes.current]);

			if (gameState === "PLAYING") {
				reqRef.current = requestAnimationFrame(gameLoop);
			}
		},
		[gameState, score, highScore, dimensions]
	);

	useEffect(() => {
		if (gameState === "PLAYING") {
			lastTime.current = 0;
			reqRef.current = requestAnimationFrame(gameLoop);
		} else {
			if (reqRef.current) cancelAnimationFrame(reqRef.current);
		}
		return () => {
			if (reqRef.current) cancelAnimationFrame(reqRef.current);
		};
	}, [gameState, gameLoop]);

	const jump = useCallback(() => {
		if (gameState === "PLAYING") {
			velocity.current = JUMP_STRENGTH;
		} else {
			// Reset and Start
			birdY.current = dimensions.height / 2;
			velocity.current = 0;
			pipes.current = [];
			setScore(0);
			setRenderBirdY(dimensions.height / 2);
			setRenderPipes([]);
			setGameState("PLAYING");
			velocity.current = JUMP_STRENGTH;
		}
	}, [gameState, dimensions]);

	// Input Listeners
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.code === "Space") {
				e.preventDefault();
				jump();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [jump]);

	return (
		<div ref={containerRef} className="relative h-full w-full overflow-hidden bg-sky-300 select-none" onClick={jump}>
			{/* Background elements (responsive) */}
			<div className="absolute bottom-10 left-10 h-12 w-24 rounded-full bg-white/40 blur-xl" />
			<div className="absolute top-20 right-20 h-16 w-32 rounded-full bg-white/30 blur-xl" />

			{/* Pipes */}
			{renderPipes.map((pipe, i) => (
				<div key={`pipe-${i}`}>
					{/* Top Pipe */}
					<div
						className="absolute w-15 border-x-2 border-b-2 border-green-800 bg-green-500"
						style={{
							left: pipe.x,
							top: 0,
							height: pipe.topHeight,
							transition: "left 0 linear"
						}}>
						<div className="absolute bottom-0 -left-0.5 h-6 w-16 border-2 border-green-800 bg-green-500" />
					</div>

					{/* Bottom Pipe */}
					<div
						className="absolute w-15 border-x-2 border-t-2 border-green-800 bg-green-500"
						style={{
							left: pipe.x,
							top: pipe.topHeight + pipe.gap,
							bottom: 0,
							transition: "left 0 linear"
						}}>
						<div className="absolute top-0 -left-0.5 h-6 w-16 border-2 border-green-800 bg-green-500" />
					</div>
				</div>
			))}

			{/* Ground */}
			<div className="absolute bottom-0 z-20 h-4 w-full border-t-4 border-[#d4ce8c] bg-[#ded895]" />

			{/* Bird */}
			<div
				className="absolute z-10 flex items-center justify-center rounded-full border-2 border-black bg-yellow-400"
				style={{
					left: 50,
					top: renderBirdY,
					width: BIRD_SIZE,
					height: BIRD_SIZE,
					transform: `rotate(${Math.max(-20, Math.min(90, velocity.current * 3))}deg)`
				}}>
				<div className="absolute top-1 right-1 h-3 w-3 rounded-full border border-black bg-white">
					<div className="absolute top-1 right-0.5 h-1 w-1 rounded-full bg-black" />
				</div>
				<div className="absolute top-4 left-1 h-2 w-4 rounded-full bg-white/50" />
				<div className="absolute top-4 -right-2 h-2 w-3 rounded-r-md border border-black bg-orange-500" />
			</div>

			{/* Score */}
			<div className="pointer-events-none absolute top-10 right-0 left-0 z-30 text-center">
				<span className="font-mono text-5xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">{score}</span>
			</div>

			{/* Overlays */}
			<ControlsOverlay gameState={gameState} onStart={() => jump()} score={score} highScore={highScore} />
		</div>
	);
};
