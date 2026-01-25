import { ButtonProps } from "@/types/button";
import clsx from "clsx/lite";
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
			className={clsx(
				className,
				justify,
				smaller ? "h-[36px] gap-2 rounded-xl px-4" : "h-[52px] gap-3 rounded-2xl px-4 md:px-6",
				"relative flex flex-row items-center overflow-hidden rounded-2xl py-2 font-medium transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
			)}>
			{children}
			{isLoading ? (
				<div className={clsx(loadingBg, "absolute z-10 h-full w-full")}>
					<div className="relative flex h-full w-full items-center justify-center">
						<LoadingDots background={loadingFill} />
					</div>
				</div>
			) : null}
			{icon ? <span className={clsx(smaller ? "w-[12px]" : "w-[16px]", "relative flex-shrink-0")}>{icon}</span> : null}
			<label htmlFor={props.id} className={clsx(smaller ? "text-xs" : "text-base md:text-lg", "cursor-pointer font-medium whitespace-nowrap text-inherit")}>
				{props.label}
			</label>
		</button>
	);
};
