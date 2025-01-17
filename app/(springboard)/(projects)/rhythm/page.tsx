import { ExternalIcon, Ffmpeg, NextAuth, Nextjs, PostgreSql } from "@/components/Icons";
import { DefaultLink } from "@/components/Link";
import { RhythmLogo } from "@/components/Logos";
import { ProjectPage } from "@/components/ProjectPage";
import { Technologies } from "@/types/project";
import { FunctionComponent } from "react";

const SITE_URL = "https://www.rhythm.watch/";

const Header: FunctionComponent = () => (
	<div className="flex flex-col gap-12">
		<RhythmLogo className="w-full fill-white drop-shadow h-12 md:h-16" />
		<DefaultLink icon={<ExternalIcon className="h-full fill-red-400" />} className="bg-white text-red-400 w-full" href={SITE_URL} label="Visit Rhythm.watch" />
	</div>
);

const iconClass = "fill-black h-full w-full";
const technologies: Technologies = [
	{ name: "Ffmpeg", icon: <Ffmpeg className={iconClass} /> },
	{ name: "PostgreSQL", icon: <PostgreSql className={iconClass} /> },
	{ name: "NextAuth.js", icon: <NextAuth className={iconClass} /> },
	{ name: "Next.js", icon: <Nextjs className={iconClass} /> }
];

export default function Page() {
	return (
		<ProjectPage
			ariaColor="white"
			technologies={technologies}
			backgroundColor="bg-black"
			headerColor="bg-black"
			iconColor="bg-white"
			iconShadow="shadow"
			url={SITE_URL}
			timeline="December 2022 - Present"
			language="TypeScript"
			textColor="text-white"
			linkColor="text-red-400">
			<Header />
		</ProjectPage>
	);
}
