"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

/** The rate at which the bird accelerates downwards (pixels per frame squared) */
const GRAVITY = 0.5;

/** The initial upward velocity applied when the bird jumps (pixels per frame) */
const JUMP_STRENGTH = -7;

/** The horizontal speed at which pipes move leftwards across the screen (pixels per frame) */
const PIPE_SPEED = 5;

/** The horizontal distance between the spawn point of consecutive pipes (in pixels) */
const PIPE_SPACING = 300;

/** The width and height of the bird's bounding box (in pixels) */
export const BIRD_SIZE = 50;

/** The maximum allowed vertical difference between consecutive pipe gaps to ensure playability */
const MAX_DELTA = 333;

/** The width of the vertical pipes (in pixels) */
export const PIPE_WIDTH = 67;

/** The height of the cap at the end of each pipe (in pixels) */
export const PIPE_CAP_HEIGHT = 33;

/** The vertical distance between the top pipe and bottom pipe (in pixels) */
export const PIPE_GAP = 212;

export interface PipeData {
	x: number;
	topHeight: number;
	passed: boolean;
}

export const useFlappyBird = () => {
	// Game Dimensions State
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const containerRef = useRef<HTMLDivElement>(null);

	// Game State exposed to React
	const [gameState, setGameState] = useState<"START" | "PLAYING" | "GAME_OVER">("START");
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useLocalStorage("flappyHighScore", 0);

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

	const spawnPipe = useCallback((height: number, width: number) => {
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
	}, []);

	const endGame = useCallback(() => {
		setGameState("GAME_OVER");
		if (reqRef.current) cancelAnimationFrame(reqRef.current);

		if (score > highScore) {
			setHighScore(score);
		}
	}, [score, highScore, setHighScore]);

	const gameLoop = useCallback(
		(timestamp: number) => {
			const { height, width } = dimensions;
			if (height === 0 || width === 0) {
				reqRef.current = requestAnimationFrame(gameLoop);
				return;
			}

			// Calculate delta time (scale factor relative to a target 60fps frame)
			if (lastTime.current === 0) lastTime.current = timestamp;
			const elapsed = timestamp - lastTime.current;
			lastTime.current = timestamp;
			// Normalize to 60fps: at 60fps each frame is ~16.67ms, so dt=1.0
			// Cap at 3 frames worth to avoid spiral of death on tab-switch
			const dt = Math.min(elapsed / 16.667, 3);

			// 1. Update Physics (scaled by delta time)
			velocity.current += GRAVITY * dt;
			birdY.current += velocity.current * dt;

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

			// 4. Update Pipes & Collision (pipe movement scaled by delta time)
			pipes.current.forEach((pipe) => {
				pipe.x -= PIPE_SPEED * dt;

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
		},
		[gameState, dimensions, spawnPipe, endGame]
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

	return {
		containerRef,
		dimensions,
		renderPipes,
		renderBirdY,
		velocity: velocity.current,
		score,
		highScore,
		gameState,
		jump
	};
};
