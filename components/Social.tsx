import Link from "next/link";
import { FunctionComponent } from "react";
import { EnvelopeIcon, Github, LinkedinIcon } from "./Icons";

const Social: FunctionComponent = () => {
	return (
		<div className="flex flex-row gap-4">
			<Link href="https://linkedin.com/in/michael-cummings-21b526124" className="rounded-xl bg-black p-2 shadow-md transition-all hover:scale-105 active:scale-95">
				<LinkedinIcon className="fill-white" height="32px" />
			</Link>
			<Link href="https://github.com/michaelcummings12" className="rounded-xl bg-black p-2 shadow-md transition-all hover:scale-105 active:scale-95">
				<Github className="fill-white" height="32px" />
			</Link>
			<a href="mailto:hello@michaelcummin.gs" className="rounded-xl bg-black p-2 shadow-md transition-all hover:scale-105 active:scale-95">
				<EnvelopeIcon className="fill-white" height="32px" />
			</a>
		</div>
	);
};

export default Social;
