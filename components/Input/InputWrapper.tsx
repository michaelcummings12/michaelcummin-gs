import clsx from "clsx";
import { FunctionComponent, PropsWithChildren } from "react";
import { FieldError } from "react-hook-form";
import { InputDescription } from "./InputDescription";

interface InputWrapperProps {
	cursor: string;
	description?: string;
	displayMessage?: boolean;
	error?: FieldError;
	height?: string;
}

export const InputWrapper: FunctionComponent<PropsWithChildren<InputWrapperProps>> = ({ children, cursor, displayMessage, description, error, height = "h-[56px]" }) => {
	return (
		<div className="flex flex-col gap-2">
			<div className={clsx(cursor, height, "rounded-2xl z-20 flex items-center relative w-full")}>{children}</div>
			<InputDescription description={description} error={error} displayMessage={displayMessage} />
		</div>
	);
};
