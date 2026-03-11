import { CaseStudy } from "@web/components/CaseStudy";
import { ApiGateway, Fargate, Nextjs, OpenAi } from "@web/components/Icons";
import { HouseCallsLogo } from "@web/components/Logos/HouseCalls";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "House Calls",
	description: "Real-time AI concierge for a Chicago house music event brand."
};

const SITE_URL = "https://www.housecalls.live/stella";

export default function Page() {
	return (
		<CaseStudy
			accentColor="text-white"
			accentColorBg="bg-white"
			accentColorText="text-black"
			backgroundColor="bg-black"
			cardClassName="bg-white/10"
			challengesAndSolutions={[
				{
					challenge: "Creating a believable AI persona that captured the voice and personality of Stella while remaining useful to fans.",
					solution:
						"Designed a conversational AI system with structured event knowledge and personality-driven prompts to ensure responses stayed on brand and informative."
				},
				{
					challenge: "Handling real-time voice conversations with low latency so the experience felt natural for callers.",
					solution:
						"Implemented the OpenAI Realtime API with a scalable backend running on AWS, enabling fast streaming responses and reliable performance during live event periods."
				},
				{
					challenge: "Delivering secret event locations in a fun and controlled way.",
					solution:
						"Built logic that allowed Stella to reveal hidden venue details only through interactive phone conversations, creating a gamified discovery experience for attendees."
				}
			]}
			description="House Calls is a Chicago-based house music event brand known for exclusive parties and a mysterious host named Stella. To extend the brand’s identity and create a more interactive fan experience, I built a real-time AI version of Stella that attendees could call and talk to directly. The AI concierge answered questions about upcoming events, shared details about the House Calls community, and even revealed secret event locations for select parties."
			features={[
				"Real-time voice AI allowing fans to call and speak directly with Stella",
				"AI-powered event concierge answering questions about upcoming shows",
				"Interactive storytelling that reflects the House Calls brand personality",
				"Secret event location reveal system accessible through phone conversations",
				"Seamless integration between web platform, backend services, and voice AI"
			]}
			logo={<HouseCallsLogo className="h-full w-full fill-white" />}
			outcomes={[
				"Introduced a unique AI-powered fan interaction for a live music brand.",
				"Allowed attendees to discover events and secret locations through conversational AI.",
				"Demonstrated how real-time AI can enhance community-driven entertainment experiences."
			]}
			role="AI Systems Architect and Full-Stack Developer responsible for designing the real-time voice AI experience, backend infrastructure, and web integration."
			technologies={[
				{ name: "OpenAI Realtime API", icon: OpenAi },
				{ name: "Next.js", icon: Nextjs },
				{ name: "AWS Fargate", icon: Fargate },
				{ name: "API Gateway", icon: ApiGateway }
			]}
			textColor="text-white"
			timeline="October 2024 - December 2024"
			url={SITE_URL}
			urlClassName="bg-white text-black"
			urlLabel="Visit House Calls"
		/>
	);
}
