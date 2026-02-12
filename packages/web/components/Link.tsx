import { cn } from "@web/lib/cn";
import Link from "next/link";
import { FunctionComponent } from "react";
import { LinkProps } from "../types/link";

export const DefaultLink: FunctionComponent<LinkProps> = ({ className = "", icon, href, ...props }) => {
	return (
		<Link
			href={href}
			{...props}
			className={cn(
				className,
				"relative flex h-14 flex-row items-center justify-center gap-2 overflow-hidden rounded-2xl px-6 transition-all hover:scale-105 hover:shadow-lg active:scale-95 active:shadow"
			)}>
			{icon ? <span className="relative h-4 w-4">{icon}</span> : null}
			{props.label ? (
				<label htmlFor={props.id} className="pointer-events-none text-base font-medium whitespace-nowrap">
					{props.label}
				</label>
			) : null}
		</Link>
	);
};
