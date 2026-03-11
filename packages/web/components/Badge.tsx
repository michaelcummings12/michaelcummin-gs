import { cn } from "@web/lib/cn";
import { HTMLAttributes } from "react";

type BadgeColor = "default" | "base" | "blue" | "purple" | "green" | "red" | "yellow" | "gcn" | "experimental" | "blue-gradient" | "purple-gradient";

type BadgeSize = "default" | "sm";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
	color?: BadgeColor;
	size?: BadgeSize;
}

const colorVariants: Record<BadgeColor, string> = {
	"default": "bg-white/10 text-white border border-white/20",
	"base": "bg-gradient-to-br from-gray-500 to-gray-700 text-white",
	"blue": "bg-gradient-to-br from-blue-500 to-blue-700 text-white",
	"purple": "bg-gradient-to-br from-purple-500 to-purple-700 text-white",
	"green": "bg-gradient-to-br from-green-500 to-green-700 text-white",
	"red": "bg-gradient-to-br from-red-500 to-red-700 text-white",
	"yellow": "bg-gradient-to-br from-amber-500 to-amber-700 text-white",
	"gcn": "background-gcn text-white shadow-[var(--shadow-gcn)]",
	"experimental": "background-experimental text-white",
	"blue-gradient": "background-blue-gradient text-white",
	"purple-gradient": "background-purple-gradient text-white"
};

const sizeVariants: Record<BadgeSize, string> = {
	default: "px-2.5 py-1 text-sm",
	sm: "px-2 py-0.5 text-xs font-bold tracking-wider uppercase"
};

export const Badge = ({ color = "default", size = "default", className, children, ...props }: BadgeProps) => {
	return (
		<span
			className={cn(
				"inline-flex w-fit items-center justify-center rounded-full font-medium whitespace-nowrap transition-colors",
				colorVariants[color],
				sizeVariants[size],
				className
			)}
			{...props}>
			{children}
		</span>
	);
};
