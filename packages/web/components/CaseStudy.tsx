import { cn } from "@web/lib/cn";
import { CaseStudyProps, ProjectImage, Technology } from "@web/types/caseStudy";
import Image from "next/image";
import { FunctionComponent, PropsWithChildren } from "react";
import { CalendarDay, External, Github, TypeScript } from "./Icons";
import { DefaultLink } from "./Link";
import { YouTubeEmbed } from "./YouTubeEmbed";

/** Scheme-aware palette so all secondary elements adapt to the page background */
const schemeColors = {
	dark: {
		sectionTitle: "text-zinc-400",
		body: "text-zinc-300",
		muted: "text-zinc-400",
		cardBg: "bg-zinc-900/30",
		cardBorder: "border-zinc-800",
		challengeBg: "bg-zinc-900/50",
		challengeTitle: "text-zinc-200",
		githubFill: "fill-white"
	},
	light: {
		sectionTitle: "text-zinc-500",
		body: "text-zinc-700",
		muted: "text-zinc-500",
		cardBg: "bg-black/[0.04]",
		cardBorder: "border-zinc-200",
		challengeBg: "bg-black/[0.04]",
		challengeTitle: "text-zinc-800",
		githubFill: "fill-black"
	}
};

const Section: FunctionComponent<PropsWithChildren<{ title: string; titleColor?: string; className?: string }>> = ({ title, titleColor, children, className }) => (
	<section className={cn("flex flex-col gap-6", className)}>
		<h2 className={cn("font-heading text-sm font-medium tracking-wider uppercase", titleColor)}>{title}</h2>
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
	accentColor,
	accentColorBg,
	accentColorText,
	backgroundColor,
	cardClassName,
	challengesAndSolutions,
	colorScheme = "dark",
	description,
	featureImages,
	features,
	heroImage,
	logo,
	outcomes,
	role,
	technologies,
	timeline,
	url,
	urlClassName,
	urlLabel,
	youTubeVideoId
}) => {
	const scheme = schemeColors[colorScheme];
	return (
		<div className={cn(backgroundColor, "min-h-full w-full")}>
			<div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
				{youTubeVideoId ? (
					<div className="pt-16">
						<YouTubeEmbed videoId={youTubeVideoId} />
					</div>
				) : heroImage ? (
					<div className="pt-16">
						<ImageBox image={heroImage} accentColor={accentColorText} />
					</div>
				) : null}
				<div className="flex flex-col items-center gap-16 py-16">
					<div className="flex flex-col items-center gap-8">{logo}</div>
					<DefaultLink href={url} target="_blank" rel="noopener noreferrer" className={urlClassName} icon={<External className="h-full fill-current" />} label={urlLabel} />
				</div>
				<Section title="Overview" titleColor={scheme.sectionTitle} className="mb-16">
					<p className={cn("text-lg leading-relaxed", scheme.body)}>{description}</p>
				</Section>
				<Section title="Timeline" titleColor={scheme.sectionTitle} className="mb-16">
					<div className="flex items-center gap-2">
						<CalendarDay className={cn("size-5 fill-current", accentColor)} />
						<span className={cn("box-trim-both text-lg", scheme.body)}>{timeline}</span>
					</div>
				</Section>
				<div className="mb-16 grid gap-12 md:grid-cols-3">
					<Section title="My Role" titleColor={scheme.sectionTitle} className="col-span-2">
						<p className={cn("text-lg", scheme.body)}>{role}</p>
						<div className="flex items-center gap-2">
							<TypeScript className="size-5 fill-blue-400" />
							<span className={cn("text-sm", scheme.muted)}>Written in TypeScript</span>
						</div>
						<div className="flex items-center gap-2">
							<Github className={cn("size-5", scheme.githubFill)} />
							<span className={cn("text-sm", scheme.muted)}>Private repository</span>
						</div>
					</Section>
					<Section title="Tech Stack" titleColor={scheme.sectionTitle}>
						<ul className="flex flex-col gap-3">
							{technologies.map((tech: Technology, i: number) => (
								<li key={`${tech.name}-${i}`} className="flex items-center gap-3">
									<div className="flex size-8 items-center justify-center">
										<tech.icon className={cn("h-full fill-current", accentColor)} />
									</div>
									<span className={scheme.body}>{tech.name}</span>
								</li>
							))}
						</ul>
					</Section>
				</div>
				<Section title="Key Features" titleColor={scheme.sectionTitle} className="mb-16">
					<ul className="grid gap-4 md:grid-cols-2">
						{features.map((feature, i) => (
							<li key={i} className={cn("flex items-start gap-3 rounded-3xl p-4", cardClassName)}>
								<span className={cn("mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold", accentColorBg, accentColorText)}>{i + 1}</span>
								<span className={scheme.body}>{feature}</span>
							</li>
						))}
					</ul>
				</Section>
				{featureImages && featureImages.length > 0 && (
					<div className="mb-16 grid gap-6">
						{featureImages.map((img, i) => (
							<ImageBox key={i} image={img} accentColor={accentColorText} />
						))}
					</div>
				)}
				<Section title="Challenges & Solutions" titleColor={scheme.sectionTitle} className="mb-16">
					<div className="flex flex-col gap-8">
						{challengesAndSolutions.map((item, i) => (
							<div key={i} className={cn("rounded-3xl p-6", scheme.challengeBg, cardClassName)}>
								<div className="mb-4">
									<h3 className={cn("mb-2 font-semibold", scheme.challengeTitle)}>Challenge</h3>
									<p className={scheme.muted}>{item.challenge}</p>
								</div>
								<div>
									<h3 className={cn("mb-2 font-semibold", accentColor)}>Solution</h3>
									<p className={scheme.body}>{item.solution}</p>
								</div>
							</div>
						))}
					</div>
				</Section>
				<Section title="Outcomes & Impact" titleColor={scheme.sectionTitle}>
					<ul className="flex flex-col gap-3">
						{outcomes.map((outcome, i) => (
							<li key={i} className="flex items-start gap-3">
								<span className={cn("mt-1.5 size-2 shrink-0 rounded-full", accentColorBg)} />
								<span className={scheme.body}>{outcome}</span>
							</li>
						))}
					</ul>
				</Section>
			</div>
		</div>
	);
};
