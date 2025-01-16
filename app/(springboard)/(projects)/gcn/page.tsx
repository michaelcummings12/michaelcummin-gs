import { AppSync, Braintree, DynamoDb, ExternalIcon, GraphQl, Nextjs } from "@/components/Icons";
import { DefaultLink } from "@/components/Link";
import { GcnLogo } from "@/components/Logos";
import { ProjectPage } from "@/components/ProjectPage";
import StarrySky from "@/components/StarrySky";
import { Technologies } from "@/types/project";
import { FunctionComponent } from "react";

const SITE_URL = "https://www.generalcomputing.io/";

const Header: FunctionComponent = () => {
	return (
		<div className="h-full rounded-3xl shadow-gcnInset w-full border border-projects-gcn-500 p-12 flex items-center justify-center overflow-hidden relative">
			<div className="flex flex-col gap-12 z-20">
				<GcnLogo className="h-full w-full fill-projects-gcn-500 max-h-[128px]" />
				<DefaultLink icon={<ExternalIcon className="h-full fill-white" />} className="w-full background-gcn text-white" href={SITE_URL} label="Visit GeneralComputing.io" />
			</div>
			<StarrySky />
		</div>
	);
};

const technologies: Technologies = [
	{ name: "AWS AppSync", icon: <AppSync className="fill-projects-gcn-500 h-full w-full" /> },
	{ name: "AWS DynamoDB", icon: <DynamoDb className="fill-projects-gcn-500 h-full w-full" /> },
	{ name: "Braintree Payments", icon: <Braintree className="fill-projects-gcn-500 h-full w-full" /> },
	{ name: "GraphQL", icon: <GraphQl className="fill-projects-gcn-500 h-full w-full" /> },
	{ name: "Next.js", icon: <Nextjs className="fill-projects-gcn-500 h-full w-full" /> }
];

export default function Page() {
	return (
		<ProjectPage
			technologies={technologies}
			iconColor="bg-projects-gcn-500/25"
			backgroundColor="bg-projects-gcn-700"
			headerColor="bg-projects-gcn-700"
			iconShadow="shadow-gcn"
			ariaColor="white"
			textColor="text-white"
			url={SITE_URL}
			timeline="January 2022 - March 2022"
			language="TypeScript">
			<Header />
		</ProjectPage>
	);
}
