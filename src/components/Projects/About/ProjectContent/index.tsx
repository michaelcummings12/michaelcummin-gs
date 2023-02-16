import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import skyPortrait from "../../../../../public/assets/sky_portrait_resized.jpg";
import Social from "../../../Social";

export const ProjectContent: FunctionComponent = () => {
	return (
		<>
			<Head>
				<title>About Me | Michael Cummings</title>
			</Head>
			<div className="h-full w-full p-2">
				<div className="rounded-3xl overflow-hidden h-1/2 w-full relative m-auto">
					<Image src={skyPortrait} layout="fill" className="object-cover h-full w-full" quality={100} placeholder="blur" alt="Portrait of Michael Cummings against a city backdrop." />
				</div>
				<div className="w-full flex justify-center">
					<div className="max-w-[680px] relative py-6 w-full lg:w-auto flex flex-col gap-8 px-2">
						<div className="flex flex-col gap-4">
							<div className="flex flex-row gap-3 lg:text-5xl text-4xl h-full">
								<h1 className="font-semibold">Hey,</h1>
								<h1>I&apos;m Michael.</h1>
							</div>
							<Social />
						</div>
						<div className="leading-7 tracking-[0.02rem] text-lg flex flex-col gap-2">
							<p>I am a full-stack engineer with experience working in Amazon and Google clouds and with frameworks such as Express.js, Next.js, and React.</p>
							<p>I build brands. From creating logos and art in Adobe Illustrator and Photoshop to designing the style guideline and product mockups in Adobe XD and Figma, and lastly, to building the product itself. My skill set is comprehensive.</p>
							<p>Through my work, I emphasize building accessible interfaces that are meaningfully designed and are adaptive and responsive to the user&apos;s device. Scalability, security, and stability are always a top priority.</p>
							<p>
								Please feel free to{" "}
								<Link href="/#contact" className="text-projects-gcn-500 underline">
									send me a message
								</Link>{" "}
								or you can email me at
							</p>
							<a className="text-projects-gcn-500 underline" href="mailto:hello@michaelcummin.gs" onClick={(e) => e.stopPropagation()}>
								hello@michaelcummin.gs
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
