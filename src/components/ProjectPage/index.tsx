import Link from "next/link";
import { FunctionComponent, PropsWithChildren } from "react";
import { Technologies, Technology } from "../../types/project";
import { cc } from "../../utils/cc";
import { Github, JavaScript, TypeScript } from "../icons";

interface ProjectPageProps {
	technologies: Technologies;
	url: string;
	timeline: string;
	language: "JavaScript" | "TypeScript";
	iconColor: string;
	iconShadow: string;
	backgroundColor?: string;
	textColor?: string;
	ariaColor?: string;
}

export const ProjectPage: FunctionComponent<PropsWithChildren<ProjectPageProps>> = ({ ariaColor, backgroundColor = "", children, language, technologies, iconColor, iconShadow, textColor = "text-black", timeline, url }) => {
	return (
		<div className="flex flex-col h-full w-full">
			<div className="min-h-screen-1/2 max-h-screen-1/2 h-full w-full relative flex items-center justify-center">{children}</div>
			<div className={cc(backgroundColor, "w-full h-full py-8")}>
				<div className={cc(textColor, "max-w-[900px] w-full m-auto flex flex-col gap-4 items-center relative")}>
					<div className="w-full flex justify-center md:flex-row flex-col-reverse md:p-0 p-4 md:justify-around justify-between md:gap-0 gap-12">
						<div className="flex flex-col gap-4">
							<h2 className="font-bold text-2xl">Technologies Used</h2>
							<ol className="text-left text-lg flex flex-col gap-4">
								{technologies.map((t: Technology, i: number) => {
									return (
										<li className="flex flex-row gap-4 items-center" key={`${t.name}-${i}`}>
											<div className={cc(`bg-${iconColor}`, iconShadow, "rounded-full p-3 h-[42px] w-[42px] flex items-center justify-center hover:scale-105 transition-all")}>{t.icon}</div>
											<label>{t.name}</label>
										</li>
									);
								})}
							</ol>
						</div>
						<div className="flex flex-col gap-4">
							<h2 className="font-bold text-2xl">Overview</h2>
							<ol className="text-left text-lg flex flex-col gap-4">
								<li>
									<Link href={url}>
										<a onClick={(e) => e.stopPropagation()} className="text-primary-500 hover:text-primary-300 hover:underline">
											{url}
										</a>
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
