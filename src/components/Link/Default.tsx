import clsx from "clsx";
import Link from "next/link";
import { FunctionComponent } from "react";
import { LinkProps } from "../../types/link";

export const DefaultLink: FunctionComponent<LinkProps> = ({ className = "", icon, href, ...props }) => {
	return (
		<Link href={href} {...props} className={clsx(className, "px-6 h-[48px] min-h-[48px]  max-h-[48px] flex flex-row gap-2 items-center align-center justify-center relative overflow-hidden rounded-2xl transition-all")}>
			{icon ? <span className="h-[16px] w-[16px] relative">{icon}</span> : null}
			{props.label ? (
				<label htmlFor={props.id} className="text-base font-medium whitespace-nowrap pointer-events-none">
					{props.label}
				</label>
			) : null}
		</Link>
	);
};
