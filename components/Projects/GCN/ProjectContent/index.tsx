import Head from "next/head";
import { FunctionComponent } from "react";
import { Technologies } from "../../../../types/project";
import { AppSync, Braintree, DynamoDb, GraphQl, Nextjs } from "../../../icons";
import { ProjectPage } from "../../../ProjectPage";
import { ProjectHeader } from "../ProjectHeader";

const ProjectTechnologies: Technologies = [
	{ name: "AWS AppSync", icon: <AppSync className="fill-projects-gcn-500 h-full w-full" /> },
	{ name: "AWS DynamoDB", icon: <DynamoDb className="fill-projects-gcn-500 h-full w-full" /> },
	{ name: "Braintree Payments", icon: <Braintree className="fill-projects-gcn-500 h-full w-full" /> },
	{ name: "GraphQL", icon: <GraphQl className="fill-projects-gcn-500 h-full w-full" /> },
	{ name: "Next.js", icon: <Nextjs className="fill-projects-gcn-500 h-full w-full" /> }
];

export const ProjectContent: FunctionComponent = () => {
	return (
		<>
			<Head>
				<title>General Computing | Michael Cummings</title>
			</Head>
			<ProjectPage technologies={ProjectTechnologies} iconColor="bg-projects-gcn-500/25" iconShadow="shadow-gcn" ariaColor="white" textColor="text-white" url="https://generalcomputing.io/" timeline="January 2022 - March 2022" language="TypeScript">
				<ProjectHeader />
			</ProjectPage>
		</>
	);
};
