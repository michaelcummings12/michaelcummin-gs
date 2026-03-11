import { AnchorHTMLAttributes, DetailedHTMLProps, Ref } from "react";

interface Link {
	label: string;
	icon?: React.ReactNode;
	href: string;
	ref?: Ref<HTMLAnchorElement> | undefined;
}

export type LinkProps<T = unknown> = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & Link & T;
