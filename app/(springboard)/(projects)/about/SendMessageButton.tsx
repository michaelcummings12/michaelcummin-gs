"use client";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

export const SendMessageButton: FunctionComponent = () => {
	const router = useRouter();
	const onClick = () => {
		router.push("/");
		// ¯\_(ツ)_/¯
		setTimeout(() => {
			router.push("/contact");
		}, 500);
	};
	return (
		<button onClick={onClick} className="text-blue-500 hover:text-blue-700 transition-all hover:underline">
			send me a message
		</button>
	);
};
