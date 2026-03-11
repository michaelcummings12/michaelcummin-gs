import { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement } from "react";

interface Button {
	disableHover?: boolean;
	icon?: ReactElement;
	isLoading?: boolean;
	label?: string;
	loadingFill?: string;
	loadingBg?: string;
	hoverColor?: string;
	justify?: string;
	smaller?: boolean;
	textColor?: string;
}

export type ButtonProps<T extends Record<string, unknown> = {}> = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & Button & T;
