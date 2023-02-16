import clsx from "clsx";
import { FunctionComponent } from "react";
import { LinkProps } from "../../types/link";
import { DefaultLink } from "./Default";

export const PrimaryLink: FunctionComponent<LinkProps> = ({ className = "", ...props }) => {
	return <DefaultLink {...props} className={clsx(className, "border-2 border-primary-500 bg-primary-500 text-white shadow hover:shadow-lg")} />;
};
