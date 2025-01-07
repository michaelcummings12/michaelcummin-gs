import clsx from "clsx";
import Link from "next/link";
import { FunctionComponent } from "react";
import { LinkProps } from "../../types/link";

export const DefaultLink: FunctionComponent<LinkProps> = ({ className = "", icon, href, ...props }) => {
	return (
		<Link href={href} {...props} className={clsx(className, "px-6 h-14 flex flex-row gap-2 items-center justify-center relative overflow-hidden rounded-2xl transition-all hover:scale-105 active:scale-95 hover:shadow-lg active:shadow")}>
			{icon ? <span className="h-4 w-4 relative">{icon}</span> : null}
			{props.label ? (
				<label htmlFor={props.id} className="text-base font-medium whitespace-nowrap pointer-events-none">
					{props.label}
				</label>
			) : null}
		</Link>
	);
};
