import { FunctionComponent } from "react";
import { Link } from "../Link";
import { Logo } from "../Logo";

export const ProjectHeader: FunctionComponent = () => {
	return (
		<div className="flex flex-col gap-12">
			<Logo className="h-full w-full max-h-[128px]" />
			<Link href="https://chicago.care/" label="Visit Chicago.care" />
		</div>
	);
};
