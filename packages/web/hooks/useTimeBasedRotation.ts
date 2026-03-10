import { sundialAngle } from "@web/lib/sundialAngle";
import { useEffect, useState } from "react";

/**
 * Calculates the absolute rotation based on the current time.
 * Includes a slow 20s rotation on top of the actual time of day.
 */
export function getAbsoluteRotation(offset: number = 0) {
	const now = Date.now();
	const spin = ((now % 20000) / 20000) * 360;
	return sundialAngle(new Date(now)) + offset + spin;
}

/**
 * Returns a React state value that updates on every animation frame
 * to perfectly sync time-based rotation across components.
 */
export function useTimeBasedRotation(offset: number = 0) {
	const [rotation, setRotation] = useState(() => getAbsoluteRotation(offset));
	useEffect(() => {
		let frameId: number;
		const updateRotation = () => {
			setRotation(getAbsoluteRotation(offset));
			frameId = requestAnimationFrame(updateRotation);
		};
		frameId = requestAnimationFrame(updateRotation);
		return () => cancelAnimationFrame(frameId);
	}, [offset]);
	return rotation;
}
