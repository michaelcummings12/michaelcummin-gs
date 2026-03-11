import { CaseStudy } from "@web/components/CaseStudy";
import { Cdk, Ffmpeg, NextAuth, Nextjs, PostgreSql } from "@web/components/Icons";
import { RhythmLogo } from "@web/components/Logos";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Rhythm",
	description: "The only streaming service where you can watch full concerts.",
	keywords: ["Video Streaming", "FFmpeg", "GPU Transcoding", "Next.js", "HLS streaming", "Concerts"],
	openGraph: {
		title: "Rhythm",
		description: "The only streaming service where you can watch full concerts.",
		url: "https://www.michaelcummin.gs/projects/rhythm"
	},
	twitter: {
		title: "Rhythm",
		description: "The only streaming service where you can watch full concerts."
	}
};

const SITE_URL = "https://www.rhythm.watch/";

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
					challenge: "Processing high-fidelity concert footage requires immense computational power and can create bottlenecks if not optimized.",
					solution:
						"Developed custom FFmpeg transcoding pipelines designed to run natively on Nvidia GPUs using CUDA hardware acceleration, significantly reducing processing time."
				},
				{
					challenge: "Delivering massive video files globally with low latency while ensuring content security.",
					solution: "Engineered a secure HLS-based streaming solution distributed via AWS CloudFront, ensuring compatibility across devices and optimized global delivery."
				},
				{
					challenge: " keeping users engaged and helping them discover relevant content within a large library.",
					solution: "Implemented a near real-time recommendation engine utilizing AI/ML algorithms to personalize the viewing experience and increase retention."
				}
			]}
			description="Rhythm is the only streaming service where you can watch full concerts, built with performance and scalability in mind."
			featureImages={[
				{ description: "Rhythm platform displayed across multiple devices", aspectRatio: "video", src: "/assets/rhythm/devices.png", width: 939, height: 675 }
			]}
			features={[
				"Full-stack architecture with Next.js",
				"AI/ML-powered recommendation engine",
				"Secure HLS-based streaming via AWS CloudFront",
				"GPU-accelerated FFmpeg transcoding (CUDA)",
				"Real-time search, trending, and watch history"
			]}
			heroImage={{ description: "Demo of watching a concert of Rhythm", aspectRatio: "video", src: "/assets/rhythm/demo.jpg", width: 1200, height: 675 }}
			logo={<RhythmLogo className="h-full w-full" />}
			outcomes={[
				"Achieved high performance and scalability by leveraging Vercel for frontend deployment and PostgreSQL for data management.",
				"Established a robust video processing pipeline capable of handling professional-grade concert footage.",
				"Enhanced user engagement through intelligent features like watch history and algorithmic recommendations."
			]}
			role="Founder & Lead Engineer responsible for the entire stack: system architecture, frontend and backend development, AI/ML recommendation logic, video processing pipelines, and UI/UX design."
			technologies={[
				{ name: "FFmpeg", icon: Ffmpeg },
				{ name: "PostgreSQL", icon: PostgreSql },
				{ name: "NextAuth.js", icon: NextAuth },
				{ name: "Next.js", icon: Nextjs },
				{ name: "AWS CDK", icon: Cdk }
			]}
			timeline="February 2023 - Present"
			url={SITE_URL}
			urlClassName="bg-linear-to-br from-orange-400 to-pink-500 text-white"
			urlLabel="Visit Rhythm"
		/>
	);
}
