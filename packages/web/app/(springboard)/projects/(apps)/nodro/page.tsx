import { CaseStudy } from "@web/components/CaseStudy";
import { Lambda, Nextjs, PostgreSql } from "@web/components/Icons";
import { NodroLogo } from "@web/components/Logos/Nodro";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Nødro",
	description: "A minimalist social scheduling platform designed around clarity and restraint.",
	keywords: ["Scheduling", "Calendar", "Next.js", "PostgreSQL", "AWS Lambda", "Minimalist typography", "Event-driven"],
	openGraph: {
		title: "Nødro | Michael Cummings",
		description: "A minimalist social scheduling platform designed around clarity and restraint.",
		url: "https://www.michaelcummin.gs/projects/nodro"
	},
	twitter: {
		title: "Nødro | Michael Cummings",
		description: "A minimalist social scheduling platform designed around clarity and restraint."
	}
};

const SITE_URL = "https://www.nodro.com/";

export default function Page() {
	return (
		<CaseStudy
			accentColor="text-nodro"
			accentColorBg="bg-nodro"
			accentColorText="text-white"
			backgroundColor="bg-orange-50"
			cardClassName="shadow-nodro bg-white"
			challengesAndSolutions={[
				{
					challenge: "Most scheduling tools overwhelm users with dense interfaces, aggressive UI patterns, and productivity-driven noise.",
					solution:
						"Nødro was designed using a subtraction-first philosophy: removing unnecessary controls, reducing copy, and letting typography and spatial hierarchy communicate structure. The result is a scheduling experience that feels calm and intentional rather than transactional."
				},
				{
					challenge:
						"Scheduling workflows often involve multiple asynchronous actions such as confirmations, reminders, and notifications that must remain reliable at scale.",
					solution:
						"Engineered an event-driven backend using AWS Lambda and SQS to process scheduling workflows asynchronously, ensuring reliability while keeping the core application responsive."
				},
				{
					challenge: "Transactional email systems can become fragile when handling invitations, confirmations, and reminders across many scheduling events.",
					solution:
						"Designed a dedicated notification pipeline using AWS SES combined with queued message processing to guarantee consistent delivery and graceful retry behavior."
				}
			]}
			colorScheme="light"
			description="Nødro is a luxury calendar scheduling experience designed around restraint, clarity, and craftsmanship. It transforms everyday scheduling into a calm, architectural interface where time itself feels carefully sculpted."
			features={[
				"Editorial calendar interface designed with architectural typography and luxurious whitespace",
				"Private scheduling links that feel like invitations rather than booking forms",
				"Asynchronous scheduling infrastructure using AWS Lambda and SQS",
				"Elegant email delivery system for confirmations, reminders, and invitations via AWS SES",
				"Minimalist interaction model focused on clarity, calmness, and frictionless scheduling"
			]}
			logo={<NodroLogo className="h-[33vh] w-[33vh]" />}
			outcomes={[
				"Created a distinctive scheduling product defined by restraint, warmth, and editorial minimalism.",
				"Established a scalable event-driven backend architecture capable of supporting high scheduling volume.",
				"Delivered a product experience that feels closer to a crafted object than a traditional SaaS tool."
			]}
			role="Founder & Lead Engineer responsible for product design, system architecture, frontend and backend development, and crafting the interaction model that defines the Nødro experience."
			technologies={[
				{ name: "Next.js", icon: Nextjs },
				{ name: "PostgreSQL", icon: PostgreSql },
				{ name: "AWS Lambda", icon: Lambda }
				// { name: "AWS SQS", icon: <AwsSqs className={iconClass} /> },
				// { name: "AWS SES", icon: <AwsSes className={iconClass} /> }
			]}
			textColor="text-zinc-900"
			timeline="November 2025 - Present"
			url={SITE_URL}
			urlClassName="bg-nodro text-white"
			urlLabel="Visit Nødro.com"
		/>
	);
}
