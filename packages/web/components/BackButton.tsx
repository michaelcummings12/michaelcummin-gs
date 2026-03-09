"use client";

import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";
import { ChevronLeft } from "./Icons";

export const BackButton: FunctionComponent = () => {
	const router = useRouter();
	const handleClick = () => router.back();
	return (
		<div className="fixed top-0 left-0 z-50 p-4">
			<button
				onClick={handleClick}
				className="flex size-12 items-center justify-center rounded-full border border-white/5 bg-gray-500/75 p-4 shadow backdrop-blur transition-all hover:scale-105 hover:shadow-lg active:scale-95 active:shadow">
				<ChevronLeft className="mr-1 h-full w-full fill-white" />
			</button>
		</div>
	);
};
