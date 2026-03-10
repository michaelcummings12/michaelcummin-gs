/**
 * Calculates the angle of the hour hand on a 12-hour clock for the given time.
 *
 * Formula breakdown:
 * - Hour hand moves 360 degrees in 12 hours => 30 degrees per hour.
 * - Hour hand moves 30 degrees in 60 minutes => 0.5 degrees per minute.
 * - Hour hand moves 0.5 degrees in 60 seconds => ~0.00833 degrees per second.
 *
 * @param now Optional Date object (defaults to current time)
 * @returns Angle in degrees (0-360)
 */
export const sundialAngle = (now: Date = new Date()) => {
	const hours = now.getHours() % 12;
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	const milliseconds = now.getMilliseconds();
	return hours * 30 + minutes * 0.5 + (seconds + milliseconds / 1000) * 0.00833333;
};
