import clsx from "clsx";
import { FunctionComponent } from "react";
import { LinkProps } from "../../../../types/link";
import { DefaultLink } from "../../../Link";

export const Link: FunctionComponent<LinkProps> = ({ className = "", ...props }) => {
	return <DefaultLink className={clsx(className, "bg-projects-cc text-white hover:shadow-xl w-full")} {...props} onClick={(e) => e.stopPropagation()} />;
};
