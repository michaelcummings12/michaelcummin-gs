import { FunctionComponent, PropsWithChildren } from "react";
import { cc } from "../../../../utils/cc";
import { ButtonProps, DefaultButton } from "../../../Button";

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({ children, className = "", loading, ...props }) => {
	return (
		<DefaultButton className={cc(className, "bg-black text-white-500 border-2 border-white-500 hover:bg-white-500 hover:text-black w-full")} loadingColor="bg-white-500" {...props}>
			{children}
		</DefaultButton>
	);
};
