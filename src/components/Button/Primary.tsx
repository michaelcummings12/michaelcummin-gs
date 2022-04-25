import { FunctionComponent, PropsWithChildren } from "react";
import { ButtonProps } from ".";
import { cc } from "../../utils/cc";
import { DefaultButton } from "./Default";

export const PrimaryButton: FunctionComponent<PropsWithChildren<ButtonProps>> = ({ children, className = "", loading, ...props }) => {
	return (
		<DefaultButton className={cc(className, "background-gradient text-white-500")} loadingColor="bg-white-500" {...props}>
			{children}
		</DefaultButton>
	);
};
