import clsx from "clsx";
import { FunctionComponent } from "react";
import { LinkProps } from "../../../../types/link";
import { DefaultLink } from "../../../Link";

export const Link: FunctionComponent<LinkProps> = ({ className = "", ...props }) => {
	return <DefaultLink className={clsx(className, "w-full background-gcn text-white")} {...props} onClick={(e) => e.stopPropagation()} />;
};
