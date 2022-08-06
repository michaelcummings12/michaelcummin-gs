import Head from "next/head";
import { FunctionComponent } from "react";
import { Technologies } from "../../../../types/project";
import { Express, Fargate, Lambda, MongoDb, Nextjs } from "../../../icons";
import { ProjectPage } from "../../../ProjectPage";
import { ProjectHeader } from "../ProjectHeader";

const ProjectTechnologies: Technologies = [
	{ name: "AWS Fargate", icon: <Fargate className="fill-black h-full w-full" /> },
	{ name: "AWS Lambda", icon: <Lambda className="fill-black h-full w-full" /> },
	{ name: "Express.js", icon: <Express className="fill-black h-full w-full" /> },
	{ name: "MongoDB", icon: <MongoDb className="fill-black h-full w-full" /> },
	{ name: "Next.js", icon: <Nextjs className="fill-black h-full w-full" /> }
];

export const ProjectContent: FunctionComponent = () => {
	return (
		<>
			<Head>
				<title>ShareHouse | Michael Cummings</title>
			</Head>
			<ProjectPage technologies={ProjectTechnologies} backgroundColor="bg-white" iconColor="bg-white border border-gray-100" iconShadow="shadow-xl" ariaColor="black" url="https://sharehousestorage.com/" timeline="June 2020 - January 2021" language="JavaScript">
				<ProjectHeader />
			</ProjectPage>
		</>
	);
};
