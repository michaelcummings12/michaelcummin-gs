import { cn } from "@web/lib/cn";
import { InputProps } from "@web/types/input";
import React from "react";
import { fieldFill, fieldLabelColor, fieldLabelPosition, fieldRadius } from "./fieldStyles";
import { InputWrapper } from "./InputWrapper";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input({ description, error, label, position, ...props }, ref) {
	const hasError = !!error;
	const placeholder = hasError ? label : " ";

	return (
		<InputWrapper description={description} error={error} displayMessage={!position} cursor="text">
			<input
				{...props}
				ref={ref}
				placeholder={placeholder}
				className="peer z-10 block w-full appearance-none bg-transparent p-4 pb-0 text-base text-white caret-[#0071e3] focus:outline-none"
			/>
			<label htmlFor={props.id} className={cn(fieldLabelColor(hasError), fieldLabelPosition(hasError), "absolute z-20 origin-left text-base duration-300")}>
				{label}
			</label>
			<div className={cn(fieldFill(hasError), fieldRadius(position), "absolute inset-0 z-0 h-full w-full transition-all")} />
		</InputWrapper>
	);
});
