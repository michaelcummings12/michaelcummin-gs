import { cn } from "@web/lib/cn";
import React from "react";
import { TextareaProps } from "../types/textarea";
import { fieldFill, fieldLabelColor, fieldLabelPosition, fieldRadius } from "./Input/fieldStyles";
import { InputWrapper } from "./Input/InputWrapper";

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function TextArea({ description, error, label, ...props }, ref) {
	const hasError = !!error;
	const placeholder = hasError ? label : " ";

	return (
		<InputWrapper description={description} error={error} displayMessage={true} cursor="text" height="h-full">
			<textarea
				{...props}
				ref={ref}
				placeholder={placeholder}
				className="peer z-10 block w-full appearance-none bg-transparent p-4 pt-6 pb-0 text-base text-white caret-[#0071e3] focus:outline-none"
			/>
			<label htmlFor={props.id} className={cn(fieldLabelColor(hasError), fieldLabelPosition(hasError), "absolute z-20 origin-left text-base duration-300")}>
				{label}
			</label>
			<div className={cn(fieldFill(hasError), fieldRadius(), "absolute inset-0 z-0 h-full w-full transition-all")} />
		</InputWrapper>
	);
});
