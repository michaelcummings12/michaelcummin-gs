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
		<>
			<div className="shadow-gcnInset absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-blue-500 p-12" />
			<div className="z-20 flex flex-col gap-12">
				<GcnLogo className="h-12 w-full fill-blue-500 md:h-16" />
				<DefaultLink
					icon={<ExternalIcon className="h-full fill-white" />}
					className="background-gcn w-full text-white"
					href={SITE_URL}
					label="Visit GeneralComputing.io"
				/>
			</div>
			<StarrySky />
		</>
	);
};

const iconClass = "fill-blue-500 h-full w-full";
const technologies: Technologies = [
	{ name: "AWS AppSync", icon: <AppSync className={iconClass} /> },
	{ name: "AWS DynamoDB", icon: <DynamoDb className={iconClass} /> },
	{ name: "Braintree Payments", icon: <Braintree className={iconClass} /> },
	{ name: "GraphQL", icon: <GraphQl className={iconClass} /> },
	{ name: "Next.js", icon: <Nextjs className={iconClass} /> }
];

export default function Page() {
	return (
		<ProjectPage
			technologies={technologies}
			iconColor="bg-blue-500/25"
			backgroundColor="bg-slate-900"
			headerColor="bg-slate-900"
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
