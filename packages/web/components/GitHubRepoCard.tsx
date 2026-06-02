"use client";

import { cn } from "@web/lib/cn";
import { useEffect, useState } from "react";
import { ChevronLeft, Github } from "./Icons";

interface GitHubRepoStats {
	stars: number;
	forks: number;
	language: string | null;
	description: string | null;
}

interface GitHubRepoCardProps {
	owner: string;
	repo: string;
	href: string;
	className?: string;
}

/** Formats a number with k/M suffix for compact display. */
function formatCount(n: number): string {
	if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
	if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
	return n.toString();
}

/**
 * A rich card component for GitHub repository links.
 * Fetches live stats (stars, forks, language) from the GitHub API on mount.
 */
export function GitHubRepoCard({ owner, repo, href, className }: GitHubRepoCardProps) {
	const [stats, setStats] = useState<GitHubRepoStats | null>(null);

	useEffect(() => {
		let cancelled = false;

		fetch(`https://api.github.com/repos/${owner}/${repo}`)
			.then((res) => (res.ok ? res.json() : null))
			.then((data) => {
				if (cancelled || !data) return;
				setStats({
					stars: data.stargazers_count,
					forks: data.forks_count,
					language: data.language,
					description: data.description
				});
			})
			.catch(() => {});

		return () => {
			cancelled = true;
		};
	}, [owner, repo]);

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={cn(
				"group my-6 flex items-center gap-4 rounded-2xl border border-zinc-700/50 bg-zinc-800/50 px-5 py-4",
				"transition-all duration-300 ease-out",
				"hover:border-zinc-600 hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-900/50",
				"no-underline",
				className
			)}>
			<span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-zinc-700/50 transition-colors duration-300 group-hover:bg-zinc-700">
				<Github className="size-5 fill-zinc-300 transition-colors duration-300 group-hover:fill-white" />
			</span>
			<span className="flex min-w-0 flex-col gap-0.5">
				<span className="text-sm text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400">{owner}</span>
				<span className="truncate font-medium text-zinc-200 transition-colors duration-300 group-hover:text-white">{repo}</span>
			</span>
			{stats && (
				<span className="ml-auto flex shrink-0 items-center gap-3 text-sm text-zinc-500">
					{/* Stars */}
					<span className="flex items-center gap-1 transition-colors duration-300 group-hover:text-amber-400/80">
						<svg className="size-4" viewBox="0 0 16 16" fill="currentColor">
							<path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
						</svg>
						{formatCount(stats.stars)}
					</span>
					{/* Forks */}
					<span className="flex items-center gap-1 transition-colors duration-300 group-hover:text-zinc-400">
						<svg className="size-4" viewBox="0 0 16 16" fill="currentColor">
							<path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
						</svg>
						{formatCount(stats.forks)}
					</span>
					{/* Language dot */}
					{stats.language && (
						<span className="flex items-center gap-1.5 transition-colors duration-300 group-hover:text-zinc-400">
							<span className="size-2.5 rounded-full bg-blue-400" />
							{stats.language}
						</span>
					)}
				</span>
			)}
			{!stats && (
				<span className="ml-auto shrink-0">
					<ChevronLeft className="h-4 rotate-180 fill-zinc-600 transition-all group-hover:translate-x-0.5 group-hover:text-zinc-400" />
				</span>
			)}
		</a>
	);
}
