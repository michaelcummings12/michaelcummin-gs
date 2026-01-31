import { CaseStudy } from "@/components/CaseStudy";
import { ApiGateway, ExternalIcon, Fargate, Lambda, LightningBolt, MongoDb, Nextjs } from "@/components/Icons";
import { DefaultLink } from "@/components/Link";
import { ChicagoCareLogo } from "@/components/Logos";
import { Metadata } from "next";
import { FunctionComponent } from "react";

export const metadata: Metadata = {
	title: "Chicago.care",
	description: "Community resource finder"
};

const SITE_URL = "https://www.chicago.care/";

const Header: FunctionComponent = () => (
	<div className="flex flex-col gap-12 bg-white">
		<ChicagoCareLogo className="h-12 w-full drop-shadow md:h-16" />
		<DefaultLink icon={<ExternalIcon className="h-full fill-white" />} className="bg-sky-400 text-white" href={SITE_URL} label="Visit Chicago.care" />
	</div>
);

const iconClass = "fill-sky-400 h-full w-full";

export default function Page() {
	return (
		<CaseStudy
			title="Chicago.care"
			logo={<ChicagoCareLogo className="h-full w-full drop-shadow" />}
			description="Chicago.care is a community-driven resource finder helping residents connect with essential services. It simplifies access to local support systems through an intuitive and accessible interface."
			role="Full Stack Architect handling the cloud infrastructure on AWS, database design with MongoDB, and frontend implementation using Next.js."
			timeline="August 2022 - Present"
			url={SITE_URL}
			urlLabel="Visit Chicago.care"
			urlClassName="bg-sky-400 text-white"
			language="TypeScript"
			technologies={[
				{ name: "API Gateway", icon: <ApiGateway className={iconClass} /> },
				{ name: "AWS Fargate", icon: <Fargate className={iconClass} /> },
				{ name: "AWS Lambda", icon: <Lambda className={iconClass} /> },
				{ name: "MongoDB", icon: <MongoDb className={iconClass} /> },
				{ name: "Next.js", icon: <Nextjs className={iconClass} /> },
				{ name: "Server Side Rendering", icon: <LightningBolt className={iconClass} /> }
			]}
			features={[
				"Comprehensive search for community resources",
				"Server-side rendering for optimal SEO and performance",
				"Scalable microservices architecture using AWS Lambda and Fargate",
				"Robust API management via AWS API Gateway"
			]}
			challengesAndSolutions={[
				{
					challenge: "Integrating diverse data sources into a unified, searchable format.",
					solution: "Designed a flexible MongoDB schema and automated ingestion pipelines to normalize data from various community partners."
				},
				{
					challenge: "Ensuring high availability and low latency for critical information access.",
					solution: "Deployed a hybrid architecture using AWS Lambda for burst scaling and Fargate for long-running processes, fronted by API Gateway."
				}
			]}
			outcomes={["Empowered thousands of residents to find help quickly.", "Established a reliable and scalable infrastructure supporting future growth."]}
			accentColor="text-sky-400"
			accentColorBg="bg-sky-400"
			accentColorText="text-sky-400"
			backgroundColor="bg-white"
			textColor="text-black"
			// Placeholder images omitted
		/>
	);
}
