export function readingTime(text: string): string {
	const wpm = 200;
	const words = text.trim().split(/\s+/).length;
	const time = Math.ceil(words / wpm);
	return `${time} min read`;
}
