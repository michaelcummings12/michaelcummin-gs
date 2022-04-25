import Link from "next/link";
import { FunctionComponent } from "react";
import StarrySky from "../../../StarrySky";
import { Button } from "../Button";
import { Logo } from "../Logo";

export const ProjectHeader: FunctionComponent = () => {
	return (
		<div className="h-full rounded-3xl shadow-gcnInset w-full border border-primary-500 p-12 flex items-center justify-center overflow-hidden relative">
			<div className="flex flex-col gap-12 z-20">
				<Logo className="h-full w-full fill-primary-500 max-h-[128px]" />
				<Link href="https://generalcomputing.io/">
					<a onClick={(e) => e.stopPropagation()}>
						<Button>Visit GeneralComputing.io</Button>
					</a>
				</Link>
			</div>
			<StarrySky />
		</div>
	);
};
