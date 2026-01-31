import { CaseStudy } from "@/components/CaseStudy";
import { AppSync, Braintree, DynamoDb, GraphQl, Nextjs } from "@/components/Icons";
import { GcnLogo } from "@/components/Logos";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "GCN",
	description: "General Computing Network"
};

const SITE_URL = "https://www.generalcomputing.io/";
const iconClass = "fill-blue-500 h-full w-full";

export default function Page() {
	return (
		<CaseStudy
			title="General Computing"
			logo={<GcnLogo className="h-full w-full fill-blue-500" />}
			description="General Computing (GCN) is a next-generation computing platform designed to streamline complex digital workflows. It integrates robust cloud services with a seamless user interface."
			role="Frontend Lead responsible for the client-side architecture, integrating GraphQL APIs with AWS AppSync, and implementing secure payment flows with Braintree."
			timeline="January 2022 - March 2022"
			url={SITE_URL}
			urlLabel="Visit GeneralComputing.io"
			urlClassName="bg-blue-500 text-white"
			language="TypeScript"
			technologies={[
				{ name: "AWS AppSync", icon: <AppSync className={iconClass} /> },
				{ name: "AWS DynamoDB", icon: <DynamoDb className={iconClass} /> },
				{ name: "Braintree Payments", icon: <Braintree className={iconClass} /> },
				{ name: "GraphQL", icon: <GraphQl className={iconClass} /> },
				{ name: "Next.js", icon: <Nextjs className={iconClass} /> }
			]}
			features={[
				"Real-time data synchronization with AWS AppSync",
				"Secure payment processing via Braintree",
				"High-performance data storage with DynamoDB",
				"Type-safe API interactions using GraphQL"
			]}
			challengesAndSolutions={[
				{
					challenge: "Synchronizing state across multiple devices in real-time.",
					solution: "Implemented GraphQL subscriptions via AWS AppSync to ensure instant data consistency for all users."
				},
				{
					challenge: "Integrating a complex payment gateway securely.",
					solution: "Developed a custom checkout flow using Braintree's API, ensuring PCI compliance and a smooth user experience."
				}
			]}
			outcomes={["Launched a beta version with full payment capabilities.", "Reduced API latency by 30% through optimized GraphQL queries."]}
			accentColor="text-blue-500"
			accentColorBg="bg-blue-500"
			accentColorText="text-blue-500"
			backgroundColor="bg-slate-900"
			textColor="text-white"
			// Placeholder images omitted
		/>
	);
}
