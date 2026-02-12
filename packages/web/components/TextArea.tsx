import { cn } from "@web/lib/cn";
import React from "react";
import { TextareaProps } from "../types/textarea";
import { InputWrapper } from "./Input/InputWrapper";

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function TextArea({ description, error, label, ...props }, ref) {
	const background = error ? "bg-error/10 peer-focus:bg-white" : "bg-white/90";
	const border = error ? "border-red-500 peer-focus:border-red-500" : "border-white/15 peer-focus:border-black";
	const borderRadius = "rounded-2xl";
	const labelColor = error ? "text-red-500 peer-placeholder-shown:text-red-500" : "text-black";
	const labelPosition = error
		? "scale-75 top-1 left-4 font-medium"
		: "scale-75 top-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:scale-75 left-4 peer-focus:font-medium";
	const placeholder = error ? label : " ";

	return (
		<InputWrapper description={description} error={error} displayMessage={true} cursor="text" height="h-full">
			<textarea
				{...props}
				ref={ref}
				placeholder={placeholder}
				className="peer z-10 block w-full appearance-none bg-transparent p-4 pt-6 pb-0 text-base text-black focus:outline-none"
			/>
			;
			<label htmlFor={props.id} className={cn(labelColor, labelPosition, "absolute z-20 origin-[0] text-base duration-300")}>
				{label}
			</label>
			<div
				className={cn(background, border, borderRadius, "absolute inset-0 z-0 h-full w-full border shadow transition-all peer-focus:rounded-2xl peer-focus:border-2")}
			/>
		</InputWrapper>
	);
});
