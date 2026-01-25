"use client";
import { animate } from "animejs";
import { FunctionComponent, useEffect, useMemo, useRef, useState } from "react";

/**
 * Animates the stars to fade in and out.
 */
const animateStars = () => {
	const targets = ["#sky .star"];
	if (document.querySelectorAll(targets[0]).length === 0) {
		return;
	}

	animate(targets, {
		keyframes: [
			{ opacity: 0, duration: 1000 },
			{ opacity: 1, duration: 1000 }
		],
		easing: "linear",
		loop: true,
		delay: (_, i) => 500 * i
	});
};

/**
 * Animates the shooting stars across the sky.
 */
const animateShootingStars = () => {
	const targets = ["#shootingstars .wish"];
	if (document.querySelectorAll(targets[0]).length === 0) {
		return;
	}

	animate(targets, {
		keyframes: [
			{ opacity: 0.67, width: "150px", translateX: 100, duration: 400 },
			{ opacity: 0, width: "0px", translateX: 350, duration: 800 }
		],
		easing: "linear",
		loop: true,
		delay: (_, i) => 2000 * i
	});
};

/**
 * Generates a random radius for a star.
 */
const randomRadius = () => Math.random() * 0.7 + 0.6;

/**
 * Generates a random x coordinate for a star.
 */
const randomX = (vw: number) => Math.floor(Math.random() * Math.floor(vw)).toString();

/**
 * Generates a random y coordinate for a star.
 */
const randomY = (vh: number) => Math.floor(Math.random() * Math.floor(vh)).toString();

const StarrySky: FunctionComponent = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const numStars = useMemo(() => Math.round(Math.max(dimensions.width || 0) / 10), [dimensions.width]);
	/**
	 * Generates the stars.
	 */
	const stars = useMemo(() => {
		if (dimensions.width === 0 || dimensions.height === 0) {
			return [];
		}

		return Array.from({ length: numStars }).map((_, i) => (
			<circle cx={randomX(dimensions.width)} cy={randomY(dimensions.height)} r={randomRadius()} stroke="none" strokeWidth="0" fill="white" key={i} className="star" />
		));
	}, [numStars, dimensions.width, dimensions.height]);
	/**
	 * Generates the shooting stars.
	 */
	const shootingStars = useMemo(() => {
		if (dimensions.width === 0 || dimensions.height === 0) {
			return [];
		}

		return Array.from({ length: numStars / 4 }).map((_, i) => (
			<div
				key={i}
				className="wish absolute h-0.5 rounded-full bg-linear-to-br from-blue-500 to-indigo-500 drop-shadow-white"
				style={{
					left: `${randomY(dimensions.width)}px`,
					top: `${randomX(dimensions.height)}px`
				}}
			/>
		));
	}, [numStars, dimensions.width, dimensions.height]);
	/**
	 * Animates the stars and shooting stars.
	 */
	useEffect(() => {
		if (stars.length > 0) {
			animateStars();
		}
		if (shootingStars.length > 0) {
			animateShootingStars();
		}
	}, [stars, shootingStars]);
	/**
	 * Updates the dimensions of the container when the window is resized.
	 */
	useEffect(() => {
		if (!containerRef.current) {
			return;
		}

		const handleResize = (entries: ResizeObserverEntry[]) => {
			for (const entry of entries) {
				const { width, height } = entry.contentRect;
				setDimensions({ width, height });
			}
		};
		const observer = new ResizeObserver(handleResize);
		observer.observe(containerRef.current);
		return () => {
			observer.disconnect();
		};
	}, []);
	return (
		<div ref={containerRef} className="absolute inset-0 z-0 h-full w-full overflow-hidden">
			<svg id="sky" className="absolute inset-0 h-full w-full">
				{stars}
			</svg>
			<div id="shootingstars" className="absolute inset-0 h-full w-full rotate-45">
				{shootingStars}
			</div>
		</div>
	);
};

export default StarrySky;
