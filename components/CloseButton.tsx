import Link from "next/link";
import { FunctionComponent } from "react";
import { CloseIcon } from "./Icons";

export const CloseButton: FunctionComponent = () => (
	<div className="absolute top-0 right-0 p-4 z-50">
		<Link href="/" className="p-4 border border-white/5 bg-gray-500/75 hover:shadow-lg active:shadow rounded-full transition-all shadow hover:scale-105 active:scale-95 h-[48px] w-[48px] flex items-center justify-center backdrop-blur">
			<CloseIcon className="fill-white h-full w-full" />
		</Link>
	</div>
);
