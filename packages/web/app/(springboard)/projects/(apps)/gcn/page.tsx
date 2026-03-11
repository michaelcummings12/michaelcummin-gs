import { CaseStudy } from "@web/components/CaseStudy";
import { AppSync, Braintree, DynamoDb, GraphQl, Nextjs } from "@web/components/Icons";
import { GcnLogo } from "@web/components/Logos";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "General Computing Network",
	description: "Platform enabling accessible participation in Bitcoin mining infrastructure."
};

const SITE_URL = "https://www.generalcomputing.io/";

export default function Page() {
	return (
		<CaseStudy
			accentColor="text-blue-500"
			accentColorBg="bg-blue-500"
			accentColorText="text-slate-900"
			backgroundColor="bg-slate-900"
			cardClassName="bg-slate-800 text-white"
			challengesAndSolutions={[
				{
					challenge: "Providing real-time visibility into mining activity and rewards across distributed infrastructure.",
					solution: "Implemented GraphQL subscriptions with AWS AppSync to push live updates to user dashboards without requiring manual refreshes."
				},
				{
					challenge: "Designing a smooth onboarding and payment experience for users participating in mining infrastructure.",
					solution: "Integrated Braintree to handle secure payments while maintaining a streamlined checkout and account setup flow."
				},
				{
					challenge: "Handling rapidly changing data from multiple backend services.",
					solution: "Structured the platform around DynamoDB and GraphQL to enable flexible schemas and efficient data queries for the frontend."
				}
			]}
			description="General Computing Network (GCN) was a platform designed to make participation in Bitcoin mining infrastructure more accessible. The platform allowed users to contribute computing resources, manage mining participation, and track rewards through a modern web interface backed by scalable cloud infrastructure."
			features={[
				"Dashboard for monitoring mining participation and reward activity",
				"Real-time data synchronization using GraphQL subscriptions",
				"Secure onboarding and payment processing for infrastructure participation",
				"Scalable backend powered by AWS serverless services",
				"Modern responsive interface built with Next.js and TypeScript"
			]}
			logo={<GcnLogo className="h-full w-full fill-blue-500" />}
			outcomes={[
				"Delivered a production-ready platform enabling users to participate in Bitcoin mining infrastructure.",
				"Built a scalable frontend architecture integrating real-time GraphQL APIs.",
				"Implemented secure payment workflows supporting user onboarding."
			]}
			role="Frontend Lead responsible for building the client-side architecture, integrating GraphQL APIs with AWS AppSync, and implementing secure payment and onboarding flows."
			technologies={[
				{ name: "Next.js", icon: Nextjs },
				{ name: "GraphQL", icon: GraphQl },
				{ name: "AWS AppSync", icon: AppSync },
				{ name: "AWS DynamoDB", icon: DynamoDb },
				{ name: "Braintree Payments", icon: Braintree }
			]}
			textColor="text-white"
			timeline="January 2022 - March 2025"
			url={SITE_URL}
			urlClassName="bg-gradient-to-r from-blue-500 to-sky-400 text-white"
			urlLabel="Visit General Computing"
		/>
	);
}
