import { ApiGateway, Fargate, Lambda, LightningBolt, MongoDb, Nextjs } from "@/components/icons";
import { DefaultLink } from "@/components/Link";
import { ProjectPage } from "@/components/ProjectPage";
import { Logo } from "@/components/Projects/ChicagoCare/Logo";
import { ExternalIcon } from "@/src/components/icons";
import { Technologies } from "@/types/project";
import { FunctionComponent } from "react";

const Header: FunctionComponent = () => (
	<div className="flex flex-col gap-12 bg-white">
		<Logo className="h-full w-full max-h-[128px]" />
		<DefaultLink icon={<ExternalIcon className="h-full fill-white" />} className="bg-projects-cc text-white" href="https://chicago.care/" label="Visit Chicago.care" />
	</div>
);

const technologies: Technologies = [
	{ name: "API Gateway", icon: <ApiGateway className="fill-projects-cc h-full w-full" /> },
	{ name: "AWS Fargate", icon: <Fargate className="fill-projects-cc h-full w-full" /> },
	{ name: "AWS Lambda", icon: <Lambda className="fill-projects-cc h-full w-full" /> },
	{ name: "MongoDB", icon: <MongoDb className="fill-projects-cc h-full w-full" /> },
	{ name: "Next.js", icon: <Nextjs className="fill-projects-cc h-full w-full" /> },
	{ name: "Server Side Rendering", icon: <LightningBolt className="fill-projects-cc h-full w-full" /> }
];

export default function Page() {
	return (
		<ProjectPage technologies={technologies} backgroundColor="bg-white" iconColor="bg-projects-cc/20" iconShadow="shadow" url="https://chicago.care/" timeline="August 2022 - Present" language="TypeScript">
			<Header />
		</ProjectPage>
	);
}
