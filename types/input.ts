import { DetailedHTMLProps, InputHTMLAttributes, Ref } from "react";
import { FieldError } from "react-hook-form";

interface Input {
	description?: string;
	error?: FieldError;
	label?: string;
	position?: "top" | "middle" | "bottom" | "row";
	ref?: Ref<HTMLInputElement> | undefined;
}

export type InputProps<T = unknown> = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & Input & T;
