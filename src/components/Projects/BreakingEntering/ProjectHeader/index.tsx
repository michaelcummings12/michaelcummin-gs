import { FunctionComponent } from "react";
import { Link } from "../Link";
import { Logo } from "../Logo";

export const ProjectHeader: FunctionComponent = () => {
	return (
		<div className="flex flex-col gap-12">
			<Logo className="h-full w-full fill-white max-h-[128px]" />
			<Link href="https://breaking-entering.com/" label="Visit Breaking-Entering.com"></Link>
		</div>
	);
};
