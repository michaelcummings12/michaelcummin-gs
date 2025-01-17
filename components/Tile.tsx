import { FunctionComponent, PropsWithChildren } from "react";

export const Tile: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
	return <div className="flex items-center justify-center lg:p-8 p-4 max-w-full aspect-square">{children}</div>;
};
