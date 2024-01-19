import clsx from "clsx";
import React, { FunctionComponent } from "react";
import { TextareaProps } from "../types/textarea";
import { InputWrapper } from "./Input/InputWrapper";

export const TextArea: FunctionComponent<TextareaProps> = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function TextArea({ description, error, label, ...props }, ref) {
	const background = error ? "bg-error-900 peer-focus:bg-white" : "bg-white/90";
	const border = error ? "border-red-500 peer-focus:border-red-500" : "border-white/15 peer-focus:border-primary-500";
	const borderRadius = "rounded-2xl";
	const labelColor = error ? "text-red-500 peer-placeholder-shown:text-red-500" : "text-black";
	const labelPosition = error ? "scale-75 top-1 left-4 font-medium" : "scale-75 top-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4 peer-focus:top-1 peer-focus:scale-75 left-4 peer-focus:font-medium";
	const placeholder = error ? label : " ";

	return (
		<InputWrapper description={description} error={error} displayMessage={true} cursor="text" height="h-full">
			<textarea {...props} ref={ref} placeholder={placeholder} className="p-4 pt-6 pb-0 block w-full bg-transparent appearance-none focus:outline-none peer text-base text-black z-10" />;
			<label htmlFor={props.id} className={clsx(labelColor, labelPosition, "absolute text-base duration-300 z-20 origin-[0]")}>
				{label}
			</label>
			<div className={clsx(background, border, borderRadius, "peer-focus:rounded-2xl peer-focus:border-2 absolute inset-0 border h-full w-full transition-all z-0 shadow")} />
		</InputWrapper>
	);
});
