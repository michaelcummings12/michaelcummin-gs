import { ExternalIcon, Ffmpeg, NextAuth, Nextjs, PostgreSql } from "@/components/Icons";
import { DefaultLink } from "@/components/Link";
import { RhythmLogo } from "@/components/Logos";
import { ProjectPage } from "@/components/ProjectPage";
import { Technologies } from "@/types/project";
import { FunctionComponent } from "react";

const SITE_URL = "https://www.rhythm.watch/";

const Header: FunctionComponent = () => (
	<div className="flex flex-col gap-12">
		<RhythmLogo className="h-full w-full fill-white drop-shadow max-h-[128px]" />
		<DefaultLink icon={<ExternalIcon className="h-full fill-black" />} className="bg-white text-black w-full" href={SITE_URL} label="Visit Rhythm.watch" />
	</div>
);

const technologies: Technologies = [
	{ name: "Ffmpeg", icon: <Ffmpeg className="fill-black h-full w-full" /> },
	{ name: "PostgreSQL", icon: <PostgreSql className="fill-black h-full w-full" /> },
	{ name: "NextAuth.js", icon: <NextAuth className="h-full w-full" /> },
	{ name: "Next.js", icon: <Nextjs className="fill-black h-full w-full" /> }
];

export default function Page() {
	return (
		<ProjectPage
			ariaColor="white"
			technologies={technologies}
			backgroundColor="bg-projects-rhythm-bg"
			headerColor="bg-projects-rhythm-bg"
			iconColor="bg-white"
			iconShadow="shadow"
			url={SITE_URL}
			timeline="December 2022 - Present"
			language="TypeScript"
			textColor="text-white">
			<Header />
		</ProjectPage>
	);
}
