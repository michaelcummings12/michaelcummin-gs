import { FlappyBirdGame } from "@web/components/FlappyBird/Game";
import { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";

export const metadata: Metadata = {
	title: "Flappy Bird",
	description: "A clone of Flappy Bird built with React and framer-motion.",
	keywords: ["Flappy Bird", "React", "Framer Motion", "Game", "Clone", "Web Game"],
	openGraph: {
		title: "Flappy Bird | Michael Cummings",
		description: "A clone of Flappy Bird built with React and framer-motion.",
		url: "https://www.michaelcummin.gs/flappy-bird"
	},
	twitter: {
		title: "Flappy Bird | Michael Cummings",
		description: "A clone of Flappy Bird built with React and framer-motion."
	}
};

const pressStart2P = Press_Start_2P({
	weight: "400",
	subsets: ["latin"]
});

export default function Page() {
	return <FlappyBirdGame className={pressStart2P.className} />;
}
