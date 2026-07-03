import { cn } from "@web/lib/cn";
import { FunctionComponent, ReactNode } from "react";
import { External } from "./Icons";
import { DefaultLink } from "./Link";

interface ComingSoonProps {
	title: string;
	tagline: string;
	category?: string;
	logo: ReactNode;
	/** Tailwind background class for the page + logo tile */
	backgroundColor: string;
	/** Logo tile background (defaults to a subtle contrast surface) */
	logoBackground?: string;
	colorScheme?: "light" | "dark";
	/** External link to the live site */
	href?: string;
	/** Button label for the site link (defaults to "Visit site") */
	linkLabel?: string;
}

/**
 * Temporary placeholder shown for projects/packages without a full case study yet.
 */
export const ComingSoon: FunctionComponent<ComingSoonProps> = ({
	title,
	tagline,
	category,
	logo,
	backgroundColor,
	logoBackground,
	colorScheme = "dark",
	href,
	linkLabel = "Visit site"
}) => {
	const dark = colorScheme === "dark";
	return (
		<div className={cn("flex h-full w-full flex-col items-center justify-center gap-6 px-6 text-center", backgroundColor)}>
			<div
				className={cn(
					"flex size-24 items-center justify-center overflow-hidden rounded-3xl p-5 shadow-sm md:size-28",
					logoBackground ?? (dark ? "bg-white/10" : "bg-black/5")
				)}>
				{logo}
			</div>
			<div className="flex flex-col items-center gap-3">
				{category && (
					<span className={cn("rounded-full border px-3 py-1 text-xs font-medium tracking-wide", dark ? "border-white/15 text-white/60" : "border-black/10 text-black/50")}>
						{category}
					</span>
				)}
				<h1 className={cn("text-3xl font-semibold tracking-tight md:text-4xl", dark ? "text-white" : "text-neutral-900")}>{title}</h1>
				<p className={cn("max-w-md text-lg leading-relaxed", dark ? "text-white/60" : "text-neutral-600")}>{tagline}</p>
			</div>
			{href && (
				<DefaultLink
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className={cn("h-11! px-6! text-sm!", dark ? "bg-white text-neutral-900" : "bg-neutral-900 text-white")}
					icon={<External className="h-full fill-current" />}
					label={linkLabel}
				/>
			)}
		</div>
	);
};
