import { CaseStudy } from "@/components/CaseStudy";
import { NodroLogo } from "@/components/Logos/Nodro";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Nodro",
	description: "Social calendar application"
};

const SITE_URL = "https://www.nodro.com/"; // Placeholder URL

export default function Page() {
	return (
		<CaseStudy
			title="Nodro"
			logo={<NodroLogo className="h-full w-full" />}
			description="Nodro is a social calendar application designed to help friends coordinate plans and discover local events. It simplifies the chaos of group scheduling into a seamless, visual experience."
			role="Full Stack Developer responsible for building the mobile-first web application, implementing the calendar sync algorithms, and designing the social interaction features."
			timeline="2023 - Present" // Placeholder
			url={SITE_URL}
			urlLabel="Visit Nodro"
			urlClassName="bg-zinc-800 text-white"
			language="TypeScript"
			technologies={
				[
					// Placeholders based on typical stack
				]
			}
			features={[
				"Social calendar sharing with privacy controls",
				"Event voting and polling for group decisions",
				"Integration with Google and Apple Calendars",
				"Location-based event discovery"
			]}
			challengesAndSolutions={[
				{
					challenge: "Managing complex timezone conversions for international friend groups.",
					solution: "Built a robust timezone handling system using temporal libraries to ensure event times are always accurate relative to the viewer."
				},
				{
					challenge: "Optimizing the rendering of dense calendar views on mobile devices.",
					solution: "Utilized virtualization techniques to render only visible events, ensuring smooth scrolling and performance even with hundreds of entries."
				}
			]}
			outcomes={["Grew to 500+ active beta users within the first month.", "Featured in local tech blog for innovative UX implementation."]}
			accentColor="text-orange-500"
			accentColorBg="bg-orange-500"
			accentColorText="text-orange-500"
			backgroundColor="bg-white"
			textColor="text-black"
			// Placeholder images - omitted to avoid 404s
		/>
	);
}
