import clsx from "clsx";
import { FunctionComponent } from "react";
import { LinkProps } from "../../../../types/link";
import { DefaultLink } from "../../../Link";

export const Link: FunctionComponent<LinkProps> = ({ className = "", ...props }) => {
	return <DefaultLink className={clsx(className, "bg-black text-white border-2 border-white hover:bg-white hover:text-black w-full")} {...props} onClick={(e) => e.stopPropagation()} />;
};
