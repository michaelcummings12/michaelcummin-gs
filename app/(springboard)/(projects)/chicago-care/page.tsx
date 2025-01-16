import { ApiGateway, ExternalIcon, Fargate, Lambda, LightningBolt, MongoDb, Nextjs } from "@/components/Icons";
import { DefaultLink } from "@/components/Link";
import { ChicagoCareLogo } from "@/components/Logos";
import { ProjectPage } from "@/components/ProjectPage";
import { Technologies } from "@/types/project";
import { FunctionComponent } from "react";

const SITE_URL = "https://www.chicago.care/";

const Header: FunctionComponent = () => (
	<div className="flex flex-col gap-12 bg-white">
		<ChicagoCareLogo className="h-full w-full max-h-[128px] drop-shadow" />
		<DefaultLink icon={<ExternalIcon className="h-full fill-white" />} className="bg-projects-cc text-white" href={SITE_URL} label="Visit Chicago.care" />
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
		<ProjectPage technologies={technologies} backgroundColor="bg-white" iconColor="bg-projects-cc/20" iconShadow="shadow" url={SITE_URL} timeline="August 2022 - Present" language="TypeScript">
			<Header />
		</ProjectPage>
	);
}
