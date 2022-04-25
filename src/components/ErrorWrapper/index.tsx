import { FunctionComponent, PropsWithChildren } from "react";
import { FieldError, LiteralUnion, RegisterOptions } from "react-hook-form";
import { cc } from "../../utils/cc";

interface ErrorWrapperProps {
	className?: string;
	error: FieldError | undefined;
	name: string;
}
const ErrorMessages: LiteralUnion<keyof RegisterOptions, any> = {
	pattern: "is not valid.",
	min: "",
	max: "",
	maxLength: "",
	minLength: "",
	required: "is required.",
	validate: "",
	valueAsNumber: "",
	valueAsDate: "",
	value: "",
	setValueAs: "",
	shoudlUnregister: "",
	onChange: "",
	onBlur: "",
	disabled: "",
	deps: ""
};

const ErrorWrapper: FunctionComponent<PropsWithChildren<ErrorWrapperProps>> = ({ className = "", children, error, name }) => {
	return (
		<div className={cc(className, "flex flex-col w-full gap-1")}>
			{children}
			{error && <p className="text-error">{`${name} ${ErrorMessages[error.type]}`}</p>}
		</div>
	);
};

export default ErrorWrapper;
