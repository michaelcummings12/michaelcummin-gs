"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FlappyBirdLogo } from "../Logos/FlappyBird";
import { ControlsOverlay } from "./ControlsOverlay";

// Game Constants
const GRAVITY = 0.25;
const JUMP_STRENGTH = -5.5;
const PIPE_SPEED = 3.33;
const PIPE_SPACING = 300; // px distance between pipes
const BIRD_SIZE = 50;
const MAX_DELTA = 333;
const PIPE_WIDTH = 67;
const PIPE_CAP_HEIGHT = 33;
const PIPE_GAP = 212;

interface PipeData {
	x: number;
	topHeight: number;
	passed: boolean;
}

// Pipe Component with classic green styling
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
			<FlappyBirdLogo className="h-full w-full object-contain" />
		</div>
	);
};

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

	const spawnPipe = (height: number, width: number) => {
		const minPipeHeight = 50;
		const maxTopHeight = height - PIPE_GAP - minPipeHeight - 50; // -50 for ground buffer

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

	const gameLoop = useCallback(() => {
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
			spawnPipe(height, width);
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
			const pipeRight = pipe.x + PIPE_WIDTH;
			const pipeTopRectBottom = pipe.topHeight;
			const pipeBottomRectTop = pipe.topHeight + PIPE_GAP;

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
	}, [gameState, score, highScore, dimensions]);

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
				<Pipe key={`pipe-${i}`} x={pipe.x} topHeight={pipe.topHeight} gameHeight={dimensions.height} />
			))}

			{/* Ground */}
			<div className="absolute bottom-0 z-20 h-4 w-full border-t-4 border-[#d4ce8c] bg-[#ded895]" />

			{/* Bird */}
			<Bird x={50} y={renderBirdY} velocity={velocity.current} />

			{/* Score */}
			<div className="pointer-events-none absolute top-10 right-0 left-0 z-30 text-center">
				<span className="text-6xl font-bold text-white" style={{ WebkitTextStroke: "2px black" }}>
					{score}
				</span>
			</div>

			{/* Overlays */}
			<ControlsOverlay gameState={gameState} onStart={() => jump()} score={score} highScore={highScore} />
		</div>
	);
};
