import { ComingSoon } from "@web/components/ComingSoon";
import { MonogramLogo } from "@web/components/Logos/Placeholder";
import { Metadata } from "next";

export const metadata: Metadata = {
	alternates: { canonical: "/projects/tailwindcss-text-box-trim" },
	title: "tailwindcss-text-box-trim",
	description: "A Tailwind CSS plugin for trimming the whitespace around text.",
	openGraph: {
		title: "tailwindcss-text-box-trim",
		description: "A Tailwind CSS plugin for trimming the whitespace around text.",
		url: "/projects/tailwindcss-text-box-trim"
	},
	twitter: { title: "tailwindcss-text-box-trim", description: "A Tailwind CSS plugin for trimming the whitespace around text." }
};

export default function Page() {
	return (
		<ComingSoon
			title="tailwindcss-text-box-trim"
			tagline="A Tailwind CSS plugin for trimming the whitespace around text."
			category="Tailwind Plugin"
			backgroundColor="bg-sky-500"
			colorScheme="dark"
			logo={<MonogramLogo text="TT" className="h-full w-full text-white" />}
		/>
	);
}
