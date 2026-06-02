/**
 * Parses a GitHub URL and returns the owner and repo name.
 * Only matches repo-root URLs (github.com/owner/repo), not sub-paths like PRs or issues.
 */
export function parseGithubRepo(url: string): { owner: string; repo: string } | undefined {
	const parsed = new URL(url);
	if (!parsed.hostname.endsWith("github.com")) {
		return;
	}
	const segments = parsed.pathname.split("/").filter(Boolean);
	// Only match repo-root links (exactly 2 segments: owner/repo)
	if (segments.length !== 2) {
		return;
	}

	return { owner: segments[0], repo: segments[1] };
}
