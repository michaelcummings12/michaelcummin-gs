import { ApiGateway, ExternalIcon, Fargate, Lambda, LightningBolt, MongoDb, Nextjs } from "@/components/Icons";
import { DefaultLink } from "@/components/Link";
import { ChicagoCareLogo } from "@/components/Logos";
import { ProjectPage } from "@/components/ProjectPage";
import { Technologies } from "@/types/project";
import { FunctionComponent } from "react";

const SITE_URL = "https://www.chicago.care/";

const Header: FunctionComponent = () => (
	<div className="flex flex-col gap-12 bg-white">
		<ChicagoCareLogo className="w-full h-12 md:h-16 drop-shadow" />
		<DefaultLink icon={<ExternalIcon className="h-full fill-white" />} className="bg-sky-400 text-white" href={SITE_URL} label="Visit Chicago.care" />
	</div>
);

const iconClass = "fill-sky-400 h-full w-full";
const technologies: Technologies = [
	{ name: "API Gateway", icon: <ApiGateway className={iconClass} /> },
	{ name: "AWS Fargate", icon: <Fargate className={iconClass} /> },
	{ name: "AWS Lambda", icon: <Lambda className={iconClass} /> },
	{ name: "MongoDB", icon: <MongoDb className={iconClass} /> },
	{ name: "Next.js", icon: <Nextjs className={iconClass} /> },
	{ name: "Server Side Rendering", icon: <LightningBolt className={iconClass} /> }
];

export default function Page() {
	return (
		<ProjectPage technologies={technologies} backgroundColor="bg-white" iconColor="bg-sky-400/20" iconShadow="shadow" url={SITE_URL} timeline="August 2022 - Present" language="TypeScript">
			<Header />
		</ProjectPage>
	);
}
