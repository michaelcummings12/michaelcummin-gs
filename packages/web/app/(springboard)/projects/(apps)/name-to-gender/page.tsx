import { ComingSoon } from "@web/components/ComingSoon";
import { MonogramLogo } from "@web/components/Logos/Placeholder";
import { Metadata } from "next";

export const metadata: Metadata = {
	alternates: { canonical: "/projects/name-to-gender" },
	title: "name-to-gender",
	description: "Input a first name and get a predicted gender with a probability score.",
	openGraph: {
		title: "name-to-gender",
		description: "Input a first name and get a predicted gender with a probability score.",
		url: "/projects/name-to-gender"
	},
	twitter: { title: "name-to-gender", description: "Input a first name and get a predicted gender with a probability score." }
};

export default function Page() {
	return (
		<ComingSoon
			title="name-to-gender"
			tagline="Input a first name and get a predicted gender with a probability score."
			category="Library"
			backgroundColor="bg-emerald-600"
			colorScheme="dark"
			logo={<MonogramLogo text="NG" className="h-full w-full text-white" />}
		/>
	);
}
