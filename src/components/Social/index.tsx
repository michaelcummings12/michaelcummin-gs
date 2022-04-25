import Link from "next/link";
import { FunctionComponent } from "react";
import { EnvelopeIcon, Github, LinkedinIcon } from "../icons";

const Social: FunctionComponent<{ className?: string }> = ({ className = "text-white-500 hover:text-primary-500" }) => {
	return (
		<div className="flex flex-row gap-4">
			<Link href="https://linkedin.com/in/michael-cummings-21b526124">
				<a onClick={(e) => e.stopPropagation()}>
					<button className="bg-black rounded-xl p-2 hover:scale-105 active:scale-95 transition-all shadow-md">
						<LinkedinIcon className="fill-white-500" height="32px" />
					</button>
				</a>
			</Link>
			<Link href="https://github.com/michaelcummings12">
				<a onClick={(e) => e.stopPropagation()}>
					<div className="bg-black rounded-xl p-2  hover:scale-105 active:scale-95 transition-all shadow-md">
						<Github className="fill-white-500" height="32px" />
					</div>
				</a>
			</Link>
			<Link href="mailto:hello@michaelcummin.gs">
				<a onClick={(e) => e.stopPropagation()}>
					<div className="bg-black rounded-xl p-2  hover:scale-105 active:scale-95 transition-all shadow-md">
						<EnvelopeIcon className="fill-white-500" height="32px" />
					</div>
				</a>
			</Link>
		</div>
	);
};

export default Social;
