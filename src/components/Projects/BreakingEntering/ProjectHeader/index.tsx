import Link from "next/link";
import React, { FunctionComponent } from "react";
import { Button } from "../Button";
import { Logo } from "../Logo";

export const ProjectHeader: FunctionComponent = () => {
	return (
		<div className="flex flex-col gap-12">
			<Logo className="h-full w-full fill-white-500 max-h-[128px]" />
			<Link href="https://breaking-entering.com/">
				<a onClick={(e) => e.stopPropagation()}>
					<Button>Visit Breaking-Entering.com</Button>
				</a>
			</Link>
		</div>
	);
};
