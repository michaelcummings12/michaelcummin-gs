import { CloudFunctions, ExternalIcon, Firestore, Nextjs } from "@/components/Icons";
import { DefaultLink } from "@/components/Link";
import { BreakingEnteringLogo } from "@/components/Logos";
import { ProjectPage } from "@/components/ProjectPage";
import { Technologies } from "@/types/project";
import { FunctionComponent } from "react";

const SITE_URL = "https://www.breaking-entering.com/";

const Header: FunctionComponent = () => (
	<div className="flex flex-col gap-12">
		<BreakingEnteringLogo className="h-full w-full fill-white max-h-[128px]" />
		<DefaultLink icon={<ExternalIcon className="h-full fill-blue-600" />} className="bg-white text-blue-600 w-full" href={SITE_URL} label="Visit Breaking-Entering.com" />
	</div>
);

const technologies: Technologies = [
	{ name: "Firestore", icon: <Firestore className="fill-white h-full w-full" /> },
	{ name: "Firebase Cloud Functions", icon: <CloudFunctions className="fill-white h-full w-full" /> },
	{ name: "Next.js", icon: <Nextjs className="fill-white h-full w-full" /> }
];

export default function Page() {
	return (
		<ProjectPage technologies={technologies} backgroundColor="bg-white" headerColor="bg-blue-600" iconColor="bg-black" iconShadow="shadow-be" url={SITE_URL} timeline="September 2021 - December 2021" language="TypeScript">
			<Header />
		</ProjectPage>
	);
}
