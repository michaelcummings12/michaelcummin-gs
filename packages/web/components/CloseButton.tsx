import Link from "next/link";
import { FunctionComponent } from "react";
import { Close } from "./Icons";

interface CloseButtonProps {
	returnTo?: string;
}

export const CloseButton: FunctionComponent<CloseButtonProps> = ({ returnTo = "/" }) => (
	<div className="fixed top-0 right-0 z-50 p-4">
		{/* scroll={false}: keep the folder's window scroll position so closing morphs back to the card you left. */}
		<Link
			href={returnTo}
			scroll={false}
			className="flex size-12 items-center justify-center rounded-full border border-white/5 bg-gray-500/75 p-4 shadow backdrop-blur transition-all hover:scale-105 hover:shadow-lg active:scale-95 active:shadow">
			<Close className="h-full w-full fill-white" />
		</Link>
	</div>
);
