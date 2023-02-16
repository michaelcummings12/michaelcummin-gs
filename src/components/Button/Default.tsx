import clsx from "clsx";
import { FunctionComponent, PropsWithChildren } from "react";
import { ButtonProps } from ".";
import Loading from "../Loading";

export const DefaultButton: FunctionComponent<PropsWithChildren<ButtonProps>> = ({ children, className = "", loading, loadingColor = "bg-black", ...props }) => {
	return (
		<button className={clsx(className, "rounded font-bold px-6 py-3 transition-all active:scale-95 flex items-center justify-center h-[48px] shadow hover:scale-105 disabled:hover:scale-100 relative overflow-hidden cursor-pointer")} {...props}>
			{loading && (
				<div className="w-full h-full flex items-center justify-center absolute top-0 left-0 p-1 bg-inherit">
					<Loading className={loadingColor} />
				</div>
			)}
			{children}
		</button>
	);
};
