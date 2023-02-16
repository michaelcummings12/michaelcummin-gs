import clsx from "clsx";
import { FunctionComponent, PropsWithChildren } from "react";
import { ButtonProps } from ".";
import { DefaultButton } from "./Default";

export const PrimaryButton: FunctionComponent<PropsWithChildren<ButtonProps>> = ({ children, className = "", ...props }) => {
	return (
		<DefaultButton className={clsx(className, "background-gradient text-white")} loadingColor="bg-white" {...props}>
			{children}
		</DefaultButton>
	);
};
