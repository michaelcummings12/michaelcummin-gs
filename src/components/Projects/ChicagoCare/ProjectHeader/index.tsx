import Link from "next/link";
import React, { FunctionComponent } from "react";
import { Button } from "../Button";
import { Logo } from "../Logo";

export const ProjectHeader: FunctionComponent = () => {
	return (
		<div className="flex flex-col gap-12">
			<Logo className="h-full w-full fill-white max-h-[128px]" />
			<Link href="https://chicago.care/">
				<a onClick={(e) => e.stopPropagation()}>
					<Button>Visit Chicago.care</Button>
				</a>
			</Link>
		</div>
	);
};
