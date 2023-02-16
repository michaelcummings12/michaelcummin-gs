import { FunctionComponent } from "react";
import StarrySky from "../../../StarrySky";
import { Link } from "../Link";
import { Logo } from "../Logo";

export const ProjectHeader: FunctionComponent = () => {
	return (
		<div className="h-full rounded-3xl shadow-gcnInset w-full border border-projects-gcn-500 p-12 flex items-center justify-center overflow-hidden relative">
			<div className="flex flex-col gap-12 z-20">
				<Logo className="h-full w-full fill-projects-gcn-500 max-h-[128px]" />
				<Link href="https://generalcomputing.io/" label="Visit GeneralComputing.io" />
			</div>
			<StarrySky />
		</div>
	);
};
