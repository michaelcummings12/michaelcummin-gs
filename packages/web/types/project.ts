export interface Technology {
	name: string;
	icon: any;
}

export type Technologies = Technology[];

export interface ProjectImage {
	aspectRatio?: "video" | "square" | "wide";
	src: string;
	description: string;
	width: number;
	height: number;
}

export interface ChallengeAndSolution {
	challenge: string;
	solution: string;
}

export interface ProjectCaseStudy {
	title: string;
	tagline: string;
	description: string;
	role: string;
	timeline: string;
	url: string;
	language: "JavaScript" | "TypeScript";
	technologies: Technologies;
	features: string[];
	challengesAndSolutions: ChallengeAndSolution[];
	outcomes: string[];
	images: {
		hero?: ProjectImage;
		features?: ProjectImage[];
	};
}
