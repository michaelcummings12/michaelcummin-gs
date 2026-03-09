/**
 * Takes a
 */
export function prettyDate(date: Date) {
	const now = new Date();
	const diffMs = now.getTime() - date.getTime();
	const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
	if (diffDays === 0) {
		return "Today";
	}
	if (diffDays === 1) {
		return "Yesterday";
	}
	if (diffDays < 7) {
		return `${diffDays} days ago`;
	}

	return date.toLocaleDateString(undefined, {
		month: "long",
		day: "numeric",
		year: "numeric"
	});
}
