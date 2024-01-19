export interface ButtonProps {
	className?: string;
	onClick?: any;
	type?: "submit" | "button" | "reset";
	disabled?: boolean;
	loading?: boolean;
	loadingColor?: string;
}

export { DefaultButton } from "./Default";
export { PrimaryButton } from "./Primary";
