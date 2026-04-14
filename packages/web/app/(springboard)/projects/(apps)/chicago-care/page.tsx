import { CaseStudy } from "@web/components/CaseStudy";
import { ApiGateway, CloudFormation, Fargate, Lambda, LightningBolt, MongoDb, Nextjs } from "@web/components/Icons";
import { ChicagoCareLogo } from "@web/components/Logos";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Chicago.care",
	description: "Healthcare access platform helping Chicago residents find monkeypox vaccines and care providers.",
	keywords: ["Healthcare", "Vaccine finder", "AWS Lambda", "Fargate", "MongoDB", "Chicago", "Serverless"],
	openGraph: {
		title: "Chicago.care | Michael Cummings",
		description: "Healthcare access platform helping Chicago residents find monkeypox vaccines and care providers.",
		url: "https://www.michaelcummin.gs/projects/chicago-care"
	},
	twitter: {
		title: "Chicago.care | Michael Cummings",
		description: "Healthcare access platform helping Chicago residents find monkeypox vaccines and care providers."
	}
};

const SITE_URL = "https://www.chicago.care/";

export default function Page() {
	return (
		<CaseStudy
			accentColor="text-sky-400"
			accentColorBg="bg-sky-400"
			accentColorText="text-white"
			backgroundColor="bg-white"
			challengesAndSolutions={[
				{
					challenge: "During the outbreak, accurate vaccine availability data was fragmented across dozens of providers with no central source of truth.",
					solution:
						"Built a centralized platform that aggregated provider information and continuously verified details by contacting clinics directly and updating the data in real time."
				},
				{
					challenge: "The platform needed to handle sudden surges in traffic as residents searched for vaccines and appointment availability.",
					solution:
						"Designed a serverless architecture on AWS using Lambda and Fargate, enabling the system to automatically scale and maintain performance even during peak demand."
				},
				{
					challenge: "Handling healthcare-related information required strong security and privacy safeguards.",
					solution: "Implemented HIPAA-aligned security practices within AWS infrastructure and ensured secure handling of sensitive data across the platform."
				}
			]}
			colorScheme="light"
			description="Chicago.care is a healthcare access platform created to help Chicago residents quickly find monkeypox vaccines and providers during the 2022 outbreak. Built and launched within 24 hours, the site aggregated verified provider locations, appointment availability, and referral information into a single, easy-to-use resource. The platform quickly gained traction across the city and was featured by NBC for helping residents navigate vaccine access during a public health emergency."
			features={[
				"Centralized directory of monkeypox vaccine providers across Chicago",
				"Real-time provider information including availability and referral requirements",
				"Fast, mobile-friendly interface designed for urgent healthcare searches",
				"Serverless infrastructure capable of scaling during sudden traffic spikes",
				"Direct integration with healthcare providers and urgent care networks"
			]}
			logo={<ChicagoCareLogo className="h-full w-full drop-shadow" />}
			outcomes={[
				"Helped thousands of Chicago residents locate vaccine providers during the monkeypox outbreak.",
				"Platform sustained traffic averaging approximately 1,000 active sessions per minute during peak demand.",
				"Featured by NBC for its impact in improving vaccine access across the city.",
				"Established integrations with national urgent care providers to streamline appointment discovery."
			]}
			role="Founder and Lead Engineer. Responsible for product design, infrastructure, backend APIs, and frontend development."
			technologies={[
				{ name: "API Gateway", icon: ApiGateway },
				{ name: "AWS Fargate", icon: Fargate },
				{ name: "AWS Lambda", icon: Lambda },
				{ name: "CloudFormation", icon: CloudFormation },
				{ name: "MongoDB", icon: MongoDb },
				{ name: "Next.js", icon: Nextjs },
				{ name: "Server Side Rendering", icon: LightningBolt }
			]}
			timeline="August 2022 - March 2023"
			url={SITE_URL}
			urlClassName="bg-sky-400 text-white"
			urlLabel="Visit Chicago.care"
			youTubeVideoId="gTZfKUbvyQs"
		/>
	);
}
