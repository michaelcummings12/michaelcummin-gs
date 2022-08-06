import Head from "next/head";
import { FunctionComponent } from "react";
import { Technologies } from "../../../../types/project";
import { CloudFunctions, Firestore, Nextjs } from "../../../icons";
import { ProjectPage } from "../../../ProjectPage";
import { ProjectHeader } from "../ProjectHeader";

const ProjectTechnologies: Technologies = [
	{ name: "Firestore", icon: <Firestore className="fill-white h-full w-full" /> },
	{ name: "Firebase Cloud Functions", icon: <CloudFunctions className="fill-white h-full w-full" /> },
	{ name: "Next.js", icon: <Nextjs className="fill-white h-full w-full" /> }
];

export const ProjectContent: FunctionComponent = () => {
	return (
		<>
			<Head>
				<title>Breaking & Entering | Michael Cummings</title>
			</Head>
			<ProjectPage technologies={ProjectTechnologies} backgroundColor="bg-white" iconColor="bg-black" iconShadow="shadow-be" url="https://breaking-entering.com/" timeline="September 2021 - December 2021" language="TypeScript">
				<ProjectHeader />
			</ProjectPage>
		</>
	);
};
