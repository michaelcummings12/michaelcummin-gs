import { cn } from "@/lib/cn";
import Image from "next/image";
import { FunctionComponent, PropsWithChildren } from "react";
import { ChallengeAndSolution, ProjectImage, Technologies, Technology } from "../types/project";
import { CalendarDay, ExternalIcon, Github, JavaScript, TypeScript } from "./Icons";
import { DefaultLink } from "./Link";

interface CaseStudyProps {
	// Content
	title: string;
	tagline?: string;
	logo: React.ReactNode;
	description: string;
	role: string;
	timeline: string;
	url: string;
	urlLabel: string;
	urlClassName?: string;
	language: "JavaScript" | "TypeScript";
	technologies: Technologies;
	features: string[];
	challengesAndSolutions: ChallengeAndSolution[];
	outcomes: string[];
	heroImage?: ProjectImage;
	featureImages?: ProjectImage[];
	// Styling
	accentColor: string;
	accentColorBg: string;
	accentColorText: string;
	backgroundColor?: string;
	textColor?: string;
}

const Section: FunctionComponent<PropsWithChildren<{ title: string; className?: string }>> = ({ title, children, className }) => (
	<section className={cn("flex flex-col gap-6", className)}>
		<h2 className="text-sm font-medium tracking-wider text-zinc-400 uppercase">{title}</h2>
		{children}
	</section>
);

const ImageBox: FunctionComponent<{ image: ProjectImage; accentColor: string }> = ({ image, accentColor }) => {
	const aspectClasses = {
		video: "aspect-video",
		square: "aspect-square",
		wide: "aspect-[21/9]"
	};
	return (
		<div className={cn("flex flex-col items-center justify-center overflow-hidden rounded-3xl", aspectClasses[image.aspectRatio || "video"])}>
			<Image src={image.src} alt={image.description} className="h-full w-full object-contain" width={image.width} height={image.height} />
		</div>
	);
};

export const CaseStudy: FunctionComponent<CaseStudyProps> = ({
	title,
	tagline,
	logo,
	description,
	role,
	timeline,
	url,
	urlLabel,
	urlClassName,
	language,
	technologies,
	features,
	challengesAndSolutions,
	outcomes,
	heroImage,
	featureImages,
	accentColorBg,
	accentColorText,
	backgroundColor = "bg-black",
	textColor = "text-white"
}) => {
	return (
		<div className={cn(backgroundColor, textColor, "min-h-full w-full")}>
			<div className="mx-auto max-w-6xl px-6 py-8 md:px-8">
				{/* Hero */}
				{heroImage && (
					<div className="mb-16">
						<ImageBox image={heroImage} accentColor={accentColorText} />
					</div>
				)}
				{/* Header */}
				<div className="mb-16 flex flex-col gap-8">
					<div className="flex flex-col items-center gap-8">
						<div className="h-12">{logo}</div>
						{tagline && <p className={cn("text-xl md:text-2xl", accentColorText)}>{tagline}</p>}
					</div>
					<div className="flex justify-center">
						<DefaultLink
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							className={urlClassName ?? cn("bg-white", accentColorText)}
							icon={<ExternalIcon className="h-full fill-current" />}
							label={urlLabel}
						/>
					</div>
				</div>
				<Section title="Overview" className="mb-16">
					<p className="text-lg leading-relaxed text-zinc-300">{description}</p>
				</Section>
				<Section title="Timeline" className="mb-16">
					<div className={cn("flex items-center gap-2", accentColorText)}>
						<CalendarDay className="size-5 fill-current" />
						<span className="box-trim-both text-lg text-zinc-300">{timeline}</span>
					</div>
				</Section>
				{/* Role & Tech Stack Grid */}
				<div className="mb-16 grid gap-12 md:grid-cols-3">
					<Section title="My Role" className="col-span-2">
						<p className="text-lg text-zinc-300">{role}</p>

						<div className="flex items-center gap-2">
							{language === "JavaScript" && <JavaScript className="size-5 fill-yellow-400" />}
							{language === "TypeScript" && <TypeScript className="size-5 fill-blue-400" />}
							<span className="text-sm text-zinc-400">Written in {language}</span>
						</div>
						<div className="flex items-center gap-2">
							<Github className="size-5 fill-white" />
							<span className="text-sm text-zinc-400">Private repository</span>
						</div>
					</Section>
					<Section title="Tech Stack">
						<ul className="flex flex-col gap-3">
							{technologies.map((tech: Technology, i: number) => (
								<li key={`${tech.name}-${i}`} className="flex items-center gap-3">
									<div className="flex size-10 items-center justify-center rounded-xl p-2">{tech.icon}</div>
									<span className="text-zinc-300">{tech.name}</span>
								</li>
							))}
						</ul>
					</Section>
				</div>
				{/* Key Features */}
				<Section title="Key Features" className="mb-16">
					<ul className="grid gap-4 md:grid-cols-2">
						{features.map((feature, i) => (
							<li key={i} className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/30 p-4">
								<span className={cn("mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white", accentColorBg)}>{i + 1}</span>
								<span className="text-zinc-300">{feature}</span>
							</li>
						))}
					</ul>
				</Section>
				{/* Feature Images */}
				{featureImages && featureImages.length > 0 && (
					<div className="mb-16 grid gap-6">
						{featureImages.map((img, i) => (
							<ImageBox key={i} image={img} accentColor={accentColorText} />
						))}
					</div>
				)}
				{/* Challenges & Solutions */}
				<Section title="Challenges & Solutions" className="mb-16">
					<div className="flex flex-col gap-8">
						{challengesAndSolutions.map((item, i) => (
							<div key={i} className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
								<div className="mb-4">
									<h3 className="mb-2 font-semibold text-zinc-200">Challenge</h3>
									<p className="text-zinc-400">{item.challenge}</p>
								</div>
								<div>
									<h3 className={cn("mb-2 font-semibold", accentColorText)}>Solution</h3>
									<p className="text-zinc-300">{item.solution}</p>
								</div>
							</div>
						))}
					</div>
				</Section>
				{/* Outcomes */}
				<Section title="Outcomes & Impact">
					<ul className="flex flex-col gap-3">
						{outcomes.map((outcome, i) => (
							<li key={i} className="flex items-start gap-3">
								<span className={cn("mt-1.5 size-2 shrink-0 rounded-full", accentColorBg)} />
								<span className="text-zinc-300">{outcome}</span>
							</li>
						))}
					</ul>
				</Section>
			</div>
		</div>
	);
};
