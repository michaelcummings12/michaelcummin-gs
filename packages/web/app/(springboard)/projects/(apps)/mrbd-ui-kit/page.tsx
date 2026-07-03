import { ComingSoon } from "@web/components/ComingSoon";
import { MonogramLogo } from "@web/components/Logos/Placeholder";
import { Metadata } from "next";

export const metadata: Metadata = {
	alternates: { canonical: "/projects/mrbd-ui-kit" },
	title: "mrbd-ui-kit",
	description: "A UI framework for building Meta Ray-Ban Display web apps.",
	openGraph: {
		title: "mrbd-ui-kit",
		description: "A UI framework for building Meta Ray-Ban Display web apps.",
		url: "/projects/mrbd-ui-kit"
	},
	twitter: { title: "mrbd-ui-kit", description: "A UI framework for building Meta Ray-Ban Display web apps." }
};

export default function Page() {
	return (
		<ComingSoon
			title="mrbd-ui-kit"
			tagline="A UI framework for building Meta Ray-Ban Display web apps."
			category="UI Framework"
			backgroundColor="bg-violet-600"
			colorScheme="dark"
			logo={<MonogramLogo text="UI" className="h-full w-full text-white" />}
		/>
	);
}
