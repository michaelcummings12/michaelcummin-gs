import { FunctionComponent, PropsWithChildren } from "react";
import { cc } from "../../../../utils/cc";
import { ButtonProps, DefaultButton } from "../../../Button";

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({ children, className = "", loading, ...props }) => {
	return (
		<DefaultButton className={cc(className, "bg-black text-white border-2 border-white hover:bg-white hover:text-black w-full")} loadingColor="bg-white" {...props}>
			{children}
		</DefaultButton>
	);
};
