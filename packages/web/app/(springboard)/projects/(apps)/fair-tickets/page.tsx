import { ComingSoon } from "@web/components/ComingSoon";
import { FairTicketsLogo } from "@web/components/Logos";
import { Metadata } from "next";

export const metadata: Metadata = {
	alternates: { canonical: "/projects/fair-tickets" },
	title: "Fair.tickets",
	description: "The only fee-free ticketing platform built for creators.",
	openGraph: {
		title: "Fair.tickets",
		description: "The only fee-free ticketing platform built for creators.",
		url: "/projects/fair-tickets"
	},
	twitter: { title: "Fair.tickets", description: "The only fee-free ticketing platform built for creators." }
};

export default function Page() {
	return (
		<ComingSoon
			title="Fair.tickets"
			tagline="The only fee-free ticketing platform built for creators."
			category="Ticketing"
			backgroundColor="bg-slate-900"
			colorScheme="dark"
			href="https://fair.tickets"
			linkLabel="Visit Fair.tickets"
			logo={<FairTicketsLogo className="h-full w-full" />}
		/>
	);
}
