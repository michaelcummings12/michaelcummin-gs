import { CloudFunctions, Firestore, Nextjs } from "@/components/icons";
import { DefaultLink } from "@/components/Link";
import { ProjectPage } from "@/components/ProjectPage";
import { Logo } from "@/components/Projects/BreakingEntering/Logo";
import { ExternalIcon } from "@/src/components/icons";
import { Technologies } from "@/types/project";
import { FunctionComponent } from "react";

const Header: FunctionComponent = () => (
	<div className="flex flex-col gap-12">
		<Logo className="h-full w-full fill-white max-h-[128px]" />
		<DefaultLink icon={<ExternalIcon className="h-full fill-blue-600" />} className="bg-white text-blue-600 w-full" href="https://breaking-entering.com/" label="Visit Breaking-Entering.com" />
	</div>
);

const technologies: Technologies = [
	{ name: "Firestore", icon: <Firestore className="fill-white h-full w-full" /> },
	{ name: "Firebase Cloud Functions", icon: <CloudFunctions className="fill-white h-full w-full" /> },
	{ name: "Next.js", icon: <Nextjs className="fill-white h-full w-full" /> }
];

export default function Page() {
	return (
		<ProjectPage technologies={technologies} backgroundColor="bg-white" headerColor="bg-blue-600" iconColor="bg-black" iconShadow="shadow-be" url="https://breaking-entering.com/" timeline="September 2021 - December 2021" language="TypeScript">
			<Header />
		</ProjectPage>
	);
}
