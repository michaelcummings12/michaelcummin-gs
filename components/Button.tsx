import { ButtonProps } from "@/types/button";
import clsx from "clsx/lite";
import { FunctionComponent } from "react";
import { LoadingDots } from "./Loading";

export const DefaultButton: FunctionComponent<ButtonProps> = ({ justify = "justify-center", icon, children, className = "", disabled, isLoading, loadingBg, loadingFill, type = "button", smaller, ...props }) => {
	return (
		<button
			disabled={isLoading || disabled}
			{...props}
			type={type}
			className={clsx(
				className,
				justify,
				smaller ? "px-4 h-[36px] rounded-xl gap-2" : "px-4 md:px-6 h-[52px] rounded-2xl gap-3",
				"py-2 flex flex-row items-center relative overflow-hidden rounded-2xl transition-all font-medium focus-visible:focus-outline-primary-500"
			)}>
			{children}
			{isLoading ? (
				<div className={clsx(loadingBg, "absolute h-full w-full z-10")}>
					<div className="relative h-full w-full flex items-center justify-center">
						<LoadingDots background={loadingFill} />
					</div>
				</div>
			) : null}
			{icon ? <span className={clsx(smaller ? "w-[12px]" : "w-[16px]", "relative flex-shrink-0")}>{icon}</span> : null}
			<label htmlFor={props.id} className={clsx(smaller ? "text-xs" : "text-base md:text-lg", "font-medium whitespace-nowrap text-inherit cursor-pointer")}>
				{props.label}
			</label>
		</button>
	);
};
