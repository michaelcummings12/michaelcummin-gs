import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects",
	description: "Companies and products I've founded and built, plus client work and open source.",
	keywords: ["Michael Cummings", "projects", "portfolio", "startups", "founder", "case studies", "software engineer"],
	alternates: {
		canonical: "/projects"
	},
	openGraph: {
		title: "Projects by Michael Cummings",
		description: "Companies and products Michael Cummings has founded and built, plus client work and open source.",
		url: "/projects"
	},
	twitter: {
		title: "Projects by Michael Cummings",
		description: "Companies and products Michael Cummings has founded and built, plus client work and open source."
	}
};

export default function ProjectsPage() {
	return null;
}
