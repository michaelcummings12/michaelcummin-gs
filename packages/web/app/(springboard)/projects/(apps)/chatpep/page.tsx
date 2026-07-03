import { ComingSoon } from "@web/components/ComingSoon";
import { ChatPepLogo } from "@web/components/Logos";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "ChatPEP",
	description: "An AI research assistant for peptides.",
	openGraph: { title: "ChatPEP", description: "An AI research assistant for peptides.", url: "https://www.michaelcummin.gs/projects/chatpep" },
	twitter: { title: "ChatPEP", description: "An AI research assistant for peptides." }
};

export default function Page() {
	return (
		<ComingSoon
			title="ChatPEP"
			tagline="An AI research assistant for peptides."
			category="AI"
			backgroundColor="bg-black"
			colorScheme="dark"
			href="https://chatpep.com"
			linkLabel="Visit ChatPEP"
			logo={<ChatPepLogo className="h-full w-full fill-white" />}
		/>
	);
}
