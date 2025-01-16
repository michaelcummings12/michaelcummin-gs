"use client";
import { FunctionComponent, useMemo } from "react";
import { FieldError } from "react-hook-form";
import { CircleExclamation } from "../Icons";

interface InputDescriptionProps {
	description?: string | React.ReactNode;
	displayMessage?: boolean;
	error?: FieldError;
	errors?: (FieldError | undefined)[];
}

export const InputDescription: FunctionComponent<InputDescriptionProps> = ({ description, displayMessage = true, error, errors }) => {
	const filteredErrors = useMemo(() => (errors ? errors.flatMap((error) => (error === undefined ? [] : error)) : error ? [error] : []), [error, errors]);

	const messageElement = useMemo(() => {
		if (!displayMessage) return null;
		if (filteredErrors.length > 0) {
			return filteredErrors?.map((error, i) => (
				<div className="flex flex-row gap-2 items-center" key={`combo-input-error-${i}`}>
					<CircleExclamation className="h-[16px] fill-red-500" />
					<span className="text-xs md:text-sm text-red-500">{error?.message}</span>
				</div>
			));
		} else if (description) {
			return <span className="text-xs md:text-sm text-gray-400 dark:text-dark-100">{description}</span>;
		}
		return null;
	}, [description, displayMessage, filteredErrors]);

	return <>{messageElement}</>;
};
