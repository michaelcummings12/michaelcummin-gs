import { FunctionComponent, PropsWithChildren } from "react";
import { cc } from "../../../../utils/cc";
import { ButtonProps, DefaultButton } from "../../../Button";

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({ children, className = "", loading, ...props }) => {
	return (
		<DefaultButton className={cc(className, "bg-projects-cc text-white hover:shadow-xl w-full")} {...props}>
			{children}
		</DefaultButton>
	);
};
