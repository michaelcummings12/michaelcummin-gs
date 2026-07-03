import { cn } from "@web/lib/cn";

interface MonogramLogoProps {
	/** Short text/initials to render (e.g. "CP", "DL") */
	text: string;
	className?: string;
}

/**
 * Temporary placeholder logo that renders scalable monogram text.
 * Color is driven by `currentColor`, so set a text-* class via `className`.
 */
export function MonogramLogo({ text, className }: MonogramLogoProps) {
	const fontSize = text.length > 2 ? 30 : 42;
	return (
		<svg viewBox="0 0 100 100" className={cn("font-sans", className)} xmlns="http://www.w3.org/2000/svg" role="img" aria-label={text}>
			<text x="50" y="52" textAnchor="middle" dominantBaseline="central" fontSize={fontSize} fontWeight={700} letterSpacing={-1} fill="currentColor">
				{text}
			</text>
		</svg>
	);
}
