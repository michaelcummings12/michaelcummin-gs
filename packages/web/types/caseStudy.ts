import React, { JSX, SVGProps } from "react";

export interface Technology {
	name: string;
	icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
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

export interface CaseStudyProps {
	/** Color applied to highlighted text and secondary accents, such as the "Solution" header */
	accentColor: string;
	/** Background color for graphical accents like numbers and bullets */
	accentColorBg: string;
	/** Text color that consistently contrasts with the accentColorBg */
	accentColorText: string;
	/** Main background color class for the case study container */
	backgroundColor?: string;
	/** Custom className applied to feature and challenge cards */
	cardClassName?: string;
	/** List of challenges faced and their corresponding solutions */
	challengesAndSolutions: ChallengeAndSolution[];
	/** Controls whether inner text/icons use light-on-dark or dark-on-light colors */
	colorScheme?: "dark" | "light";
	/** Full paragraph outlining the context and purpose of the project */
	description: string;
	/** Additional images highlighting app features or platform views */
	featureImages?: ProjectImage[];
	/** List of key features for the product or service */
	features: string[];
	/** Primary hero image representing the project shown prominently at the top */
	heroImage?: ProjectImage;
	/** Logo rendered at the top of the case study */
	logo: React.ReactNode;
	/** Key results achieved after delivering the project */
	outcomes: string[];
	/** Summary of my responsibilities and contributions */
	role: string;
	/** List of core technologies and their respective icons */
	technologies: Technologies;
	/** Duration or specific timespan during which the project took place */
	timeline: string;
	/** Primary project hyperlink */
	url: string;
	/** Styling applied to the main project hyperlink button */
	urlClassName?: string;
	/** Label for the main project hyperlink button */
	urlLabel: string;
	/** YouTube video ID used as a prominent video banner instead of a hero image */
	youTubeVideoId?: string;
}
