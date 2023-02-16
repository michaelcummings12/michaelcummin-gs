import Head from "next/head";
import { FunctionComponent } from "react";
import { Technologies } from "../../../../types/project";
import { ApiGateway, Fargate, Lambda, LightningBolt, MongoDb, Nextjs } from "../../../icons";
import { ProjectPage } from "../../../ProjectPage";
import { ProjectHeader } from "../ProjectHeader";

const ProjectTechnologies: Technologies = [
	{ name: "API Gateway", icon: <ApiGateway className="fill-projects-cc h-full w-full" /> },
	{ name: "AWS Fargate", icon: <Fargate className="fill-projects-cc h-full w-full" /> },
	{ name: "AWS Lambda", icon: <Lambda className="fill-projects-cc h-full w-full" /> },
	{ name: "MongoDB", icon: <MongoDb className="fill-projects-cc h-full w-full" /> },
	{ name: "Next.js", icon: <Nextjs className="fill-projects-cc h-full w-full" /> },
	{ name: "Server Side Rendering", icon: <LightningBolt className="fill-projects-cc h-full w-full" /> }
];

export const ProjectContent: FunctionComponent = () => {
	return (
		<>
			<Head>
				<title>Chicago.care | Michael Cummings</title>
			</Head>
			<ProjectPage technologies={ProjectTechnologies} backgroundColor="bg-white" iconColor="bg-projects-cc/20" iconShadow="shadow" url="https://chicago.care/" timeline="August 2022 - Present" language="TypeScript">
				<ProjectHeader />
			</ProjectPage>
		</>
	);
};
