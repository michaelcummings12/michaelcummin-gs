import { cn } from "@web/lib/cn";
import { FunctionComponent } from "react";

interface LoadingProps {
	background?: string;
}

export const LoadingDots: FunctionComponent<LoadingProps> = ({ background = "bg-white" }) => {
	const circle = "block w-2 h-2 rounded-full";

	return (
		<div className="flex gap-2">
			<span className={cn(background, circle, "animate-bounce")}></span>
			<span className={cn(background, circle, "animate-bounce200")}></span>
			<span className={cn(background, circle, "animate-bounce400")}></span>
		</div>
	);
};
