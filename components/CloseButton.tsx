import Link from "next/link";
import { FunctionComponent } from "react";
import { CloseIcon } from "./Icons";

interface CloseButtonProps {
	returnTo?: string;
}

export const CloseButton: FunctionComponent<CloseButtonProps> = ({ returnTo = "/" }) => (
	<div className="absolute top-0 right-0 z-50 p-4">
		<Link
			href={returnTo}
			className="flex size-12 items-center justify-center rounded-full border border-white/5 bg-gray-500/75 p-4 shadow backdrop-blur transition-all hover:scale-105 hover:shadow-lg active:scale-95 active:shadow">
			<CloseIcon className="h-full w-full fill-white" />
		</Link>
	</div>
);
