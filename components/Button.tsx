import { cn } from "@/lib/cn";
import { ButtonProps } from "@/types/button";
import { FunctionComponent } from "react";
import { LoadingDots } from "./Loading";

export const DefaultButton: FunctionComponent<ButtonProps> = ({
	justify = "justify-center",
	icon,
	children,
	className = "",
	disabled,
	isLoading,
	loadingBg,
	loadingFill,
	type = "button",
	smaller,
	...props
}) => {
	return (
		<button
			disabled={isLoading || disabled}
			{...props}
			type={type}
			className={cn(
				className,
				justify,
				smaller ? "h-9 gap-2 rounded-xl px-4" : "h-13 gap-3 rounded-2xl px-4 md:px-6",
				"relative flex flex-row items-center overflow-hidden rounded-2xl py-2 font-medium transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
			)}>
			{children}
			{isLoading ? (
				<div className={cn(loadingBg, "absolute z-10 h-full w-full")}>
					<div className="relative flex h-full w-full items-center justify-center">
						<LoadingDots background={loadingFill} />
					</div>
				</div>
			) : null}
			{icon ? <span className={cn(smaller ? "w-3" : "w-4", "relative shrink-0")}>{icon}</span> : null}
			<label htmlFor={props.id} className={cn(smaller ? "text-xs" : "text-base md:text-lg", "cursor-pointer font-medium whitespace-nowrap text-inherit")}>
				{props.label}
			</label>
		</button>
	);
};
