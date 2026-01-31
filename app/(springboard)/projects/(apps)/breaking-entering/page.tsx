import { CaseStudy } from "@/components/CaseStudy";
import { CloudFunctions, Firestore, Nextjs } from "@/components/Icons";
import { BreakingEnteringLogo } from "@/components/Logos";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Breaking & Entering",
	description: "Music discovery platform"
};

const SITE_URL = "https://www.breaking-entering.com/";

export default function Page() {
	return (
		<CaseStudy
			title="Breaking & Entering"
			logo={<BreakingEnteringLogo className="h-full w-full fill-white" />}
			description="Breaking & Entering is a music discovery platform connecting artists with new audiences. It provides a curated experience for listeners to find fresh sounds and for artists to showcase their work."
			role="Lead Engineer responsible for the full-stack development, implementing real-time database features, and deploying scalable cloud functions."
			timeline="September 2021 - December 2021"
			url={SITE_URL}
			urlLabel="Visit Breaking-Entering.com"
			urlClassName="bg-blue-600 text-white"
			language="TypeScript"
			technologies={[
				{ name: "Firestore", icon: <Firestore className="h-full w-full fill-white" /> },
				{ name: "Firebase Cloud Functions", icon: <CloudFunctions className="h-full w-full fill-white" /> },
				{ name: "Next.js", icon: <Nextjs className="h-full w-full fill-white" /> }
			]}
			features={[
				"Real-time database updates for instant content delivery",
				"Serverless backend architecture for auto-scaling",
				"Dynamic artist profiles and music integration",
				"Optimized static generation for fast page loads"
			]}
			challengesAndSolutions={[
				{
					challenge: "Managing real-time data synchronization across multiple clients efficiently.",
					solution: "Leveraged Firestore's real-time listeners to push updates instantly to connected clients without polling."
				},
				{
					challenge: "Handling heavy backend logic without managing server infrastructure.",
					solution: "Implemented Firebase Cloud Functions to execute server-side logic in a serverless environment, reducing operational overhead."
				}
			]}
			outcomes={["Successfully deployed a scalable platform capable of handling traffic spikes.", "Improved user engagement through instant content updates."]}
			accentColor="text-blue-600"
			accentColorBg="bg-blue-600"
			accentColorText="text-blue-600"
			backgroundColor="bg-white"
			textColor="text-black"
			// Placeholder images omitted
		/>
	);
}
