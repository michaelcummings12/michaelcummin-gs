import { CaseStudy } from "@web/components/CaseStudy";
import { CloudFunctions, Firestore, Nextjs } from "@web/components/Icons";
import { BreakingEnteringLogo } from "@web/components/Logos";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Breaking & Entering",
	description: "Digital platform for the advertising industry media company Breaking & Entering.",
	keywords: ["Advertising", "Media", "CMS", "Firestore", "Firebase Cloud Functions", "Next.js", "Podcasts"],
	openGraph: {
		title: "Breaking & Entering | Michael Cummings",
		description: "Digital platform for the advertising industry media company Breaking & Entering.",
		url: "https://www.michaelcummin.gs/projects/breaking-entering"
	},
	twitter: {
		title: "Breaking & Entering | Michael Cummings",
		description: "Digital platform for the advertising industry media company Breaking & Entering."
	}
};

const SITE_URL = "https://www.breaking-entering.com/";

export default function Page() {
	return (
		<CaseStudy
			accentColor="text-white"
			accentColorBg="bg-white"
			accentColorText="text-blue-600"
			backgroundColor="bg-blue-600"
			cardClassName="bg-blue-700"
			challengesAndSolutions={[
				{
					challenge: "The Breaking & Entering team needed a flexible publishing workflow tailored to their editorial style rather than a traditional CMS.",
					solution:
						"Developed a custom CMS backed by Firestore that allowed editors to create and manage posts quickly while maintaining structured content for the frontend."
				},
				{
					challenge: "Podcast listeners needed to seamlessly continue listening while navigating the site.",
					solution:
						"Implemented a floating audio miniplayer that persists across page navigation, providing a smooth listening experience similar to modern media platforms."
				},
				{
					challenge: "The platform needed to support rapid content publishing without maintaining traditional server infrastructure.",
					solution: "Built a serverless backend using Firebase Cloud Functions and Firestore to handle content operations and scale automatically."
				}
			]}
			description="Breaking & Entering is a fast-growing advertising industry media company connecting agencies, brands, creatives, and emerging talent. I built their primary web platform, creating a content hub that supports podcasts, editorial content, and community engagement for thousands of advertising professionals following the brand."
			features={[
				"Custom content management system allowing the team to publish blog posts and industry updates",
				"Floating podcast miniplayer enabling listeners to continue playback while browsing the site",
				"Dynamic article pages designed for fast publishing and easy content updates",
				"Modern responsive interface optimized for both industry professionals and students",
				"Serverless backend supporting scalable content delivery"
			]}
			logo={<BreakingEnteringLogo className="h-full w-full fill-white drop-shadow" />}
			outcomes={[
				"Delivered a modern content platform supporting podcasts, editorial content, and community engagement.",
				"Enabled the Breaking & Entering team to independently publish and manage content through a custom CMS.",
				"Created a seamless podcast listening experience directly within the web platform."
			]}
			role="Lead Engineer responsible for designing and developing the full web platform, including the content system, podcast integration, and frontend experience."
			technologies={[
				{ name: "Next.js", icon: Nextjs },
				{ name: "Firestore", icon: Firestore },
				{ name: "Firebase Cloud Functions", icon: CloudFunctions }
			]}
			textColor="text-black"
			timeline="September 2021 - December 2022"
			url={SITE_URL}
			urlClassName="bg-white text-blue-600"
			urlLabel="Visit Breaking & Entering"
		/>
	);
}
