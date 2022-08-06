import { FunctionComponent, PropsWithChildren } from "react";
import { cc } from "../../../../utils/cc";
import { ButtonProps, DefaultButton } from "../../../Button";

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({ children, className = "", loading, ...props }) => {
	return (
		<DefaultButton className={cc(className, "w-full background-gcn text-white")} loadingColor="bg-white" {...props}>
			{children}
		</DefaultButton>
	);
};
