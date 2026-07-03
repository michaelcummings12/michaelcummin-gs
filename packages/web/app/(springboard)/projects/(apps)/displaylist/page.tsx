import { ComingSoon } from "@web/components/ComingSoon";
import { DisplayListLogo } from "@web/components/Logos";
import { Metadata } from "next";

export const metadata: Metadata = {
	alternates: { canonical: "/projects/displaylist" },
	title: "DisplayList.fun",
	description: "A list app for Meta Ray-Ban Display glasses.",
	openGraph: { title: "DisplayList.fun", description: "A list app for Meta Ray-Ban Display glasses.", url: "/projects/displaylist" },
	twitter: { title: "DisplayList.fun", description: "A list app for Meta Ray-Ban Display glasses." }
};

export default function Page() {
	return (
		<ComingSoon
			title="DisplayList.fun"
			tagline="A list app for Meta Ray-Ban Display glasses."
			category="Wearables"
			backgroundColor="bg-[#00cca8]"
			colorScheme="dark"
			logoBackground="bg-black/10"
			href="https://displaylist.fun"
			linkLabel="Visit DisplayList.fun"
			logo={<DisplayListLogo className="h-full w-full" />}
		/>
	);
}
