import { cn } from "@/lib/cn";
import Link from "next/link";
import { FunctionComponent, PropsWithChildren } from "react";
import { Technologies, Technology } from "../types/project";
import { Github, JavaScript, TypeScript } from "./Icons";

interface ProjectPageProps {
	technologies: Technologies;
	url: string;
	timeline: string;
	language: "JavaScript" | "TypeScript";
	iconColor: string;
	iconShadow: string;
	backgroundColor?: string;
	headerColor?: string;
	textColor?: string;
	ariaColor?: string;
	linkColor?: string;
	headerPadding?: string;
}

export const ProjectPage: FunctionComponent<PropsWithChildren<ProjectPageProps>> = ({
	ariaColor,
	backgroundColor = "bg-white",
	headerColor = "bg-white",
	children,
	language,
	technologies,
	iconColor,
	iconShadow,
	textColor = "text-black",
	timeline,
	url,
	linkColor = "text-blue-500",
	headerPadding = "py-24 md:py-32"
}) => {
	return (
		<div className="relative flex h-full w-full flex-col">
			<div className={cn(headerColor, headerPadding, "relative flex w-full items-center justify-center")}>{children}</div>
			<div className={cn(backgroundColor, "h-full w-full py-4 md:py-8")}>
				<div className={cn(textColor, "relative m-auto flex w-full max-w-[900px] flex-col items-center gap-4")}>
					<div className="flex w-full flex-col-reverse justify-between gap-12 p-4 md:flex-row md:justify-around md:gap-0 md:p-0">
						<div className="flex flex-col gap-4">
							<h2 className="text-2xl font-bold">Technologies Used</h2>
							<ol className="flex flex-col gap-4 text-left text-lg">
								{technologies.map((t: Technology, i: number) => {
									return (
										<li className="flex flex-row items-center gap-4" key={`${t.name}-${i}`}>
											<div className={cn(iconColor, iconShadow, "flex h-[42px] w-[42px] items-center justify-center rounded-full p-3 transition-all hover:scale-105")}>
												{t.icon}
											</div>
											<label>{t.name}</label>
										</li>
									);
								})}
							</ol>
						</div>
						<div className="flex flex-col gap-4">
							<h2 className="text-2xl font-bold">Overview</h2>
							<ol className="flex flex-col gap-4 text-left text-lg">
								<li>
									<Link href={url} className={cn(linkColor, "transition-all hover:underline")}>
										{url}
									</Link>
								</li>
								<li className="flex flex-row gap-1">
									<p className="font-medium">Timeline:</p>
									<p>{timeline}</p>
								</li>
								<li className="flex flex-row items-center gap-2">
									<>
										{language === "JavaScript" && <JavaScript height="24px" className={`fill-${ariaColor ? ariaColor : iconColor}`} />}
										{language === "TypeScript" && <TypeScript height="24px" className={`fill-${ariaColor ? ariaColor : iconColor}`} />}
									</>
									Written in {language}
								</li>
								<li className="flex flex-row items-center gap-2">
									<Github height="24px" className={`fill-${ariaColor ? ariaColor : iconColor}`} />
									GitHub repository is private
								</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
