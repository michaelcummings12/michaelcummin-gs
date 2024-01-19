import { DetailedHTMLProps, Ref, TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface Textarea {
	description?: string;
	error?: FieldError;
	label?: string;
	ref?: Ref<HTMLTextAreaElement> | undefined;
}

export type TextareaProps<T = unknown> = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & Textarea & T;
