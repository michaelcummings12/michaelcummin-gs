import Link from "next/link";
import { FunctionComponent } from "react";
import { EnvelopeIcon, Github, LinkedinIcon } from "./Icons";

const Social: FunctionComponent = () => {
	return (
		<div className="flex flex-row gap-4">
			<Link href="https://linkedin.com/in/michael-cummings-21b526124" className="bg-black rounded-xl p-2 hover:scale-105 active:scale-95 transition-all shadow-md">
				<LinkedinIcon className="fill-white" height="32px" />
			</Link>
			<Link href="https://github.com/michaelcummings12" className="bg-black rounded-xl p-2  hover:scale-105 active:scale-95 transition-all shadow-md">
				<Github className="fill-white" height="32px" />
			</Link>
			<a href="mailto:hello@michaelcummin.gs" className="bg-black rounded-xl p-2  hover:scale-105 active:scale-95 transition-all shadow-md">
				<EnvelopeIcon className="fill-white" height="32px" />
			</a>
		</div>
	);
};

export default Social;
