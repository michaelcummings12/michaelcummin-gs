import { FunctionComponent, PropsWithChildren } from "react";

export const Tile: FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
	return <div className="flex aspect-square max-w-full items-center justify-center p-4 lg:p-8">{children}</div>;
};
